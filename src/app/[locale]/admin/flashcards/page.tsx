import { WalletCards } from "lucide-react";
import type { Metadata } from "next";

import { FlashcardsAdmin } from "@/components/admin/flashcards/flashcards-admin";
import { listDecks } from "@/modules/flashcards/server/queries";

export const metadata: Metadata = { title: "Flashcards" };

export default async function AdminFlashcardsPage() {
  const decks = await listDecks();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2.5">
        <WalletCards className="size-5 text-gold" />
        <div>
          <h1 className="font-display text-2xl tracking-tighter">Flashcards</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Mazos de vocabulario reutilizables, con audio de pronunciación por IA.
          </p>
        </div>
      </div>

      <FlashcardsAdmin
        decks={decks.map((d) => ({
          id: d.id,
          title: d.title,
          description: d.description,
          language: d.language,
          total: d.total,
          withAudio: d.withAudio,
        }))}
      />
    </div>
  );
}
