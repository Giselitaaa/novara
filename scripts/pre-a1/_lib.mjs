/**
 * Ayudantes para construir el curso Pre-A1 Starters (Cambridge English
 * Qualifications: Young Learners — el nivel de entrada, para niños de ~6-8
 * años). Formato de examen REAL (cambridgeenglish.org):
 *   LISTENING (~20 min, 4 partes, 20 preguntas): P1 escuchar y unir con
 *     líneas (nombres↔personas/objetos en un dibujo) · P2 escuchar y
 *     colorear (partes de un dibujo) · P3 escuchar y marcar el dibujo
 *     correcto (3 opciones) · P4 escuchar y escribir la palabra/número que
 *     falta.
 *   READING & WRITING (~25 min, 4 partes, ~20 preguntas): P1 mirar y leer,
 *     escribir Sí/No · P2 mirar el dibujo, leer la pregunta, escribir una
 *     respuesta corta (1-3 palabras) · P3 leer y elegir la palabra correcta
 *     (3 opciones) para cada dibujo · P4 mirar y leer, completar las letras
 *     que faltan de una palabra.
 *   SPEAKING (~3-5 min, con un examinador): encontrar diferencias entre dos
 *     dibujos, responder preguntas sobre un dibujo, preguntas personales
 *     (nombre, edad, colores, familia, animales).
 * SIN aprobado/suspenso — se cuentan aciertos (no hay UI de "escudos" real
 * todavía; el texto pedagógico habla de "aciertos"/"estrellas", nunca de
 * aprobar o suspender). Exento del bloqueo diario (curso YLE).
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

// LISTENING P1 — escuchar y unir con líneas (aquí: elegir la persona/objeto correcto).
export const listenMatch = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening1", part: 1, title: `Listening · Parte 1 — ${title}`, instructions: "Escucha y une cada nombre con el dibujo correcto.", questions },
});

// LISTENING P2 — escuchar y colorear (aquí: elegir el color correcto).
export const listenColour = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening2", part: 2, title: `Listening · Parte 2 — ${title}`, instructions: "Escucha y elige el color correcto para cada dibujo.", questions },
});

// LISTENING P3 — escuchar y marcar el dibujo correcto (3 opciones).
export const listenChoose = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening3", part: 3, title: `Listening · Parte 3 — ${title}`, instructions: "Escucha y marca el dibujo correcto (hay 3 opciones).", questions },
});

// LISTENING P4 — escuchar y escribir la palabra/número que falta.
export const listenWrite = (title, questions) => ({
  exercise: { category: "listening", collect: true, weight: questions.length, kind: "listening4", part: 4, title: `Listening · Parte 4 — ${title}`, instructions: "Escucha y escribe la palabra o el número que falta.", questions },
});

// READING & WRITING P1 — mirar y leer, Sí/No.
export const readYesNo = (title, questions) =>
  readingBlock(1, title, null, "Mira el dibujo. Lee la frase. ¿Es verdad? Escribe Sí o No.", questions);

// READING & WRITING P2 — mirar el dibujo, leer la pregunta, escribir respuesta corta.
export const readAnswer = (title, questions) =>
  readingBlock(2, title, null, "Mira el dibujo y responde a la pregunta con 1-3 palabras.", questions);

// READING & WRITING P3 — leer y elegir la palabra correcta (3 opciones).
export const readChoose = (title, questions) =>
  readingBlock(3, title, null, "Mira el dibujo y elige la palabra correcta.", questions);

// READING & WRITING P4 — completar las letras que faltan de una palabra.
export const readWrite = (title, questions) =>
  readingBlock(4, title, null, "Completa las letras que faltan en cada palabra.", questions);

export const writing = (part, title, instructions, minWords = 3, maxWords = 10) => ({
  exercise: { category: "writing", kind: `writing${part}`, part, title, instructions, config: { minWords, maxWords }, questions: [] },
});

export const listening = (part, title, instructions, audioScript, questions) => ({
  exercise: { category: "listening", kind: `listening${part}`, part, title, instructions, audioScript, questions },
});

export const speaking = (part, title, instructions, scenario, objective, keywords) => ({
  exercise: { category: "speaking", kind: `speaking${part}`, part, title, instructions, config: { language: "en", level: "Pre-A1", scenario, objective, keywords }, questions: [] },
});

export const LISTENING_HEAD = HEAD("🎧 LISTENING — como en el examen (Partes 1-4)", "Dura unos 20 minutos y cada audio se oye DOS veces. Cuatro partes (20 preguntas): P1 escuchar y unir nombres con dibujos · P2 escuchar y colorear · P3 escuchar y marcar el dibujo correcto · P4 escuchar y escribir la palabra que falta.");
export const READING_HEAD = HEAD("📖 READING & WRITING — como en el examen (Partes 1-4)", "Dura unos 25 minutos. Cuatro partes: P1 mirar y leer (Sí/No) · P2 mirar el dibujo y responder · P3 elegir la palabra correcta · P4 completar las letras que faltan.");
export const SPEAKING_HEAD = HEAD("🗣️ SPEAKING — como en el examen", "Dura 3-5 minutos con un examinador amable. Encontrar diferencias entre dos dibujos, responder preguntas sobre un dibujo, y preguntas personales sencillas (tu nombre, tu edad, tus colores favoritos, tu familia).");
