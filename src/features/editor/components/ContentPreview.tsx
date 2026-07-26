"use client";

import React, { useState } from "react";
import { TemplateConfig, UserAnswers } from "@/types";
import { GenerationResult } from "@/lib/ai/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, FileText, Sparkles, Clock, Cpu, RefreshCw } from "lucide-react";

export interface ContentPreviewProps {
  template: TemplateConfig;
  answers: UserAnswers;
  generatedResult?: GenerationResult | null;
  isGenerating?: boolean;
}

export function ContentPreview({
  template,
  answers,
  generatedResult,
  isGenerating = false,
}: ContentPreviewProps) {
  const [viewMode, setViewMode] = useState<"generated" | "structured">(
    generatedResult ? "generated" : "structured"
  );

  // Auto switch to generated view when new result arrives
  React.useEffect(() => {
    if (generatedResult) {
      setViewMode("generated");
    }
  }, [generatedResult]);

  const answeredCount = template.questions.filter(
    (q) => answers[q.id] && answers[q.id].trim().length > 0
  ).length;

  const totalWords = Object.values(answers).reduce((acc, text) => {
    if (!text || !text.trim()) return acc;
    return acc + text.trim().split(/\s+/).length;
  }, 0);

  const activeMode = generatedResult ? viewMode : "structured";

  return (
    <div className="space-y-3">
      {/* Header Bar with Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Content Preview
          </span>
          <Badge variant="indigo">{template.title}</Badge>
        </div>

        {generatedResult && (
          <div className="flex bg-slate-900 border border-slate-800 p-0.5 rounded-lg text-xs font-medium">
            <button
              onClick={() => setViewMode("generated")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                viewMode === "generated"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Draft Post
            </button>
            <button
              onClick={() => setViewMode("structured")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                viewMode === "structured"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Raw Answers
            </button>
          </div>
        )}
      </div>

      {/* Structured Live Preview Card */}
      <Card className="p-5 sm:p-6 bg-slate-900/90 border-slate-800 shadow-2xl rounded-2xl space-y-5 font-sans relative overflow-hidden">
        {/* Loading Overlay */}
        {isGenerating && (
          <div className="absolute inset-0 z-20 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-3 p-6 text-center">
            <div className="w-10 h-10 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white">Synthesizing Post</h4>
              <p className="text-xs text-slate-400">
                Transforming your structured thoughts into authentic professional content...
              </p>
            </div>
          </div>
        )}

        {/* View Mode 1: Generated Post Output */}
        {activeMode === "generated" && generatedResult ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Generated Post</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <span>{generatedResult.metadata.wordCount} words</span>
                <span>•</span>
                <span>{generatedResult.metadata.estimatedReadingTime} min read</span>
              </div>
            </div>

            {/* Generated Content Body */}
            <div className="min-h-[220px] text-sm sm:text-base text-slate-100 leading-relaxed whitespace-pre-wrap font-sans">
              {generatedResult.content}
            </div>

            {/* Metadata Footer */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                {generatedResult.metadata.provider} ({generatedResult.metadata.promptVersion})
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                {generatedResult.metadata.generationDurationMs}ms
              </span>
            </div>
          </div>
        ) : (
          /* View Mode 2: Structured Question-Answer Feed */
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                <FileText className="w-4 h-4" />
                <span>Structured Answers Feed</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">
                {answeredCount}/{template.questions.length} Answered ({totalWords} words)
              </span>
            </div>

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

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Answers Sync
              </span>
              <span>Ready for AI Processing</span>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
