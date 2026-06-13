"use client";

import { useState } from "react";
import { RefreshCw, BrainCircuit } from "lucide-react";
import { forceGeneratePrediction } from "@/lib/actions/manage-predictions";

export default function PredictionToolbar() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleForceGenerate = async () => {
    setIsGenerating(true);
    const res = await forceGeneratePrediction();
    
    if (res.error) {
      alert(res.error);
    }
    
    setIsGenerating(false);
  };

  return (
    <div className="flex gap-3">
      <button 
        className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-slate-700 disabled:opacity-50"
      >
        <RefreshCw className="w-4 h-4 text-slate-400" />
        Sync Models
      </button>
      
      <button 
        onClick={handleForceGenerate}
        disabled={isGenerating}
        className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <RefreshCw className="w-4 h-4 animate-spin" />
        ) : (
          <BrainCircuit className="w-4 h-4" />
        )}
        {isGenerating ? "Processing..." : "Force Generate"}
      </button>
    </div>
  );
}