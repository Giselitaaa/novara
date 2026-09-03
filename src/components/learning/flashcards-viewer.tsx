"use client";

import { Volume2, WalletCards } from "lucide-react";
import { useCallback, useEffect } from "react";

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
 * Visor de flashcards del alumno. Muestra TODAS las cartas a la vez, siempre
 * visibles (término + pronunciación + traducción + ejemplo), sin girar ni hacer
 * fetch: las cartas llegan como props desde el servidor. Cada carta tiene un
 * botón para ESCUCHAR el término: audio real si existe, o voz británica del
 * navegador (SpeechSynthesis en-GB) — degradación honesta, nunca finge audio.
 */
export function FlashcardsViewer({ cards, title }: { cards: FlashcardCard[]; title?: string | null }) {
  const britishVoice = useCallback((): SpeechSynthesisVoice | null => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    return (
      voices.find((v) => /en[-_]GB/i.test(v.lang)) ??
      voices.find((v) => /^en[-_]/i.test(v.lang)) ??
      voices.find((v) => v.lang.toLowerCase().startsWith("en")) ??
      null
    );
  }, []);

  const speak = useCallback(
    (card: FlashcardCard) => {
      if (card.audioUrl) {
        const audio = new Audio(card.audioUrl);
        audio.play().catch(() => speakBrowser(card.term));
        return;
      }
      speakBrowser(card.term);
      function speakBrowser(text: string) {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "en-GB";
        const v = britishVoice();
        if (v) u.voice = v;
        u.rate = 0.9;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      }
    },
    [britishVoice]
  );

  // Precarga la lista de voces (en algunos navegadores llega asíncrona).
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

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
        {cards.map((card) => (
          <li
            key={card.id}
            className="flex items-start justify-between gap-3 rounded-lg border border-border bg-background p-3"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="font-display text-lg tracking-tight">{card.term}</span>
                {(card.ipa || card.pronunciation) && (
                  <span className="text-xs text-muted-foreground">
                    /{(card.ipa || card.pronunciation || "").replace(/^\/|\/$/g, "")}/
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-foreground/90">{card.translation}</p>
              {card.example && (
                <p className="mt-0.5 text-xs italic text-muted-foreground">“{card.example}”</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => speak(card)}
              aria-label={`Escuchar ${card.term}`}
              className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition hover:bg-gold/10"
            >
              <Volume2 className="size-4" />
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Pulsa el altavoz de cada palabra para oír su pronunciación (voz británica).
      </p>
    </div>
  );
}
