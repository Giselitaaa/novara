import "server-only";

/**
 * Contrato común que cualquier proveedor de IA debe cumplir. Todo el
 * resto del módulo (`generation.ts`, la UI del asistente) programa
 * contra esta interfaz, nunca contra un proveedor concreto — cambiar
 * de Anthropic a OpenAI (o añadir uno nuevo) es escribir una clase
 * más en este archivo, no tocar el resto de la plataforma.
 */
export interface AIProvider {
  readonly name: string;
  /**
   * Pide una finalización de texto. `system` fija el rol/formato
   * esperado (normalmente "responde solo JSON válido, sin texto
   * adicional"); `prompt` es la petición concreta.
   */
  complete(params: {
    system: string;
    prompt: string;
    maxTokens?: number;
  }): Promise<string>;
}

export class AIProviderError extends Error {
  constructor(
    message: string,
    public readonly code: "not_configured" | "request_failed" | "invalid_response"
  ) {
    super(message);
    this.name = "AIProviderError";
  }
}

/**
 * Resuelve el proveedor activo según `AI_PROVIDER` en variables de
 * entorno. Si no hay clave configurada para el proveedor elegido,
 * lanza `AIProviderError` con código `not_configured` — la UI lo
 * muestra tal cual, nunca se rellena con una respuesta inventada.
 */
export async function getAIProvider(): Promise<AIProvider> {
  const providerKey = (process.env.AI_PROVIDER ?? "anthropic").toLowerCase();

  switch (providerKey) {
    case "local": {
      // LLM local de coste cero (Ollama / llama.cpp), sin clave de pago.
      const { LocalLLMProvider } = await import("./providers/local-provider");
      return new LocalLLMProvider();
    }
    case "openai": {
      const { OpenAIProvider } = await import("./providers/openai-provider");
      return new OpenAIProvider();
    }
    case "anthropic":
    default: {
      const { AnthropicProvider } = await import("./providers/anthropic-provider");
      return new AnthropicProvider();
    }
  }
}
