/**
 * Seed de contenido REAL para los exámenes Young Learners (YLE) de Cambridge:
 *   • Pre A1 Starters   (slug: pre-a1-starters)
 *   • A1 Movers         (slug: a1-movers)
 *   • A2 Flyers         (slug: a2-flyers)
 *
 * Contenido original de NOVARA para niños. Los YLE NO tienen aprobado/suspenso:
 * se puntúan con "shields" (escudos, 1–5 por prueba); todos reciben certificado.
 * Incluye Listening con audio real del Piper local (si está arrancado).
 *
 * Idempotente. No toca otros cursos.   node scripts/seed-young-learners.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const PIPER_URL = (process.env.PIPER_URL || "http://localhost:5001").replace(/\/$/, "");
async function generateListeningAudio(text, filename) {
  try {
    const res = await fetch(PIPER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice: "en_GB-cori-high" }),
    });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (!buf.length) return null;
    const dir = path.join(process.cwd(), "public", "uploads", "listening");
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, `${filename}.wav`), buf);
    return `/uploads/listening/${filename}.wav`;
  } catch {
    return null;
  }
}

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
  const missing = Object.entries({ author, category, level, language, status, access, contentTexto })
    .filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) throw new Error("Faltan catálogos (corre el seed base): " + missing.join(", "));

  const adminUser =
    (await db.user.findFirst({ where: { roles: { some: { role: { name: "administrador" } } } }, select: { id: true } })) ??
    (await db.user.findFirst({ select: { id: true } }));
  if (!adminUser) throw new Error("No hay usuario para el mazo.");

  async function buildLesson(moduleId, { title, description, sortOrder, blocks = [], pedagogy, exercises = [] }) {
    const lesson = await db.lesson.create({
      data: { moduleId, title, description, sortOrder, contentTypeId: contentTexto.id, isPreview: sortOrder === 0 },
    });
    let order = 0;
    for (const b of blocks) {
      await db.lessonBlock.create({
        data: { lessonId: lesson.id, type: b.type, order: order++, title: b.title ?? null, content: b.content ?? null, deckId: b.deckId ?? null, data: b.data ?? undefined },
      });
    }
    if (pedagogy) await db.lessonPedagogy.create({ data: { lessonId: lesson.id, ...pedagogy } });
    for (const ex of exercises) {
      const created = await db.exercise.create({
        data: { lessonId: lesson.id, category: ex.category, title: ex.title, instructions: ex.instructions ?? null, sortOrder: 0, config: ex.config ?? undefined,
          questions: { create: ex.questions.map((q, i) => ({ order: i, kind: q.kind, data: q.data })) } },
      });
      await db.lessonBlock.create({ data: { lessonId: lesson.id, type: "EXERCISE", order: order++, data: { exerciseId: created.id } } });
    }
  }

  async function buildLevel(def) {
    const existing = await db.course.findUnique({ where: { slug: def.slug }, select: { id: true } });
    if (existing) {
      await db.exam.deleteMany({ where: { courseId: existing.id } });
      await db.course.delete({ where: { id: existing.id } });
    }

    const deck = await db.flashcardDeck.create({
      data: { title: `${def.title} — Vocabulario`, description: "Vocabulario básico para niños.", language: "en", authorId: adminUser.id, cards: { create: def.deck } },
    });

    const now = new Date();
    const course = await db.course.create({
      data: {
        slug: def.slug, title: def.title, subtitle: def.subtitle, description: def.description,
        authorId: author.id, categoryId: category.id, levelId: level.id, languageId: language.id,
        statusId: status.id, accessTypeId: access.id, price: 0, publishedAt: now, updatedContentAt: now,
        seoTitle: `Preparación ${def.title} — NOVARA`, seoDescription: `Prepara el ${def.title} de Cambridge con juegos, práctica y audio.`,
        objectives: { create: def.objectives.map((text, i) => ({ sortOrder: i, text })) },
      },
    });

    // Módulo 0 — Guía
    const m0 = await db.module.create({ data: { courseId: course.id, title: `Guía de ${def.title}`, description: "Cómo es y cómo se puntúa.", sortOrder: 0 } });
    await buildLesson(m0.id, {
      title: `Cómo es el ${def.title}`, description: "Estructura y shields.", sortOrder: 0,
      blocks: def.guideBlocks, pedagogy: def.guidePedagogy,
    });

    // Módulo 1 — Reading & Writing
    const m1 = await db.module.create({ data: { courseId: course.id, title: "Reading and Writing", description: "Leer y escribir con juegos.", sortOrder: 1 } });
    await buildLesson(m1.id, {
      title: def.rwTitle, description: def.rwDescription, sortOrder: 0,
      blocks: [...def.rwBlocks, { type: "FLASHCARDS", deckId: deck.id }],
      pedagogy: def.rwPedagogy, exercises: def.rwExercises,
    });

    // Módulo 2 — Listening y Speaking
    const m2 = await db.module.create({ data: { courseId: course.id, title: "Listening y Speaking", description: "Escuchar y hablar.", sortOrder: 2 } });
    const audio = await generateListeningAudio(def.listeningScript, def.listeningFile);
    console.warn(audio ? `🔊 ${def.slug}: audio generado ${audio}` : `⚠️  ${def.slug}: Piper no disponible, Listening pendiente.`);
    await buildLesson(m2.id, {
      title: def.listeningTitle, description: "Escucha y responde.", sortOrder: 0,
      blocks: [
        { type: "GRAMMAR", title: "Antes de escuchar", content: def.listeningIntro },
        ...(audio ? [] : [{ type: "NOTES", title: "Audio pendiente", content: "Arranca Piper (localhost:5001) y vuelve a sembrar.", data: { variant: "warning" } }]),
      ],
      pedagogy: def.listeningPedagogy,
      exercises: audio ? [{ category: "listening", config: { audioUrl: audio }, title: def.listeningTitle, instructions: "Escucha el audio y elige (A/B/C).", questions: def.listeningQuestions }] : [],
    });
    await buildLesson(m2.id, {
      title: "Práctica de Speaking", description: "Habla por voz con la IA.", sortOrder: 1,
      blocks: [{ type: "GRAMMAR", title: "Cómo funciona", content: "Pulsa 'Iniciar conversación'. La IA (por voz) te hará preguntas sencillas y tú responderás por el micrófono. Requiere micrófono y los servicios locales arrancados." }],
      pedagogy: { objective: "Responder preguntas sencillas sobre uno mismo.", summary: "Conversación por voz con la IA.", reviewPrompts: ["¿Cómo dices tu nombre y tu edad en inglés?"] },
      exercises: [{ category: "speaking", config: def.speakingConfig, title: def.speakingTitle, instructions: "Habla con la IA.", questions: [] }],
    });

    const counts = {
      lecciones: await db.lesson.count({ where: { module: { courseId: course.id } } }),
      ejercicios: await db.exercise.count({ where: { lesson: { module: { courseId: course.id } } } }),
      preguntas: await db.exerciseQuestion.count({ where: { exercise: { lesson: { module: { courseId: course.id } } } } }),
    };
    console.warn(`✅ ${def.title}: ${JSON.stringify(counts)}  ·  /es/cursos/${def.slug}`);
  }

  // ══════════════════════════════ PRE A1 STARTERS ══════════════════════════
  await buildLevel({
    slug: "pre-a1-starters",
    title: "Pre A1 Starters",
    subtitle: "El primer examen de inglés de Cambridge para niños.",
    description: "Preparación para Pre A1 Starters (YLE), el primer examen de Cambridge para niños. Vocabulario básico (colores, animales, números, familia) con juegos, audio real y conversación. Sin aprobado ni suspenso: se dan 'shields' (escudos).",
    objectives: ["Reconocer vocabulario básico (colores, animales, familia).", "Entender frases muy sencillas al leer y escuchar.", "Responder preguntas simples sobre uno mismo."],
    deck: [
      { sortOrder: 0, term: "cat", translation: "gato", example: "The cat is black.", level: "Starters" },
      { sortOrder: 1, term: "dog", translation: "perro", example: "The dog is big.", level: "Starters" },
      { sortOrder: 2, term: "red", translation: "rojo", example: "A red ball.", level: "Starters" },
      { sortOrder: 3, term: "blue", translation: "azul", example: "A blue bike.", level: "Starters" },
      { sortOrder: 4, term: "big", translation: "grande", example: "A big tree.", level: "Starters" },
      { sortOrder: 5, term: "small", translation: "pequeño", example: "A small dog.", level: "Starters" },
      { sortOrder: 6, term: "ball", translation: "pelota", example: "I like the ball.", level: "Starters" },
      { sortOrder: 7, term: "tree", translation: "árbol", example: "The tree is green.", level: "Starters" },
      { sortOrder: 8, term: "sun", translation: "sol", example: "The sun is yellow.", level: "Starters" },
      { sortOrder: 9, term: "happy", translation: "feliz", example: "I am happy.", level: "Starters" },
    ],
    guideBlocks: [
      { type: "TEXT", content: "El Pre A1 Starters es el PRIMER examen de inglés de Cambridge para niños (a partir de 6-7 años). Es divertido y sin presión." },
      { type: "GRAMMAR", title: "Las tres partes", content: "• Listening: escuchas y señalas/coloreas.\n• Reading & Writing: lees palabras y frases muy sencillas y escribes palabras.\n• Speaking: hablas con un examinador amable sobre dibujos." },
      { type: "NOTES", title: "No hay aprobado ni suspenso", content: "En los exámenes para niños no se aprueba ni se suspende: se dan SHIELDS (escudos), de 1 a 5 por cada parte. ¡Todos reciben un certificado!", data: { variant: "info" } },
    ],
    guidePedagogy: { objective: "Entender qué es Starters y que se puntúa con shields.", summary: "Starters: 3 partes; se dan shields (1-5), sin aprobado/suspenso.", reviewPrompts: ["¿Cuántas partes tiene Starters?"] },
    rwTitle: "Palabras y frases sencillas",
    rwDescription: "Vocabulario básico y comprensión de frases cortas.",
    rwBlocks: [
      { type: "GRAMMAR", title: "Lee con atención", content: "Lee las frases despacio. Fíjate en las palabras que ya conoces (colores, animales)." },
    ],
    rwPedagogy: { objective: "Reconocer vocabulario básico y comprender frases muy sencillas.", commonMistakes: ["Confundir colores.", "No leer la frase entera."], reviewPrompts: ["¿Cómo se dice 'perro' en inglés?"] },
    rwExercises: [
      {
        category: "reading", title: "Lucy y sus mascotas",
        instructions: "Lee el texto y di si es verdadero o falso.\n\nHello! My name is Lucy. I have a cat. The cat is black. I have a dog too. The dog is big and brown. I like my pets!",
        questions: [
          { kind: "true_false", data: { kind: "true_false", prompt: "Lucy has a cat.", correct: true, explanation: "'I have a cat.'" } },
          { kind: "true_false", data: { kind: "true_false", prompt: "The cat is white.", correct: false, explanation: "'The cat is black.'" } },
          { kind: "true_false", data: { kind: "true_false", prompt: "The dog is small.", correct: false, explanation: "'The dog is big and brown.'" } },
          { kind: "true_false", data: { kind: "true_false", prompt: "Lucy likes her pets.", correct: true, explanation: "'I like my pets!'" } },
        ],
      },
      {
        category: "reading", title: "¿Qué palabra es un animal?",
        instructions: "Elige la palabra correcta.",
        questions: [
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Which word is an animal?", options: ["apple", "dog", "red"], correct: [1], explanation: "'dog' = perro (animal)." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Which word is a colour?", options: ["blue", "tree", "cat"], correct: [0], explanation: "'blue' = azul (color)." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Which one is big?", options: ["a small dog", "a big tree", "a red ball"], correct: [1], explanation: "'big tree' = árbol grande." } },
        ],
      },
    ],
    listeningTitle: "En el parque",
    listeningFile: "starters-park",
    listeningIntro: "Vas a oír una descripción de un parque. Escucha y responde. Puedes repetir el audio.",
    listeningScript: "Look at the park. There are three children. One girl is playing with a red ball. A boy is riding a blue bike. There is a big tree and a small brown dog. The sun is yellow and everyone is happy.",
    listeningPedagogy: { objective: "Entender una descripción sencilla (números, colores, objetos).", commonMistakes: ["Confundir colores.", "No contar bien."], reviewPrompts: ["¿De qué color es la pelota?"] },
    listeningQuestions: [
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "How many children are there?", options: ["Two.", "Three.", "Four."], correct: [1], explanation: "'There are three children.'" } },
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What colour is the ball?", options: ["Red.", "Blue.", "Yellow."], correct: [0], explanation: "'a red ball'." } },
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What is the boy riding?", options: ["A car.", "A bike.", "A horse."], correct: [1], explanation: "'riding a blue bike'." } },
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What colour is the sun?", options: ["Red.", "Blue.", "Yellow."], correct: [2], explanation: "'The sun is yellow.'" } },
    ],
    speakingTitle: "Preséntate",
    speakingConfig: { language: "en", level: "A1", scenario: "el examinador es amable y le hace al niño preguntas muy sencillas: su nombre, su color favorito y sus animales favoritos", objective: "que el niño diga su nombre, su edad, su color favorito y un animal que le guste", keywords: "My name is, I like, my favourite" },
  });

  // ══════════════════════════════ A1 MOVERS ════════════════════════════════
  await buildLevel({
    slug: "a1-movers",
    title: "A1 Movers",
    subtitle: "El segundo examen de inglés de Cambridge para niños.",
    description: "Preparación para A1 Movers (YLE), el segundo examen de Cambridge para niños (nivel A1). Vocabulario del día a día (rutinas, tiempo, comida, aficiones) con juegos, audio real y conversación. Se puntúa con shields.",
    objectives: ["Ampliar vocabulario del día a día (rutinas, tiempo, comida).", "Comprender textos y audios cortos con más detalle.", "Mantener una conversación sencilla sobre gustos y rutinas."],
    deck: [
      { sortOrder: 0, term: "breakfast", translation: "desayuno", example: "I eat breakfast at seven.", level: "Movers" },
      { sortOrder: 1, term: "school", translation: "colegio", example: "I go to school by bus.", level: "Movers" },
      { sortOrder: 2, term: "sunny", translation: "soleado", example: "It's sunny today.", level: "Movers" },
      { sortOrder: 3, term: "rainy", translation: "lluvioso", example: "It's rainy.", level: "Movers" },
      { sortOrder: 4, term: "football", translation: "fútbol", example: "I play football.", level: "Movers" },
      { sortOrder: 5, term: "swim", translation: "nadar", example: "I can swim.", level: "Movers" },
      { sortOrder: 6, term: "sandwich", translation: "sándwich", example: "A cheese sandwich.", level: "Movers" },
      { sortOrder: 7, term: "weekend", translation: "fin de semana", example: "At the weekend I play.", level: "Movers" },
      { sortOrder: 8, term: "favourite", translation: "favorito", example: "My favourite sport is football.", level: "Movers" },
      { sortOrder: 9, term: "ride", translation: "montar", example: "I ride my bike.", level: "Movers" },
    ],
    guideBlocks: [
      { type: "TEXT", content: "El A1 Movers es el SEGUNDO examen de Cambridge para niños. Es un poco más largo que Starters y demuestra nivel A1." },
      { type: "GRAMMAR", title: "Las tres partes", content: "• Listening: 5 partes (opción múltiple, emparejar, colorear).\n• Reading & Writing: 6 partes (leer, completar palabras, frases).\n• Speaking: describes diferencias entre dibujos y cuentas una historia con imágenes." },
      { type: "NOTES", title: "Shields, no aprobado", content: "Como en todos los exámenes para niños, se dan SHIELDS (1-5 por parte). Todos reciben certificado.", data: { variant: "info" } },
    ],
    guidePedagogy: { objective: "Conocer la estructura de Movers y su puntuación con shields.", summary: "Movers (A1): 3 partes; shields.", reviewPrompts: ["¿Qué nivel demuestra Movers?"] },
    rwTitle: "Mi sábado",
    rwDescription: "Vocabulario de rutinas y aficiones.",
    rwBlocks: [{ type: "GRAMMAR", title: "Lee y elige", content: "Lee el texto y elige la palabra correcta para cada hueco." }],
    rwPedagogy: { objective: "Elegir vocabulario de rutinas y aficiones en un texto corto.", commonMistakes: ["Confundir verbos de rutina.", "No leer la frase entera."], reviewPrompts: ["¿Cómo se dice 'desayuno' en inglés?"] },
    rwExercises: [
      {
        category: "reading", title: "El sábado de Tom (huecos)",
        instructions: "Elige la palabra correcta (A/B/C) para cada hueco.\n\nOn Saturday, Tom gets up late and eats his (1)___. Then he (2)___ his bike to the park. He likes playing (3)___ with his friends. In the afternoon, if it is (4)___, they go swimming.",
        questions: [
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 1: eats his ___", options: ["breakfast", "school", "bike"], correct: [0], explanation: "'breakfast' = desayuno." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 2: he ___ his bike", options: ["rides", "eats", "reads"], correct: [0], explanation: "'ride a bike' = montar en bici." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 3: playing ___", options: ["football", "breakfast", "school"], correct: [0], explanation: "'play football' = jugar al fútbol." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 4: if it is ___", options: ["sunny", "sandwich", "weekend"], correct: [0], explanation: "'sunny' = soleado (para ir a nadar)." } },
        ],
      },
      {
        category: "reading", title: "¿Verdadero o falso?",
        instructions: "Sobre el texto de Tom, di si es verdadero o falso.",
        questions: [
          { kind: "true_false", data: { kind: "true_false", prompt: "Tom gets up early on Saturday.", correct: false, explanation: "'Tom gets up late.'" } },
          { kind: "true_false", data: { kind: "true_false", prompt: "Tom plays football with his friends.", correct: true, explanation: "'playing football with his friends'." } },
          { kind: "true_false", data: { kind: "true_false", prompt: "They go swimming when it is sunny.", correct: true, explanation: "'if it is sunny, they go swimming'." } },
        ],
      },
    ],
    listeningTitle: "Dos amigos hacen planes",
    listeningFile: "movers-plans",
    listeningIntro: "Vas a oír a dos amigos hablando de sus planes. Escucha y responde.",
    listeningScript: "Anna says: On Saturday I want to go to the park and ride my bike. Ben says: Good idea! But it is rainy in the morning. Let's meet in the afternoon. Anna says: Okay. Let's meet at two o'clock near the big tree. Ben says: Great. I will bring my football.",
    listeningPedagogy: { objective: "Entender un diálogo corto (planes, hora, tiempo).", commonMistakes: ["No captar la hora.", "Confundir quién dice qué."], reviewPrompts: ["¿A qué hora quedan?"] },
    listeningQuestions: [
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What does Anna want to do?", options: ["Ride her bike.", "Play football.", "Go swimming."], correct: [0], explanation: "'I want to go to the park and ride my bike.'" } },
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What is the weather like in the morning?", options: ["Sunny.", "Rainy.", "Snowy."], correct: [1], explanation: "'it is rainy in the morning'." } },
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What time do they meet?", options: ["At one o'clock.", "At two o'clock.", "At three o'clock."], correct: [1], explanation: "'Let's meet at two o'clock.'" } },
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What will Ben bring?", options: ["His bike.", "His football.", "A sandwich."], correct: [1], explanation: "'I will bring my football.'" } },
    ],
    speakingTitle: "Habla de ti",
    speakingConfig: { language: "en", level: "A1", scenario: "el examinador le pregunta al niño por su rutina, su comida favorita y qué hace el fin de semana", objective: "que el niño hable de su rutina diaria, su comida favorita y sus planes de fin de semana", keywords: "I usually, my favourite, at the weekend, I like" },
  });

  // ══════════════════════════════ A2 FLYERS ════════════════════════════════
  await buildLevel({
    slug: "a2-flyers",
    title: "A2 Flyers",
    subtitle: "El tercer examen de inglés de Cambridge para niños.",
    description: "Preparación para A2 Flyers (YLE), el tercer examen de Cambridge para niños (nivel A2). Vocabulario más rico (viajes, aventuras, lugares) con juegos, audio real y conversación. Se puntúa con shields.",
    objectives: ["Manejar vocabulario A2 (viajes, lugares, aventuras).", "Comprender textos y audios más largos.", "Describir experiencias y contar una historia sencilla."],
    deck: [
      { sortOrder: 0, term: "adventure", translation: "aventura", example: "It was a great adventure.", level: "Flyers" },
      { sortOrder: 1, term: "explore", translation: "explorar", example: "We explored the cave.", level: "Flyers" },
      { sortOrder: 2, term: "delicious", translation: "delicioso", example: "The food was delicious.", level: "Flyers" },
      { sortOrder: 3, term: "exciting", translation: "emocionante", example: "The trip was exciting.", level: "Flyers" },
      { sortOrder: 4, term: "museum", translation: "museo", example: "We visited a museum.", level: "Flyers" },
      { sortOrder: 5, term: "dinosaur", translation: "dinosaurio", example: "I saw a dinosaur skeleton.", level: "Flyers" },
      { sortOrder: 6, term: "holiday", translation: "vacaciones", example: "On holiday we went to the beach.", level: "Flyers" },
      { sortOrder: 7, term: "mountain", translation: "montaña", example: "We climbed a mountain.", level: "Flyers" },
      { sortOrder: 8, term: "photograph", translation: "fotografía", example: "I took a photograph.", level: "Flyers" },
      { sortOrder: 9, term: "journey", translation: "viaje / trayecto", example: "The journey was long.", level: "Flyers" },
    ],
    guideBlocks: [
      { type: "TEXT", content: "El A2 Flyers es el TERCER y último examen de Cambridge para niños. Demuestra nivel A2, parecido al A2 Key pero pensado para niños." },
      { type: "GRAMMAR", title: "Las tres partes", content: "• Listening: 5 partes.\n• Reading & Writing: 7 partes (leer, completar, escribir frases).\n• Speaking: encuentras diferencias, cuentas una historia y respondes preguntas." },
      { type: "NOTES", title: "Shields, no aprobado", content: "Se dan SHIELDS (1-5 por parte). Todos reciben certificado.", data: { variant: "info" } },
    ],
    guidePedagogy: { objective: "Conocer la estructura de Flyers y su puntuación con shields.", summary: "Flyers (A2): 3 partes; shields.", reviewPrompts: ["¿Qué nivel demuestra Flyers?"] },
    rwTitle: "Una excursión emocionante",
    rwDescription: "Vocabulario de viajes y aventuras.",
    rwBlocks: [{ type: "GRAMMAR", title: "Lee y elige", content: "Lee el texto y elige la palabra correcta para cada hueco." }],
    rwPedagogy: { objective: "Elegir vocabulario A2 de viajes en un texto.", commonMistakes: ["Confundir adjetivos parecidos.", "No leer todo el texto."], reviewPrompts: ["¿Cómo se dice 'emocionante'?"] },
    rwExercises: [
      {
        category: "reading", title: "El viaje de fin de curso (huecos)",
        instructions: "Elige la palabra correcta (A/B/C) para cada hueco.\n\nLast week, our class went on an (1)___ to the mountains. It was very (2)___! First, we visited a (3)___ with real dinosaur bones. Then we climbed a small (4)___ and took lots of (5)___. The food at lunch was (6)___.",
        questions: [
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 1: went on an ___", options: ["adventure", "explore", "journey"], correct: [0], explanation: "'go on an adventure' = ir de aventura." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 2: it was very ___", options: ["exciting", "museum", "mountain"], correct: [0], explanation: "'exciting' = emocionante." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 3: visited a ___", options: ["museum", "holiday", "photograph"], correct: [0], explanation: "'museum' = museo (con huesos de dinosaurio)." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 4: climbed a small ___", options: ["mountain", "journey", "dinosaur"], correct: [0], explanation: "'climb a mountain' = escalar una montaña." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 5: took lots of ___", options: ["photographs", "museums", "mountains"], correct: [0], explanation: "'take photographs' = hacer fotos." } },
          { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Hueco 6: the food was ___", options: ["delicious", "exciting", "long"], correct: [0], explanation: "'delicious' = delicioso (para la comida)." } },
        ],
      },
    ],
    listeningTitle: "Un día en el museo",
    listeningFile: "flyers-museum",
    listeningIntro: "Vas a oír a una niña contando su visita a un museo. Escucha y responde.",
    listeningScript: "Yesterday I went to the science museum with my family. My favourite part was the dinosaur room. There was a huge skeleton, taller than my dad! We watched a short film about space, which was really exciting. After that, we had lunch in the café. I had a delicious sandwich and an apple. Before we left, I bought a small toy dinosaur in the shop.",
    listeningPedagogy: { objective: "Entender un relato A2 (lugares, opiniones, secuencia).", commonMistakes: ["Perderse en la secuencia.", "Confundir detalles."], reviewPrompts: ["¿Cuál fue su parte favorita?"] },
    listeningQuestions: [
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "Where did the girl go?", options: ["To the science museum.", "To the beach.", "To the mountains."], correct: [0], explanation: "'I went to the science museum'." } },
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What was her favourite part?", options: ["The café.", "The dinosaur room.", "The shop."], correct: [1], explanation: "'My favourite part was the dinosaur room.'" } },
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What did she eat for lunch?", options: ["A sandwich and an apple.", "Pizza.", "Ice cream."], correct: [0], explanation: "'a delicious sandwich and an apple'." } },
      { kind: "multiple_choice", data: { kind: "multiple_choice", prompt: "What did she buy?", options: ["A book.", "A toy dinosaur.", "A photograph."], correct: [1], explanation: "'I bought a small toy dinosaur'." } },
    ],
    speakingTitle: "Cuenta tu día",
    speakingConfig: { language: "en", level: "A2", scenario: "el examinador le pide al niño que describa un lugar que le guste y cuente algo que hizo el fin de semana", objective: "que el niño describa un lugar y cuente una experiencia sencilla en pasado", keywords: "I went, it was, my favourite, there was, I saw" },
  });

  console.warn("✅ Young Learners (Starters, Movers, Flyers) sembrados.");
}

main().catch((e) => { console.error("❌ Error en seed YLE:", e); process.exit(1); }).finally(async () => { await db.$disconnect(); });
