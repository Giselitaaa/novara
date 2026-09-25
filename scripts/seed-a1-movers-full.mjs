/**
 * A1 Movers (Cambridge English Qualifications: Young Learners) — curso
 * completo (12 semanas) con el estándar diario, ADAPTADO para niños de ~7-10
 * años: cada día practica las 4 destrezas con el formato REAL de Movers
 * (Listening 5 partes, Reading & Writing 6 partes, Speaking con historia de
 * 4 imágenes). SIN aprobado/suspenso (passingScore muy bajo) y exento del
 * bloqueo diario (el slug "a1-movers" está en la lista de excepción de
 * pacing). Se siembra en el slug oficial "a1-movers" (reemplaza el curso viejo).
 *   node scripts/seed-a1-movers-full.mjs
 */
import { buildCourse } from "./lib/build-course.mjs";
import { WEEKS } from "./movers/index.mjs";

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
  slug: "a1-movers",
  levelKey: "principiante",
  title: "A1 Movers (Cambridge English Qualifications: Young Learners)",
  subtitle: "Programa diario de 12 semanas para niños y niñas que ya dan sus primeros pasos en inglés. Cada día, las 4 destrezas con el formato real de Movers.",
  description: "Curso completo de preparación para Cambridge English Qualifications: Movers (A1), el segundo examen de Young Learners, pensado para niños y niñas de unos 7-10 años. Cada día es una clase divertida: vocabulario nuevo con flashcards, gramática sencilla, y práctica de las CUATRO destrezas (Listening, Reading & Writing, Speaking) con el formato real del examen. Sin aprobado ni suspenso — se cuenta el número de aciertos. Progresión diaria libre (sin bloqueo), pruebas semanales y prueba final.",
  seoTitle: "Preparación Movers (A1 YLE) — Programa diario para niños — NOVARA",
  seoDescription: "Prepara el Cambridge Movers (A1) con clases diarias divertidas: vocabulario, gramática sencilla y las 4 destrezas en formato real.",
  objectives: [
    "Ampliar el vocabulario en inglés con flashcards ilustradas.",
    "Practicar las 4 destrezas cada día con el formato real de Movers.",
    "Ganar confianza hablando y escribiendo frases más complejas en inglés.",
    "Prepararse para el examen Movers sin presión de aprobado/suspenso.",
  ],
  guideTitle: "Cómo es el examen Movers y cómo funciona este programa",
  guideDescription: "Las 3 pruebas de Movers y el método diario, explicado para familias.",
  guideBlocks: [
    { type: "TEXT", content: "¡Bienvenidos a Movers! Es el segundo examen de Cambridge para niños y niñas que ya han dado sus primeros pasos con el inglés. NO hay aprobado ni suspenso — se cuentan los aciertos, ¡como estrellas! Cada día es una clase corta y divertida (~25-35 min): vocabulario nuevo, gramática sencilla, y práctica de las 4 destrezas." },
    { type: "GRAMMAR", title: "El examen Movers (A1) — estructura oficial", content: "Fuente: Cambridge English. Tres pruebas, SIN nota numérica (se cuentan aciertos):\n\nLISTENING (~25 min · 5 partes · 25 preguntas):\n· P1 escuchar y unir nombres con personas · P2 escuchar y completar un formulario · P3 escuchar, colorear y escribir · P4 escuchar y marcar el dibujo correcto (3 opciones) · P5 escuchar una escena completa.\n\nREADING & WRITING (~30 min · 6 partes):\n· P1 definiciones → palabra · P2 leer una historia y escribir Sí/No · P3 elegir la palabra correcta (3 opciones) · P4 completar con una palabra · P5 completar con palabras de una caja · P6 mirar dibujos y escribir.\n\nSPEAKING (~5-7 min, con un examinador amable):\n· Encontrar diferencias entre dos dibujos · contar una historia a partir de 4 dibujos · preguntas personales." },
    { type: "NOTES", title: "Sin bloqueo diario", content: "A diferencia de los cursos para adultos, aquí NO hay que esperar un día para avanzar — cada niño/a avanza a su propio ritmo, con un adulto si lo necesita.", data: { variant: "info" } },
    { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Practicamos el formato real del examen; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
  ],
  weeks: WEEKS,
  audioPrefix: "mov",
  deckPrefix: "Movers",
  finalMinutes: 55,
  passingScore: 1,
  examNote: "Reúne las partes auto-corregibles (Listening y Reading & Writing) de esta semana. No hay aprobado ni suspenso — ¡cuenta tus aciertos como estrellas! 🌟",
  finalExamNote: "Prueba final con las partes auto-corregibles de todo el curso. No hay aprobado ni suspenso — ¡cuenta tus aciertos como estrellas! 🌟",
}));
