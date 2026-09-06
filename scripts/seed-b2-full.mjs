/**
 * B2 First (FCE) — curso completo (12 semanas) con el estándar diario: cada día
 * practica las 4 destrezas con el formato REAL del B2. Reutiliza el constructor
 * y el helper de audio compartidos. Se siembra en el slug 'b2-nuevo' (piloto);
 * al completarse se cambia por 'b2-first'.
 *   node scripts/seed-b2-full.mjs
 */
import { buildCourse } from "./lib/build-course.mjs";
import { WEEKS } from "./b2/index.mjs";

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
  slug: "b2-nuevo",
  levelKey: "intermedio",
  title: "B2 First (Cambridge English: First / FCE)",
  subtitle: "Programa diario de 12 semanas para el B2 First. Cada día, las 4 destrezas con el formato real del examen.",
  description: "Curso completo de preparación para Cambridge English: First (B2 First / FCE), nivel intermedio-alto. Cada día es una clase de academia: gramática de profesor, vocabulario con flashcards y práctica de las CUATRO destrezas (Reading & Use of English, Writing, Listening y Speaking) con el formato real del examen. Progresión diaria bloqueada, mini-simulacros semanales y simulacro final que estima tu nota en la Cambridge English Scale (aprobado B2 ≈ 160).",
  seoTitle: "Preparación B2 First (FCE) — Programa diario — NOVARA",
  seoDescription: "Prepara el Cambridge B2 First con clases diarias: Use of English, vocabulario y las 4 destrezas en formato real.",
  objectives: [
    "Practicar las 4 destrezas cada día con el formato real del B2 First.",
    "Dominar el Use of English de B2 (transformaciones, word formation, cloze) de forma progresiva.",
    "Ampliar el vocabulario de nivel intermedio-alto con flashcards y colocaciones.",
    "Medir tu preparación con simulacros y la Cambridge English Scale.",
  ],
  guideTitle: "Cómo es el examen B2 First y cómo funciona este programa",
  guideDescription: "Las 4 pruebas, la Cambridge Scale y el método diario.",
  guideBlocks: [
    { type: "TEXT", content: "Bienvenido/a. Cada día es una clase completa (≈1 h y media): gramática y vocabulario nuevos, y práctica de las CUATRO destrezas del examen con el mismo formato que Cambridge. No se puede saltar: cada día se desbloquea al terminar el anterior." },
    { type: "GRAMMAR", title: "El examen B2 First (FCE) — estructura oficial", content: "Fuente: Cambridge English. Cuatro pruebas:\n\nREADING & USE OF ENGLISH (75 min · 7 partes):\n· P1 multiple-choice cloze (léxico) · P2 open cloze (gramática, una palabra) · P3 word formation · P4 key word transformations (reescribir con una palabra clave, 2–5 palabras) · P5 lectura larga (MC) · P6 gapped text (6 frases quitadas) · P7 multiple matching.\n\nWRITING (80 min · 2 partes):\n· P1 un ESSAY obligatorio (140–190 palabras) · P2 elegir entre artículo, carta/email, informe o reseña (140–190).\n\nLISTENING (~40 min · 4 partes) — cada audio se oye DOS veces:\n· P1 ocho extractos cortos (MC) · P2 sentence completion · P3 multiple matching (5 hablantes) · P4 una entrevista (MC).\n\nSPEAKING (14 min · 4 partes) — con otro candidato y dos examinadores:\n· P1 entrevista · P2 comparar dos fotos (~1 min) · P3 tarea colaborativa (decidir juntos) · P4 discusión." },
    { type: "NOTES", title: "Cómo se practica cada día", content: "Reading & Use of English (sus 7 partes), Writing y Speaking: cada día. Listening: una parte al día (las 4 a lo largo de la semana); en los simulacros, el Listening completo.", data: { variant: "info" } },
    { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
  ],
  weeks: WEEKS,
  audioPrefix: "b2f",
  deckPrefix: "B2",
  finalMinutes: 100,
}));
