/**
 * A2 Flyers (Cambridge English Qualifications: Young Learners) — curso
 * completo (12 semanas), el tercer y último nivel del ciclo YLE, para niños
 * de ~8-12 años: cada día practica las 4 destrezas con el formato REAL de
 * Flyers (Listening 5 partes, Reading & Writing 7 partes, Speaking con
 * comparación de dibujos). SIN aprobado/suspenso (passingScore muy bajo) y
 * exento del bloqueo diario (el slug "a2-flyers" está en la lista de
 * excepción de pacing). Se siembra en el slug oficial "a2-flyers".
 *   node scripts/seed-a2-flyers-full.mjs
 */
import { buildCourse } from "./lib/build-course.mjs";
import { WEEKS } from "./flyers/index.mjs";

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
  slug: "a2-flyers",
  levelKey: "principiante",
  title: "A2 Flyers (Cambridge English Qualifications: Young Learners)",
  subtitle: "Programa diario de 12 semanas para niños y niñas que completan el ciclo Young Learners. Cada día, las 4 destrezas con el formato real de Flyers.",
  description: "Curso completo de preparación para Cambridge English Qualifications: Flyers (A2), el tercer y último examen de Young Learners, pensado para niños y niñas de unos 8-12 años. Cada día es una clase completa: vocabulario nuevo con flashcards, gramática ampliada (going to/will, presente perfecto, must/mustn't, pasado continuo, condicional tipo 1), y práctica de las CUATRO destrezas (Listening, Reading & Writing con escritura guiada y libre, Speaking) con el formato real del examen. Sin aprobado ni suspenso — se cuenta el número de aciertos. Progresión diaria libre (sin bloqueo), pruebas semanales y prueba final.",
  seoTitle: "Preparación Flyers (A2 YLE) — Programa diario para niños — NOVARA",
  seoDescription: "Prepara el Cambridge Flyers (A2) con clases diarias completas: vocabulario, gramática ampliada y las 4 destrezas en formato real.",
  objectives: [
    "Ampliar el vocabulario en inglés con flashcards ilustradas.",
    "Practicar las 4 destrezas cada día con el formato real de Flyers.",
    "Dominar gramática ampliada: going to/will, presente perfecto, must/mustn't, pasado continuo, condicional tipo 1.",
    "Escribir textos guiados y libres (postales, historias cortas).",
    "Prepararse para el examen Flyers sin presión de aprobado/suspenso.",
  ],
  guideTitle: "Cómo es el examen Flyers y cómo funciona este programa",
  guideDescription: "Las 3 pruebas de Flyers y el método diario, explicado para familias.",
  guideBlocks: [
    { type: "TEXT", content: "¡Bienvenidos a Flyers! Es el tercer y último examen de Cambridge para niños y niñas dentro del ciclo Young Learners. NO hay aprobado ni suspenso — se cuentan los aciertos, ¡como estrellas! Cada día es una clase completa (~30-40 min): vocabulario nuevo, gramática ampliada, y práctica de las 4 destrezas." },
    { type: "GRAMMAR", title: "El examen Flyers (A2) — estructura oficial", content: "Fuente: Cambridge English. Tres pruebas, SIN nota numérica (se cuentan aciertos):\n\nLISTENING (~25 min · 5 partes · 25 preguntas):\n· P1 escuchar y unir nombres con personas · P2 escuchar y completar un formulario · P3 escuchar y marcar el dibujo correcto (3 opciones) · P4 escuchar y marcar Verdadero/Falso · P5 escuchar una escena, colorear y escribir.\n\nREADING & WRITING (~40 min · 7 partes):\n· P1 definiciones → palabra · P2 diálogo → respuesta correcta · P3 elegir la palabra correcta (3 opciones) · P4 leer y responder V/F · P5 completar con una palabra · P6 escritura guiada (20-30 palabras) · P7 historia o postal corta (25-35 palabras).\n\nSPEAKING (~7-9 min, con un examinador amable):\n· Comparar dos dibujos (diferencias y semejanzas) · hablar sobre un dibujo o tema · preguntas personales más elaboradas con opinión." },
    { type: "NOTES", title: "Sin bloqueo diario", content: "A diferencia de los cursos para adultos, aquí NO hay que esperar un día para avanzar — cada niño/a avanza a su propio ritmo, con un adulto si lo necesita.", data: { variant: "info" } },
    { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Practicamos el formato real del examen; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
  ],
  weeks: WEEKS,
  audioPrefix: "fly",
  deckPrefix: "Flyers",
  finalMinutes: 70,
  passingScore: 1,
  examNote: "Reúne las partes auto-corregibles (Listening y Reading & Writing) de esta semana. No hay aprobado ni suspenso — ¡cuenta tus aciertos como estrellas! 🌟",
  finalExamNote: "Prueba final con las partes auto-corregibles de todo el curso. No hay aprobado ni suspenso — ¡cuenta tus aciertos como estrellas! 🌟",
}));
