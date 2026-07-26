import { NormalizedContext, RefinementType } from "./types";

export const PROMPT_VERSION = "v1";

/**
 * Section 1: Role Definition
 */
function getRoleSection(): string {
  return [
    "You are BrandForge AI—a elite, guided storytelling assistant for developers, founders, and creators.",
    "Your purpose is to transform structured thoughts and interview answers into authentic, high-impact professional content.",
  ].join("\n");
}

/**
 * Section 2: Anti-AI Cliché & Authenticity Writing Rules
 */
function getWritingRulesSection(): string {
  return [
    "=== STRICT WRITING RULES ===",
    "1. ABSOLUTE DETERMINISM: Never fabricate achievements, metrics, company names, or personal experiences. Use ONLY facts explicitly provided by the user.",
    "2. NO AI CLICHÉS: Never use hyperbole or phrases like 'I am thrilled', 'Game changer', 'Honoured', 'Delighted', 'In today's fast-paced world', or 'Let's dive in'.",
    "3. NATURAL & AUTHENTIC VOICE: Write as a thoughtful, competent human speaking directly to peers.",
    "4. NO UNNECESSARY HASHTAGS: Do not include hashtags unless specifically requested in the answers.",
    "5. HOOK & CLOSING: Start with a strong, compelling opening hook line. End with a natural, practical closing thought or discussion question.",
  ].join("\n");
}

/**
 * Section 3: Formatting Rules based on User Preferences
 */
function getFormattingRulesSection(
  style: NormalizedContext["writingStyle"]
): string {
  const lengthGuidance =
    style.contentLength === "short"
      ? "Target concise length (~100 to 150 words)."
      : style.contentLength === "long"
      ? "Target comprehensive length (~350 to 500 words)."
      : "Target medium length (~200 to 300 words).";

  const emojiGuidance =
    style.emojiUsage === "none"
      ? "STRICTLY NO EMOJIS anywhere in the post."
      : style.emojiUsage === "moderate"
      ? "Use 3 to 5 tasteful emojis to emphasize key section headers."
      : "Use minimal emojis (at most 1 or 2 subtle emojis).";

  const spacingGuidance =
    style.paragraphStyle === "compact"
      ? "Use standard paragraph blocks."
      : "Use spacious line breaks between ideas (1 to 2 short sentences per block) for effortless mobile reading.";

  return [
    "=== FORMATTING & STYLE GUIDELINES ===",
    `- Requested Tone: ${style.tone.toUpperCase()}`,
    `- ${lengthGuidance}`,
    `- ${emojiGuidance}`,
    `- ${spacingGuidance}`,
    style.callToAction
      ? "- Include an engaging call-to-action question at the very end to invite discussion."
      : "- Do not include an explicit call-to-action question.",
  ].join("\n");
}

/**
 * Section 4: Template-Specific Instructions
 */
function getTemplateInstructionsSection(templateTitle: string): string {
  return [
    "=== TEMPLATE INSTRUCTIONS ===",
    `You are crafting a post for the '${templateTitle}' framework.`,
    "Weave the provided user answers into a cohesive, flowing narrative. Do not list questions verbatim.",
  ].join("\n");
}

/**
 * Section 5: Structured User Context
 */
function getUserContextSection(context: NormalizedContext): string {
  const formattedAnswers = context.answers
    .map(
      (ans, idx) =>
        `[Question ${idx + 1}: ${ans.questionLabel}]\nAnswer: ${ans.answerText}`
    )
    .join("\n\n");

  return [
    "=== USER SUPPLIED FACTS & THOUGHTS ===",
    formattedAnswers,
  ].join("\n");
}

/**
 * Section 6: Refinement Instructions for Existing Draft Edits
 */
function getRefinementInstructions(
  refinementType: RefinementType,
  currentDraft: string
): string {
  const instructionsMap: Record<RefinementType, string> = {
    shorter:
      "Condense this existing draft by 30-40%. Remove filler while preserving core insights and strong opening.",
    expand:
      "Elaborate on the key takeaways in this existing draft with deeper explanation, keeping all facts accurate.",
    "more-personal":
      "Rewrite this existing draft to feel more personal, reflective, and conversational in tone.",
    "more-technical":
      "Rewrite this existing draft with a more precise, technical, and engineering-focused tone.",
    regenerate:
      "Provide a fresh, alternate draft approach using the original context, keeping it natural and compelling.",
  };

  return [
    "=== DRAFT REFINEMENT INSTRUCTIONS ===",
    `Action: ${instructionsMap[refinementType]}`,
    "",
    "=== EXISTING DRAFT TO REFINE ===",
    currentDraft,
    "",
    "Refine the draft above. Return ONLY the improved post content.",
  ].join("\n");
}

/**
 * Layer 2: Prompt Builder
 * Assembles modular prompt sections into final System and User prompts.
 */
export function buildSystemPrompt(): string {
  return [
    getRoleSection(),
    "",
    getWritingRulesSection(),
  ].join("\n\n");
}

export function buildUserPrompt(context: NormalizedContext): string {
  return [
    getTemplateInstructionsSection(context.templateTitle),
    "",
    getFormattingRulesSection(context.writingStyle),
    "",
    getUserContextSection(context),
    "",
    "Synthesize the user's answers into a polished post following all rules above. Output ONLY the post content.",
  ].join("\n\n");
}

export function buildRefinementPrompt(
  currentDraft: string,
  refinementType: RefinementType,
  style: NormalizedContext["writingStyle"]
): string {
  return [
    getFormattingRulesSection(style),
    "",
    getRefinementInstructions(refinementType, currentDraft),
  ].join("\n\n");
}
