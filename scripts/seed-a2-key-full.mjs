/**
 * A2 Key — CURSO COMPLETO (12 semanas × 5 días) con el nuevo estándar diario:
 * cada día practica las 4 destrezas con el formato real de Cambridge.
 *
 * Modular: el contenido de cada semana vive en scripts/a2-key/week-XX.mjs y
 * aquí solo está el MOTOR que lo construye. Así se puede añadir una semana sin
 * tocar el resto. Idempotente sobre el slug de abajo.
 *
 *   node scripts/seed-a2-key-full.mjs
 *
 * Nota: mientras se completa, se construye en 'a2-key-piloto' (revisión). Al
 * terminar las 12 semanas se cambiará el slug a 'a2-key' (curso real).
 */
import { PrismaClient } from "@prisma/client";

import { WEEKS } from "./a2-key/index.mjs";
import { generateListeningAudio } from "./lib/tts.mjs";

const db = new PrismaClient();
const SLUG = "a2-key";

async function main() {
  const [author, category, level, language, status, access, contentTexto] = await Promise.all([
    db.author.findFirst({ where: { isPlatformAuthor: true } }),
    db.category.findFirst({ where: { slug: "idiomas" } }),
    db.courseLevel.findUnique({ where: { key: "principiante" } }),
    db.language.findFirst({ where: { code: "es" } }),
    db.courseStatus.findUnique({ where: { key: "publicado" } }),
    db.accessType.findUnique({ where: { key: "gratis" } }),
    db.contentType.findUnique({ where: { key: "texto" } }),
  ]);
  const missing = Object.entries({ author, category, level, language, status, access, contentTexto }).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) throw new Error("Faltan catálogos: " + missing.join(", "));
  const adminUser = (await db.user.findFirst({ where: { roles: { some: { role: { name: "administrador" } } } }, select: { id: true } })) ?? (await db.user.findFirst({ select: { id: true } }));
  if (!adminUser) throw new Error("No hay usuario para el mazo.");

  const existing = await db.course.findUnique({ where: { slug: SLUG }, select: { id: true } });
  if (existing) {
    // Limpia mazos que quedarían huérfanos (no borra por cascade porque cuelgan del autor).
    const decks = await db.flashcardDeck.findMany({ where: { lessonBlocks: { some: { lesson: { module: { courseId: existing.id } } } } }, select: { id: true } });
    await db.exam.deleteMany({ where: { courseId: existing.id } });
    await db.course.delete({ where: { id: existing.id } });
    if (decks.length) { await db.flashcard.deleteMany({ where: { deckId: { in: decks.map((d) => d.id) } } }); await db.flashcardDeck.deleteMany({ where: { id: { in: decks.map((d) => d.id) } } }); }
    console.warn(`♻️  Curso anterior eliminado (${decks.length} mazos).`);
  }

  const now = new Date();
  const totalWeeks = WEEKS.length;
  const course = await db.course.create({
    data: {
      slug: SLUG, title: "A2 Key (Cambridge English: Key / KET)", subtitle: `Programa diario de 12 semanas para el A2 Key. Cada día, las 4 destrezas con el formato real del examen.`,
      description: "Curso de preparación para Cambridge English: Key (A2 Key / KET). Cada día es una clase completa: gramática de profesor, vocabulario con flashcards y práctica de las CUATRO destrezas (Reading, Writing, Listening y Speaking) con el formato real del examen. Simulacros cada 2 semanas y simulacro final que estima tu nota (aprobado A2 = 120).",
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: "Preparación A2 Key (KET) — Programa diario completo — NOVARA", seoDescription: "Prepara el Cambridge A2 Key con clases diarias: gramática, vocabulario y las 4 destrezas en formato real.",
      objectives: { create: [
        "Practicar las 4 destrezas cada día con el formato real del examen.",
        "Dominar la gramática de A2 de forma progresiva, con los errores típicos del hispanohablante.",
        "Ampliar el vocabulario cotidiano con flashcards (traducción y pronunciación).",
        "Medir tu preparación con simulacros y la Cambridge English Scale.",
      ].map((text, i) => ({ sortOrder: i, text })) },
    },
  });
  console.warn(`✅ Curso creado: ${course.title}`);

  const createModule = (title, description, sortOrder) => db.module.create({ data: { courseId: course.id, title, description, sortOrder } });

  // ── Guía ──
  const m0 = await createModule("Guía del examen A2 Key", "Estructura oficial y cómo funciona el programa diario.", 0);
  const guide = await db.lesson.create({ data: { moduleId: m0.id, title: "Cómo es el examen y cómo funciona este programa", description: "Las 3 pruebas, la Cambridge Scale y el método diario.", sortOrder: 0, contentTypeId: contentTexto.id, isPreview: true } });
  {
    let o = 0;
    const gb = [
      { type: "TEXT", content: "Bienvenido/a. Cada día es una clase completa (≈1 h y media): gramática y vocabulario nuevos, y práctica de las CUATRO destrezas del examen con el mismo formato que Cambridge. No se puede saltar: cada día se desbloquea al terminar el anterior." },
      { type: "GRAMMAR", title: "El examen A2 Key (KET) — estructura oficial", content: "Fuente: Cambridge English. Tres pruebas:\n\nREADING & WRITING (1 h · 7 partes · 32 preguntas · 50%)\n· P1 seis textos cortos (MC) · P2 emparejar 7↔3 textos · P3 texto largo (5 MC) · P4 huecos con opciones (6) · P5 open cloze una palabra (6) · P6 email/nota 25+ · P7 relato 35+ con 3 imágenes.\n\nLISTENING (30 min · 5 partes · 25 preguntas · 25%) — cada audio se oye DOS veces:\n· P1 cinco conversaciones · P2 completar notas · P3 conversación (MC) · P4 cinco monólogos · P5 emparejar.\n\nSPEAKING (8–10 min · 2 partes · 25%) — con otro candidato y dos examinadores:\n· P1 preguntas personales · P2 gustos y razones." },
      { type: "NOTES", title: "Cómo se practica cada día", content: "Reading, Writing y Speaking: TODAS sus partes cada día. Listening: una parte al día, de modo que cada semana practicas las 5; y en cada simulacro, el Listening completo.", data: { variant: "info" } },
      { type: "NOTES", title: "Preparado en NOVARA ≠ certificado por Cambridge", content: "Estimamos tu nivel con evaluaciones internas; el certificado oficial solo lo concede Cambridge English.", data: { variant: "warning" } },
    ];
    for (const b of gb) await db.lessonBlock.create({ data: { lessonId: guide.id, type: b.type, order: o++, title: b.title ?? null, content: b.content ?? null, data: b.data ?? undefined } });
  }

  let moduleOrder = 1;
  let weekCollected = []; // auto-corregibles de la semana → mini-simulacro semanal
  const allCollected = []; // todos → simulacro FINAL acumulativo

  for (const week of WEEKS) {
    const m = await createModule(`Semana ${week.n} — ${week.theme}`, week.description ?? `Cinco días de clase con las 4 destrezas.`, moduleOrder++);
    let dayIndex = 0;
    for (const day of week.days) {
      const lesson = await db.lesson.create({ data: { moduleId: m.id, title: day.title, description: day.description ?? null, sortOrder: dayIndex, contentTypeId: contentTexto.id, isPreview: false } });
      let order = 0;
      for (const item of day.items) {
        if (item.deck) {
          const d = await db.flashcardDeck.create({ data: { title: item.deck.title, description: "Vocabulario del día", language: "en", authorId: adminUser.id, cards: { create: item.deck.cards.map(([term, translation, example, cat, ipa], i) => ({ sortOrder: i, term, translation, example, category: cat, ipa: ipa ?? null, level: "A2" })) } } });
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "FLASHCARDS", order: order++, deckId: d.id } });
        } else if (item.exercise) {
          const ex = item.exercise;
          let config = ex.config ?? undefined;
          if (ex.category === "listening" && ex.audioScript) {
            const audio = await generateListeningAudio(ex.audioScript, `a2f-w${week.n}-d${dayIndex}-p${ex.part ?? 0}`);
            if (audio) { config = { ...(config ?? {}), audioUrl: audio }; console.warn(`🔊 ${audio}`); }
            else console.warn("⚠️  Piper no disponible: Listening sin audio.");
          }
          const e = await db.exercise.create({ data: { lessonId: lesson.id, category: ex.category, title: ex.title, instructions: ex.instructions ?? null, sortOrder: 0, config, questions: { create: (ex.questions ?? []).map((q, i) => ({ order: i, kind: q.kind, data: q.data })) } } });
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "EXERCISE", order: order++, data: { exerciseId: e.id } } });
          // Reunir para el simulacro: reading auto-corregible y listening con preguntas.
          if ((ex.category === "reading" || (ex.category === "listening" && (ex.questions ?? []).length)) && ex.collect !== false) {
            const entry = { id: e.id, weight: ex.weight ?? (ex.questions ?? []).length ?? 1 };
            weekCollected.push(entry);
            allCollected.push(entry);
          }
        } else {
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: item.type, order: order++, title: item.title ?? null, content: item.content ?? null, data: item.data ?? undefined } });
        }
      }
      if (day.pedagogy) await db.lessonPedagogy.create({ data: { lessonId: lesson.id, ...day.pedagogy } });
      dayIndex++;
    }

    // Mini-simulacro al final de CADA semana (mide el progreso semanal).
    if (weekCollected.length) {
      const exam = await db.exam.create({ data: { courseId: course.id, title: `🎯 Mini-simulacro — Semana ${week.n} (A2 Key)`, passingScore: 60, timeLimitMinutes: 40, sections: { create: weekCollected.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } } });
      const mm = await createModule(`🎯 Mini-simulacro — Semana ${week.n}`, "Práctica cronometrada de la semana.", moduleOrder++);
      await db.lesson.create({ data: { moduleId: mm.id, title: exam.title, description: "Reúne, cronometradas, las prácticas auto-corregibles de la semana.", sortOrder: 0, contentTypeId: contentTexto.id, isPreview: false, blocks: { create: [
        { type: "NOTES", order: 0, title: "Cómo funciona", content: "Reúne las partes auto-corregibles (Reading y Listening) de esta semana, cronometradas. Aprueba con un 60%. Writing y Speaking se evalúan aparte. Si no llegas al 60%, repasa los días que te costaron.", data: { variant: "info" } },
        { type: "EXAM", order: 1, data: { examId: exam.id } },
      ] } } });
      weekCollected = [];
    }

    // Simulacro FINAL acumulativo en la última semana.
    if (week.n === 12 && allCollected.length) {
      const exam = await db.exam.create({ data: { courseId: course.id, title: "🎯 Simulacro FINAL (A2 Key)", passingScore: 60, timeLimitMinutes: 90, sections: { create: allCollected.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } } });
      const mm = await createModule("🎯 Simulacro final", "Simulacro completo que estima tu nota en la Cambridge Scale.", moduleOrder++);
      await db.lesson.create({ data: { moduleId: mm.id, title: exam.title, description: "Reúne, cronometradas, todas las prácticas auto-corregibles del curso.", sortOrder: 0, contentTypeId: contentTexto.id, isPreview: false, blocks: { create: [
        { type: "NOTES", order: 0, title: "Cómo funciona", content: "Simulacro completo con las partes auto-corregibles (Reading y Listening) de todo el curso, cronometrado. Aprueba con un 60% (≈120 en la Cambridge Scale). Writing y Speaking se evalúan aparte.", data: { variant: "info" } },
        { type: "EXAM", order: 1, data: { examId: exam.id } },
      ] } } });
    }
  }

  const counts = {
    semanas: totalWeeks,
    modulos: await db.module.count({ where: { courseId: course.id } }),
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    reading: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } }, category: "reading" } }),
    writing: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } }, category: "writing" } }),
    listening: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } }, category: "listening" } }),
    speaking: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } }, category: "speaking" } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    simulacros: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn("✅ A2 Key (completo) sembrado:", JSON.stringify(counts), " · /es/cursos/" + SLUG);
}
main().catch((e) => { console.error("❌ Error A2 full:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
