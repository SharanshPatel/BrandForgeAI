import { UserWritingPreferences } from "@/types";

export type AIErrorCode =
  | "MISSING_API_KEY"
  | "RATE_LIMIT"
  | "NETWORK_ERROR"
  | "INVALID_REQUEST"
  | "AI_PROVIDER_ERROR";

export type RefinementType =
  | "shorter"
  | "expand"
  | "more-personal"
  | "more-technical"
  | "regenerate";

export interface NormalizedAnswer {
  questionId: string;
  questionLabel: string;
  answerText: string;
}

export interface NormalizedContext {
  templateId: string;
  templateTitle: string;
  writingStyle: UserWritingPreferences;
  answers: NormalizedAnswer[];
}

export interface GenerationMetadata {
  wordCount: number;
  estimatedReadingTime: number; // in minutes
  generationDurationMs: number;
  promptVersion: string;
  provider: string;
}

export interface GenerationResult {
  content: string;
  title?: string | null;
  metadata: GenerationMetadata;
}

export interface AIProvider {
  readonly name: string;
  generate(prompt: string, systemPrompt?: string): Promise<string>;
}

export interface GeneratePostRequestPayload {
  templateId: string;
  answers: Record<string, string>;
  writingPreferences: UserWritingPreferences;
  refinementType?: RefinementType;
  currentDraft?: string;
}

export type GeneratePostAPIResponse =
  | { success: true; data: GenerationResult }
  | { success: false; error: { code: AIErrorCode; message: string } };
