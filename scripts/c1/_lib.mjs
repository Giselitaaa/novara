/**
 * Ayudantes para construir el curso C1 Advanced (formato diario, 4 destrezas).
 * Formato de examen PROPIO de C1 Advanced / CAE (cambridgeenglish.org):
 *   Reading & Use of English (90 min, 8 partes, 56 preguntas):
 *     P1 multiple-choice cloze (8 huecos, 4 opciones) — léxico/colocaciones ·
 *     P2 open cloze (8 huecos, una palabra) — gramática ·
 *     P3 word formation (8 huecos, forma una palabra a partir de una raíz) ·
 *     P4 key word transformations (6 frases, 3–6 palabras, hasta 2 puntos c/u) ·
 *     P5 lectura larga (6 MC, detalle/opinión/actitud/inferencia) ·
 *     P6 CROSS-TEXT multiple matching (4 textos cortos A–D sobre un tema + 4 preguntas
 *        que comparan/contrastan opiniones entre los textos) ·
 *     P7 GAPPED TEXT con PÁRRAFOS (6 párrafos quitados + 7 opciones, sobra 1) ·
 *     P8 multiple matching (10 preguntas ↔ secciones/textos).
 *   Writing (90 min, 2 partes, 220–260 palabras cada una):
 *     P1 essay (obligatorio): discute dos puntos de un texto y di cuál es más importante ·
 *     P2 elegir UNA: letter/email, proposal, report o review.
 *   Listening (~40 min, 4 partes, 30 preguntas): P1 tres extractos (6 MC) ·
 *     P2 sentence completion (8 huecos, monólogo) · P3 conversación larga (6 MC) ·
 *     P4 multiple matching (5 monólogos → 8 opciones, 10 preguntas).
 *   Speaking (15 min, 4 partes): P1 entrevista · P2 turno largo: dos de tres fotos
 *     (~1 min) + respuesta breve · P3 tarea colaborativa (decidir) · P4 discusión.
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

// P1 — Multiple-choice cloze: texto con 8 huecos; cada pregunta mc con 4 opciones (léxico/colocaciones avanzadas).
export const useCloze = (title, text, questions) =>
  readingBlock(1, `Use of English · Parte 1 — ${title}`, text, "Lee el texto y elige la palabra correcta (A/B/C/D) para cada hueco. Léxico, colocaciones y phrasal verbs de nivel C1.", questions);

// P2 — Open cloze: texto con 8 huecos; escribe UNA palabra (gramática avanzada).
export const openCloze = (title, text, questions) =>
  readingBlock(2, `Use of English · Parte 2 — ${title}`, text, "Lee el texto y escribe UNA palabra en cada hueco. Gramática (preposiciones, referencias, conectores, estructuras).", questions);

// P3 — Word formation: texto con 8 huecos; forma la palabra a partir de la RAÍZ (a menudo con cambios internos y negativos).
export const wordFormation = (title, text, items) => {
  const questions = items.map((it, i) => fb(`Hueco ${i + 1} — forma una palabra a partir de: ${it.root.toUpperCase()}`, it.accepted, it.hint ?? `Deriva de ${it.root}.`));
  return readingBlock(3, `Use of English · Parte 3 — ${title}`, text, "Lee el texto y forma, en cada hueco, la palabra correcta a partir de la RAÍZ (prefijos, sufijos, cambios internos, compuestos). Nivel C1: cuidado con los cambios ortográficos.", questions);
};

// P4 — Key word transformations: reescribe con la PALABRA CLAVE (3–6 palabras; hasta 2 puntos c/u).
// items: { s1, key, s2, accepted } donde s2 lleva "____" en el hueco.
export const keyword = (title, items) => {
  const questions = items.map((it) =>
    fb(`${it.s1}\nPALABRA CLAVE: ${it.key.toUpperCase()}\n${it.s2}`, it.accepted, it.explanation ?? `Usa "${it.key}" sin cambiarla; 3–6 palabras.`)
  );
  return readingBlock(4, `Use of English · Parte 4 — ${title}`, null, "Completa la segunda frase para que signifique lo mismo que la primera, usando la PALABRA CLAVE. No cambies esa palabra. Escribe entre TRES y SEIS palabras (cada ítem vale hasta 2 puntos).", questions);
};

// P5 — Lectura larga con 6 preguntas de opción múltiple (detalle, opinión, actitud, tono, inferencia, referencia).
export const readingMC = (title, text, questions) =>
  readingBlock(5, `Reading · Parte 5 — ${title}`, text, "Lee el texto largo y elige la respuesta correcta (A/B/C/D). Incluye detalle, opinión, actitud/tono del autor, inferencia y referencia.", questions);

// P6 — CROSS-TEXT multiple matching: cuatro textos cortos (A–D) sobre un mismo tema + 4 preguntas
// que comparan/contrastan las OPINIONES entre los textos. `texts`: { A, B, C, D } (o array de 4).
export const crossTextMatching = (title, intro, texts, questions) => {
  const arr = Array.isArray(texts) ? texts : [texts.A, texts.B, texts.C, texts.D];
  const body = (intro ? intro + "\n\n" : "") + arr.map((t, i) => `${String.fromCharCode(65 + i)}) ${t}`).join("\n\n");
  return readingBlock(6, `Reading · Parte 6 — ${title}`, body, "Lee los cuatro textos (A–D) sobre el mismo tema. Para cada pregunta, elige el texto (A/B/C/D) cuya opinión coincide o difiere de la de otro, según se indique.", questions);
};

// P7 — GAPPED TEXT (párrafos): 6 párrafos quitados del texto; 7 opciones (una sobra). `text` con huecos (1)…(6).
export const gappedText = (title, text, options, questions) => {
  const optionsBlock = "\n\nPÁRRAFOS (sobra uno):\n" + options.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("\n\n");
  return readingBlock(7, `Reading · Parte 7 — ${title}`, text + optionsBlock, "Lee el texto, del que se han quitado seis PÁRRAFOS. Elige el párrafo (A–G) que encaja en cada hueco. Sobra un párrafo. Fíjate en la cohesión (referencias, conectores, progresión de ideas).", questions);
};

// P8 — Multiple matching: varios textos/secciones (A–F…) + 10 preguntas que se emparejan.
export const multipleMatching = (title, text, questions) =>
  readingBlock(8, `Reading · Parte 8 — ${title}`, text, "Lee los textos/secciones. Para cada pregunta, elige el texto (A/B/…) que corresponde. Los textos pueden elegirse más de una vez.", questions);

export const writing = (part, title, instructions, minWords = 220, maxWords = 260) => ({
  exercise: { category: "writing", kind: `writing${part}`, part, title, instructions, config: { minWords, maxWords }, questions: [] },
});

export const listening = (part, title, instructions, audioScript, questions) => ({
  exercise: { category: "listening", kind: `listening${part}`, part, title, instructions, audioScript, questions },
});

export const speaking = (part, title, instructions, scenario, objective, keywords) => ({
  exercise: { category: "speaking", kind: `speaking${part}`, part, title, instructions, config: { language: "en", level: "C1", scenario, objective, keywords }, questions: [] },
});

export const READING_HEAD = HEAD("📖 READING & USE OF ENGLISH — como en el examen (Partes 1–8)", "Dura 90 min y tiene 8 partes (56 preguntas): P1 multiple-choice cloze (léxico) · P2 open cloze (gramática, una palabra) · P3 word formation · P4 key word transformations (3–6 palabras, hasta 2 puntos) · P5 lectura larga (MC) · P6 CROSS-TEXT multiple matching (4 textos, comparar opiniones) · P7 gapped text (6 PÁRRAFOS quitados) · P8 multiple matching (10). Es la prueba más larga y densa: gestiona bien el tiempo.");
export const WRITING_HEAD = HEAD("✍️ WRITING — como en el examen (Partes 1–2)", "Dura 90 min. Parte 1: un ESSAY obligatorio (220–260 palabras) que discute dos puntos de un texto dado y argumenta cuál es más importante, con tu opinión razonada. Parte 2: eliges UNA tarea (carta/email, propuesta, informe o reseña, 220–260). Registro y estructura de nivel C1: lenguaje preciso, cohesión y matices.");
export const LISTENING_HEAD = HEAD("🎧 LISTENING — como en el examen (Partes 1–4)", "Dura ~40 min y cada audio se oye DOS veces (aquí puedes repetirlo). Cuatro partes (30 preguntas): P1 tres extractos con dos hablantes (6 MC) · P2 sentence completion (8 huecos de un monólogo) · P3 conversación larga (6 MC) · P4 multiple matching (5 monólogos → 8 opciones, 10 preguntas). Hoy practicas una parte; a lo largo de la semana, las cuatro.");
export const SPEAKING_HEAD = HEAD("🗣️ SPEAKING — como en el examen (Partes 1–4)", "Dura 15 min con otro candidato y dos examinadores. P1 entrevista personal · P2 turno largo: comparar DOS de TRES fotos (~1 min) y responder a una pregunta · P3 tarea colaborativa: comentar unas opciones y decidir juntos · P4 discusión sobre los temas de la P3. Da respuestas largas, matizadas y bien organizadas, con opiniones razonadas.");
