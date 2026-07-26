"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { RefinementType } from "@/lib/ai/types";
import {
  Copy,
  RefreshCw,
  Minimize2,
  Maximize2,
  User,
  Cpu,
  Check,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export interface EditorToolbarProps {
  onRefine?: (type: RefinementType) => void;
  onCopy?: () => void;
  isGenerating?: boolean;
  hasGeneratedDraft?: boolean;
  copied?: boolean;
}

export function EditorToolbar({
  onRefine,
  onCopy,
  isGenerating = false,
  hasGeneratedDraft = false,
  copied = false,
}: EditorToolbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRefineClick = (type: RefinementType) => {
    setMenuOpen(false);
    if (onRefine) onRefine(type);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold px-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Refinements</span>
        </div>

        <div className="h-4 w-px bg-slate-800 mx-1 hidden sm:block" />

        {/* Copy button */}
        <Button
          variant="secondary"
          size="sm"
          disabled={!hasGeneratedDraft || isGenerating}
          icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          onClick={onCopy}
          title="Copy generated draft to clipboard"
        >
          {copied ? "Copied" : "Copy"}
        </Button>

        {/* Regenerate button */}
        <Button
          variant="secondary"
          size="sm"
          disabled={!hasGeneratedDraft || isGenerating}
          icon={<RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? "animate-spin" : ""}`} />}
          onClick={() => handleRefineClick("regenerate")}
          title="Re-generate post"
        >
          Regenerate
        </Button>

        {/* Shorter button */}
        <Button
          variant="secondary"
          size="sm"
          disabled={!hasGeneratedDraft || isGenerating}
          icon={<Minimize2 className="w-3.5 h-3.5" />}
          onClick={() => handleRefineClick("shorter")}
          title="Make draft shorter (~30% condensed)"
        >
          Shorter
        </Button>

        {/* Expand button */}
        <Button
          variant="secondary"
          size="sm"
          disabled={!hasGeneratedDraft || isGenerating}
          icon={<Maximize2 className="w-3.5 h-3.5" />}
          onClick={() => handleRefineClick("expand")}
          title="Expand key points in draft"
        >
          Expand
        </Button>

        {/* Tone Refinements Dropdown / Buttons */}
        <div className="relative inline-block">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasGeneratedDraft || isGenerating}
            icon={<ChevronDown className="w-3.5 h-3.5" />}
            iconPosition="right"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Tone Refine
          </Button>

          {menuOpen && (
            <div className="absolute right-0 bottom-full mb-2 w-44 bg-slate-900 border border-slate-800 rounded-xl shadow-xl z-30 p-1 space-y-1">
              <button
                type="button"
                onClick={() => handleRefineClick("more-personal")}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-indigo-600/20 hover:text-indigo-300 rounded-lg transition-colors text-left"
              >
                <User className="w-3.5 h-3.5 text-purple-400" />
                <span>More Personal</span>
              </button>
              <button
                type="button"
                onClick={() => handleRefineClick("more-technical")}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-indigo-600/20 hover:text-indigo-300 rounded-lg transition-colors text-left"
              >
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span>More Technical</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
