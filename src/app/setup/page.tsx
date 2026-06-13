import { createSuperAdmin } from "@/lib/actions/admin-auth";
import Link from "next/link";

export default async function SystemSetup() {
  // This will fire exactly once when you visit the page
  const result = await createSuperAdmin();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 font-sans text-center px-4">
      <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-2xl font-bold text-white mb-2">System Initialization</h1>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent my-6" />
        
        <p className="text-emerald-400 font-mono text-sm mb-8 bg-emerald-950/30 py-3 rounded-lg border border-emerald-500/20">
         {result}
        </p>

        <Link 
          href="/login" 
          className="inline-block w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-all"
        >
          Proceed to Command Center
        </Link>
      </div>
    </div>
  );
}