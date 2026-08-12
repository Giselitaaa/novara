import "server-only";

import { getAIProvider } from "@/modules/ai/server/provider";
import {
  buildSpeakingSystemPrompt,
  renderConversationHistory,
  type ConversationParams,
  type SpeakingTurn,
} from "@/modules/exercises/shared/speaking-prompt";

/**
 * Servicio de conversación de speaking. Devuelve la SIGUIENTE intervención
 * de la IA, adaptada al nivel del alumno (ver `buildSpeakingSystemPrompt`),
 * usando el proveedor de IA ya abstraído. La síntesis a audio se hace aparte
 * con la capa de voz (`modules/voice`), para no acoplar texto y audio.
 *
 * Si no hay proveedor de IA configurado, `provider.complete` lanza
 * `AIProviderError("not_configured")` — se propaga; nunca se inventa una
 * respuesta.
 */
export async function nextConversationTurn(
  params: ConversationParams & { history: SpeakingTurn[] }
): Promise<{ text: string }> {
  const provider = await getAIProvider();
  const system = buildSpeakingSystemPrompt(params);
  const prompt =
    renderConversationHistory(params.history) +
    "\n\nGenera ÚNICAMENTE tu siguiente intervención, sin prefijos, comillas ni acotaciones.";
  const text = await provider.complete({ system, prompt, maxTokens: 300 });
  return { text: text.trim() };
}
