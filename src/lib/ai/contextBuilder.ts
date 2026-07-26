import { Question, TemplateConfig, UserAnswers, UserWritingPreferences } from "@/types";
import { NormalizedContext, NormalizedAnswer } from "./types";

export interface ContextBuilderInput {
  template: TemplateConfig;
  answers: UserAnswers;
  writingPreferences: UserWritingPreferences;
}

/**
 * Layer 1: Context Builder
 * Normalizes template metadata, questions, structured answers, and user writing settings.
 * MUST NOT contain any prompt text or prompt composition logic.
 */
export function buildNormalizedContext({
  template,
  answers,
  writingPreferences,
}: ContextBuilderInput): NormalizedContext {
  const normalizedAnswers: NormalizedAnswer[] = template.questions
    .map((question: Question) => {
      const rawText = answers[question.id] || "";
      return {
        questionId: question.id,
        questionLabel: question.label,
        answerText: rawText.trim(),
      };
    })
    .filter((item) => item.answerText.length > 0);

  return {
    templateId: template.id,
    templateTitle: template.title,
    writingStyle: {
      tone: writingPreferences.tone || "professional",
      contentLength: writingPreferences.contentLength || "medium",
      emojiUsage: writingPreferences.emojiUsage || "minimal",
      callToAction: writingPreferences.callToAction ?? true,
      paragraphStyle: writingPreferences.paragraphStyle || "spacious",
    },
    answers: normalizedAnswers,
  };
}
