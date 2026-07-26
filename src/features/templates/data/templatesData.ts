import { Template } from "@/types";

export const TEMPLATES_DATA: Template[] = [
  {
    id: "share-idea",
    title: "Share an Idea",
    description: "Break down a novel perspective, paradigm shift, or mental model you've developed.",
    iconName: "Lightbulb",
    badge: "Popular",
    category: "thought-leadership",
    promptQuestion: "What is the core insight or shift in perspective you want your network to consider today?",
    defaultPlaceholder: "e.g., Most engineers think refactoring is about cleaner code. It's actually about reducing cognitive overload for your future self...",
  },
  {
    id: "achievement",
    title: "Achievement",
    description: "Highlight a personal or team milestone with humility, context, and key takeaways.",
    iconName: "Trophy",
    category: "personal",
    promptQuestion: "What milestone did you achieve, and what hard lesson did you learn along the way?",
    defaultPlaceholder: "e.g., We just crossed 10,000 active users on BrandForge! Here are 3 non-obvious things we did differently during launch...",
  },
  {
    id: "learned-something",
    title: "Learned Something",
    description: "Document valuable key takeaways from a recent book, course, experiment, or mistake.",
    iconName: "BookOpen",
    category: "learning",
    promptQuestion: "What recent discovery or failure taught you a lesson worth sharing?",
    defaultPlaceholder: "e.g., I spent 4 hours debugging a memory leak yesterday. Turns out, it wasn't a code bug—it was an architectural oversight...",
  },
  {
    id: "project-update",
    title: "Project Update",
    description: "Announce a major release, feature update, open-source launch, or project progress.",
    iconName: "Rocket",
    badge: "Featured",
    category: "updates",
    promptQuestion: "What new feature or product milestone did you build, and why does it matter to users?",
    defaultPlaceholder: "e.g., Excited to announce that v1.0 of our design system is officially live! Here is why we decided to ditch CSS-in-JS...",
  },
  {
    id: "solved-problem",
    title: "Solved a Problem",
    description: "Share how you analyzed and resolved a tough technical, operational, or design challenge.",
    iconName: "Bug",
    category: "thought-leadership",
    promptQuestion: "What tough problem were you facing, and what exact step-by-step solution worked?",
    defaultPlaceholder: "e.g., How we reduced our API response latency by 65% without adding redis caching or upgrading servers...",
  },
  {
    id: "opinion",
    title: "Opinion",
    description: "Express a well-reasoned, authentic stance on an industry trend, tech stack, or philosophy.",
    iconName: "MessageSquareQuote",
    category: "thought-leadership",
    promptQuestion: "What popular industry opinion or standard practice do you respectfully disagree with?",
    defaultPlaceholder: "e.g., Unpopular opinion: AI will not replace junior developers. It will simply raise the baseline bar of what junior developers deliver...",
  },
  {
    id: "daily-reflection",
    title: "Daily Reflection",
    description: "Capture raw, authentic daily observations, quick micro-wins, and practical thoughts.",
    iconName: "Sun",
    category: "personal",
    promptQuestion: "What was your biggest realization or focus point during work today?",
    defaultPlaceholder: "e.g., Today's reminder: Speed of execution matters more than perfection in early stage prototyping...",
  },
  {
    id: "weekly-reflection",
    title: "Weekly Reflection",
    description: "Summarize top wins, key metrics, challenges, and key focuses for the upcoming week.",
    iconName: "Calendar",
    category: "updates",
    promptQuestion: "What were your top 3 wins and 1 main focus area for this week?",
    defaultPlaceholder: "e.g., Friday reflection: Closed 2 major client deals, shipped 14 PRs, and learned to say 'no' to non-essential meetings...",
  },
  {
    id: "custom",
    title: "Custom",
    description: "Start with a clean slate for complete creative freedom with freeform structure.",
    iconName: "PenTool",
    category: "personal",
    promptQuestion: "What topic, story, or message would you like to craft today?",
    defaultPlaceholder: "Start typing your thoughts freely here...",
  },
];

export function getTemplateById(id: string): Template {
  return (
    TEMPLATES_DATA.find((t) => t.id === id) ||
    TEMPLATES_DATA[0]
  );
}
