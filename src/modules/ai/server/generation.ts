"use server";

import { z } from "zod";

import { checkRateLimit } from "@/lib/rate-limit";
import { requireAdmin } from "@/modules/admin/server/guard";
import { AIProviderError, getAIProvider } from "@/modules/ai/server/provider";

const SYSTEM_JSON_ONLY =
  "Eres un asistente experto en diseño instruccional para una academia online premium en español. " +
  "Respondes ÚNICAMENTE con JSON válido que cumpla exactamente el esquema pedido, sin texto antes ni " +
  "después, sin bloques de código markdown. Si no puedes rellenar un campo, usa una cadena vacía o un " +
  "array vacío, nunca inventes relleno absurdo.";

function extractJson(raw: string): string {
  // Tolera que el modelo envuelva el JSON en ```json ... ``` a pesar
  // de la instrucción — se limpia antes de parsear en vez de fallar.
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
  return (fenced?.[1] ?? raw).trim();
}

async function generateStructured<T>(
  prompt: string,
  schema: z.ZodType<T>,
  options: { requireAdminAccess?: boolean } = {}
): Promise<T> {
  if (options.requireAdminAccess !== false) {
    const session = await requireAdmin();
    // Las llamadas a la IA tienen coste real por token: limitamos por
    // administrador para evitar bucles o abuso accidental del asistente.
    const rl = checkRateLimit(`ai:${session.user.id}`, 40, 60 * 60);
    if (!rl.allowed) {
      throw new AIProviderError(
        `Demasiadas peticiones al asistente. Espera ${Math.ceil(rl.resetInSeconds / 60)} minutos.`,
        "request_failed"
      );
    }
  }
  const provider = await getAIProvider();

  const raw = await provider.complete({
    system: SYSTEM_JSON_ONLY,
    prompt,
    maxTokens: 3000,
  });

  let parsed: unknown;
  try {
    parsed = JSON.parse(extractJson(raw));
  } catch {
    throw new AIProviderError(
      "El proveedor de IA no devolvió JSON válido. Inténtalo de nuevo.",
      "invalid_response"
    );
  }

  const result = schema.safeParse(parsed);
  if (!result.success) {
    throw new AIProviderError(
      "La respuesta de la IA no tenía la forma esperada. Inténtalo de nuevo.",
      "invalid_response"
    );
  }

  return result.data;
}

// ─── Esquemas de salida (validan lo que devuelve el modelo) ─────────

const courseStructureSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  objectives: z.array(z.string()),
  requirements: z.array(z.string()),
  modules: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      lessons: z.array(z.string()),
    })
  ),
});
export type GeneratedCourseStructure = z.infer<typeof courseStructureSchema>;

const lessonContentSchema = z.object({
  summary: z.string(),
  body: z.string(),
});
export type GeneratedLessonContent = z.infer<typeof lessonContentSchema>;

const exerciseSchema = z.object({
  instructions: z.string(),
});
export type GeneratedExercise = z.infer<typeof exerciseSchema>;

const examQuestionsSchema = z.object({
  questions: z.array(
    z.object({
      statement: z.string(),
      options: z.array(z.object({ text: z.string(), isCorrect: z.boolean() })),
      explanation: z.string(),
    })
  ),
});
export type GeneratedExamQuestions = z.infer<typeof examQuestionsSchema>;

const seoSchema = z.object({
  seoTitle: z.string(),
  seoDescription: z.string(),
  seoKeywords: z.string(),
});
export type GeneratedSEO = z.infer<typeof seoSchema>;

const exerciseCorrectionSchema = z.object({
  score: z.number().min(0).max(100),
  feedback: z.string(),
});
export type GeneratedExerciseCorrection = z.infer<typeof exerciseCorrectionSchema>;

// ─── Funciones de generación expuestas a la UI del asistente ───────

export async function generateCourseStructure(idea: string) {
  return generateStructured(
    `Idea de curso: "${idea}".\n\n` +
      "Genera la estructura completa de un curso online con este esquema JSON exacto:\n" +
      '{"title": string, "subtitle": string, "description": string (2-3 párrafos), ' +
      '"objectives": string[] (4-6 objetivos de aprendizaje concretos), ' +
      '"requirements": string[] (2-4 requisitos previos), ' +
      '"modules": [{"title": string, "description": string, "lessons": string[] (3-6 títulos de lección)}] ' +
      "(4-8 módulos). El curso debe tener un estándar alto, nada de relleno genérico.",
    courseStructureSchema
  );
}

export async function generateLessonContent(lessonTitle: string, courseContext: string) {
  return generateStructured(
    `Curso: "${courseContext}". Lección: "${lessonTitle}".\n\n` +
      'Genera {"summary": string (2-3 frases), "body": string (contenido de texto completo de la lección, ' +
      "500-900 palabras, en español, con ejemplos concretos, sin relleno)}.",
    lessonContentSchema
  );
}

export async function generateExercise(lessonTitle: string, courseContext: string) {
  return generateStructured(
    `Curso: "${courseContext}". Lección: "${lessonTitle}".\n\n` +
      'Genera {"instructions": string} con instrucciones claras de un ejercicio práctico ' +
      "que un alumno pueda completar y entregar, relacionado con el contenido de la lección.",
    exerciseSchema
  );
}

export async function generateExamQuestions(topic: string, count: number) {
  return generateStructured(
    `Tema: "${topic}". Genera ${count} preguntas de examen de opción múltiple.\n\n` +
      'Esquema: {"questions": [{"statement": string, ' +
      '"options": [{"text": string, "isCorrect": boolean}] (4 opciones, exactamente una correcta), ' +
      '"explanation": string (por qué es correcta, se muestra tras responder)}]}.',
    examQuestionsSchema
  );
}

export async function generateSummary(text: string) {
  return generateStructured(
    `Resume el siguiente contenido en 2-3 frases claras, en español:\n\n${text.slice(0, 4000)}\n\n` +
      'Esquema: {"summary": string}.',
    z.object({ summary: z.string() })
  );
}

export async function generateSEOMetadata(
  courseTitle: string,
  courseDescription: string
) {
  return generateStructured(
    `Curso: "${courseTitle}". Descripción: "${courseDescription.slice(0, 500)}".\n\n` +
      'Genera {"seoTitle": string (máx 60 caracteres), "seoDescription": string (máx 155 caracteres), ' +
      '"seoKeywords": string (5-8 palabras clave separadas por coma)} optimizado para buscadores.',
    seoSchema
  );
}

/**
 * Corrección inteligente de un ejercicio entregado por el alumno.
 * A diferencia del resto de funciones de este módulo, NO exige rol de
 * administrador — la dispara el propio alumno al entregar su
 * ejercicio (ver `modules/exercises/server/actions.ts`). Sigue el
 * mismo contrato: si no hay proveedor de IA configurado, lanza
 * `AIProviderError`, nunca devuelve una corrección inventada.
 */
export async function correctExerciseSubmission(
  instructions: string,
  submission: string
) {
  return generateStructured(
    `Instrucciones del ejercicio: "${instructions}".\n\n` +
      `Entrega del alumno: "${submission.slice(0, 4000)}".\n\n` +
      "Evalúa la entrega frente a las instrucciones. Genera JSON con este esquema exacto: " +
      '{"score": number (0-100, qué porcentaje de las instrucciones cumple), ' +
      '"feedback": string (2-4 frases, constructivo, en español, señalando qué está bien y qué mejorar)}. ' +
      "Sé justo pero exigente: no des 100 si faltan partes claramente pedidas en las instrucciones.",
    exerciseCorrectionSchema,
    { requireAdminAccess: false }
  );
}
