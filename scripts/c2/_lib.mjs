/**
 * Ayudantes para construir el curso C2 Proficiency (formato diario, 4 destrezas).
 * Formato de examen PROPIO de C2 Proficiency / CPE (cambridgeenglish.org, investigado 2026-09-24).
 * DISTINTO de C1 Advanced: Reading & Use of English tiene 7 PARTES (no 8 — sin cross-text
 * matching), key word transformations admite 3–8 palabras (no 3–6), gapped text quita 7
 * párrafos (no 6). Writing P1 es un essay que INTEGRA y EVALÚA dos textos fuente dados
 * (no una opinión libre). Speaking tiene solo 3 PARTES (no 4).
 *   Reading & Use of English (90 min, 7 partes, 53 preguntas):
 *     P1 multiple-choice cloze (8 huecos, 4 opciones) — léxico/colocaciones muy avanzadas ·
 *     P2 open cloze (8 huecos, una palabra) — gramática ·
 *     P3 word formation (8 huecos, forma una palabra a partir de una raíz) ·
 *     P4 key word transformations (6 frases, 3–8 palabras, hasta 2 puntos c/u) ·
 *     P5 lectura larga (6 MC, 4 opciones, detalle/opinión/actitud/inferencia) ·
 *     P6 GAPPED TEXT con PÁRRAFOS (7 párrafos quitados + 8 opciones, sobra 1) ·
 *     P7 multiple matching (10 preguntas ↔ secciones/textos).
 *   Writing (90 min, 2 partes):
 *     P1 essay (obligatorio, 240–280 palabras): integra y evalúa DOS textos fuente de
 *        ~100 palabras cada uno (resumir y valorar lo dado, no solo dar opinión libre) ·
 *     P2 elegir UNA de TRES (280–320 palabras): article/letter/report/review.
 *   Listening (~40 min, 4 partes, 30 preguntas):
 *     P1 tres grabaciones cortas independientes ~1 min c/u, 2 MC c/u (3 opciones, 6 preg) ·
 *     P2 sentence completion (9 huecos, UN monólogo largo 3–4 min) ·
 *     P3 conversación con hablantes interactuando, 3–4 min (5 MC, 4 opciones) ·
 *     P4 multiple matching (5 monólogos cortos ~35s, DOS tareas de elegir 5 de 8 opciones
 *        cada una, 10 preguntas).
 *   Speaking (16 min en pareja / 24 min en trío, SOLO 3 partes):
 *     P1 entrevista (2 min) · P2 tarea colaborativa con imagen(es) + decisión conjunta
 *        (4 min) · P3 turno largo (2 min individual + comentario del compañero) +
 *        discusión conjunta (~6 min).
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

// P1 — Multiple-choice cloze: texto con 8 huecos; cada pregunta mc con 4 opciones (léxico/colocaciones muy avanzadas, nivel C2).
export const useCloze = (title, text, questions) =>
  readingBlock(1, `Use of English · Parte 1 — ${title}`, text, "Lee el texto y elige la palabra correcta (A/B/C/D) para cada hueco. Léxico, colocaciones e idioms de nivel C2 — matices muy finos entre opciones.", questions);

// P2 — Open cloze: texto con 8 huecos; escribe UNA palabra (gramática muy avanzada).
export const openCloze = (title, text, questions) =>
  readingBlock(2, `Use of English · Parte 2 — ${title}`, text, "Lee el texto y escribe UNA palabra en cada hueco. Gramática avanzada (preposiciones, referencias, conectores, estructuras fijas).", questions);

// P3 — Word formation: texto con 8 huecos; forma la palabra a partir de la RAÍZ (cambios internos, negativos, compuestos).
export const wordFormation = (title, text, items) => {
  const questions = items.map((it, i) => fb(`Hueco ${i + 1} — forma una palabra a partir de: ${it.root.toUpperCase()}`, it.accepted, it.hint ?? `Deriva de ${it.root}.`));
  return readingBlock(3, `Use of English · Parte 3 — ${title}`, text, "Lee el texto y forma, en cada hueco, la palabra correcta a partir de la RAÍZ (prefijos, sufijos, cambios internos, compuestos). Nivel C2: derivaciones poco frecuentes y matices de registro.", questions);
};

// P4 — Key word transformations: reescribe con la PALABRA CLAVE (3–8 palabras; hasta 2 puntos c/u).
// items: { s1, key, s2, accepted } donde s2 lleva "____" en el hueco.
export const keyword = (title, items) => {
  const questions = items.map((it) =>
    fb(`${it.s1}\nPALABRA CLAVE: ${it.key.toUpperCase()}\n${it.s2}`, it.accepted, it.explanation ?? `Usa "${it.key}" sin cambiarla; entre 3 y 8 palabras.`)
  );
  return readingBlock(4, `Use of English · Parte 4 — ${title}`, null, "Completa la segunda frase para que signifique lo mismo que la primera, usando la PALABRA CLAVE. No cambies esa palabra. Escribe entre TRES y OCHO palabras (cada ítem vale hasta 2 puntos).", questions);
};

// P5 — Lectura larga con 6 preguntas de opción múltiple, 4 opciones (detalle, opinión, actitud, tono, inferencia, referencia).
export const readingMC = (title, text, questions) =>
  readingBlock(5, `Reading · Parte 5 — ${title}`, text, "Lee el texto largo y elige la respuesta correcta (A/B/C/D). Incluye detalle, opinión, actitud/tono del autor, inferencia y referencia — nivel C2, matices muy sutiles.", questions);

// P6 — GAPPED TEXT (párrafos): 7 párrafos quitados del texto; 8 opciones (una sobra). `text` con huecos (1)…(7).
export const gappedText = (title, text, options, questions) => {
  const optionsBlock = "\n\nPÁRRAFOS (sobra uno):\n" + options.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("\n\n");
  return readingBlock(6, `Reading · Parte 6 — ${title}`, text + optionsBlock, "Lee el texto, del que se han quitado SIETE PÁRRAFOS. Elige el párrafo (A–H) que encaja en cada hueco. Sobra un párrafo. Fíjate en la cohesión (referencias, conectores, progresión de ideas).", questions);
};

// P7 — Multiple matching: varios textos/secciones (A–F…) + 10 preguntas que se emparejan.
export const multipleMatching = (title, text, questions) =>
  readingBlock(7, `Reading · Parte 7 — ${title}`, text, "Lee los textos/secciones. Para cada pregunta, elige el texto (A/B/…) que corresponde. Los textos pueden elegirse más de una vez.", questions);

export const writing = (part, title, instructions, minWords = 240, maxWords = 280) => ({
  exercise: { category: "writing", kind: `writing${part}`, part, title, instructions, config: { minWords, maxWords }, questions: [] },
});

export const listening = (part, title, instructions, audioScript, questions) => ({
  exercise: { category: "listening", kind: `listening${part}`, part, title, instructions, audioScript, questions },
});

export const speaking = (part, title, instructions, scenario, objective, keywords) => ({
  exercise: { category: "speaking", kind: `speaking${part}`, part, title, instructions, config: { language: "en", level: "C2", scenario, objective, keywords }, questions: [] },
});

export const READING_HEAD = HEAD("📖 READING & USE OF ENGLISH — como en el examen (Partes 1–7)", "Dura 90 min y tiene 7 partes (53 preguntas): P1 multiple-choice cloze (léxico muy avanzado) · P2 open cloze (gramática, una palabra) · P3 word formation · P4 key word transformations (3–8 palabras, hasta 2 puntos) · P5 lectura larga (MC, 4 opciones) · P6 gapped text (7 PÁRRAFOS quitados) · P7 multiple matching (10). Nivel C2: matices muy finos entre opciones — gestiona bien el tiempo.");
export const WRITING_HEAD = HEAD("✍️ WRITING — como en el examen (Partes 1–2)", "Dura 90 min. Parte 1: un ESSAY obligatorio (240–280 palabras) que INTEGRA y EVALÚA dos textos fuente dados (resume y valora lo que dicen, con tu propia perspectiva razonada — no es una opinión completamente libre). Parte 2: eliges UNA de TRES tareas (article/letter/report/review, 280–320 palabras). Registro y estructura de nivel C2: lenguaje preciso, cohesión sofisticada y matices.");
export const LISTENING_HEAD = HEAD("🎧 LISTENING — como en el examen (Partes 1–4)", "Dura ~40 min y cada audio se oye DOS veces (aquí puedes repetirlo). Cuatro partes (30 preguntas): P1 tres grabaciones cortas independientes (2 MC c/u, 3 opciones, 6preg) · P2 sentence completion (9 huecos de UN monólogo largo) · P3 conversación con hablantes interactuando (5 MC, 4 opciones) · P4 multiple matching (5 monólogos cortos, DOS tareas de elegir 5 de 8 opciones, 10preg). Hoy practicas una parte; a lo largo de la semana, las cuatro.");
export const SPEAKING_HEAD = HEAD("🗣️ SPEAKING — como en el examen (Partes 1–3)", "Dura 16 min con otro candidato y dos examinadores (24 min si sois tres). P1 entrevista personal (2 min) · P2 tarea colaborativa: comentar una o más imágenes y llegar a una decisión conjunta (4 min) · P3 turno largo (2 min individual + comentario breve del compañero) seguido de una discusión conjunta (~6 min). Da respuestas largas, matizadas y bien organizadas, con opiniones razonadas — el registro más exigente de todo Cambridge English.");
