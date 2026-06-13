"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BrainCircuit, 
  FileText, 
  Users, 
  Settings 
} from "lucide-react";

export default function SidebarLinks() {
  const pathname = usePathname();

  const links = [
    { name: "Command Center", href: "/dashboard", icon: LayoutDashboard },
    { name: "AI Engine", href: "/predictions", icon: BrainCircuit },
    { name: "Content Hub", href: "/content", icon: FileText },
    { name: "Expert Roster", href: "/team", icon: Users },
    { name: "System Settings", href: "/system", icon: Settings },
  ];

  return (
    <div className="flex-1 py-6 flex flex-col gap-2 px-4">
      {links.map((link) => {
        // Check if the current URL matches the link's href to highlight it
        const isActive = pathname?.includes(link.href);
        const Icon = link.icon;
        
        return (
          <Link 
            key={link.name} 
            href={link.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isActive 
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]" 
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
            }`}
          >
            <Icon className="w-5 h-5" />
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}