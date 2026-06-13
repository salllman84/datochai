"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import SidebarLinks from "./sidebar-links";

interface AdminSidebarProps {
  role: string;
}

export default function AdminSidebar({ role }: AdminSidebarProps) {
  return (
    <aside className="w-64 flex flex-col bg-slate-950 border-r border-slate-800/50 z-20 font-sans">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-slate-800/50">
        <h1 className="text-xl font-bold text-white tracking-tight">
          DatoChai <span className="text-emerald-400">Admin</span>
        </h1>
      </div>

      {/* Dynamic Navigation Links injected here */}
      <SidebarLinks />

      {/* Footer / Active Role / Logout */}
      <div className="p-6 border-t border-slate-800/50 bg-slate-900/20">
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Active Role
          </p>
          <p className="text-sm font-bold text-emerald-400">
            {role.replace("_", " ")}
          </p>
        </div>
        
        <button 
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-3 text-sm font-medium text-slate-400 hover:text-white transition-colors w-full group"
        >
          <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Terminate Session
        </button>
      </div>
    </aside>
  );
}