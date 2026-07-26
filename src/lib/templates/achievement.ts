import { TemplateConfig } from "@/types";

export const achievementTemplate: TemplateConfig = {
  id: "achievement",
  title: "Achievement",
  description: "Highlight a personal or team milestone with humility, context, and key takeaways.",
  icon: "Trophy",
  category: "personal",
  questions: [
    {
      id: "accomplishment",
      label: "What did you accomplish?",
      placeholder: "e.g., We just crossed 10,000 active users on our dev tool platform after 6 months of building...",
      required: true,
      type: "textarea",
      helpText: "State the milestone, metric, or release clearly without fluff.",
    },
    {
      id: "meaningful",
      label: "Why is this milestone meaningful?",
      placeholder: "e.g., When we started, we were told developers wouldn't pay for CLI tools. This proves organic word of mouth wins...",
      required: true,
      type: "textarea",
      helpText: "Share the backstory or deeper significance of achieving this target.",
    },
    {
      id: "challenge",
      label: "What challenge did you overcome?",
      placeholder: "e.g., Midway through, our backend database hit connection limits during a launch day spike...",
      required: true,
      type: "textarea",
      helpText: "Highlight the hard obstacle or bottleneck you had to solve.",
    },
    {
      id: "surprise",
      label: "What surprised you while doing it?",
      placeholder: "e.g., We thought feature X would drive retention, but 80% of power users actually joined because of feature Y...",
      required: false,
      type: "textarea",
      helpText: "Note any unexpected discovery, customer feedback, or surprise win.",
    },
    {
      id: "lesson",
      label: "What lesson would you share with others?",
      placeholder: "e.g., Focus on distribution early. Great tech without user feedback is just an expensive hobby...",
      required: true,
      type: "textarea",
      helpText: "Give actionable advice for peers striving toward similar goals.",
    },
  ],
};
