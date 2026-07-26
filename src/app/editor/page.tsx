"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getTemplateById } from "@/lib/templates";
import { UserAnswers } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressSteps } from "@/features/editor/components/ProgressSteps";
import { QuestionCard } from "@/features/editor/components/QuestionCard";
import { ContentPreview } from "@/features/editor/components/ContentPreview";
import { EditorToolbar } from "@/features/editor/components/EditorToolbar";
import { ArrowLeft, Sparkles } from "lucide-react";

function EditorContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template") || "share-idea";
  const template = getTemplateById(templateId);

  // Structured answers state: { [questionId: string]: string }
  const [answers, setAnswers] = useState<UserAnswers>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const answeredCount = template.questions.filter(
    (q) => answers[q.id] && answers[q.id].trim().length > 0
  ).length;

  return (
    <div className="space-y-8 py-2">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <Link
              href="/create"
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-900 border border-slate-800"
              title="Back to templates"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Guided Storyteller
            </h1>
            <Badge variant="indigo">{template.title}</Badge>
          </div>
          <p className="text-xs text-slate-400">
            Answer the targeted interview questions below to build your post framework.
          </p>
        </div>

        <Link href="/create">
          <Button variant="outline" size="sm">
            Change Template
          </Button>
        </Link>
      </div>

      {/* Progress Steps Indicator */}
      <ProgressSteps currentStep={2} />

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Dynamic Questions Engine (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
              <span>Interview Questions ({template.questions.length})</span>
              <span>{answeredCount} of {template.questions.length} Answered</span>
            </div>

            {/* Dynamic rendering of questions */}
            {template.questions.map((question, idx) => (
              <QuestionCard
                key={question.id}
                question={question}
                index={idx}
                value={answers[question.id] || ""}
                onChange={(val) => handleAnswerChange(question.id, val)}
              />
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
            <Link href="/create">
              <Button variant="ghost" size="md">
                Cancel
              </Button>
            </Link>
            <Button
              variant="primary"
              size="md"
              icon={<Sparkles className="w-4 h-4" />}
              iconPosition="right"
              onClick={() =>
                alert(
                  "Answers saved in structured state! Next sprint connects this engine to OpenAI."
                )
              }
            >
              Generate Draft
            </Button>
          </div>
        </div>

        {/* Right Column: Content Preview & Toolbar (5 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <ContentPreview template={template} answers={answers} />
          <EditorToolbar />
        </div>
      </div>
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-slate-400 font-mono text-sm">
          Loading Question Engine...
        </div>
      }
    >
      <EditorContent />
    </Suspense>
  );
}
