import { PrismaClient } from "@prisma/client";
import { BrainCircuit, Search, Filter, MoreHorizontal } from "lucide-react";
import PredictionToolbar from "@/components/admin/data-tables/prediction-toolbar";

const prisma = new PrismaClient();

export default async function PredictionsManager() {
  // Fetch all predictions, including the category name, sorted by newest first
  const predictions = await prisma.prediction.findMany({
    include: {
      lotteryCategory: true,
    },
    orderBy: {
      drawDate: "desc",
    },
  });

  return (
    <div className="space-y-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <BrainCircuit className="w-8 h-8 text-emerald-400" />
            AI Engine Logs
          </h1>
          <p className="text-slate-400 mt-1">
            Monitor, manage, and override automated lottery predictions.
          </p>
        </div>
        
        {/* Interactive Toolbar Component */}
        <PredictionToolbar />
      </div>

      {/* Main Data Table Card */}
      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by draw date or category..." 
              className="w-full bg-slate-950 border border-slate-800 text-sm text-white rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:text-white hover:border-slate-700 transition-all">
            <Filter className="w-4 h-4" />
            Filter Status
          </button>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-950/50 text-slate-400 border-b border-slate-800 uppercase text-xs font-semibold tracking-wider">
              <tr>
                <th className="px-6 py-4">Draw Date</th>
                <th className="px-6 py-4">Market</th>
                <th className="px-6 py-4">Main Numbers</th>
                <th className="px-6 py-4">AI Confidence</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {predictions.map((prediction) => {
                // Extract accuracy score safely
                const logs = prediction.historyLogs as any[];
                const accuracy = logs && logs.length > 0 ? logs[logs.length - 1].accuracyScore : "N/A";

                return (
                  <tr key={prediction.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">
                      {new Intl.DateTimeFormat('en-US', { 
                        weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' 
                      }).format(prediction.drawDate)}
                    </td>
                    <td className="px-6 py-4 text-slate-300">
                      {prediction.lotteryCategory.name}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-1.5">
                        {prediction.mainNumbers.map((num, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-800 text-slate-200 rounded text-xs border border-slate-700 font-mono">
                            {num}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        {accuracy}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                        {prediction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-500 hover:text-white transition-colors p-1">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          {/* Empty State Fallback */}
          {predictions.length === 0 && (
            <div className="py-12 text-center">
              <BrainCircuit className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <p className="text-slate-400 text-sm">No predictions found in the database.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}