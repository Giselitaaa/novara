/**
 * Constructor de curso compartido por todos los niveles (formato diario, 4
 * destrezas/día). Cada seed de nivel llama a `buildCourse(...)` con su slug,
 * nivel, textos y sus semanas. Reutiliza el helper de audio MP3 (lib/tts.mjs).
 *
 * Un DÍA = una lección con `items` ordenados: bloques de contenido, un mazo de
 * flashcards (`deck`) o un ejercicio (`exercise`). Los listening con `audioScript`
 * generan su audio. Los reading/listening auto-corregibles se reúnen en un
 * mini-simulacro semanal y en el simulacro final.
 */
import { PrismaClient } from "@prisma/client";

import { generateListeningAudio } from "./tts.mjs";

const db = new PrismaClient();

export async function buildCourse({
  slug,
  levelKey,
  title,
  subtitle,
  description,
  seoTitle,
  seoDescription,
  objectives = [],
  guideTitle,
  guideDescription,
  guideBlocks = [],
  weeks,
  audioPrefix = "lvl",
  deckPrefix = "Curso",
  finalMinutes = 90,
}) {
  const [author, category, level, language, status, access, contentTexto] = await Promise.all([
    db.author.findFirst({ where: { isPlatformAuthor: true } }),
    db.category.findFirst({ where: { slug: "idiomas" } }),
    db.courseLevel.findUnique({ where: { key: levelKey } }),
    db.language.findFirst({ where: { code: "es" } }),
    db.courseStatus.findUnique({ where: { key: "publicado" } }),
    db.accessType.findUnique({ where: { key: "gratis" } }),
    db.contentType.findUnique({ where: { key: "texto" } }),
  ]);
  const missing = Object.entries({ author, category, level, language, status, access, contentTexto }).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) throw new Error("Faltan catálogos: " + missing.join(", "));
  const adminUser = (await db.user.findFirst({ where: { roles: { some: { role: { name: "administrador" } } } }, select: { id: true } })) ?? (await db.user.findFirst({ select: { id: true } }));
  if (!adminUser) throw new Error("No hay usuario para el mazo.");

  const existing = await db.course.findUnique({ where: { slug }, select: { id: true } });
  if (existing) {
    const decks = await db.flashcardDeck.findMany({ where: { lessonBlocks: { some: { lesson: { module: { courseId: existing.id } } } } }, select: { id: true } });
    await db.exam.deleteMany({ where: { courseId: existing.id } });
    await db.course.delete({ where: { id: existing.id } });
    if (decks.length) { await db.flashcard.deleteMany({ where: { deckId: { in: decks.map((d) => d.id) } } }); await db.flashcardDeck.deleteMany({ where: { id: { in: decks.map((d) => d.id) } } }); }
    console.warn(`♻️  Curso anterior '${slug}' eliminado (${decks.length} mazos).`);
  }

  const now = new Date();
  const course = await db.course.create({
    data: {
      slug, title, subtitle, description,
      authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id, statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
      seoTitle: seoTitle ?? title, seoDescription: seoDescription ?? subtitle,
      objectives: { create: objectives.map((text, i) => ({ sortOrder: i, text })) },
    },
  });
  console.warn(`✅ Curso creado: ${course.title}`);

  const createModule = (t, d, sortOrder) => db.module.create({ data: { courseId: course.id, title: t, description: d, sortOrder } });

  // Guía (siempre isPreview → disponible desde el día 0).
  const m0 = await createModule(guideTitle, guideDescription, 0);
  const guide = await db.lesson.create({ data: { moduleId: m0.id, title: guideTitle, description: guideDescription, sortOrder: 0, contentTypeId: contentTexto.id, isPreview: true } });
  { let o = 0; for (const b of guideBlocks) await db.lessonBlock.create({ data: { lessonId: guide.id, type: b.type, order: o++, title: b.title ?? null, content: b.content ?? null, data: b.data ?? undefined } }); }

  let moduleOrder = 1;
  let audioSeq = 0;
  let weekCollected = [];
  const allCollected = [];

  for (const week of weeks) {
    const m = await createModule(`Semana ${week.n} — ${week.theme}`, week.description ?? "Cinco días con las 4 destrezas.", moduleOrder++);
    let dayIndex = 0;
    for (const day of week.days) {
      const lesson = await db.lesson.create({ data: { moduleId: m.id, title: day.title, description: day.description ?? null, sortOrder: dayIndex, contentTypeId: contentTexto.id, isPreview: false } });
      let order = 0;
      for (const item of day.items) {
        if (item.deck) {
          const d = await db.flashcardDeck.create({ data: { title: item.deck.title, description: "Vocabulario del día", language: "en", authorId: adminUser.id, cards: { create: item.deck.cards.map(([term, translation, example, cat, ipa], i) => ({ sortOrder: i, term, translation, example, category: cat, ipa: ipa ?? null, level: levelKey })) } } });
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "FLASHCARDS", order: order++, deckId: d.id } });
        } else if (item.exercise) {
          const ex = item.exercise;
          let config = ex.config ?? undefined;
          if (ex.category === "listening" && ex.audioScript) {
            const audio = await generateListeningAudio(ex.audioScript, `${audioPrefix}-w${week.n}-d${dayIndex}-p${ex.part ?? audioSeq++}`);
            if (audio) { config = { ...(config ?? {}), audioUrl: audio }; console.warn(`🔊 ${audio}`); }
            else console.warn("⚠️  Piper/ffmpeg no disponible: Listening sin audio.");
          }
          const e = await db.exercise.create({ data: { lessonId: lesson.id, category: ex.category, title: ex.title, instructions: ex.instructions ?? null, sortOrder: 0, config, questions: { create: (ex.questions ?? []).map((q, i) => ({ order: i, kind: q.kind, data: q.data })) } } });
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "EXERCISE", order: order++, data: { exerciseId: e.id } } });
          if ((ex.category === "reading" || (ex.category === "listening" && (ex.questions ?? []).length)) && ex.collect !== false) {
            const entry = { id: e.id, weight: ex.weight ?? (ex.questions ?? []).length ?? 1 };
            weekCollected.push(entry); allCollected.push(entry);
          }
        } else {
          await db.lessonBlock.create({ data: { lessonId: lesson.id, type: item.type, order: order++, title: item.title ?? null, content: item.content ?? null, data: item.data ?? undefined } });
        }
      }
      if (day.pedagogy) await db.lessonPedagogy.create({ data: { lessonId: lesson.id, ...day.pedagogy } });
      dayIndex++;
    }

    // Mini-simulacro semanal.
    if (weekCollected.length) {
      const exam = await db.exam.create({ data: { courseId: course.id, title: `🎯 Mini-simulacro — Semana ${week.n}`, passingScore: 60, timeLimitMinutes: 45, sections: { create: weekCollected.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } } });
      const mm = await createModule(`🎯 Mini-simulacro — Semana ${week.n}`, "Práctica cronometrada de la semana.", moduleOrder++);
      await db.lesson.create({ data: { moduleId: mm.id, title: exam.title, description: "Reúne las prácticas auto-corregibles de la semana.", sortOrder: 0, contentTypeId: contentTexto.id, isPreview: false, blocks: { create: [
        { type: "NOTES", order: 0, title: "Cómo funciona", content: "Reúne las partes auto-corregibles (Reading y Listening) de esta semana, cronometradas. Aprueba con un 60%. Writing y Speaking se evalúan aparte.", data: { variant: "info" } },
        { type: "EXAM", order: 1, data: { examId: exam.id } },
      ] } } });
      weekCollected = [];
    }

    // Simulacro FINAL en la última semana.
    if (week.n === weeks.length && allCollected.length && weeks.length >= 8) {
      const exam = await db.exam.create({ data: { courseId: course.id, title: "🎯 Simulacro FINAL", passingScore: 60, timeLimitMinutes: finalMinutes, sections: { create: allCollected.map((r, i) => ({ exerciseId: r.id, weight: r.weight, order: i })) } } });
      const mm = await createModule("🎯 Simulacro final", "Simulacro completo que estima tu nota.", moduleOrder++);
      await db.lesson.create({ data: { moduleId: mm.id, title: exam.title, description: "Reúne, cronometradas, todas las prácticas auto-corregibles del curso.", sortOrder: 0, contentTypeId: contentTexto.id, isPreview: false, blocks: { create: [
        { type: "NOTES", order: 0, title: "Cómo funciona", content: "Simulacro completo con las partes auto-corregibles (Reading y Listening) de todo el curso, cronometrado. Aprueba con un 60%. Writing y Speaking se evalúan aparte.", data: { variant: "info" } },
        { type: "EXAM", order: 1, data: { examId: exam.id } },
      ] } } });
    }
  }

  const counts = {
    semanas: weeks.length,
    lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
    ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
    preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    simulacros: await db.exam.count({ where: { courseId: course.id } }),
  };
  console.warn(`✅ ${slug} sembrado:`, JSON.stringify(counts), " · /es/cursos/" + slug);
  await db.$disconnect();
  return counts;
}
