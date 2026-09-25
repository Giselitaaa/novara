/**
 * Ayudantes para construir el curso A1 Movers (Cambridge English
 * Qualifications: Young Learners — segundo nivel, para niños de ~7-10 años).
 * Formato de examen REAL (cambridgeenglish.org):
 *   LISTENING (~25 min, 5 partes, 25 preguntas): P1 escuchar y unir con
 *     líneas (nombres↔personas en un dibujo) · P2 escuchar y completar un
 *     formulario (nombres, números, palabras) · P3 escuchar, colorear y
 *     escribir · P4 escuchar y marcar el dibujo correcto (3 opciones) ·
 *     P5 escuchar y colorear/escribir sobre una escena completa.
 *   READING & WRITING (~30 min, 6 partes, ~35 preguntas): P1 leer
 *     definiciones y encontrar la palabra correspondiente · P2 leer una
 *     historia/preguntas y escribir Sí/No · P3 leer y elegir la palabra
 *     correcta (3 opciones) para cada hueco · P4 leer un texto y completar
 *     con una palabra (open cloze) · P5 mirar el dibujo, leer la historia,
 *     completar huecos con palabras de una caja · P6 mirar dibujos y
 *     escribir una o dos palabras para cada uno.
 *   SPEAKING (~5-7 min, con un examinador): encontrar diferencias entre dos
 *     dibujos, contar una historia a partir de 4 dibujos, responder
 *     preguntas personales.
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

// LISTENING P3 — escuchar, colorear y escribir.
export const listenColourWrite = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening3", part: 3, title: `Listening · Parte 3 — ${title}`, instructions: "Escucha, colorea y escribe según lo que oigas.", questions },
});

// LISTENING P4 — escuchar y marcar el dibujo correcto (3 opciones).
export const listenChoose = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening4", part: 4, title: `Listening · Parte 4 — ${title}`, instructions: "Escucha y marca el dibujo correcto (hay 3 opciones).", questions },
});

// LISTENING P5 — escuchar y colorear/escribir sobre una escena completa.
export const listenScene = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening5", part: 5, title: `Listening · Parte 5 — ${title}`, instructions: "Escucha la escena completa y responde a las preguntas.", questions },
});

// READING & WRITING P1 — leer definiciones y encontrar la palabra.
export const readDefine = (title, questions) =>
  readingBlock(1, title, null, "Lee la definición y escribe o elige la palabra correcta.", questions);

// READING & WRITING P2 — leer una historia y escribir Sí/No.
export const readStory = (title, text, questions) =>
  readingBlock(2, title, text, "Lee la historia. Después, lee las frases y escribe Sí o No.", questions);

// READING & WRITING P3 — elegir la palabra correcta (3 opciones) para cada hueco.
export const readGapChoice = (title, text, questions) =>
  readingBlock(3, title, text, "Lee el texto y elige la palabra correcta para cada hueco.", questions);

// READING & WRITING P4 — completar un texto con una palabra (open cloze).
export const readOpenCloze = (title, text, questions) =>
  readingBlock(4, title, text, "Lee el texto y escribe UNA palabra en cada hueco.", questions);

// READING & WRITING P5 — completar huecos con palabras de una caja.
export const readWordBox = (title, text, questions) =>
  readingBlock(5, title, text, "Lee la historia y completa los huecos con las palabras de la caja.", questions);

// READING & WRITING P6 — mirar dibujos y escribir una o dos palabras.
export const readWrite = (title, questions) =>
  readingBlock(6, title, null, "Mira el dibujo y escribe la palabra o las palabras correctas.", questions);

export const writing = (part, title, instructions, minWords = 5, maxWords = 20) => ({
  exercise: { category: "writing", kind: `writing${part}`, part, title, instructions, config: { minWords, maxWords }, questions: [] },
});

export const listening = (part, title, instructions, audioScript, questions) => ({
  exercise: { category: "listening", kind: `listening${part}`, part, title, instructions, audioScript, questions },
});

export const speaking = (part, title, instructions, scenario, objective, keywords) => ({
  exercise: { category: "speaking", kind: `speaking${part}`, part, title, instructions, config: { language: "en", level: "A1 Movers", scenario, objective, keywords }, questions: [] },
});

export const LISTENING_HEAD = HEAD("🎧 LISTENING — como en el examen (Partes 1-5)", "Dura unos 25 minutos y cada audio se oye DOS veces. Cinco partes (25 preguntas): P1 escuchar y unir nombres con personas · P2 escuchar y completar un formulario · P3 escuchar, colorear y escribir · P4 escuchar y marcar el dibujo correcto · P5 escuchar una escena completa.");
export const READING_HEAD = HEAD("📖 READING & WRITING — como en el examen (Partes 1-6)", "Dura unos 30 minutos. Seis partes: P1 definiciones → palabra · P2 leer una historia (Sí/No) · P3 elegir la palabra correcta · P4 completar con una palabra · P5 completar con palabras de una caja · P6 mirar y escribir.");
export const SPEAKING_HEAD = HEAD("🗣️ SPEAKING — como en el examen", "Dura 5-7 minutos con un examinador amable. Encontrar diferencias entre dos dibujos, contar una historia a partir de 4 dibujos, y responder preguntas personales.");
