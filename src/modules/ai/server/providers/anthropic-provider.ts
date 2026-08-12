import "server-only";

import { AIProviderError, type AIProvider } from "@/modules/ai/server/provider";

/**
 * Proveedor Anthropic. Implementado con `fetch` directo a la API de
 * Mensajes (sin SDK): reduce una dependencia y es igual de correcto,
 * ya que la API es un simple POST JSON documentado públicamente.
 *
 * Requiere `ANTHROPIC_API_KEY` en variables de entorno. Sin ella,
 * lanza `AIProviderError("not_configured")` — nunca devuelve una
 * respuesta simulada.
 */
export class AnthropicProvider implements AIProvider {
  readonly name = "anthropic";
  private readonly apiKey = process.env.ANTHROPIC_API_KEY;
  private readonly model = process.env.AI_MODEL || "claude-sonnet-4-5";

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
        "No hay ANTHROPIC_API_KEY configurada. Añádela en tus variables de entorno para activar el asistente de IA.",
        "not_configured"
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: this.model,
        max_tokens: maxTokens,
        system,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      throw new AIProviderError(
        `La API de Anthropic devolvió un error (${response.status}): ${errorBody.slice(0, 300)}`,
        "request_failed"
      );
    }

    const data = await response.json();
    const text = data.content?.find(
      (block: { type: string }) => block.type === "text"
    )?.text;

    if (!text) {
      throw new AIProviderError(
        "La respuesta de Anthropic no incluía texto.",
        "invalid_response"
      );
    }

    return text;
  }
}
