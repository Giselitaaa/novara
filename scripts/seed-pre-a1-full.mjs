/**
 * Pre-A1 Starters (Cambridge English Qualifications: Young Learners) — curso
 * completo (12 semanas) con el estándar diario, ADAPTADO para niños de ~6-8
 * años: cada día practica las 4 destrezas con el formato REAL de Starters
 * (Listening 4 partes, Reading & Writing 4 partes, Speaking breve).
 * SIN aprobado/suspenso (passingScore muy bajo) y exento del bloqueo diario
 * (el slug "pre-a1-starters" está en la lista de excepción de pacing).
 * Se siembra en el slug oficial "pre-a1-starters" (reemplaza el curso viejo).
 *   node scripts/seed-pre-a1-full.mjs
 */
import { buildCourse } from "./lib/build-course.mjs";
import { WEEKS } from "./pre-a1/index.mjs";

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
  slug: "pre-a1-starters",
  levelKey: "principiante",
  title: "Pre-A1 Starters (Cambridge English Qualifications: Young Learners)",
  subtitle: "Programa diario de 12 semanas para niños y niñas que empiezan con el inglés. Cada día, las 4 destrezas con el formato real de Starters.",
  description: "Curso completo de preparación para Cambridge English Qualifications: Starters (Pre-A1), el primer examen de Young Learners, pensado para niños y niñas de unos 6-8 años. Cada día es una clase divertida: vocabulario nuevo con flashcards, una estructura sencilla, y práctica de las CUATRO destrezas (Listening, Reading & Writing, Speaking) con el formato real del examen. Sin aprobado ni suspenso — se cuenta el número de aciertos. Progresión diaria libre (sin bloqueo), pruebas semanales y prueba final.",
  seoTitle: "Preparación Starters (Pre-A1 YLE) — Programa diario para niños — NOVARA",
  seoDescription: "Prepara el Cambridge Starters (Pre-A1) con clases diarias divertidas: vocabulario, estructuras sencillas y las 4 destrezas en formato real.",
  objectives: [
    "Aprender vocabulario básico en inglés con flashcards ilustradas.",
    "Practicar las 4 destrezas cada día con el formato real de Starters.",
    "Ganar confianza hablando y escribiendo frases sencillas en inglés.",
    "Prepararse para el examen Starters sin presión de aprobado/suspenso.",
  ],
  guideTitle: "Cómo es el examen Starters y cómo funciona este programa",
  guideDescription: "Las 3 pruebas de Starters y el método diario, explicado para familias.",
  guideBlocks: [
    { type: "TEXT", content: "¡Bienvenidos a Starters! Es el primer examen de Cambridge para niños y niñas que empiezan con el inglés. NO hay aprobado ni suspenso — se cuentan los aciertos, ¡como estrellas! Cada día es una clase corta y divertida (~20-30 min): vocabulario nuevo, una estructura sencilla, y práctica de las 4 destrezas." },
    { type: "GRAMMAR", title: "El examen Starters (Pre-A1) — estructura oficial", content: "Fuente: Cambridge English. Tres pruebas, SIN nota numérica (se cuentan aciertos):\n\nLISTENING (~20 min · 4 partes · 20 preguntas):\n· P1 escuchar y unir nombres con dibujos · P2 escuchar y colorear · P3 escuchar y marcar el dibujo correcto (3 opciones) · P4 escuchar y escribir la palabra/número que falta.\n\nREADING & WRITING (~25 min · 4 partes):\n· P1 mirar y leer (Sí/No) · P2 mirar el dibujo y responder con 1-3 palabras · P3 elegir la palabra correcta (3 opciones) · P4 completar las letras que faltan de una palabra.\n\nSPEAKING (~3-5 min, con un examinador amable):\n· Encontrar diferencias entre dos dibujos · responder preguntas sobre un dibujo · preguntas personales (nombre, edad, colores, familia)." },
    { type: "NOTES", title: "Sin bloqueo diario", content: "A diferencia de los cursos para adultos, aquí NO hay que esperar un día para avanzar — cada niño/a avanza a su propio ritmo, con un adulto si lo necesita.", data: { variant: "info" } },
    { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Practicamos el formato real del examen; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
  ],
  weeks: WEEKS,
  audioPrefix: "pa1",
  deckPrefix: "PreA1",
  finalMinutes: 40,
  passingScore: 1,
  examNote: "Reúne las partes auto-corregibles (Listening y Reading & Writing) de esta semana. No hay aprobado ni suspenso — ¡cuenta tus aciertos como estrellas! 🌟",
  finalExamNote: "Prueba final con las partes auto-corregibles de todo el curso. No hay aprobado ni suspenso — ¡cuenta tus aciertos como estrellas! 🌟",
}));
