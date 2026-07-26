"use client";

import React from "react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { History, Plus } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="space-y-8 py-2">
      {/* Page Header */}
      <PageHeader
        title="Draft History"
        subtitle="Manage, edit, and organize all your saved LinkedIn post drafts."
        badge="0 Saved"
      />

      {/* Raycast-style Empty State */}
      <EmptyState
        icon={<History className="w-7 h-7 text-indigo-400" />}
        headline="No drafts yet."
        subtitle="Generated posts will appear here."
        actionText="Create First Draft"
        actionIcon={<Plus className="w-4 h-4" />}
        onAction={() => (window.location.href = "/create")}
        className="my-8 py-20"
      />
    </div>
  );
}
