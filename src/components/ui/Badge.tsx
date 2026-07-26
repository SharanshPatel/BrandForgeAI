import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "indigo" | "emerald" | "amber" | "outline";
}

export function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-slate-800 text-slate-300 border-slate-700/60",
    indigo: "bg-indigo-950/80 text-indigo-300 border-indigo-800/50 shadow-sm shadow-indigo-500/10",
    emerald: "bg-emerald-950/80 text-emerald-300 border-emerald-800/50",
    amber: "bg-amber-950/80 text-amber-300 border-amber-800/50",
    outline: "bg-transparent text-slate-400 border-slate-700/80",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full border tracking-wide transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
