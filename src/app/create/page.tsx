"use client";

import React from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { TemplateCard } from "@/features/templates/components/TemplateCard";
import { TEMPLATES_DATA } from "@/features/templates/data/templatesData";

export default function CreatePage() {
  return (
    <div className="space-y-8 py-2">
      {/* Page Title & Subtitle */}
      <PageHeader
        title="Choose a Content Template"
        subtitle="Select a structured writing framework engineered for authentic engagement and clear thought leadership on LinkedIn."
        badge="9 Templates"
      />

      {/* Responsive Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TEMPLATES_DATA.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}
