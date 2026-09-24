/**
 * C1 Advanced (CAE) — curso completo (12 semanas) con el estándar diario: cada día
 * practica las 4 destrezas con el formato REAL del C1. Reutiliza el constructor
 * y el helper de audio compartidos. Se siembra en el slug 'c1-nuevo' (piloto);
 * al completarse se cambia por 'c1-advanced'.
 *   node scripts/seed-c1-full.mjs
 */
import { buildCourse } from "./lib/build-course.mjs";
import { WEEKS } from "./c1/index.mjs";

// Reintenta el seed completo si Neon corta a mitad (buildCourse es idempotente).
async function run(fn, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      return await fn();
    } catch (e) {
      const transient = /reach database|Can't reach|ECONNRESET|Closed|timeout|terminating|Connection|pool/i.test((e && e.message) || "");
      if (!transient || i === tries - 1) throw e;
      console.warn(`⏳ Seed cortado por la BD (intento ${i + 1}/${tries}); reintento en 10s…`);
      await new Promise((r) => setTimeout(r, 10000));
    }
  }
}

await run(() => buildCourse({
  slug: "c1-nuevo",
  levelKey: "avanzado",
  title: "C1 Advanced (Cambridge English: Advanced / CAE)",
  subtitle: "Programa diario de 12 semanas para el C1 Advanced. Cada día, las 4 destrezas con el formato real del examen.",
  description: "Curso completo de preparación para Cambridge English: Advanced (C1 Advanced / CAE), nivel avanzado. Cada día es una clase de academia: gramática de profesor, vocabulario con flashcards y práctica de las CUATRO destrezas (Reading & Use of English con sus 8 partes, Writing, Listening y Speaking) con el formato real del examen. Progresión diaria bloqueada, mini-simulacros semanales y simulacro final que estima tu nota en la Cambridge English Scale (aprobado C1 ≈ 180).",
  seoTitle: "Preparación C1 Advanced (CAE) — Programa diario — NOVARA",
  seoDescription: "Prepara el Cambridge C1 Advanced con clases diarias: Use of English (8 partes), vocabulario y las 4 destrezas en formato real.",
  objectives: [
    "Practicar las 4 destrezas cada día con el formato real del C1 Advanced.",
    "Dominar el Use of English de C1 (8 partes, incl. cross-text matching y gapped text de párrafos).",
    "Ampliar el vocabulario de nivel avanzado con flashcards, colocaciones e idioms.",
    "Medir tu preparación con simulacros y la Cambridge English Scale.",
  ],
  guideTitle: "Cómo es el examen C1 Advanced y cómo funciona este programa",
  guideDescription: "Las 4 pruebas, la Cambridge Scale y el método diario.",
  guideBlocks: [
    { type: "TEXT", content: "Bienvenido/a. Cada día es una clase completa (≈1 h y media): gramática y vocabulario nuevos, y práctica de las CUATRO destrezas del examen con el mismo formato que Cambridge. No se puede saltar: cada día se desbloquea al terminar el anterior." },
    { type: "GRAMMAR", title: "El examen C1 Advanced (CAE) — estructura oficial", content: "Fuente: Cambridge English. Cuatro pruebas:\n\nREADING & USE OF ENGLISH (90 min · 8 partes · 56 preguntas):\n· P1 multiple-choice cloze (léxico) · P2 open cloze (gramática, una palabra) · P3 word formation · P4 key word transformations (3–6 palabras, hasta 2 puntos) · P5 lectura larga (MC) · P6 CROSS-TEXT multiple matching (4 textos, comparar opiniones) · P7 gapped text (6 PÁRRAFOS quitados) · P8 multiple matching (10).\n\nWRITING (90 min · 2 partes · 220–260 palabras):\n· P1 un ESSAY obligatorio · P2 elegir entre carta/email, propuesta, informe o reseña.\n\nLISTENING (~40 min · 4 partes · 30 preguntas) — cada audio se oye DOS veces:\n· P1 tres extractos (6 MC) · P2 sentence completion (8) · P3 conversación larga (6 MC) · P4 multiple matching (5 monólogos → 8 opciones, 10).\n\nSPEAKING (15 min · 4 partes) — con otro candidato y dos examinadores:\n· P1 entrevista · P2 comparar DOS de TRES fotos (~1 min) · P3 tarea colaborativa (decidir juntos) · P4 discusión." },
    { type: "NOTES", title: "Cómo se practica cada día", content: "Reading & Use of English (sus 8 partes), Writing y Speaking: cada día. Listening: una parte al día (las 4 a lo largo de la semana); en los simulacros, el Listening completo.", data: { variant: "info" } },
    { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
  ],
  weeks: WEEKS,
  audioPrefix: "c1a",
  deckPrefix: "C1",
  finalMinutes: 120,
}));
