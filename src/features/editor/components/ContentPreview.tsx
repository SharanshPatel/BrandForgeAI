"use client";

import React from "react";
import { TemplateConfig, UserAnswers } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, FileText, Sparkles, Copy } from "lucide-react";

export interface ContentPreviewProps {
  template: TemplateConfig;
  answers: UserAnswers;
}

export function ContentPreview({ template, answers }: ContentPreviewProps) {
  // Check how many questions have content
  const answeredCount = template.questions.filter(
    (q) => answers[q.id] && answers[q.id].trim().length > 0
  ).length;

  const totalWords = Object.values(answers).reduce((acc, text) => {
    if (!text || !text.trim()) return acc;
    return acc + text.trim().split(/\s+/).length;
  }, 0);

  const totalChars = Object.values(answers).reduce(
    (acc, text) => acc + (text ? text.length : 0),
    0
  );

  return (
    <div className="space-y-3">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Content Preview
          </span>
          <Badge variant="indigo">{template.title}</Badge>
        </div>
        <span className="text-xs text-slate-500 font-mono">
          {answeredCount}/{template.questions.length} Answered
        </span>
      </div>

      {/* Structured Live Preview Card */}
      <Card className="p-5 sm:p-6 bg-slate-900/90 border-slate-800 shadow-2xl rounded-2xl space-y-5 font-sans">
        {/* Template Header Badge inside Preview */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>{template.title} Structured Framework</span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono">
            {totalWords} words • {totalChars} chars
          </span>
        </div>

        {/* Live Structured Question-Answer Feed */}
        <div className="space-y-4 min-h-[220px]">
          {answeredCount === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-10 text-slate-500 space-y-2">
              <FileText className="w-8 h-8 text-slate-600 mb-1" />
              <p className="text-sm font-medium text-slate-400">
                Your live structured content will appear here.
              </p>
              <p className="text-xs max-w-xs text-slate-500">
                Answer the questions on the left to build your draft framework.
              </p>
            </div>
          ) : (
            template.questions.map((question) => {
              const answerText = answers[question.id] || "";
              const hasAnswer = answerText.trim().length > 0;

              return (
                <div key={question.id} className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        hasAnswer ? "text-emerald-400" : "text-slate-600"
                      }`}
                    />
                    <span>{question.label}</span>
                  </div>
                  <div className="pl-5 text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-wrap">
                    {hasAnswer ? (
                      answerText
                    ) : (
                      <span className="text-slate-600 italic text-xs">
                        Awaiting your response...
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Answers Sync
          </span>
          <span>Ready for AI Processing</span>
        </div>
      </Card>
    </div>
  );
}
