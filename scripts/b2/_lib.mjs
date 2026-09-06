/**
 * Ayudantes para construir el curso B2 First (formato diario, 4 destrezas).
 * Formato de examen PROPIO de B2 First / FCE (cambridgeenglish.org):
 *   Reading & Use of English (75 min, 7 partes):
 *     P1 multiple-choice cloze (8 huecos, 4 opciones) — léxico/colocaciones ·
 *     P2 open cloze (8 huecos, una palabra) — gramática ·
 *     P3 word formation (8 huecos, forma una palabra a partir de una raíz) ·
 *     P4 key word transformations (6 frases, transformar con una palabra dada, 2–5 palabras) ·
 *     P5 lectura larga (6 MC) · P6 gapped text (6 frases quitadas) ·
 *     P7 multiple matching (10 preguntas ↔ secciones/textos).
 *   Writing (80 min, 2 partes): P1 essay (obligatorio, 140–190) · P2 elegir
 *     (article / email-letter / report / review, 140–190).
 *   Listening (40 min, 4 partes): P1 ocho extractos cortos (MC) · P2 sentence
 *     completion (10 huecos) · P3 multiple matching (5 hablantes) · P4 entrevista (7 MC).
 *   Speaking (14 min, 4 partes): P1 entrevista · P2 comparar dos fotos (~1 min) ·
 *     P3 tarea colaborativa · P4 discusión.
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

// P1 — Multiple-choice cloze: texto con 8 huecos; cada pregunta mc con 4 opciones (léxico).
export const useCloze = (title, text, questions) =>
  readingBlock(1, `Use of English · Parte 1 — ${title}`, text, "Lee el texto y elige la palabra correcta (A/B/C/D) para cada hueco. Es cuestión de vocabulario y colocaciones.", questions);

// P2 — Open cloze: texto con 8 huecos; escribe UNA palabra (gramática).
export const openCloze = (title, text, questions) =>
  readingBlock(2, `Use of English · Parte 2 — ${title}`, text, "Lee el texto y escribe UNA palabra en cada hueco. Es gramática (artículos, preposiciones, auxiliares…).", questions);

// P3 — Word formation: texto con 8 huecos; forma la palabra correcta a partir de la RAÍZ dada.
// items: { root, accepted, hint? } → prompt muestra la raíz.
export const wordFormation = (title, text, items) => {
  const questions = items.map((it, i) => fb(`Hueco ${i + 1} — forma una palabra a partir de: ${it.root.toUpperCase()}`, it.accepted, it.hint ?? `Deriva de ${it.root}.`));
  return readingBlock(3, `Use of English · Parte 3 — ${title}`, text, "Lee el texto y forma, en cada hueco, la palabra correcta a partir de la RAÍZ que aparece (añade prefijos/sufijos, cambia la categoría…).", questions);
};

// P4 — Key word transformations: reescribe la 2ª frase con la PALABRA CLAVE (2–5 palabras).
// items: { s1, key, s2, accepted } donde s2 lleva "____" en el hueco.
export const keyword = (title, items) => {
  const questions = items.map((it) =>
    fb(`${it.s1}\nPALABRA CLAVE: ${it.key.toUpperCase()}\n${it.s2}`, it.accepted, it.explanation ?? `Usa "${it.key}" sin cambiarla; 2–5 palabras.`)
  );
  return readingBlock(4, `Use of English · Parte 4 — ${title}`, null, "Completa la segunda frase para que signifique lo mismo que la primera, usando la PALABRA CLAVE. No cambies esa palabra. Escribe entre DOS y CINCO palabras (la palabra clave cuenta).", questions);
};

// P5 — Lectura larga con 6 preguntas de opción múltiple (detalle, inferencia, actitud, referencia).
export const readingMC = (title, text, questions) =>
  readingBlock(5, `Reading · Parte 5 — ${title}`, text, "Lee el texto largo y elige la respuesta correcta (A/B/C/D). Incluye detalle, inferencia, actitud del autor y referencia.", questions);

// P6 — Gapped text: 6 frases quitadas del texto; 7 opciones (una sobra). `text` con huecos (1)…(6).
export const gappedText = (title, text, options, questions) => {
  const optionsBlock = "\n\nFRASES (sobra una):\n" + options.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("\n");
  return readingBlock(6, `Reading · Parte 6 — ${title}`, text + optionsBlock, "Lee el texto, del que se han quitado seis frases. Elige la frase (A–G) que encaja en cada hueco. Sobra una frase.", questions);
};

// P7 — Multiple matching: varios textos/secciones (A–D…) + preguntas que se emparejan.
export const multipleMatching = (title, text, questions) =>
  readingBlock(7, `Reading · Parte 7 — ${title}`, text, "Lee los textos/secciones. Para cada pregunta, elige el texto (A/B/C/D) que corresponde. Los textos pueden elegirse más de una vez.", questions);

export const writing = (part, title, instructions, minWords = 140, maxWords = 190) => ({
  exercise: { category: "writing", kind: `writing${part}`, part, title, instructions, config: { minWords, maxWords }, questions: [] },
});

export const listening = (part, title, instructions, audioScript, questions) => ({
  exercise: { category: "listening", kind: `listening${part}`, part, title, instructions, audioScript, questions },
});

export const speaking = (part, title, instructions, scenario, objective, keywords) => ({
  exercise: { category: "speaking", kind: `speaking${part}`, part, title, instructions, config: { language: "en", level: "B2", scenario, objective, keywords }, questions: [] },
});

export const READING_HEAD = HEAD("📖 READING & USE OF ENGLISH — como en el examen (Partes 1–7)", "Dura 75 min y tiene 7 partes: P1 multiple-choice cloze (léxico) · P2 open cloze (gramática, una palabra) · P3 word formation (forma la palabra) · P4 key word transformations (reescribe con una palabra clave, 2–5 palabras) · P5 lectura larga (MC) · P6 gapped text (6 frases quitadas) · P7 multiple matching. Es la prueba más larga: gestiona el tiempo.");
export const WRITING_HEAD = HEAD("✍️ WRITING — como en el examen (Partes 1–2)", "Dura 80 min. Parte 1: un ESSAY obligatorio (140–190 palabras) que discute dos aspectos de un tema y añade uno propio, con opinión. Parte 2: eliges UNA tarea (artículo, carta/email, informe o reseña, 140–190). Se guardan y el profesor los revisa; usa párrafos, conectores y un registro adecuado.");
export const LISTENING_HEAD = HEAD("🎧 LISTENING — como en el examen (Partes 1–4)", "Dura ~40 min y cada audio se oye DOS veces (aquí puedes repetirlo). Cuatro partes: P1 ocho extractos cortos (MC, 3 opciones) · P2 sentence completion (rellenar 10 huecos de un monólogo) · P3 multiple matching (5 hablantes → opciones) · P4 una entrevista larga (7 MC). Hoy practicas una parte; a lo largo de la semana, las cuatro.");
export const SPEAKING_HEAD = HEAD("🗣️ SPEAKING — como en el examen (Partes 1–4)", "Dura 14 min con otro candidato y dos examinadores. P1 entrevista personal · P2 turno largo: comparar DOS fotos (~1 min) y responder a una pregunta · P3 tarea colaborativa: hablar sobre unas opciones y decidir juntos · P4 discusión sobre el tema de la P3. Da respuestas largas, con razones y ejemplos.");
