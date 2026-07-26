import { NextRequest, NextResponse } from "next/server";
import { getTemplateById } from "@/lib/templates";
import { buildNormalizedContext } from "@/lib/ai/contextBuilder";
import { generatePostContent } from "@/lib/ai/generator";
import { AIProviderError } from "@/lib/openai";
import { GeneratePostRequestPayload, GeneratePostAPIResponse } from "@/lib/ai/types";

export async function POST(req: NextRequest) {
  try {
    const body: GeneratePostRequestPayload = await req.json();
    const { templateId, answers, writingPreferences, refinementType, currentDraft } = body;

    if (!templateId) {
      return NextResponse.json<GeneratePostAPIResponse>(
        {
          success: false,
          error: {
            code: "INVALID_REQUEST",
            message: "Missing required parameter: templateId",
          },
        },
        { status: 400 }
      );
    }

    const template = getTemplateById(templateId);

    // Validate required questions if not doing a refinement edit on an existing draft
    if (!refinementType) {
      const missingRequired = template.questions.filter(
        (q) => q.required && (!answers[q.id] || answers[q.id].trim().length === 0)
      );

      if (missingRequired.length > 0) {
        const missingLabels = missingRequired.map((q) => q.label).join(", ");
        return NextResponse.json<GeneratePostAPIResponse>(
          {
            success: false,
            error: {
              code: "INVALID_REQUEST",
              message: `Please complete all required fields: ${missingLabels}`,
            },
          },
          { status: 400 }
        );
      }
    }

    // Layer 1: Context Builder
    const context = buildNormalizedContext({
      template,
      answers: answers || {},
      writingPreferences: writingPreferences || {
        tone: "professional",
        contentLength: "medium",
        emojiUsage: "minimal",
        callToAction: true,
        paragraphStyle: "spacious",
      },
    });

    // Layer 3: Generation Service
    const result = await generatePostContent(context, {
      refinementType,
      currentDraft,
    });

    return NextResponse.json<GeneratePostAPIResponse>({
      success: true,
      data: result,
    });
  } catch (err: unknown) {
    if (err instanceof AIProviderError) {
      const statusMap: Record<string, number> = {
        MISSING_API_KEY: 500,
        RATE_LIMIT: 429,
        NETWORK_ERROR: 503,
        INVALID_REQUEST: 400,
        AI_PROVIDER_ERROR: 502,
      };

      return NextResponse.json<GeneratePostAPIResponse>(
        {
          success: false,
          error: {
            code: err.code,
            message: err.message,
          },
        },
        { status: statusMap[err.code] || 500 }
      );
    }

    const errorMessage = err instanceof Error ? err.message : "An unexpected internal server error occurred.";
    return NextResponse.json<GeneratePostAPIResponse>(
      {
        success: false,
        error: {
          code: "AI_PROVIDER_ERROR",
          message: errorMessage,
        },
      },
      { status: 500 }
    );
  }
}
