"use client";

import React from "react";
import { Question } from "@/types";
import { Textarea } from "@/components/ui/Textarea";

export interface QuestionRendererProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}

export function QuestionRenderer({
  question,
  value,
  onChange,
}: QuestionRendererProps) {
  const { id, type, placeholder, options } = question;

  if (type === "textarea") {
    return (
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="min-h-[120px] sm:min-h-[140px]"
      />
    );
  }

  if (type === "select") {
    return (
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 text-sm focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all"
      >
        <option value="" disabled>
          {placeholder || "Select an option..."}
        </option>
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }

  // Default text input
  return (
    <input
      type="text"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-slate-100 text-sm focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all placeholder:text-slate-500"
    />
  );
}
