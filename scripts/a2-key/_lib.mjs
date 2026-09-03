/**
 * Ayudantes compartidos para construir el curso A2 Key completo (formato diario
 * con las 4 destrezas). Los importan los ficheros de cada semana y el
 * constructor principal (seed-a2-key-full.mjs).
 *
 * Convenciones de un DÍA (una lección de ~1 h y media):
 *   - Repaso + GRAMÁTICA (teoría de profesor) + práctica.
 *   - VOCABULARIO (flashcards con IPA) + práctica.
 *   - READING: las 5 partes de Cambridge, cada una con su TEXTO y preguntas.
 *   - WRITING: Parte 6 (email/nota 25+) y Parte 7 (relato 35+).
 *   - LISTENING: la parte que toque ese día (rotación semanal), con audio.
 *   - SPEAKING: Parte 1 (preguntas personales) y Parte 2 (gustos y razones).
 */

// ── Preguntas ──────────────────────────────────────────────────────────────
export const mc = (prompt, options, correct, explanation) => ({ kind: "multiple_choice", data: { kind: "multiple_choice", prompt, options, correct: [correct], explanation } });
export const fb = (prompt, accepted, explanation) => ({ kind: "fill_blank", data: { kind: "fill_blank", prompt, blanks: [{ accepted }], explanation } });
export const open = (prompt, guidance, explanation) => ({ kind: "open", data: { kind: "open", prompt, guidance, explanation } });

// ── Bloques de contenido ─────────────────────────────────────────────────────
export const TEXT = (content) => ({ type: "TEXT", content });
export const GRAMMAR = (title, content) => ({ type: "GRAMMAR", title, content });
export const TIP = (title, content) => ({ type: "TIP", title, content, data: { variant: "success" } });
export const WARN = (title, content) => ({ type: "NOTES", title, content, data: { variant: "warning" } });
export const INFO = (title, content) => ({ type: "NOTES", title, content, data: { variant: "info" } });
export const SUMMARY = (title, items) => ({ type: "SUMMARY", title, data: { items } });
export const HEAD = (title, content) => ({ type: "GRAMMAR", title, content });
export const deck = (title, cards) => ({ deck: { title, cards } });

// ── Ejercicios por destreza ──────────────────────────────────────────────────
// Gramática/vocabulario: se auto-corrigen (category "reading") y cuentan para el simulacro.
export const grammarEx = (title, instructions, questions) => ({ exercise: { category: "reading", collect: true, weight: questions.length, kind: "grammar", title, instructions, questions } });
export const vocabEx = (title, instructions, questions) => ({ exercise: { category: "reading", collect: true, weight: questions.length, kind: "vocab", title, instructions, questions } });

// READING — con su TEXTO (config.text) y preguntas. `part` = 1..5.
export const reading = (part, title, text, instructions, questions) => ({
  exercise: { category: "reading", collect: true, weight: questions.length, kind: `reading${part}`, part, title, instructions, config: text ? { text } : undefined, questions },
});

// WRITING — Parte 6 o 7. Sin preguntas: el alumno escribe (WritingArea) y el profesor revisa.
export const writing = (part, title, instructions, minWords, maxWords) => ({
  exercise: { category: "writing", kind: `writing${part}`, part, title, instructions, config: { minWords, maxWords }, questions: [] },
});

// LISTENING — con guion para generar audio (Piper). `part` = 1..5.
export const listening = (part, title, instructions, audioScript, questions) => ({
  exercise: { category: "listening", kind: `listening${part}`, part, title, instructions, audioScript, questions },
});

// SPEAKING — conversación por voz. `part` = 1 o 2.
export const speaking = (part, title, instructions, scenario, objective, keywords) => ({
  exercise: { category: "speaking", kind: `speaking${part}`, part, title, instructions, config: { language: "en", level: "A2", scenario, objective, keywords }, questions: [] },
});

// Encabezados de sección reutilizables (con el recordatorio del formato Cambridge).
export const READING_HEAD = HEAD("📖 READING — como en el examen (Partes 1–5)", "El Reading & Writing dura 1 hora. Practica las 5 partes en su formato real: primero lees el texto y luego respondes. P1 señales/mensajes · P2 emparejar · P3 texto largo · P4 huecos con opciones · P5 open cloze (una palabra).");
export const WRITING_HEAD = HEAD("✍️ WRITING — como en el examen (Partes 6–7)", "Ahora escribes. Parte 6: un email o nota (25+ palabras) con 3 puntos. Parte 7: un relato (35+ palabras) a partir de 3 imágenes. Se guardan y el profesor los revisa.");
export const LISTENING_HEAD = HEAD("🎧 LISTENING — como en el examen", "Escucha con atención. En el examen real cada audio se oye DOS veces (aquí puedes repetirlo). Lee las preguntas antes de escuchar. Hoy practicas una parte; a lo largo de la semana practicas las 5, y en los simulacros el Listening completo.");
export const SPEAKING_HEAD = HEAD("🗣️ SPEAKING — como en el examen (Partes 1–2)", "Habla por el micrófono con el examinador virtual. Parte 1: preguntas personales. Parte 2: gustos y razones (usa 'because'). Responde con frases completas y añade un detalle.");
