export type TemplateId =
  | "share-idea"
  | "achievement"
  | "learned-something"
  | "project-update"
  | "solved-problem"
  | "opinion"
  | "daily-reflection"
  | "weekly-reflection"
  | "custom";

export interface Template {
  id: TemplateId;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  promptQuestion: string;
  defaultPlaceholder: string;
  category: "thought-leadership" | "updates" | "learning" | "personal";
}

export interface Draft {
  id: string;
  title: string;
  content: string;
  templateId: TemplateId;
  createdAt: string;
  updatedAt: string;
  characterCount: number;
  wordCount: number;
  tags: string[];
}

export interface UserPreferences {
  tone: "authentic" | "technical" | "concise" | "storytelling" | "thought-provoking";
  targetAudience: string;
  includeHashtags: boolean;
  includeCallToAction: boolean;
  theme: "dark" | "system" | "light";
  accentColor: "indigo" | "violet" | "emerald" | "amber" | "sky";
  aiProvider: "anthropic" | "openai" | "gemini";
  apiKeyPlaceholder: string;
}

export interface NavItem {
  label: string;
  href: string;
  iconName: string;
  badge?: string;
}
