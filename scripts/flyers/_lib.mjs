/**
 * Ayudantes para construir el curso A2 Flyers (Cambridge English
 * Qualifications: Young Learners — tercer y último nivel YLE, ~8-12 años).
 * Formato de examen REAL (cambridgeenglish.org):
 *   LISTENING (~25 min, 5 partes, 25 preguntas): P1 escuchar y unir con
 *     líneas · P2 escuchar y completar un formulario · P3 escuchar y
 *     marcar el dibujo correcto (3 opciones) · P4 escuchar y marcar
 *     Verdadero/Falso en una tabla · P5 escuchar, colorear y escribir
 *     sobre una escena completa (más compleja que en Movers).
 *   READING & WRITING (~40 min, 7 partes): P1 leer definiciones y
 *     encontrar la palabra · P2 leer un diálogo y elegir la respuesta
 *     correcta · P3 leer un texto y elegir la palabra correcta (3
 *     opciones) para cada hueco · P4 leer un texto y responder
 *     Verdadero/Falso · P5 completar un texto con una palabra (open
 *     cloze) · P6 escritura guiada a partir de dibujos/pistas (20-30
 *     palabras) · P7 escritura libre corta — historia o postal (25-35
 *     palabras).
 *   SPEAKING (~7-9 min, con un examinador): comparar dos dibujos
 *     (diferencias y semejanzas), hablar sobre un dibujo/tema, responder
 *     preguntas personales más elaboradas.
 * SIN aprobado/suspenso — se cuentan aciertos (shields). Exento del
 * bloqueo diario (curso YLE).
 */

export const mc = (prompt, options, correct, explanation) => ({ kind: "multiple_choice", data: { kind: "multiple_choice", prompt, options, correct: [correct], explanation } });
export const fb = (prompt, accepted, explanation) => ({ kind: "fill_blank", data: { kind: "fill_blank", prompt, blanks: [{ accepted }], explanation } });
export const open = (prompt, guidance, explanation) => ({ kind: "open", data: { kind: "open", prompt, guidance, explanation } });

export const TEXT = (content) => ({ type: "TEXT", content });
export const GRAMMAR = (title, content) => ({ type: "GRAMMAR", title, content });
export const TIP = (title, content) => ({ type: "TIP", title, content, data: { variant: "success" } });
export const WARN = (title, content) => ({ type: "NOTES", title, content, data: { variant: "warning" } });
export const INFO = (title, content) => ({ type: "NOTES", title, content, data: { variant: "info" } });
export const SUMMARY = (title, items) => ({ type: "SUMMARY", title, data: { items } });
export const HEAD = (title, content) => ({ type: "GRAMMAR", title, content });
export const deck = (title, cards) => ({ deck: { title, cards } });

export const grammarEx = (title, instructions, questions) => ({ exercise: { category: "reading", collect: true, weight: questions.length, kind: "grammar", title, instructions, questions } });
export const vocabEx = (title, instructions, questions) => ({ exercise: { category: "reading", collect: true, weight: questions.length, kind: "vocab", title, instructions, questions } });

const readingBlock = (part, title, text, instructions, questions) => ({
  exercise: { category: "reading", collect: true, weight: questions.length, kind: `reading${part}`, part, title, instructions, config: text ? { text } : undefined, questions },
});

// LISTENING P1 — escuchar y unir con líneas.
export const listenMatch = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening1", part: 1, title: `Listening · Parte 1 — ${title}`, instructions: "Escucha y une cada nombre con la persona o el dibujo correcto.", questions },
});

// LISTENING P2 — escuchar y completar un formulario.
export const listenForm = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening2", part: 2, title: `Listening · Parte 2 — ${title}`, instructions: "Escucha y completa el formulario con nombres, números o palabras.", questions },
});

// LISTENING P3 — escuchar y marcar el dibujo correcto (3 opciones).
export const listenChoose = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening3", part: 3, title: `Listening · Parte 3 — ${title}`, instructions: "Escucha y marca el dibujo correcto (hay 3 opciones).", questions },
});

