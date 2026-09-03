import { WalletCards } from "lucide-react";

import { SpeakButton } from "./speak-button";

export type FlashcardCard = {
  id: string;
  term: string;
  translation: string;
  explanation: string | null;
  example: string | null;
  category: string | null;
  pronunciation: string | null;
  ipa: string | null;
  audioUrl: string | null;
};

/**
 * Visor de flashcards del alumno. Es un COMPONENTE DE SERVIDOR: el vocabulario
 * (término + pronunciación + traducción + ejemplo) se pinta como HTML puro, así
 * que SIEMPRE se ve, sin depender de JavaScript ni de ningún fetch. Solo el
 * botón de altavoz (SpeakButton) es una pequeña isla cliente.
 */
export function FlashcardsViewer({ cards, title }: { cards: FlashcardCard[]; title?: string | null }) {
  if (!cards || cards.length === 0) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-gold/25 bg-gold/5 p-4 text-sm">
        <WalletCards className="size-5 shrink-0 text-gold" />
        Este mazo aún no tiene cartas.
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gold/25 bg-gold/5 p-4">
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5 font-medium">
          <WalletCards className="size-4 text-gold" /> {title || "Vocabulario"}
        </span>
        <span>{cards.length} palabras</span>
      </div>

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {cards.map((card) => {
          const pron = (card.ipa || card.pronunciation || "").replace(/^\/|\/$/g, "");
          return (
            <li key={card.id} className="flex items-start justify-between gap-3 rounded-lg border border-border bg-background p-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="font-display text-lg tracking-tight">{card.term}</span>
                  {pron && <span className="text-xs text-muted-foreground">/{pron}/</span>}
                </div>
                <p className="text-sm font-medium text-foreground/90">{card.translation}</p>
                {card.example && <p className="mt-0.5 text-xs italic text-muted-foreground">“{card.example}”</p>}
              </div>
              <SpeakButton term={card.term} audioUrl={card.audioUrl} />
            </li>
          );
        })}
      </ul>

      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Pulsa el altavoz de cada palabra para oír su pronunciación (voz británica).
      </p>
    </div>
  );
}
