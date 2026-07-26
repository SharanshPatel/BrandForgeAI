"use client";

import React from "react";
import { Question } from "@/types";
import { QuestionRenderer } from "./QuestionRenderer";
import { HelpCircle } from "lucide-react";

export interface QuestionCardProps {
  question: Question;
  index: number;
  value: string;
  onChange: (value: string) => void;
}

export function QuestionCard({
  question,
  index,
  value,
  onChange,
}: QuestionCardProps) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3 shadow-sm hover:border-slate-700/80 transition-all">
      {/* Label and badges */}
      <div className="flex items-start justify-between gap-3">
        <label
          htmlFor={question.id}
          className="text-sm sm:text-base font-semibold text-slate-100 flex items-center gap-2 cursor-pointer leading-snug"
        >
          <span className="w-5 h-5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs flex items-center justify-center font-mono font-bold shrink-0">
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

      {/* Help text guidance */}
      {question.helpText && (
        <div className="flex items-start gap-1.5 text-xs text-slate-400">
          <HelpCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
          <span>{question.helpText}</span>
        </div>
      )}
    </div>
  );
}
