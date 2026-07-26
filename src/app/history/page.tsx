"use client";

import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { DraftCard } from "@/features/history/components/DraftCard";
import { DraftItem } from "@/types";
import { History, Plus, LayoutGrid } from "lucide-react";

// Sample mock layout data preparing future draft cards display
const SAMPLE_PREVIEW_DRAFT: DraftItem = {
  id: "preview-1",
  templateId: "achievement",
  templateTitle: "Achievement",
  title: "Crossed 10,000 Active Users on BrandForge",
  answers: {},
  wordCount: 320,
  readTimeMinutes: 2,
  createdAt: "Jul 26, 2026",
  updatedAt: "Jul 26, 2026",
  status: "draft",
};

export default function HistoryPage() {
  // Currently 0 drafts saved (preparing layout for future persistence)
  const drafts: DraftItem[] = [];

  return (
    <div className="space-y-8 py-2">
      {/* Page Header */}
      <PageHeader
        title="Draft History"
        subtitle="Manage, edit, and organize all your structured content drafts and interview notes."
        badge={`${drafts.length} Saved`}
      />

      {drafts.length === 0 ? (
        <div className="space-y-10">
          {/* Raycast-style Empty State */}
          <EmptyState
            icon={<History className="w-7 h-7 text-indigo-400" />}
            headline="No drafts yet."
            subtitle="Generated posts will appear here."
            actionText="Create First Draft"
            actionIcon={<Plus className="w-4 h-4" />}
            onAction={() => (window.location.href = "/create")}
            className="my-4 py-16"
          />

          {/* Prepared Layout Preview Section for Future Draft Cards */}
          <div className="space-y-4 pt-4 border-t border-slate-800/60">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <LayoutGrid className="w-4 h-4 text-indigo-400" />
              <span>Prepared Draft Card Layout Preview</span>
            </div>
            <div className="opacity-60 pointer-events-none filter blur-[0.3px]">
              <DraftCard draft={SAMPLE_PREVIEW_DRAFT} />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {drafts.map((draft) => (
            <DraftCard key={draft.id} draft={draft} />
          ))}
        </div>
      )}
    </div>
  );
}
