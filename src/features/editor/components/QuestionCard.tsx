"use client";

import React from "react";
import { Question } from "@/types";
import { QuestionRenderer } from "./QuestionRenderer";
import { HelpCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface QuestionCardProps {
  question: Question;
  index: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function QuestionCard({
  question,
  index,
  value,
  onChange,
  error,
}: QuestionCardProps) {
  const hasError = Boolean(error);

  return (
    <div
      className={cn(
        "p-5 sm:p-6 rounded-2xl bg-slate-900/60 border space-y-3 shadow-sm transition-all",
        hasError
          ? "border-rose-500/80 bg-rose-950/10 ring-1 ring-rose-500/30"
          : "border-slate-800/80 hover:border-slate-700/80"
      )}
    >
      {/* Label and badges */}
      <div className="flex items-start justify-between gap-3">
        <label
          htmlFor={question.id}
          className="text-sm sm:text-base font-semibold text-slate-100 flex items-center gap-2 cursor-pointer leading-snug"
        >
          <span
            className={cn(
              "w-5 h-5 rounded-md text-xs flex items-center justify-center font-mono font-bold shrink-0 border",
              hasError
                ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
            )}
          >
            {index + 1}
          </span>
          <span>{question.label}</span>
          {question.required && (
            <span className="text-amber-400 font-bold text-xs" title="Required">
              *
            </span>
          )}
        </label>
      </div>

      {/* Input Renderer */}
      <QuestionRenderer
        question={question}
        value={value}
        onChange={onChange}
      />

      {/* Field-level validation error message */}
      {error ? (
        <div className="flex items-center gap-1.5 text-xs text-rose-400 font-medium">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      ) : (
        question.helpText && (
          <div className="flex items-start gap-1.5 text-xs text-slate-400">
            <HelpCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
            <span>{question.helpText}</span>
          </div>
        )
      )}
    </div>
  );
}
