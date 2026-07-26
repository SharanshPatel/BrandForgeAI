"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getTemplateById } from "@/features/templates/data/templatesData";
import { Textarea } from "@/components/ui/Textarea";
import { CharacterCounter } from "@/components/ui/CharacterCounter";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LivePreview } from "@/features/editor/components/LivePreview";
import { EditorToolbar } from "@/features/editor/components/EditorToolbar";
import { ArrowLeft, Sparkles, HelpCircle, CheckCircle2, ChevronRight } from "lucide-react";

function EditorContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template") || "share-idea";
  const template = getTemplateById(templateId);

  const [text, setText] = useState<string>("");
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-8 py-2">
      {/* Top Header & Template Navigation */}
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
              Content Editor
            </h1>
            <Badge variant="indigo">{template.title}</Badge>
          </div>
          <p className="text-xs text-slate-400">
            Compose and refine your thought leadership post with real-time feedback.
          </p>
        </div>

        {/* Change Template link */}
        <Link href="/create">
          <Button variant="outline" size="sm">
            Change Framework
          </Button>
        </Link>
      </div>

      {/* Progress Indicator */}
      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
            1
          </span>
          <span className="font-semibold text-slate-200">
            Brainstorm & Draft Content
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-600">
          <ChevronRight className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">
            2
          </span>
          <span>Review & Format</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-600">
          <ChevronRight className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">
            3
          </span>
          <span>Publish on LinkedIn</span>
        </div>
      </div>

      {/* Main 2-Column Editor Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Input & Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Question / Prompt Guidance Area */}
          <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 space-y-2">
            <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm">
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              <span>{template.title} Guidance</span>
            </div>
            <p className="text-sm text-slate-200 font-medium leading-relaxed">
              "{template.promptQuestion}"
            </p>
          </div>

          {/* Large Multiline Textarea */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Draft Post Content
            </label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={template.defaultPlaceholder}
              rows={10}
            />
          </div>

          {/* Character & Word Counter */}
          <CharacterCounter current={text.length} max={3000} wordCount={wordCount} />

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
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
              onClick={() => alert("UI Foundation Mode: Next phase will enable AI refinement & formatting!")}
            >
              Continue to Review
            </Button>
          </div>
        </div>

        {/* Right Column: Live LinkedIn Preview & Toolbar (5 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <LivePreview content={text} templateTitle={template.title} />
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
        <div className="p-12 text-center text-slate-400">Loading editor...</div>
      }
    >
      <EditorContent />
    </Suspense>
  );
}
