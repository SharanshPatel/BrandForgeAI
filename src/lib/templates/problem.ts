import { TemplateConfig } from "@/types";

export const problemTemplate: TemplateConfig = {
  id: "solved-problem",
  title: "Solved a Problem",
  description: "Share how you analyzed and resolved a tough technical, operational, or design challenge.",
  icon: "Bug",
  category: "thought-leadership",
  questions: [
    {
      id: "problem",
      label: "What problem occurred?",
      placeholder: "e.g., Our production server memory spiked to 98% every midnight during batch processing...",
      required: true,
      type: "textarea",
      helpText: "Describe the bug, system failure, or operational breakdown accurately.",
    },
    {
      id: "difficulty",
      label: "Why was it difficult?",
      placeholder: "e.g., Standard profiling tools showed zero leaks in local environments. It only happened under real concurrency...",
      required: true,
      type: "textarea",
      helpText: "Detail what made debugging or finding the root cause tricky.",
    },
    {
      id: "solution",
      label: "How did you solve it?",
      placeholder: "e.g., We identified an unclosed database stream inside an async map function and replaced it with a pooled iterator...",
      required: true,
      type: "textarea",
      helpText: "Step through the exact technical fix or process improvement.",
    },
    {
      id: "learnings",
      label: "What did you learn?",
      placeholder: "e.g., Never assume promises automatically handle backpressure in unbounded concurrency loops...",
      required: true,
      type: "textarea",
      helpText: "Summarize the architectural principle or takeaway from this incident.",
    },
    {
      id: "prevention",
      label: "How could others avoid it?",
      placeholder: "e.g., Always set explicit stream buffer limits and run load tests with realistic data volumes...",
      required: true,
      type: "textarea",
      helpText: "Give practical prevention tips for peers building similar systems.",
    },
  ],
};
