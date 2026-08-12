import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FlashcardDeckEditor } from "@/components/admin/flashcards/flashcard-deck-editor";
import { Link } from "@/i18n/navigation";
import { getDeck } from "@/modules/flashcards/server/queries";

export const metadata: Metadata = { title: "Editar mazo" };

type Props = { params: Promise<{ deckId: string }> };

export default async function AdminDeckPage({ params }: Props) {
  const { deckId } = await params;
  const deck = await getDeck(deckId);
  if (!deck) notFound();

  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/admin/flashcards"
        className="flex w-fit items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Volver a mazos
      </Link>

      <FlashcardDeckEditor
        deck={{
          id: deck.id,
          title: deck.title,
          description: deck.description,
          language: deck.language,
        }}
        cards={deck.cards.map((c) => ({
          id: c.id,
          term: c.term,
          translation: c.translation,
          explanation: c.explanation,
          example: c.example,
          category: c.category,
          level: c.level,
          pronunciation: c.pronunciation,
          ipa: c.ipa,
          notes: c.notes,
          audioUrl: c.audioUrl,
        }))}
      />
    </div>
  );
}
