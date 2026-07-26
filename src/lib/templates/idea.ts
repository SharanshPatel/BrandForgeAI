import { TemplateConfig } from "@/types";

export const ideaTemplate: TemplateConfig = {
  id: "share-idea",
  title: "Share an Idea",
  description: "Break down a novel perspective, paradigm shift, or mental model you've developed.",
  icon: "Lightbulb",
  badge: "Popular",
  category: "thought-leadership",
  questions: [
    {
      id: "idea",
      label: "What idea do you want to share?",
      placeholder: "e.g., Most engineers think refactoring is about cleaner code. It's actually about reducing cognitive overload for your future self...",
      required: true,
      type: "textarea",
      helpText: "State your main insight or mental model clearly in one or two sentences.",
    },
    {
      id: "whyMatters",
      label: "Why does this idea matter?",
      placeholder: "e.g., Because standard codebase bloat leads to slow delivery, developer burnout, and high onboarding costs...",
      required: true,
      type: "textarea",
      helpText: "Explain the stakes, pain points, or hidden value behind this concept.",
    },
    {
      id: "inspiration",
      label: "What inspired this thought?",
      placeholder: "e.g., Debugging a legacy microservice last Tuesday made me realize how much context switching we force on engineers...",
      required: false,
      type: "textarea",
      helpText: "Mention the spark, trigger, or real-life observation that birthed this idea.",
    },
    {
      id: "example",
      label: "Can you give a real example?",
      placeholder: "e.g., Instead of rewriting 500 lines of utility functions, we extracted a single pure function interface and halved our bug reports...",
      required: true,
      type: "textarea",
      helpText: "Provide concrete evidence or a practical scenario illustrating the idea in action.",
    },
    {
      id: "takeaway",
      label: "What should readers think about afterwards?",
      placeholder: "e.g., Next time you write code, ask yourself: Will a developer reading this in 6 months instantly grasp its intent?",
      required: true,
      type: "textarea",
      helpText: "Leave readers with a provoking question, challenge, or practical takeaway.",
    },
  ],
};
