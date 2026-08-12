/**
 * Lógica PURA de adaptación al nivel para el speaking conversacional. Se
 * separa de los servicios (que llaman a la IA) para poder probarla sin red
 * ni credenciales: dado un nivel MCER, describe cómo debe comportarse la IA
 * (vocabulario, velocidad, complejidad, idiomático). Este texto se inyecta
 * como `system` en el proveedor de IA.
 */

export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export const CEFR_LEVELS: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function isCEFRLevel(v: string): v is CEFRLevel {
  return (CEFR_LEVELS as string[]).includes(v);
}

const LEVEL_GUIDANCE: Record<CEFRLevel, string> = {
  A1: "Vocabulario básico y de altísima frecuencia. Frases muy cortas y simples (sujeto-verbo-objeto). Habla despacio. Sin expresiones idiomáticas. Repite y reformula si el alumno no entiende.",
  A2: "Vocabulario cotidiano frecuente. Frases simples, alguna coordinada. Ritmo pausado. Evita modismos; si usas alguno muy común, explícalo.",
  B1: "Vocabulario general amplio. Frases con alguna subordinación. Ritmo natural pero claro. Introduce expresiones comunes con moderación.",
  B2: "Vocabulario rico y preciso. Estructuras complejas y matices. Ritmo natural. Usa expresiones idiomáticas habituales con naturalidad.",
  C1: "Vocabulario avanzado, matices y connotaciones. Estructuras sofisticadas. Ritmo plenamente natural. Idiomático y espontáneo.",
  C2: "Nivel de hablante nativo culto: total riqueza léxica, ironía, registro variable, referencias culturales. Conversación completamente natural y espontánea.",
};

export type SpeakingTurn = { role: "student" | "ai"; text: string };

export type ConversationParams = {
  language: string;
  level: CEFRLevel;
  scenario: string;
  objective: string;
  keywords?: string[];
};

/**
 * Construye el `system` para la conversación: rol, escenario, objetivo
 * pedagógico y las reglas de adaptación al nivel. Determinista y testeable.
 */
export function buildSpeakingSystemPrompt(params: ConversationParams): string {
  const parts = [
    `Eres un compañero de conversación para practicar ${params.language} en una academia de idiomas.`,
    `Escenario / rol: ${params.scenario}.`,
    `Objetivo lingüístico del ejercicio: ${params.objective}.`,
    `Nivel del alumno (MCER): ${params.level}. Adáptate ESTRICTAMENTE a este nivel:`,
    LEVEL_GUIDANCE[params.level],
    "Mantén una conversación real: una intervención por turno, natural, y termina normalmente con una pregunta o un pie para que el alumno siga hablando.",
    "Responde SIEMPRE en el idioma que se practica, nunca en otro idioma. No corrijas explícitamente salvo que el objetivo lo pida; el objetivo es que el alumno hable con fluidez.",
  ];
  if (params.keywords?.length) {
    parts.push(
      `Intenta introducir de forma NATURAL, si encaja, estas expresiones: ${params.keywords.join(", ")}.`
    );
  }
  return parts.join("\n");
}

/** Serializa el historial para el prompt de usuario. */
export function renderConversationHistory(history: SpeakingTurn[]): string {
  if (history.length === 0) {
    return "(Aún no hay conversación. Inicia tú el escenario con una intervención breve y acorde al nivel.)";
  }
  return history
    .map((t) => `${t.role === "ai" ? "Tú" : "Alumno"}: ${t.text}`)
    .join("\n");
}
