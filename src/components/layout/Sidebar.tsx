"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, BRAND_CONFIG } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  PenTool,
  FileEdit,
  History,
  Settings,
  Sparkles,
  ChevronRight,
  Zap,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Home: <Home className="w-4 h-4" />,
  PenTool: <PenTool className="w-4 h-4" />,
  FileEdit: <FileEdit className="w-4 h-4" />,
  History: <History className="w-4 h-4" />,
  Settings: <Settings className="w-4 h-4" />,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-950/90 border-r border-slate-800/80 flex flex-col justify-between p-4 shrink-0 hidden md:flex min-h-[calc(100vh-65px)]">
      <div className="space-y-6">
        {/* Quick Action Widget */}
        <Link
          href="/create"
          className="group flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-indigo-900/40 via-indigo-950/30 to-purple-950/40 border border-indigo-500/20 hover:border-indigo-500/40 transition-all shadow-sm"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white group-hover:text-indigo-200 transition-colors">
                Start New Post
              </p>
              <p className="text-[11px] text-slate-400">Choose a framework</p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" />
        </Link>

        {/* Navigation Items */}
        <nav className="space-y-1">
          <p className="px-3 text-[11px] font-semibold tracking-wider text-slate-500 uppercase mb-2">
            Navigation
          </p>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                  isActive
                    ? "bg-indigo-600/15 text-indigo-300 border border-indigo-500/30 shadow-sm"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/80"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "transition-colors",
                      isActive
                        ? "text-indigo-400"
                        : "text-slate-500 group-hover:text-slate-300"
                    )}
                  >
                    {ICON_MAP[item.iconName]}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Info Box */}
      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-medium text-slate-300">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Workspace Ready
          </span>
          <span className="text-[10px] font-mono text-slate-500">
            {BRAND_CONFIG.version}
          </span>
        </div>
        <p className="text-[11px] text-slate-400 leading-snug">
          Distraction-free AI writing foundation.
        </p>
      </div>
    </aside>
  );
}
