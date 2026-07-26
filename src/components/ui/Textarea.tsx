import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full relative">
        <textarea
          ref={ref}
          className={cn(
            "w-full min-h-[220px] sm:min-h-[280px] p-4 sm:p-5 text-slate-100 bg-slate-900/80 rounded-xl border border-slate-800 focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all placeholder:text-slate-500 text-sm sm:text-base leading-relaxed resize-y font-sans",
            error && "border-rose-500 focus:border-rose-500 focus:ring-rose-500/20",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-rose-400 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
