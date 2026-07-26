"use client";

import React from "react";
import { DraftItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Clock, Calendar, FileText, ArrowRight } from "lucide-react";

export interface DraftCardProps {
  draft: DraftItem;
}

export function DraftCard({ draft }: DraftCardProps) {
  return (
    <Card hoverable className="p-5 flex flex-col justify-between space-y-4 group">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="indigo">{draft.templateTitle}</Badge>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60 uppercase">
            {draft.status}
          </span>
        </div>
        <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
          <span>{draft.title}</span>
          <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
        </h3>
      </div>

      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            {draft.readTimeMinutes} min read
          </span>
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            {draft.wordCount} words
          </span>
        </div>
        <span className="flex items-center gap-1 text-slate-500 text-[11px]">
          <Calendar className="w-3 h-3" />
          {draft.createdAt}
        </span>
      </div>
    </Card>
  );
}
