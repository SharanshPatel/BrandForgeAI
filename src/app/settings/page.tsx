"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  PenTool,
  Moon,
  Cpu,
  Save,
  Check,
  Sliders,
  Sun,
  Sparkles,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"writing" | "theme" | "ai">("writing");
  const [saved, setSaved] = useState<boolean>(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 py-2">
      {/* Page Header */}
      <PageHeader
        title="Settings"
        subtitle="Configure your writing style preferences, visual theme, and upcoming AI model integrations."
        action={
          <Button
            variant="primary"
            size="sm"
            icon={saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            onClick={handleSave}
          >
            {saved ? "Saved" : "Save Preferences"}
          </Button>
        }
      />

      {/* Tab Navigation */}
      <div className="flex border-b border-slate-800 gap-6">
        <button
          onClick={() => setActiveTab("writing")}
          className={`pb-3 text-sm font-semibold transition-colors relative flex items-center gap-2 ${
            activeTab === "writing"
              ? "text-indigo-400 border-b-2 border-indigo-500"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <PenTool className="w-4 h-4" />
          <span>Writing Preferences</span>
        </button>

        <button
          onClick={() => setActiveTab("theme")}
          className={`pb-3 text-sm font-semibold transition-colors relative flex items-center gap-2 ${
            activeTab === "theme"
              ? "text-indigo-400 border-b-2 border-indigo-500"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Moon className="w-4 h-4" />
          <span>Theme & Appearance</span>
        </button>

        <button
          onClick={() => setActiveTab("ai")}
          className={`pb-3 text-sm font-semibold transition-colors relative flex items-center gap-2 ${
            activeTab === "ai"
              ? "text-indigo-400 border-b-2 border-indigo-500"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>Future AI Settings</span>
          <Badge variant="indigo" className="ml-1 text-[10px]">
            Upcoming
          </Badge>
        </button>
      </div>

      {/* Tab 1: Writing Preferences */}
      {activeTab === "writing" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tone & Brand Voice</CardTitle>
              <CardDescription>
                Define how BrandForge shapes your thoughts into LinkedIn posts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Default Tone of Voice
                </label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-200 text-sm focus:border-indigo-500 focus:outline-none">
                  <option value="authentic">Authentic & Direct (Recommended)</option>
                  <option value="technical">Technical & Deep-dive</option>
                  <option value="concise">Concise & Minimal</option>
                  <option value="storytelling">Storytelling & Narrative</option>
                  <option value="thought-provoking">Thought-Provoking & Bold</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Target Audience Role
                </label>
                <input
                  type="text"
                  defaultValue="Engineers, Tech Leads, Founders, Product Managers"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-200 text-sm focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                <div>
                  <h4 className="text-sm font-semibold text-white">Include Hashtags</h4>
                  <p className="text-xs text-slate-400">Automatically append 2-3 relevant hashtags to generated posts.</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600 rounded" />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                <div>
                  <h4 className="text-sm font-semibold text-white">Include Call to Action (CTA)</h4>
                  <p className="text-xs text-slate-400">Append an engaging question at the end to invite discussion.</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600 rounded" />
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tab 2: Theme & Appearance */}
      {activeTab === "theme" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Mode</CardTitle>
              <CardDescription>
                BrandForge AI is crafted dark-mode-first for minimal eye strain during deep focus writing.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border-2 border-indigo-500 flex flex-col items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/10">
                  <Moon className="w-6 h-6 text-indigo-400" />
                  <span className="text-sm font-bold text-white">Dark Mode (Default)</span>
                  <Badge variant="indigo">Active</Badge>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 opacity-60 flex flex-col items-center justify-center gap-2 cursor-not-allowed">
                  <Sun className="w-6 h-6 text-slate-500" />
                  <span className="text-sm font-medium text-slate-400">Light Mode</span>
                  <span className="text-[10px] text-slate-500">Disabled</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 opacity-60 flex flex-col items-center justify-center gap-2 cursor-not-allowed">
                  <Sliders className="w-6 h-6 text-slate-500" />
                  <span className="text-sm font-medium text-slate-400">System Preference</span>
                  <span className="text-[10px] text-slate-500">Disabled</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Accent Color Theme
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-950 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-purple-600 opacity-60 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-emerald-600 opacity-60 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-amber-600 opacity-60 cursor-pointer" />
                  <div className="w-8 h-8 rounded-full bg-sky-600 opacity-60 cursor-pointer" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tab 3: Future AI Settings */}
      {activeTab === "ai" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>AI Model Provider (Future Integration)</span>
              </CardTitle>
              <CardDescription>
                In upcoming sprints, connect your custom API keys or select built-in intelligence models.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Preferred AI Engine
                </label>
                <select disabled className="w-full bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-slate-400 text-sm cursor-not-allowed">
                  <option value="anthropic">Anthropic Claude 3.5 Sonnet (Default)</option>
                  <option value="openai">OpenAI GPT-4o</option>
                  <option value="gemini">Google Gemini 1.5 Pro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  API Key Placeholder
                </label>
                <input
                  type="password"
                  disabled
                  placeholder="sk-ant-api03-xxxxxxxxxxxxxxxxxxxx"
                  className="w-full bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-slate-500 text-sm cursor-not-allowed font-mono"
                />
                <p className="mt-1 text-xs text-slate-500">
                  AI generation is intentionally disabled in this UI foundation sprint.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
