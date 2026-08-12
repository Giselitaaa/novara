import "server-only";

import { z } from "zod";

import { AIProviderError, getAIProvider } from "@/modules/ai/server/provider";
import type { SpeakingTurn } from "@/modules/exercises/shared/speaking-prompt";

const evaluationSchema = z.object({
  fluency: z.number().min(0).max(100),
  pronunciation: z.number().min(0).max(100),
  grammar: z.number().min(0).max(100),
  vocabulary: z.number().min(0).max(100),
  comprehension: z.number().min(0).max(100),
  naturalness: z.number().min(0).max(100),
  feedback: z.string(),
});

export type SpeakingEvaluation = z.infer<typeof evaluationSchema> & { overall: number };

/**
 * Evalúa una conversación de speaking en 6 ejes + retroalimentación. Analiza
 * la TRANSCRIPCIÓN de lo que dijo el alumno con el proveedor de IA y valida
 * la salida con Zod. `overall` es la media de los ejes.
 *
 * Nota honesta: gramática, vocabulario, comprensión y naturalidad se estiman
 * bien desde la transcripción; pronunciación y fluidez idealmente requieren
 * también análisis del AUDIO — aquí se estiman desde la transcripción como
 * primera aproximación, y la interfaz queda lista para enriquecerse con
 * señales de audio (duración, pausas) en el futuro.
 *
 * Sin proveedor de IA configurado, lanza `AIProviderError("not_configured")`.
 */
export async function evaluateSpeaking(params: {
  language: string;
  level: string;
  objective: string;
  transcript: SpeakingTurn[];
}): Promise<SpeakingEvaluation> {
  const provider = await getAIProvider();

  const studentTurns = params.transcript
    .filter((t) => t.role === "student")
    .map((t, i) => `${i + 1}. ${t.text}`)
    .join("\n");

  const system =
    "Eres un examinador de idiomas experto y justo. Evalúas la actuación oral de un alumno " +
    "a partir de la transcripción de sus intervenciones. Respondes ÚNICAMENTE con JSON válido.";
  const prompt =
    `Idioma: ${params.language}. Nivel objetivo (MCER): ${params.level}. ` +
    `Objetivo del ejercicio: ${params.objective}.\n\n` +
    `Intervenciones del alumno:\n${studentTurns || "(sin intervenciones)"}\n\n` +
    "Evalúa de 0 a 100 cada eje y da retroalimentación breve y constructiva en español. " +
    "Sé justo pero exigente según el nivel objetivo. Devuelve JSON EXACTO con este esquema: " +
    '{"fluency": number, "pronunciation": number, "grammar": number, "vocabulary": number, ' +
    '"comprehension": number, "naturalness": number, "feedback": string}.';

  const raw = await provider.complete({ system, prompt, maxTokens: 700 });

  let parsed: unknown;
  try {
    const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
    parsed = JSON.parse((fenced?.[1] ?? raw).trim());
  } catch {
    throw new AIProviderError(
      "La evaluación de la IA no devolvió JSON válido. Inténtalo de nuevo.",
      "invalid_response"
    );
  }
  const result = evaluationSchema.safeParse(parsed);
  if (!result.success) {
    throw new AIProviderError(
      "La evaluación de la IA no tenía la forma esperada.",
      "invalid_response"
    );
  }

  const axes = result.data;
  const overall = Math.round(
    (axes.fluency +
      axes.pronunciation +
      axes.grammar +
      axes.vocabulary +
      axes.comprehension +
      axes.naturalness) /
      6
  );
  return { ...axes, overall };
}
