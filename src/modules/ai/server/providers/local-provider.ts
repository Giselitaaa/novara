import "server-only";

import { AIProviderError, type AIProvider } from "@/modules/ai/server/provider";

/**
 * Proveedor de IA LOCAL y de coste cero. Habla el mismo protocolo
 * OpenAI-compatible (`/v1/chat/completions`) que exponen los runtimes locales
 * más habituales —Ollama (http://localhost:11434/v1) y el servidor de
 * llama.cpp— así que NO necesita ninguna clave ni conexión a un servicio de
 * pago. Se activa con `AI_PROVIDER=local`.
 *
 * Variables de entorno:
 *   - LOCAL_AI_BASE_URL  (por defecto http://localhost:11434/v1 — Ollama)
 *   - AI_MODEL           (por defecto "llama3.1" — el modelo que tengas cargado)
 *   - LOCAL_AI_API_KEY   (opcional; algunos servidores locales piden un token ficticio)
 *
 * Degradación honesta: si el servidor local no está arrancado, `fetch` falla y
 * se lanza `AIProviderError("request_failed")` con un mensaje que dice
 * exactamente qué hacer (arrancar Ollama/llama.cpp). Nunca se inventa una
 * respuesta.
 */
export class LocalLLMProvider implements AIProvider {
  readonly name = "local";
  private readonly baseUrl = (process.env.LOCAL_AI_BASE_URL || "http://localhost:11434/v1").replace(/\/$/, "");
  private readonly model = process.env.AI_MODEL || "llama3.1";
  private readonly apiKey = process.env.LOCAL_AI_API_KEY || "local"; // muchos servidores locales ignoran el valor

  async complete({
    system,
    prompt,
    maxTokens = 2048,
  }: {
    system: string;
    prompt: string;
    maxTokens?: number;
  }): Promise<string> {
    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}/chat/completions`, {
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
          stream: false,
        }),
      });
    } catch (error) {
      // Error de red = el servidor local no está escuchando en baseUrl.
      throw new AIProviderError(
        `No se pudo conectar con el LLM local en ${this.baseUrl}. ` +
          `Arranca un runtime local (p. ej. 'ollama serve' y 'ollama pull ${this.model}') ` +
          `o ajusta LOCAL_AI_BASE_URL. Detalle: ${error instanceof Error ? error.message : String(error)}`,
        "request_failed"
      );
    }

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      throw new AIProviderError(
        `El LLM local devolvió un error (${response.status}): ${errorBody.slice(0, 300)}`,
        "request_failed"
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content;

    if (!text) {
      throw new AIProviderError("La respuesta del LLM local no incluía texto.", "invalid_response");
    }

    return text;
  }
}
