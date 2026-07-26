import OpenAI from "openai";
import { AIProvider, AIErrorCode } from "./ai/types";

export class AIProviderError extends Error {
  constructor(public code: AIErrorCode, message: string) {
    super(message);
    this.name = "AIProviderError";
  }
}

export class OpenAIProvider implements AIProvider {
  readonly name = "OpenAI (GPT-4o)";
  private client: OpenAI | null = null;

  private getClient(): OpenAI {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey || apiKey.trim().length === 0) {
      throw new AIProviderError(
        "MISSING_API_KEY",
        "OpenAI API key is missing. Please configure OPENAI_API_KEY in environment variables."
      );
    }

    if (!this.client) {
      this.client = new OpenAI({ apiKey });
    }

    return this.client;
  }

  async generate(prompt: string, systemPrompt?: string): Promise<string> {
    const client = this.getClient();

    try {
      const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          ...(systemPrompt ? [{ role: "system" as const, content: systemPrompt }] : []),
          { role: "user" as const, content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      const resultText = completion.choices[0]?.message?.content;
      if (!resultText) {
        throw new AIProviderError("AI_PROVIDER_ERROR", "Received empty response from OpenAI.");
      }

      return resultText.trim();
    } catch (err: unknown) {
      if (err instanceof AIProviderError) throw err;

      const errorMessage = err instanceof Error ? err.message : String(err);

      if (errorMessage.includes("429") || errorMessage.toLowerCase().includes("rate limit")) {
        throw new AIProviderError("RATE_LIMIT", "OpenAI rate limit reached. Please try again shortly.");
      }

      if (errorMessage.toLowerCase().includes("fetch failed") || errorMessage.toLowerCase().includes("econnrefused")) {
        throw new AIProviderError("NETWORK_ERROR", "Network connection to OpenAI API failed.");
      }

      throw new AIProviderError("AI_PROVIDER_ERROR", `OpenAI API Error: ${errorMessage}`);
    }
  }
}

export const defaultOpenAIProvider = new OpenAIProvider();
