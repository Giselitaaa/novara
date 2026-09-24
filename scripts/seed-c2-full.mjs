/**
 * C2 Proficiency (CPE) — curso completo (12 semanas) con el estándar diario: cada día
 * practica las 4 destrezas con el formato REAL del C2. Reutiliza el constructor
 * y el helper de audio compartidos. Se siembra en el slug 'c2-nuevo' (piloto);
 * al completarse se cambia por 'c2-proficiency'.
 *   node scripts/seed-c2-full.mjs
 */
import { buildCourse } from "./lib/build-course.mjs";
import { WEEKS } from "./c2/index.mjs";

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
  slug: "c2-nuevo",
  levelKey: "experto",
  title: "C2 Proficiency (Cambridge English: Proficiency / CPE)",
  subtitle: "Programa diario de 12 semanas para el C2 Proficiency. Cada día, las 4 destrezas con el formato real del examen.",
  description: "Curso completo de preparación para Cambridge English: Proficiency (C2 Proficiency / CPE), el nivel más alto de Cambridge English. Cada día es una clase de academia: gramática de profesor, vocabulario con flashcards y práctica de las CUATRO destrezas (Reading & Use of English con sus 7 partes, Writing con integración de textos fuente, Listening y Speaking) con el formato real del examen. Progresión diaria bloqueada, mini-simulacros semanales y simulacro final que estima tu nota en la Cambridge English Scale (aprobado C2 ≈ 200).",
  seoTitle: "Preparación C2 Proficiency (CPE) — Programa diario — NOVARA",
  seoDescription: "Prepara el Cambridge C2 Proficiency con clases diarias: Use of English (7 partes), vocabulario y las 4 destrezas en formato real.",
  objectives: [
    "Practicar las 4 destrezas cada día con el formato real del C2 Proficiency.",
    "Dominar el Use of English de C2 (7 partes, incl. key word transformations de 3-8 palabras y gapped text de 7 párrafos).",
    "Ampliar el vocabulario de nivel maestría con flashcards, colocaciones e idioms muy avanzados.",
    "Medir tu preparación con simulacros y la Cambridge English Scale.",
  ],
  guideTitle: "Cómo es el examen C2 Proficiency y cómo funciona este programa",
  guideDescription: "Las 4 pruebas, la Cambridge Scale y el método diario.",
  guideBlocks: [
    { type: "TEXT", content: "Bienvenido/a al nivel más alto de Cambridge English. Cada día es una clase completa (≈1 h y media): gramática y vocabulario nuevos, y práctica de las CUATRO destrezas del examen con el mismo formato que Cambridge. No se puede saltar: cada día se desbloquea al terminar el anterior." },
    { type: "GRAMMAR", title: "El examen C2 Proficiency (CPE) — estructura oficial", content: "Fuente: Cambridge English. Cuatro pruebas:\n\nREADING & USE OF ENGLISH (90 min · 7 partes · 53 preguntas):\n· P1 multiple-choice cloze (léxico muy avanzado) · P2 open cloze (gramática, una palabra) · P3 word formation · P4 key word transformations (3–8 palabras, hasta 2 puntos) · P5 lectura larga (MC, 4 opciones) · P6 gapped text (7 PÁRRAFOS quitados) · P7 multiple matching (10).\n\nWRITING (90 min · 2 partes):\n· P1 un ESSAY obligatorio (240–280 palabras) que integra y evalúa DOS textos fuente dados · P2 elegir UNA de TRES tareas (article/letter/report/review, 280–320 palabras).\n\nLISTENING (~40 min · 4 partes · 30 preguntas) — cada audio se oye DOS veces:\n· P1 tres grabaciones cortas independientes (2 MC c/u, 6) · P2 sentence completion (9 huecos, un monólogo largo) · P3 conversación con hablantes interactuando (5 MC) · P4 multiple matching (5 monólogos, dos tareas de 5 de 8, 10).\n\nSPEAKING (16 min en pareja / 24 min en trío · 3 partes) — con dos examinadores:\n· P1 entrevista (2 min) · P2 tarea colaborativa con imagen(es) (4 min) · P3 turno largo (2 min) + discusión conjunta (~6 min)." },
    { type: "NOTES", title: "Cómo se practica cada día", content: "Reading & Use of English (sus 7 partes), Writing y Speaking: cada día. Listening: una parte al día (las 4 a lo largo de la semana); en los simulacros, el Listening completo.", data: { variant: "info" } },
    { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
  ],
  weeks: WEEKS,
  audioPrefix: "c2p",
  deckPrefix: "C2",
  finalMinutes: 120,
}));
