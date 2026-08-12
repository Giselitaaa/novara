"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";
import { parseFlashcardsText } from "@/modules/flashcards/shared/parse";
import { VoiceError } from "@/modules/voice/server/provider";
import { synthesizeSpeech } from "@/modules/voice/server/synthesize";

export type FlashcardActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

// ─── Mazos ───────────────────────────────────────────────────────────

export async function createDeck(formData: FormData) {
  const session = await requireAdmin();
  const title = String(formData.get("title") ?? "").trim();
  if (!title) throw new Error("El título del mazo es obligatorio.");

  const deck = await db.flashcardDeck.create({
    data: {
      title,
      description: String(formData.get("description") ?? "").trim() || null,
      language: String(formData.get("language") ?? "").trim() || null,
      authorId: session.user.id,
    },
  });

  await logAdminAction(session.user.id, "flashcards.deck_create", "FlashcardDeck", deck.id, {
    title,
  });
  revalidatePath("/admin/flashcards");
  return deck;
}

export async function updateDeck(deckId: string, formData: FormData) {
  await requireAdmin();
  await db.flashcardDeck.update({
    where: { id: deckId },
    data: {
      title: String(formData.get("title") ?? "").trim(),
      description: String(formData.get("description") ?? "").trim() || null,
      language: String(formData.get("language") ?? "").trim() || null,
    },
  });
  revalidatePath(`/admin/flashcards/${deckId}`);
  revalidatePath("/admin/flashcards");
  return { status: "success" as const, message: "Mazo actualizado." };
}

export async function deleteDeck(deckId: string) {
  const session = await requireAdmin();
  await db.flashcardDeck.delete({ where: { id: deckId } });
  await logAdminAction(session.user.id, "flashcards.deck_delete", "FlashcardDeck", deckId);
  revalidatePath("/admin/flashcards");
}

// ─── Tarjetas ────────────────────────────────────────────────────────

type CardInput = {
  term: string;
  translation: string;
  explanation?: string;
  example?: string;
  category?: string;
  level?: string;
  pronunciation?: string;
  ipa?: string;
  notes?: string;
};

function clean(v: unknown): string | null {
  const s = String(v ?? "").trim();
  return s || null;
}

export async function createCard(deckId: string, input: CardInput) {
  await requireAdmin();
  const term = input.term.trim();
  const translation = input.translation.trim();
  if (!term || !translation) throw new Error("Palabra y traducción son obligatorias.");

  const count = await db.flashcard.count({ where: { deckId } });
  await db.flashcard.create({
    data: {
      deckId,
      term,
      translation,
      explanation: clean(input.explanation),
      example: clean(input.example),
      category: clean(input.category),
      level: clean(input.level),
      pronunciation: clean(input.pronunciation),
      ipa: clean(input.ipa),
      notes: clean(input.notes),
      sortOrder: count,
    },
  });
  revalidatePath(`/admin/flashcards/${deckId}`);
}

export async function updateCard(cardId: string, input: CardInput) {
  await requireAdmin();
  const card = await db.flashcard.update({
    where: { id: cardId },
    data: {
      term: input.term.trim(),
      translation: input.translation.trim(),
      explanation: clean(input.explanation),
      example: clean(input.example),
      category: clean(input.category),
      level: clean(input.level),
      pronunciation: clean(input.pronunciation),
      ipa: clean(input.ipa),
      notes: clean(input.notes),
    },
  });
  revalidatePath(`/admin/flashcards/${card.deckId}`);
}

export async function deleteCard(cardId: string) {
  await requireAdmin();
  const card = await db.flashcard.delete({ where: { id: cardId } });
  revalidatePath(`/admin/flashcards/${card.deckId}`);
}

export async function duplicateCard(cardId: string) {
  await requireAdmin();
  const card = await db.flashcard.findUnique({ where: { id: cardId } });
  if (!card) throw new Error("Tarjeta no encontrada.");
  const count = await db.flashcard.count({ where: { deckId: card.deckId } });
  await db.flashcard.create({
    data: {
      deckId: card.deckId,
      term: card.term,
      translation: card.translation,
      explanation: card.explanation,
      example: card.example,
      category: card.category,
      level: card.level,
      pronunciation: card.pronunciation,
      ipa: card.ipa,
      // El audio NO se copia: pertenece al texto original; se regenera si hace falta.
      notes: card.notes,
      sortOrder: count,
    },
  });
  revalidatePath(`/admin/flashcards/${card.deckId}`);
}

