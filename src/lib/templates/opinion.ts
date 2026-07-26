import { TemplateConfig } from "@/types";

export const opinionTemplate: TemplateConfig = {
  id: "opinion",
  title: "Opinion",
  description: "Express a well-reasoned, authentic stance on an industry trend, tech stack, or philosophy.",
  icon: "MessageSquareQuote",
  category: "thought-leadership",
  questions: [
    {
      id: "belief",
      label: "What do you believe?",
      placeholder: "e.g., Unpopular opinion: Early-stage startups spend far too much time setting up complex Kubernetes clusters...",
      required: true,
      type: "textarea",
      helpText: "State your central thesis or counter-intuitive viewpoint clearly.",
    },
    {
      id: "reasoning",
      label: "Why do you believe it?",
      placeholder: "e.g., Because infrastructure complexity drains engineering velocity before you even achieve product-market fit...",
      required: true,
      type: "textarea",
      helpText: "Provide logical rationale and core arguments supporting your stance.",
    },
    {
      id: "experience",
      label: "What experience shaped this opinion?",
      placeholder: "e.g., At my last company, we spent 3 months maintaining DevOps scripts instead of talking to real customers...",
      required: true,
      type: "textarea",
      helpText: "Share personal background, observations, or career events backing your take.",
    },
    {
      id: "opposingView",
      label: "What opposing viewpoint exists?",
      placeholder: "e.g., DevOps advocates argue K8s provides effortless horizontal scaling once you grow to millions of users...",
      required: false,
      type: "textarea",
      helpText: "Acknowledge valid counter-arguments to demonstrate nuanced thinking.",
    },
    {
      id: "discussion",
      label: "What discussion do you want readers to have?",
      placeholder: "e.g., At what team size or user scale did your team transition from simple VPS hosting to container orchestration?",
      required: true,
      type: "textarea",
      helpText: "Conclude with an engaging prompt for your audience.",
    },
  ],
};
