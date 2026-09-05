/**
 * B1 Preliminary (PET) — curso completo (12 semanas) con el estándar diario:
 * cada día practica las 4 destrezas con el formato REAL del B1. Reutiliza el
 * constructor y el helper de audio compartidos. Se siembra en el slug 'b1-nuevo'
 * (piloto); al completarse se cambiará por 'b1-preliminary'.
 *   node scripts/seed-b1-full.mjs
 */
import { buildCourse } from "./lib/build-course.mjs";
import { WEEKS } from "./b1/index.mjs";

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
  slug: "b1-nuevo",
  levelKey: "intermedio",
  title: "B1 Preliminary (Cambridge English: Preliminary / PET)",
  subtitle: "Programa diario de 12 semanas para el B1 Preliminary. Cada día, las 4 destrezas con el formato real del examen.",
  description: "Curso completo de preparación para Cambridge English: Preliminary (B1 Preliminary / PET), nivel intermedio. Cada día es una clase de academia: gramática de profesor, vocabulario con flashcards y práctica de las CUATRO destrezas (Reading, Writing, Listening y Speaking) con el formato real del examen. Progresión diaria bloqueada, mini-simulacros semanales y simulacro final que estima tu nota en la Cambridge English Scale (aprobado B1 ≈ 140).",
  seoTitle: "Preparación B1 Preliminary (PET) — Programa diario — NOVARA",
  seoDescription: "Prepara el Cambridge B1 Preliminary con clases diarias: gramática, vocabulario y las 4 destrezas en formato real.",
  objectives: [
    "Practicar las 4 destrezas cada día con el formato real del B1 Preliminary.",
    "Dominar la gramática de B1 de forma progresiva (tiempos, condicionales, pasiva, estilo indirecto…).",
    "Ampliar el vocabulario de nivel intermedio con flashcards.",
    "Medir tu preparación con simulacros y la Cambridge English Scale.",
  ],
  guideTitle: "Cómo es el examen B1 Preliminary y cómo funciona este programa",
  guideDescription: "Las 4 pruebas, la Cambridge Scale y el método diario.",
  guideBlocks: [
    { type: "TEXT", content: "Bienvenido/a. Cada día es una clase completa (≈1 h y media): gramática y vocabulario nuevos, y práctica de las CUATRO destrezas del examen con el mismo formato que Cambridge. No se puede saltar: cada día se desbloquea al terminar el anterior." },
    { type: "GRAMMAR", title: "El examen B1 Preliminary (PET) — estructura oficial", content: "Fuente: Cambridge English. Cuatro pruebas:\n\nREADING (45 min · 6 partes · 32 preguntas):\n· P1 cinco textos cortos (MC) · P2 emparejar 5 personas con 8 textos · P3 texto largo (MC) · P4 GAPPED TEXT (elige la frase que falta) · P5 huecos con opciones (vocabulario) · P6 open cloze (una palabra).\n\nWRITING (45 min · 2 partes):\n· P1 responder a un email (~100 palabras) · P2 un artículo O un relato (~100 palabras, eliges).\n\nLISTENING (~30 min · 4 partes · 25 preguntas) — cada audio se oye DOS veces:\n· P1 siete audios cortos → imagen · P2 seis diálogos (idea general) · P3 rellenar huecos · P4 una entrevista (detalle).\n\nSPEAKING (10–12 min · 4 partes) — con otro candidato y dos examinadores:\n· P1 entrevista · P2 describir una foto (~1 min) · P3 conversación para decidir juntos · P4 conversación general." },
    { type: "NOTES", title: "Cómo se practica cada día", content: "Reading, Writing y Speaking: sus partes cada día. Listening: una parte al día (las 4 a lo largo de la semana); en los simulacros, el Listening completo.", data: { variant: "info" } },
    { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
  ],
  weeks: WEEKS,
  audioPrefix: "b1f",
  deckPrefix: "B1",
  finalMinutes: 90,
}));
