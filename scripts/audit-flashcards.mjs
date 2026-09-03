import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// Audita, por curso (nivel), los bloques FLASHCARDS: si tienen deckId, si el
// mazo existe y cuántas cartas tiene. Reporta también cuántas cartas traen
// audioUrl real vs. dependerán de la voz del navegador.
const courses = await db.course.findMany({
  orderBy: { createdAt: "asc" },
  select: { id: true, title: true, slug: true },
});

let totalBlocks = 0;
let brokenBlocks = 0;

for (const course of courses) {
  const blocks = await db.lessonBlock.findMany({
    where: {
      type: "FLASHCARDS",
      lesson: { module: { courseId: course.id } },
    },
    select: {
      id: true,
      deckId: true,
      lesson: { select: { title: true } },
    },
  });
  if (blocks.length === 0) continue;

  let withDeck = 0;
  let cardsTotal = 0;
  let cardsWithAudio = 0;
  let broken = 0;

  for (const b of blocks) {
    totalBlocks++;
    if (!b.deckId) {
      broken++;
      brokenBlocks++;
      continue;
    }
    const deck = await db.flashcardDeck.findUnique({
      where: { id: b.deckId },
      select: { _count: { select: { cards: true } } },
    });
    if (!deck) {
      broken++;
      brokenBlocks++;
      continue;
    }
    withDeck++;
    const n = deck._count.cards;
    cardsTotal += n;
    if (n === 0) {
      broken++;
      brokenBlocks++;
    }
    const audio = await db.flashcard.count({
      where: { deckId: b.deckId, NOT: { audioUrl: null } },
    });
    cardsWithAudio += audio;
  }

  console.log(
    `\n${course.title} (${course.slug})\n` +
      `  bloques FLASHCARDS: ${blocks.length} | con mazo válido: ${withDeck} | ROTOS: ${broken}\n` +
      `  cartas totales: ${cardsTotal} | con audioUrl real: ${cardsWithAudio} (resto usa voz en-GB del navegador)`
  );
}

console.log(
  `\n==== RESUMEN: ${totalBlocks} bloques FLASHCARDS en total | ${brokenBlocks} rotos (sin mazo/sin cartas) ====`
);
await db.$disconnect();
