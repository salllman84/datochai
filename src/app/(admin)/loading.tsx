import { BrainCircuit } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center min-h-[60vh] font-sans">
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute w-16 h-16 border-4 border-slate-800 border-t-emerald-500 rounded-full animate-spin"></div>
        {/* Inner pulsing icon */}
        <BrainCircuit className="w-6 h-6 text-emerald-400 animate-pulse" />
      </div>
      <p className="mt-6 text-sm font-medium text-slate-400 tracking-wide animate-pulse">
        Accessing AI Engine...
      </p>
    </div>
  );
}