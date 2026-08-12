import "server-only";

import { db } from "@/lib/db";

/** Lista de mazos con recuento de tarjetas y cuántas tienen audio. */
export async function listDecks() {
  const decks = await db.flashcardDeck.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { cards: true } },
      cards: { select: { audioUrl: true } },
    },
  });
  return decks.map((d) => ({
    id: d.id,
    title: d.title,
    description: d.description,
    language: d.language,
    total: d._count.cards,
    withAudio: d.cards.filter((c) => c.audioUrl).length,
    createdAt: d.createdAt,
  }));
}

/**
 * Un mazo con sus tarjetas ordenadas. La lista de tarjetas se pagina en la
 * UI cuando crece; aquí se devuelve completa porque el editor la
 * virtualiza/pagina en cliente (mazos de cientos de tarjetas siguen siendo
 * pocos KB de texto).
 */
export async function getDeck(deckId: string) {
  return db.flashcardDeck.findUnique({
    where: { id: deckId },
    include: {
      cards: { orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }] },
    },
  });
}
