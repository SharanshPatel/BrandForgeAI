"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ThumbsUp, MessageCircle, Repeat2, Send, Globe, MoreHorizontal, User } from "lucide-react";

export interface LivePreviewProps {
  content: string;
  templateTitle?: string;
}

export function LivePreview({ content, templateTitle }: LivePreviewProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Live Preview
          </span>
          <Badge variant="indigo">LinkedIn Post</Badge>
        </div>
        <span className="text-xs text-slate-500 font-mono">1:1 Scale</span>
      </div>

      {/* Realistic LinkedIn Post Card Container */}
      <Card className="p-5 sm:p-6 bg-slate-900/90 border-slate-800 shadow-2xl rounded-2xl space-y-4 font-sans">
        {/* Post Author Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white ring-2 ring-indigo-500/20 shadow-md">
              <User className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-white tracking-tight">
                  Your Name
                </h4>
                <span className="text-xs text-slate-500">• 1st</span>
              </div>
              <p className="text-xs text-slate-400 leading-tight">
                Software Engineer & Technical Writer
              </p>
              <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                <span>Just now</span>
                <span>•</span>
                <Globe className="w-3 h-3 text-slate-500" />
              </div>
            </div>
          </div>
          <button className="text-slate-500 hover:text-slate-300 p-1 rounded-lg">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Post Body Content */}
        <div className="min-h-[140px] text-sm text-slate-200 leading-relaxed whitespace-pre-wrap font-sans">
          {content ? (
            content
          ) : (
            <span className="text-slate-500 italic">
              Your generated post will appear here in real-time as you type or compose...
            </span>
          )}
        </div>

        {/* Template Tag indicator inside preview */}
        {templateTitle && (
          <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
            <span className="text-indigo-400 font-medium">#{templateTitle.replace(/\s+/g, '')}</span>
            <span>BrandForge AI Draft</span>
          </div>
        )}

        {/* Fake Engagement Bar */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-slate-400 text-xs font-medium">
          <div className="flex items-center gap-1.5 hover:text-slate-200 cursor-not-allowed transition-colors py-1 px-2 rounded-lg">
            <ThumbsUp className="w-4 h-4 text-indigo-400" />
            <span>Like</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-slate-200 cursor-not-allowed transition-colors py-1 px-2 rounded-lg">
            <MessageCircle className="w-4 h-4 text-slate-400" />
            <span>Comment</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-slate-200 cursor-not-allowed transition-colors py-1 px-2 rounded-lg">
            <Repeat2 className="w-4 h-4 text-slate-400" />
            <span>Repost</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-slate-200 cursor-not-allowed transition-colors py-1 px-2 rounded-lg">
            <Send className="w-4 h-4 text-slate-400" />
            <span>Send</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
