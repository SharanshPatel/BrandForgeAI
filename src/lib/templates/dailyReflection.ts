import { TemplateConfig } from "@/types";

export const dailyReflectionTemplate: TemplateConfig = {
  id: "daily-reflection",
  title: "Daily Reflection",
  description: "Capture raw, authentic daily observations, quick micro-wins, and practical thoughts.",
  icon: "Sun",
  category: "personal",
  questions: [
    {
      id: "workedOn",
      label: "What did you work on today?",
      placeholder: "e.g., Architected the Dynamic Question Engine and refined our Next.js 15 UI component library...",
      required: true,
      type: "textarea",
      helpText: "Summarize your primary tasks or technical focus today.",
    },
    {
      id: "wentWell",
      label: "What went well?",
      placeholder: "e.g., Cleanly decoupled content previews and finished all 9 template schemas ahead of schedule...",
      required: true,
      type: "textarea",
      helpText: "Highlight micro-wins, fast execution, or positive breakthroughs.",
    },
    {
      id: "challenge",
      label: "What challenged you?",
      placeholder: "e.g., Balancing component file sizes while keeping TypeScript types strict across all modules...",
      required: true,
      type: "textarea",
      helpText: "Mention any point of friction, fatigue, or tricky decision.",
    },
    {
      id: "lookingForward",
      label: "What are you looking forward to tomorrow?",
      placeholder: "e.g., Connecting the structured answer state to dynamic draft previews and testing responsive layouts...",
      required: true,
      type: "textarea",
      helpText: "Set a clear focus or goal for your next working session.",
    },
  ],
};