// LISTENING P4 — escuchar y marcar Verdadero/Falso en una tabla.
export const listenTrueFalse = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening4", part: 4, title: `Listening · Parte 4 — ${title}`, instructions: "Escucha y marca Verdadero o Falso para cada frase.", questions },
});

// LISTENING P5 — escuchar, colorear y escribir sobre una escena completa.
export const listenScene = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening5", part: 5, title: `Listening · Parte 5 — ${title}`, instructions: "Escucha la escena completa, colorea y escribe según lo que oigas.", questions },
});

// READING & WRITING P1 — leer definiciones y encontrar la palabra.
export const readDefine = (title, questions) =>
  readingBlock(1, title, null, "Lee la definición y escribe o elige la palabra correcta.", questions);

// READING & WRITING P2 — leer un diálogo y elegir la respuesta correcta.
export const readDialogue = (title, questions) =>
  readingBlock(2, title, null, "Lee la pregunta o frase y elige la respuesta correcta.", questions);

// READING & WRITING P3 — elegir la palabra correcta (3 opciones) para cada hueco.
export const readGapChoice = (title, text, questions) =>
  readingBlock(3, title, text, "Lee el texto y elige la palabra correcta para cada hueco.", questions);

// READING & WRITING P4 — leer un texto y responder Verdadero/Falso.
export const readTrueFalse = (title, text, questions) =>
  readingBlock(4, title, text, "Lee el texto. Después, lee las frases y escribe Verdadero o Falso.", questions);

// READING & WRITING P5 — completar un texto con una palabra (open cloze).
export const readOpenCloze = (title, text, questions) =>
  readingBlock(5, title, text, "Lee el texto y escribe UNA palabra en cada hueco.", questions);

// READING & WRITING P6 — escritura guiada a partir de dibujos/pistas.
export const writeGuided = (title, prompt, minWords = 20, maxWords = 30) => ({
  exercise: { category: "writing", kind: "writing6", part: 6, title: `Writing · Parte 6 — ${title}`, instructions: "Mira los dibujos o las pistas y escribe frases completas.", config: { minWords, maxWords, scenario: prompt }, questions: [] },
});

// READING & WRITING P7 — escritura libre corta (historia o postal).
export const writeStory = (title, prompt, minWords = 25, maxWords = 35) => ({
  exercise: { category: "writing", kind: "writing7", part: 7, title: `Writing · Parte 7 — ${title}`, instructions: "Escribe una historia corta o una postal usando las pistas.", config: { minWords, maxWords, scenario: prompt }, questions: [] },
});

export const listening = (part, title, instructions, audioScript, questions) => ({
  exercise: { category: "listening", kind: `listening${part}`, part, title, instructions, audioScript, questions },
});

export const speaking = (part, title, instructions, scenario, objective, keywords) => ({
  exercise: { category: "speaking", kind: `speaking${part}`, part, title, instructions, config: { language: "en", level: "A2 Flyers", scenario, objective, keywords }, questions: [] },
});

export const LISTENING_HEAD = HEAD("🎧 LISTENING — como en el examen (Partes 1-5)", "Dura unos 25 minutos y cada audio se oye DOS veces. Cinco partes (25 preguntas): P1 escuchar y unir nombres con personas · P2 escuchar y completar un formulario · P3 escuchar y marcar el dibujo correcto · P4 escuchar y marcar Verdadero/Falso · P5 escuchar una escena completa, colorear y escribir.");
export const READING_HEAD = HEAD("📖 READING & WRITING — como en el examen (Partes 1-7)", "Dura unos 40 minutos. Siete partes: P1 definiciones → palabra · P2 diálogo → respuesta correcta · P3 elegir la palabra correcta · P4 leer y responder V/F · P5 completar con una palabra · P6 escritura guiada (20-30 palabras) · P7 historia o postal corta (25-35 palabras).");
export const SPEAKING_HEAD = HEAD("🗣️ SPEAKING — como en el examen", "Dura 7-9 minutos con un examinador amable. Comparar dos dibujos (diferencias y semejanzas), hablar sobre un dibujo o tema, y responder preguntas personales más elaboradas.");
