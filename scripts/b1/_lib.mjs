/**
 * Ayudantes para construir el curso B1 Preliminary (formato diario, 4 destrezas).
 * Formato de examen PROPIO de B1 (cambridgeenglish.org):
 *   Reading (6 partes): P1 textos cortos MC · P2 emparejar 5 personas↔8 textos ·
 *     P3 texto largo (MC) · P4 GAPPED TEXT (5 frases quitadas) · P5 MC cloze
 *     (vocabulario) · P6 open cloze (una palabra).
 *   Writing (2 partes): P1 email ~100 palabras · P2 artículo o relato ~100.
 *   Listening (4 partes): P1 7 monólogos/diálogos→imagen · P2 6 diálogos (gist) ·
 *     P3 rellenar huecos · P4 entrevista (detalle).
 *   Speaking (4 partes): P1 entrevista · P2 describir una foto · P3 discusión con
 *     negociación · P4 conversación general.
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

export const reading = (part, title, text, instructions, questions) => ({
  exercise: { category: "reading", collect: true, weight: questions.length, kind: `reading${part}`, part, title, instructions, config: text ? { text } : undefined, questions },
});

// Reading P1: cinco textos cortos (avisos/mensajes) en el recuadro + preguntas.
export const READING_P1 = (title, items) => {
  const text = "Lee estos cinco textos cortos:\n\n" + items.map((q, i) => `${i + 1}.  ${q.data.prompt}`).join("\n\n");
  const questions = items.map((q, i) => ({ ...q, data: { ...q.data, prompt: `Texto ${i + 1}: ¿qué significa?` } }));
  return reading(1, `Reading · Parte 1 — ${title}`, text, "Lee los cinco textos del recuadro y elige qué significa cada uno (A/B/C).", questions);
};

// Reading P4 (GAPPED TEXT): un texto con 5 huecos y 8 frases (A–H) para elegir.
// `text` debe contener los huecos marcados (1)…(5). `options` = 8 frases A–H.
export const gappedText = (title, text, options, questions) => {
  const optionsBlock = "\n\nFRASES (sobran tres):\n" + options.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("\n");
  return reading(4, `Reading · Parte 4 — ${title}`, text + optionsBlock, "Lee el texto y elige la frase (A–H) que va en cada hueco. Sobran tres frases.", questions);
};

export const writing = (part, title, instructions, minWords, maxWords) => ({
  exercise: { category: "writing", kind: `writing${part}`, part, title, instructions, config: { minWords, maxWords }, questions: [] },
});

export const listening = (part, title, instructions, audioScript, questions) => ({
  exercise: { category: "listening", kind: `listening${part}`, part, title, instructions, audioScript, questions },
});

export const speaking = (part, title, instructions, scenario, objective, keywords) => ({
  exercise: { category: "speaking", kind: `speaking${part}`, part, title, instructions, config: { language: "en", level: "B1", scenario, objective, keywords }, questions: [] },
});

export const READING_HEAD = HEAD("📖 READING — como en el examen (Partes 1–6)", "El Reading del B1 dura 45 min y tiene 6 partes: P1 cinco textos cortos (MC) · P2 emparejar 5 personas con textos · P3 texto largo (MC) · P4 GAPPED TEXT (elige la frase que falta) · P5 huecos con opciones (vocabulario) · P6 open cloze (una palabra). Primero lees, luego respondes.");
export const WRITING_HEAD = HEAD("✍️ WRITING — como en el examen (Partes 1–2)", "El Writing del B1 dura 45 min. Parte 1: responder a un email (~100 palabras). Parte 2: elegir entre un artículo o un relato (~100 palabras). Se guardan y el profesor los revisa; usa párrafos y conectores.");
export const LISTENING_HEAD = HEAD("🎧 LISTENING — como en el examen (Partes 1–4)", "El Listening del B1 dura ~30 min y cada audio se oye DOS veces (aquí puedes repetirlo). Cuatro partes: P1 siete audios cortos → imagen · P2 seis diálogos (idea general) · P3 rellenar huecos · P4 una entrevista (detalle). Hoy practicas una parte; a lo largo de la semana, las cuatro.");
export const SPEAKING_HEAD = HEAD("🗣️ SPEAKING — como en el examen (Partes 1–4)", "El Speaking del B1 dura 10–12 min con otro candidato y dos examinadores. P1 entrevista personal · P2 describir una FOTO (~1 min) · P3 conversación para decidir juntos (negociar) · P4 conversación general (gustos, experiencias). Responde con detalle y da razones.");
