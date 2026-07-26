import { TemplateConfig } from "@/types";

export const projectTemplate: TemplateConfig = {
  id: "project-update",
  title: "Project Update",
  description: "Announce a major release, feature update, open-source launch, or project progress.",
  icon: "Rocket",
  badge: "Featured",
  category: "updates",
  questions: [
    {
      id: "building",
      label: "What are you building?",
      placeholder: "e.g., BrandForge AI—an intelligent writing workspace for developers and creators...",
      required: true,
      type: "textarea",
      helpText: "Summarize your project or product vision in clear, non-jargon terms.",
    },
    {
      id: "changes",
      label: "What changed recently?",
      placeholder: "e.g., Shipped v0.2.0 including a Dynamic Question Engine, dark mode UI, and live previews...",
      required: true,
      type: "textarea",
      helpText: "List recent features, performance optimizations, or milestone releases.",
    },
    {
      id: "problemSolved",
      label: "What problem does it solve?",
      placeholder: "e.g., It eliminates blank page syndrome by guiding writers through targeted interview questions...",
      required: true,
      type: "textarea",
      helpText: "Explain the key pain point this latest update resolves for users.",
    },
    {
      id: "challenge",
      label: "What was the biggest challenge?",
      placeholder: "e.g., Designing a flexible question schema that supports arbitrary templates without hardcoded views...",
      required: true,
      type: "textarea",
      helpText: "Share an engineering or design roadblock you overcome to launch this.",
    },
    {
      id: "nextSteps",
      label: "What happens next?",
      placeholder: "e.g., Connecting the Dynamic Question Engine to LLM generation for automated post creation...",
      required: true,
      type: "textarea",
      helpText: "Outline your upcoming roadmap, public beta, or call for feedback.",
    },
  ],
};
