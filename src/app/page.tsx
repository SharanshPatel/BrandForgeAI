"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { BRAND_CONFIG } from "@/constants/navigation";
import {
  Sparkles,
  Plus,
  History,
  PenTool,
  Zap,
  ShieldCheck,
  Layout,
  ArrowRight,
  FileText,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="space-y-12 py-4 sm:py-8">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center space-y-6 pt-4 pb-8 overflow-hidden">
        {/* Glow backdrop effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation Writing Workspace</span>
        </div>

        {/* Brand Logo & Title */}
        <div className="space-y-3 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            {BRAND_CONFIG.name}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-medium tracking-tight max-w-2xl mx-auto leading-relaxed">
            "{BRAND_CONFIG.subtitle}"
          </p>
        </div>

        {/* Description detail */}
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Craft high-impact, authentic LinkedIn posts with structured frameworks. Built for developers, founders, creators, and students.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/create">
            <Button
              variant="primary"
              size="lg"
              icon={<Plus className="w-5 h-5" />}
              className="shadow-xl shadow-indigo-500/25"
            >
              New Content
            </Button>
          </Link>
          <Link href="/history">
            <Button
              variant="secondary"
              size="lg"
              icon={<History className="w-5 h-5 text-slate-400" />}
            >
              View Drafts
            </Button>
          </Link>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Card hoverable className="p-6">
          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4">
            <Layout className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-1.5">
            Structured Frameworks
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            9 battle-tested templates tailored for thought leadership, tech wins, and daily reflections.
          </p>
        </Card>

        <Card hoverable className="p-6">
          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 w-fit mb-4">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-1.5">
            Distraction-Free Editor
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Clean typography, live character limits, and real-time LinkedIn preview cards.
          </p>
        </Card>

        <Card hoverable className="p-6">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-1.5">
            Authentic Voice
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            No generic AI buzzwords. Keep full creative control over your professional personal brand.
          </p>
        </Card>
      </section>

      {/* Recent Drafts Section (Empty State) */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Recent Drafts
            </h2>
            <p className="text-xs text-slate-400">
              Your recent post ideas and in-progress content will appear here.
            </p>
          </div>
          <Link href="/create">
            <Button
              variant="ghost"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Explore Templates
            </Button>
          </Link>
        </div>

        {/* Empty State Component */}
        <EmptyState
          icon={<FileText className="w-6 h-6 text-slate-400" />}
          headline="No recent drafts found"
          subtitle="You haven't created any post drafts yet. Choose a content template to start writing your first post."
          actionText="Create New Content"
          actionIcon={<PenTool className="w-4 h-4" />}
          onAction={() => (window.location.href = "/create")}
        />
      </section>
    </div>
  );
}
