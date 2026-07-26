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

export type QuestionType = "textarea" | "text" | "select";

export interface QuestionSelectOption {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  type: QuestionType;
  helpText?: string;
  options?: QuestionSelectOption[];
}

export interface TemplateConfig {
  id: TemplateId;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  category: "thought-leadership" | "updates" | "learning" | "personal";
  questions: Question[];
}

export type UserAnswers = Record<string, string>;

export interface DraftItem {
  id: string;
  templateId: TemplateId;
  templateTitle: string;
  title: string;
  answers: UserAnswers;
  wordCount: number;
  readTimeMinutes: number;
  createdAt: string;
  updatedAt: string;
  status: "draft" | "completed" | "archived";
}

export type WritingTone = "professional" | "conversational" | "technical" | "storytelling";
export type ContentLength = "short" | "medium" | "long";
export type EmojiUsage = "none" | "minimal" | "moderate";
export type ParagraphStyle = "compact" | "spacious";

export interface UserWritingPreferences {
  tone: WritingTone;
  contentLength: ContentLength;
  emojiUsage: EmojiUsage;
  callToAction: boolean;
  paragraphStyle: ParagraphStyle;
}

export interface NavItem {
  label: string;
  href: string;
  iconName: string;
  badge?: string;
}
