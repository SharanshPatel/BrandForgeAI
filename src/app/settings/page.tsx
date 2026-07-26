"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { UserWritingPreferences } from "@/types";
import {
  PenTool,
  Moon,
  Sliders,
  Save,
  Check,
  Sun,
  Layout,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<"writing" | "theme">("writing");
  const [saved, setSaved] = useState<boolean>(false);

  // Preference state placeholders
  const [prefs, setPrefs] = useState<UserWritingPreferences>({
    tone: "professional",
    contentLength: "medium",
    emojiUsage: "minimal",
    callToAction: true,
    paragraphStyle: "spacious",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 py-2">
      {/* Page Header */}
      <PageHeader
        title="Settings"
        subtitle="Customize your default writing style preferences, output formatting, and appearance."
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
      </div>

      {/* Tab 1: Writing Preferences */}
      {activeTab === "writing" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Writing Preferences</span>
              </CardTitle>
              <CardDescription>
                Configure the default rules and styling applied when structuring your content.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Tone */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Writing Tone
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "professional", label: "Professional" },
                    { id: "conversational", label: "Conversational" },
                    { id: "technical", label: "Technical" },
                    { id: "storytelling", label: "Storytelling" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPrefs({ ...prefs, tone: item.id as any })}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all text-center ${
                        prefs.tone === item.id
                          ? "bg-indigo-600/20 border-indigo-500/80 text-indigo-200 shadow-sm"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Length */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Content Length
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "short", label: "Short (~150 words)" },
                    { id: "medium", label: "Medium (~300 words)" },
                    { id: "long", label: "Long (~500+ words)" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPrefs({ ...prefs, contentLength: item.id as any })}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all text-center ${
                        prefs.contentLength === item.id
                          ? "bg-indigo-600/20 border-indigo-500/80 text-indigo-200 shadow-sm"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Emoji Usage */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Emoji Usage
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "none", label: "None 🚫" },
                    { id: "minimal", label: "Minimal ✨" },
                    { id: "moderate", label: "Moderate 🚀🔥" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPrefs({ ...prefs, emojiUsage: item.id as any })}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all text-center ${
                        prefs.emojiUsage === item.id
                          ? "bg-indigo-600/20 border-indigo-500/80 text-indigo-200 shadow-sm"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Call To Action */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-800/80">
                <div>
                  <h4 className="text-sm font-semibold text-white">Call to Action (CTA)</h4>
                  <p className="text-xs text-slate-400">Append an engaging takeaway or question to invite audience comments.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setPrefs({ ...prefs, callToAction: !prefs.callToAction })}
                  className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                    prefs.callToAction ? "bg-indigo-600" : "bg-slate-800"
                  }`}
                >
                  <span
                    className={`block w-5 h-5 rounded-full bg-white transition-transform ${
                      prefs.callToAction ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Paragraph Style */}
              <div className="pt-3 flex items-center justify-between border-t border-slate-800/80">
                <div>
                  <h4 className="text-sm font-semibold text-white">Paragraph Style</h4>
                  <p className="text-xs text-slate-400">Choose between compact paragraphs or spacious line breaks.</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPrefs({ ...prefs, paragraphStyle: "compact" })}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                      prefs.paragraphStyle === "compact"
                        ? "bg-indigo-600/20 border-indigo-500 text-indigo-300"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    Compact
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrefs({ ...prefs, paragraphStyle: "spacious" })}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                      prefs.paragraphStyle === "spacious"
                        ? "bg-indigo-600/20 border-indigo-500 text-indigo-300"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    Spacious
                  </button>
                </div>
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
                  <span className="text-[10px] text-slate-500 font-mono">Disabled</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 opacity-60 flex flex-col items-center justify-center gap-2 cursor-not-allowed">
                  <Sliders className="w-6 h-6 text-slate-500" />
                  <span className="text-sm font-medium text-slate-400">System Preference</span>
                  <span className="text-[10px] text-slate-500 font-mono">Disabled</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
