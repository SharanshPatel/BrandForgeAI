import {
  AIProvider,
  GenerationResult,
  NormalizedContext,
  RefinementType,
} from "./types";
import {
  PROMPT_VERSION,
  buildSystemPrompt,
  buildUserPrompt,
  buildRefinementPrompt,
} from "./promptBuilder";
import { defaultOpenAIProvider } from "@/lib/openai";

export interface GeneratePostOptions {
  provider?: AIProvider;
  refinementType?: RefinementType;
  currentDraft?: string;
}

/**
 * Helper: Calculate word count and estimated reading time
 */
function calculateMetrics(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  // Average reading speed: ~200 words per minute
  const readingTimeMinutes = Math.max(1, Math.ceil(words / 200));
  return { wordCount: words, estimatedReadingTime: readingTimeMinutes };
}

/**
 * Layer 3: Generator
 * Provider-independent generation service.
 * Receives context, compiles prompt, delegates to AIProvider interface, and returns structured result.
 */
export async function generatePostContent(
  context: NormalizedContext,
  options: GeneratePostOptions = {}
): Promise<GenerationResult> {
  const startTime = Date.now();
  const provider = options.provider || defaultOpenAIProvider;

  const systemPrompt = buildSystemPrompt();

  let userPrompt: string;

  // Refinement vs initial generation logic
  if (options.refinementType && options.currentDraft) {
    userPrompt = buildRefinementPrompt(
      options.currentDraft,
      options.refinementType,
      context.writingStyle
    );
  } else {
    userPrompt = buildUserPrompt(context);
  }

  // Call Provider Interface
  const content = await provider.generate(userPrompt, systemPrompt);

  const durationMs = Date.now() - startTime;
  const metrics = calculateMetrics(content);

  return {
    content,
    title: null,
    metadata: {
      wordCount: metrics.wordCount,
      estimatedReadingTime: metrics.estimatedReadingTime,
      generationDurationMs: durationMs,
      promptVersion: PROMPT_VERSION,
      provider: provider.name,
    },
  };
}
