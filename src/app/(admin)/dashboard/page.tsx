import { getServerSession } from "next-auth/next";
import { PrismaClient } from "@prisma/client";
import { 
  Activity, 
  BrainCircuit, 
  TrendingUp, 
  FileText, 
  Clock 
} from "lucide-react";
import AccuracyLineChart from "@/components/admin/charts/accuracy-line-chart";

const prisma = new PrismaClient();

// Helper to format dates for the chart (e.g., "Jun 12")
const formatChartDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
};

export default async function DashboardOverview() {
  const session = await getServerSession();
  const userName = session?.user?.name || "Commander";

  // Fetch the last 7 days of predictions to power the chart
  const recentPredictions = await prisma.prediction.findMany({
    orderBy: { drawDate: 'asc' },
    take: 7,
  });

  // Transform the Prisma data into the format Recharts expects
  const chartData = recentPredictions.map(pred => {
    // Safely extract the accuracy score from the JSON logs
    const logs = pred.historyLogs as any[];
    const lastLog = logs && logs.length > 0 ? logs[logs.length - 1] : null;
    const accuracy = lastLog?.accuracyScore || 0;

    return {
      date: formatChartDate(pred.drawDate),
      accuracy: accuracy
    };
  });

  // Calculate average accuracy for the top-level metric card
  const averageAccuracy = chartData.length > 0 
    ? Math.round(chartData.reduce((acc, curr) => acc + curr.accuracy, 0) / chartData.length)
    : 0;

  return (
    <div className="space-y-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Welcome back, {userName}
          </h1>
          <p className="text-slate-400 mt-1">
            System status is optimal. Here is your platform overview for today.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-emerald-400">AI Engine Online</span>
        </div>
      </div>

      {/* Top Level Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-slate-800 text-emerald-400">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              7-Day Avg
            </span>
          </div>
          <p className="text-slate-400 text-sm font-medium">Model Accuracy</p>
          <h3 className="text-3xl font-bold text-white mt-1">{averageAccuracy}%</h3>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-slate-800 text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
              Pending
            </span>
          </div>
          <p className="text-slate-400 text-sm font-medium">Next Prediction Run</p>
          <h3 className="text-3xl font-bold text-white mt-1">19:00 <span className="text-lg text-slate-500">PKT</span></h3>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-slate-800 text-slate-300">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              Optimal
            </span>
          </div>
          <p className="text-slate-400 text-sm font-medium">Published E-E-A-T Articles</p>
          <h3 className="text-3xl font-bold text-white mt-1">128</h3>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-lg bg-slate-800 text-blue-400">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <p className="text-slate-400 text-sm font-medium">Database Load</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-[12%] h-full bg-blue-500 rounded-full" />
            </div>
            <span className="text-sm font-bold text-white">12%</span>
          </div>
        </div>
      </div>

      {/* Main Content Area Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Live Interactive Chart Area */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl min-h-[400px] flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Historical Accuracy Trends</h3>
          </div>
          <div className="flex-1 w-full">
            <AccuracyLineChart data={chartData} />
          </div>
        </div>

        {/* Action/Log Area */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Recent System Events</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <div>
                <p className="text-sm font-medium text-slate-200">Cron Job Executed</p>
                <p className="text-xs text-slate-500 mt-0.5">Automated AI re-training completed successfully.</p>
                <p className="text-xs text-slate-600 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <div>
                <p className="text-sm font-medium text-slate-200">New Content Drafted</p>
                <p className="text-xs text-slate-500 mt-0.5">"Methodology update for Q3" is awaiting SEO approval.</p>
                <p className="text-xs text-slate-600 mt-1">5 hours ago</p>
              </div>
            </div>
             <div className="flex gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-slate-600 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-200">Dr. Francesco Profile Updated</p>
                <p className="text-xs text-slate-500 mt-0.5">New authority links added to the expert roster.</p>
                <p className="text-xs text-slate-600 mt-1">Yesterday at 14:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}