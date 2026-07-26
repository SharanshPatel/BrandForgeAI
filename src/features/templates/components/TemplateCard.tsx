"use client";

import React from "react";
import Link from "next/link";
import { Template } from "@/types";
import { cn } from "@/lib/utils";
import {
  Lightbulb,
  Trophy,
  BookOpen,
  Rocket,
  Bug,
  MessageSquareQuote,
  Sun,
  Calendar,
  PenTool,
  ArrowRight,
} from "lucide-react";

const TEMPLATE_ICON_MAP: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-5 h-5 text-amber-400" />,
  Trophy: <Trophy className="w-5 h-5 text-yellow-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-sky-400" />,
  Rocket: <Rocket className="w-5 h-5 text-indigo-400" />,
  Bug: <Bug className="w-5 h-5 text-emerald-400" />,
  MessageSquareQuote: <MessageSquareQuote className="w-5 h-5 text-purple-400" />,
  Sun: <Sun className="w-5 h-5 text-orange-400" />,
  Calendar: <Calendar className="w-5 h-5 text-rose-400" />,
  PenTool: <PenTool className="w-5 h-5 text-slate-300" />,
};

export interface TemplateCardProps {
  template: Template;
  className?: string;
}

export function TemplateCard({ template, className }: TemplateCardProps) {
  return (
    <Link
      href={`/editor?template=${template.id}`}
      className={cn(
        "group block p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/95 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-200 relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
        className
      )}
    >
      {/* Top row with icon & badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:bg-indigo-950/60 group-hover:border-indigo-800/60 transition-colors shadow-inner">
          {TEMPLATE_ICON_MAP[template.iconName] || <PenTool className="w-5 h-5" />}
        </div>
        {template.badge && (
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            {template.badge}
          </span>
        )}
      </div>

      {/* Card Title & Description */}
      <div className="space-y-1.5">
        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-200 transition-colors flex items-center justify-between">
          <span>{template.title}</span>
          <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {template.description}
        </p>
      </div>
    </Link>
  );
}