export async function moveCard(cardId: string, direction: "up" | "down") {
  await requireAdmin();
  const card = await db.flashcard.findUnique({ where: { id: cardId } });
  if (!card) return;
  const siblings = await db.flashcard.findMany({
    where: { deckId: card.deckId },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
  });
  const index = siblings.findIndex((c) => c.id === cardId);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (swapWith < 0 || swapWith >= siblings.length) return;
  const a = siblings[index]!;
  const b = siblings[swapWith]!;
  await db.$transaction([
    db.flashcard.update({ where: { id: a.id }, data: { sortOrder: b.sortOrder } }),
    db.flashcard.update({ where: { id: b.id }, data: { sortOrder: a.sortOrder } }),
  ]);
  revalidatePath(`/admin/flashcards/${card.deckId}`);
}

// ─── Importación masiva (CSV / pegado) ───────────────────────────────

export async function importCards(deckId: string, raw: string) {
  await requireAdmin();
  const parsed = parseFlashcardsText(raw);
  if (parsed.length === 0) {
    return { status: "error" as const, message: "No se detectó ninguna tarjeta válida." };
  }
  const base = await db.flashcard.count({ where: { deckId } });
  await db.flashcard.createMany({
    data: parsed.map((c, i) => ({
      deckId,
      term: c.term,
      translation: c.translation,
      explanation: clean(c.explanation),
      example: clean(c.example),
      category: clean(c.category),
      level: clean(c.level),
      sortOrder: base + i,
    })),
  });
  revalidatePath(`/admin/flashcards/${deckId}`);
  return { status: "success" as const, message: `${parsed.length} tarjeta(s) importada(s).` };
}

// ─── Audio de pronunciación (capa de voz) ────────────────────────────

/**
 * Genera y PERSISTE el audio de pronunciación de una tarjeta. Degrada con
 * honestidad en dos ejes: sin proveedor de voz (`not_configured`) lanza un
 * error claro; sin almacenamiento no puede guardar una URL duradera y lo
 * explica (nunca finge un audio).
 */
export async function generateCardAudio(cardId: string) {
  await requireAdmin();
  const card = await db.flashcard.findUnique({
    where: { id: cardId },
    include: { deck: true },
  });
  if (!card) throw new Error("Tarjeta no encontrada.");

  let result;
  try {
    result = await synthesizeSpeech({
      text: card.term,
      language: card.deck.language ?? "en",
    });
  } catch (error) {
    if (error instanceof VoiceError && error.code === "not_configured") {
      throw new Error(
        "La generación de audio no está disponible: falta configurar el proveedor de voz (OPENAI_API_KEY / VOICE_PROVIDER)."
      );
    }
    throw error;
  }

  if (!result.persisted) {
    throw new Error(
      "Para guardar el audio de una flashcard hace falta almacenamiento configurado (STORAGE_*), además del proveedor de voz."
    );
  }

  await db.flashcard.update({ where: { id: cardId }, data: { audioUrl: result.url } });
  revalidatePath(`/admin/flashcards/${card.deckId}`);
  return { url: result.url };
}

/**
 * Generación masiva: audio para todas las tarjetas del mazo que aún no lo
 * tienen. Devuelve cuántas se generaron. Si la voz no está configurada,
 * lanza el mismo error claro sin tocar nada.
 */
export async function generateDeckAudio(deckId: string) {
  await requireAdmin();
  const cards = await db.flashcard.findMany({
    where: { deckId, audioUrl: null },
    include: { deck: true },
  });
  let generated = 0;
  for (const card of cards) {
    let result;
    try {
      result = await synthesizeSpeech({
        text: card.term,
        language: card.deck.language ?? "en",
      });
    } catch (error) {
      if (error instanceof VoiceError && error.code === "not_configured") {
        throw new Error(
          "La generación de audio no está disponible: falta configurar el proveedor de voz (OPENAI_API_KEY / VOICE_PROVIDER)."
        );
      }
      throw error;
    }
    if (!result.persisted) {
      throw new Error(
        "Para guardar el audio hace falta almacenamiento configurado (STORAGE_*), además del proveedor de voz."
      );
    }
    await db.flashcard.update({ where: { id: card.id }, data: { audioUrl: result.url } });
    generated += 1;
  }
  revalidatePath(`/admin/flashcards/${deckId}`);
  return { status: "success" as const, generated, message: `${generated} audio(s) generado(s).` };
}
