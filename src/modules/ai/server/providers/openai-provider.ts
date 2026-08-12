import "server-only";

import { AIProviderError, type AIProvider } from "@/modules/ai/server/provider";

/**
 * Proveedor OpenAI (Chat Completions), también vía `fetch` directo.
 * Requiere `OPENAI_API_KEY`. Mismo contrato que `AnthropicProvider` —
 * intercambiables con `AI_PROVIDER=openai` en el entorno.
 */
export class OpenAIProvider implements AIProvider {
  readonly name = "openai";
  private readonly apiKey = process.env.OPENAI_API_KEY;
  private readonly model = process.env.AI_MODEL || "gpt-4o-mini";

  async complete({
    system,
    prompt,
    maxTokens = 2048,
  }: {
    system: string;
    prompt: string;
    maxTokens?: number;
  }): Promise<string> {
    if (!this.apiKey) {
      throw new AIProviderError(
        "No hay OPENAI_API_KEY configurada. Añádela en tus variables de entorno para activar el asistente de IA.",
        "not_configured"
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        max_tokens: maxTokens,
        messages: [
          { role: "system", content: system },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      throw new AIProviderError(
        `La API de OpenAI devolvió un error (${response.status}): ${errorBody.slice(0, 300)}`,
        "request_failed"
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content;

    if (!text) {
      throw new AIProviderError(
        "La respuesta de OpenAI no incluía texto.",
        "invalid_response"
      );
    }

    return text;
  }
}
