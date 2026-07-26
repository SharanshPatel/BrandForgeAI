"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Copy, RefreshCw, Minimize2, Maximize2, Sparkles } from "lucide-react";

export function EditorToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold px-2">
        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        <span>AI Operations</span>
      </div>

      <div className="h-4 w-px bg-slate-800 mx-1" />

      {/* Copy button - Disabled */}
      <Button
        variant="secondary"
        size="sm"
        disabled
        icon={<Copy className="w-3.5 h-3.5" />}
        title="Copying unlocked when AI engine is connected"
      >
        Copy
      </Button>

      {/* Regenerate button - Disabled */}
      <Button
        variant="secondary"
        size="sm"
        disabled
        icon={<RefreshCw className="w-3.5 h-3.5" />}
        title="Regeneration unlocked in AI generation sprint"
      >
        Regenerate
      </Button>

      {/* Shorten button - Disabled */}
      <Button
        variant="secondary"
        size="sm"
        disabled
        icon={<Minimize2 className="w-3.5 h-3.5" />}
        title="Shorten unlocked in AI generation sprint"
      >
        Shorten
      </Button>

      {/* Expand button - Disabled */}
      <Button
        variant="secondary"
        size="sm"
        disabled
        icon={<Maximize2 className="w-3.5 h-3.5" />}
        title="Expand unlocked in AI generation sprint"
      >
        Expand
      </Button>

      <span className="ml-auto text-[11px] text-slate-500 font-medium hidden sm:inline-block font-mono">
        Dynamic Question Engine Active
      </span>
    </div>
  );
}
