import React from "react";
import { cn } from "@/lib/utils";

export interface CharacterCounterProps {
  current: number;
  max?: number;
  wordCount?: number;
  className?: string;
}

export function CharacterCounter({
  current,
  max = 3000,
  wordCount,
  className,
}: CharacterCounterProps) {
  const percentage = Math.min(100, Math.round((current / max) * 100));
  const isNearLimit = current > max * 0.85;
  const isOverLimit = current > max;

  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
        <span>
          {wordCount !== undefined && `${wordCount} words • `}
          <span
            className={cn(
              "font-semibold transition-colors",
              isOverLimit
                ? "text-rose-400"
                : isNearLimit
                ? "text-amber-400"
                : "text-slate-300"
            )}
          >
            {current.toLocaleString()}
          </span>{" "}
          / {max.toLocaleString()} characters
        </span>
        <span className="text-slate-500">{percentage}%</span>
      </div>
      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full transition-all duration-300 rounded-full",
            isOverLimit
              ? "bg-rose-500"
              : isNearLimit
              ? "bg-amber-500"
              : "bg-indigo-500"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
