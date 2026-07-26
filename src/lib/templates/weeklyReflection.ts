import { TemplateConfig } from "@/types";

export const weeklyReflectionTemplate: TemplateConfig = {
  id: "weekly-reflection",
  title: "Weekly Reflection",
  description: "Summarize top wins, key metrics, challenges, and key focuses for the upcoming week.",
  icon: "Calendar",
  category: "updates",
  questions: [
    {
      id: "wins",
      label: "What were this week's biggest wins?",
      placeholder: "e.g., Shipped 18 PRs, launched BrandForge AI UI foundation, and grew newsletter subscribers by 12%...",
      required: true,
      type: "textarea",
      helpText: "List top 2-3 achievements, metrics, or completed projects.",
    },
    {
      id: "unplanned",
      label: "What didn't go as planned?",
      placeholder: "e.g., Delayed the API integration sprint by 2 days to prioritize architecture cleanup...",
      required: true,
      type: "textarea",
      helpText: "Be honest about missed deadlines, unexpected bugs, or bottlenecks.",
    },
    {
      id: "lessons",
      label: "What lessons stood out?",
      placeholder: "e.g., Spending time on data modeling upfront saves 5x time during feature development...",
      required: true,
      type: "textarea",
      helpText: "Highlight the top insight or mental takeaway from the week.",
    },
    {
      id: "priorities",
      label: "What are next week's priorities?",
      placeholder: "e.g., 1. Finalize Dynamic Question Engine, 2. Run user testing on editor workflow, 3. Draft AI prompts...",
      required: true,
      type: "textarea",
      helpText: "Define your top 3 needle-moving objectives for next week.",
    },
  ],
};
