import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  headline: string;
  subtitle: string;
  actionText?: string;
  onAction?: () => void;
  actionHref?: string;
  actionIcon?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  headline,
  subtitle,
  actionText,
  onAction,
  actionIcon,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-12 sm:p-16 rounded-2xl border border-dashed border-slate-800 bg-slate-900/30 backdrop-blur-sm",
        className
      )}
    >
      {icon && (
        <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 mb-5 shadow-inner">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-100 mb-2 tracking-tight">
        {headline}
      </h3>
      <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
        {subtitle}
      </p>
      {actionText && (
        <Button onClick={onAction} icon={actionIcon} size="md">
          {actionText}
        </Button>
      )}
    </div>
  );
}
