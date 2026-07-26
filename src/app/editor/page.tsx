"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getTemplateById } from "@/lib/templates";
import { UserAnswers } from "@/types";
import { GenerationResult, RefinementType, GeneratePostAPIResponse } from "@/lib/ai/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProgressSteps } from "@/features/editor/components/ProgressSteps";
import { QuestionCard } from "@/features/editor/components/QuestionCard";
import { ContentPreview } from "@/features/editor/components/ContentPreview";
import { EditorToolbar } from "@/features/editor/components/EditorToolbar";
import { ArrowLeft, Sparkles, AlertCircle, RefreshCw } from "lucide-react";

function EditorContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template") || "share-idea";
  const template = getTemplateById(templateId);

  // Structured answers state: { [questionId: string]: string }
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Generation state
  const [generatedResult, setGeneratedResult] = useState<GenerationResult | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [apiError, setApiError] = useState<{ code: string; message: string } | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));

    // Clear field-level error when user types
    if (fieldErrors[questionId]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[questionId];
        return updated;
      });
    }
  };

  // Field-level validation for required questions
  const validateRequiredFields = (): boolean => {
    const errors: Record<string, string> = {};
    template.questions.forEach((q) => {
      if (q.required && (!answers[q.id] || answers[q.id].trim().length === 0)) {
        errors[q.id] = "This question is required to generate your draft.";
      }
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // API Call service for Generation & Refinements
  const handleGenerate = async (refinementType?: RefinementType) => {
    setApiError(null);

    // Validate required fields for initial generation
    if (!refinementType && !validateRequiredFields()) {
      return;
    }

    setIsGenerating(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateId: template.id,
          answers,
          writingPreferences: {
            tone: "professional",
            contentLength: "medium",
            emojiUsage: "minimal",
            callToAction: true,
            paragraphStyle: "spacious",
          },
          refinementType,
          currentDraft: generatedResult?.content,
        }),
      });

      const data: GeneratePostAPIResponse = await res.json();

      if (!data.success) {
        setApiError({
          code: data.error.code,
          message: data.error.message,
        });
      } else {
        setGeneratedResult(data.data);
      }
    } catch (err: unknown) {
      setApiError({
        code: "NETWORK_ERROR",
        message: "Failed to connect to the generation server. Please check your network connection.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (!generatedResult?.content) return;
    navigator.clipboard.writeText(generatedResult.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      <ProgressSteps currentStep={generatedResult ? 3 : 2} />

      {/* API Error Banner */}
      {apiError && (
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-start gap-3 text-sm text-rose-200">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-rose-100 flex items-center gap-2">
              <span>Generation Error [{apiError.code}]</span>
            </h4>
            <p className="text-xs text-rose-300/90 leading-relaxed">
              {apiError.message}
            </p>
          </div>
        </div>
      )}

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Dynamic Questions Engine (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
              <span>Interview Questions ({template.questions.length})</span>
              <span>
                {answeredCount} of {template.questions.length} Answered
              </span>
            </div>

            {/* Dynamic rendering of questions with field-level errors */}
            {template.questions.map((question, idx) => (
              <QuestionCard
                key={question.id}
                question={question}
                index={idx}
                value={answers[question.id] || ""}
                onChange={(val) => handleAnswerChange(question.id, val)}
                error={fieldErrors[question.id]}
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
              disabled={isGenerating}
              icon={
                isGenerating ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )
              }
              iconPosition="right"
              onClick={() => handleGenerate()}
            >
              {isGenerating ? "Generating Post..." : "Generate Draft"}
            </Button>
          </div>
        </div>

        {/* Right Column: Content Preview & Refinement Toolbar (5 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <ContentPreview
            template={template}
            answers={answers}
            generatedResult={generatedResult}
            isGenerating={isGenerating}
          />

          <EditorToolbar
            onRefine={(type) => handleGenerate(type)}
            onCopy={handleCopy}
            isGenerating={isGenerating}
            hasGeneratedDraft={Boolean(generatedResult)}
            copied={copied}
          />
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
