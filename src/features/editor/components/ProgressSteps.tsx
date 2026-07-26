"use client";

import React from "react";
import { ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProgressStepsProps {
  currentStep?: 1 | 2 | 3;
}

export function ProgressSteps({ currentStep = 2 }: ProgressStepsProps) {
  const steps = [
    { number: 1, label: "Choose Template" },
    { number: 2, label: "Tell Your Story" },
    { number: 3, label: "Generate Draft" },
  ];

  return (
    <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
      {steps.map((step, idx) => {
        const isCompleted = step.number < currentStep;
        const isCurrent = step.number === currentStep;

        return (
          <React.Fragment key={step.number}>
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs transition-colors",
                  isCompleted
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : isCurrent
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20"
                    : "bg-slate-800 text-slate-400 border border-slate-700/50"
                )}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5" /> : step.number}
              </span>
              <span
                className={cn(
                  "font-semibold transition-colors",
                  isCurrent
                    ? "text-slate-100"
                    : isCompleted
                    ? "text-slate-300"
                    : "text-slate-500"
                )}
              >
                {step.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden sm:flex items-center text-slate-700">
                <ChevronRight className="w-4 h-4" />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
