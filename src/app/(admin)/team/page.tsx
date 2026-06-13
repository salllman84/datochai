import { Users } from "lucide-react";

export default function ExpertRoster() {
  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <Users className="w-8 h-8 text-emerald-400" />
            Expert Roster
          </h1>
          <p className="text-slate-400 mt-1">
            Manage author profiles, AI credentials, and authority links.
          </p>
        </div>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px]">
        <Users className="w-16 h-16 text-slate-800 mb-4" />
        <h2 className="text-xl font-bold text-slate-300">Module Initialization Pending</h2>
        <p className="text-slate-500 mt-2 text-center max-w-md">
          The E-E-A-T profile manager will be injected here to control expert visibility across DatoChai.
        </p>
      </div>
    </div>
  );
}