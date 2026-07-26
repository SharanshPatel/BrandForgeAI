import { TemplateConfig } from "@/types";

export const learningTemplate: TemplateConfig = {
  id: "learned-something",
  title: "Learned Something",
  description: "Document valuable key takeaways from a recent book, course, experiment, or mistake.",
  icon: "BookOpen",
  category: "learning",
  questions: [
    {
      id: "learning",
      label: "What did you learn?",
      placeholder: "e.g., I learned how database indexing works under the hood with B-Trees vs LSM Trees...",
      required: true,
      type: "textarea",
      helpText: "Define the specific skill, insight, or concept you mastered.",
    },
    {
      id: "source",
      label: "Where did you learn it?",
      placeholder: "e.g., Debugging slow query logs on our production database during peak traffic...",
      required: true,
      type: "text",
      helpText: "Mention the book, course, project failure, or experiment source.",
    },
    {
      id: "misconception",
      label: "What misconception changed?",
      placeholder: "e.g., I used to think throwing more RAM at DB servers fixes slow queries. Indexes are actually 10x cheaper...",
      required: true,
      type: "textarea",
      helpText: "Contrast what you previously believed vs. what you now know.",
    },
    {
      id: "application",
      label: "How will you apply it?",
      placeholder: "e.g., We restructured our primary key schema and rewrote all multi-column filter queries...",
      required: true,
      type: "textarea",
      helpText: "Detail how this changes your day-to-day workflow or engineering decisions.",
    },
    {
      id: "valueForOthers",
      label: "Why should others care?",
      placeholder: "e.g., Understanding DB indexing early saves thousands of dollars in cloud infrastructure bills...",
      required: true,
      type: "textarea",
      helpText: "Explain how readers can save time, money, or headache using this knowledge.",
    },
  ],
};
