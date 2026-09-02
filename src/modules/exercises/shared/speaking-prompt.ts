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
 * Normaliza el idioma a su nombre en INGLÉS ("en" → "English"). Es clave:
 * si al modelo se le pasa el código "en" en un prompt escrito en español,
 * tiende a responder en español (y la voz inglesa lo lee con acento → suena
 * a "español con acento inglés"). Con el nombre real del idioma + una orden
 * tajante en ese idioma, el modelo se ancla al idioma correcto.
 */
export function languageName(language: string): string {
  const key = language.trim().toLowerCase();
  const map: Record<string, string> = {
    en: "English",
    "en-gb": "English",
    "en-us": "English",
    english: "English",
    inglés: "English",
    ingles: "English",
    es: "Spanish",
    español: "Spanish",
    espanol: "Spanish",
    spanish: "Spanish",
    fr: "French",
    francés: "French",
    french: "French",
    de: "German",
    alemán: "German",
    german: "German",
  };
  return map[key] ?? "English";
}

/**
 * Construye el `system` para la conversación. La ORDEN de idioma va primero
 * y en el propio idioma de práctica, para que el modelo no derive al español
 * pese a que el escenario/objetivo estén descritos en español.
 */
export function buildSpeakingSystemPrompt(params: ConversationParams): string {
  const lang = languageName(params.language);
  const isEnglish = lang === "English";

  const parts = [
    // Orden de idioma tajante y EN el idioma de práctica (ancla al modelo).
    isEnglish
      ? "You are a friendly speaking partner in a language academy. You MUST speak ONLY in English. Every single word of your reply must be in natural English — never Spanish or any other language, even if the student writes in Spanish."
      : `Responde SIEMPRE y ÚNICAMENTE en ${lang}. Cada palabra de tu respuesta debe estar en ${lang}, nunca en otro idioma.`,
    `Escenario / rol (contexto): ${params.scenario}.`,
    `Objetivo lingüístico del ejercicio: ${params.objective}.`,
    `Nivel del alumno (MCER): ${params.level}. Adáptate ESTRICTAMENTE a este nivel:`,
    LEVEL_GUIDANCE[params.level],
    isEnglish
      ? "Keep it a real conversation: ONE short turn at a time, natural, and normally end with a question so the student keeps talking. Do not correct explicitly unless asked; the goal is fluency. Output plain spoken English only — no stage directions, no translations, no quotation marks."
      : "Mantén una conversación real: una intervención por turno, natural, terminando con una pregunta. No corrijas salvo que el objetivo lo pida. Devuelve solo el habla, sin acotaciones ni traducciones.",
  ];
  if (params.keywords?.length) {
    parts.push(
      isEnglish
        ? `If it fits naturally, try to use some of these expressions: ${params.keywords.join(", ")}.`
        : `Intenta introducir de forma NATURAL, si encaja, estas expresiones: ${params.keywords.join(", ")}.`
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
