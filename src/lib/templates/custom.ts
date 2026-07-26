import { TemplateConfig } from "@/types";

export const customTemplate: TemplateConfig = {
  id: "custom",
  title: "Custom",
  description: "Start with a clean slate for complete creative freedom with freeform structure.",
  icon: "PenTool",
  category: "personal",
  questions: [
    {
      id: "content",
      label: "What would you like to write about?",
      placeholder: "Express your raw thoughts, stories, announcements, or custom structured ideas freely...",
      required: true,
      type: "textarea",
      helpText: "Write whatever is on your mind. You have complete creative freedom.",
    },
  ],
};
