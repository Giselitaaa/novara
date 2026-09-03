"use client";

import { Loader2, RotateCw, Volume2, WalletCards } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

type Card = {
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

type Deck = { id: string; title: string; cards: Card[] };

/**
 * Visor de flashcards del alumno dentro de una lección. Carga las cartas del
 * mazo por `deckId` y permite girar la carta, avanzar/retroceder y ESCUCHAR la
 * pronunciación del término. Honestidad de audio: si la carta trae `audioUrl`
 * real se reproduce ese fichero; si no, cae a la voz INGLESA del navegador
 * (SpeechSynthesis en-GB) — nunca se queda mudo ni finge un audio inexistente.
 */
export function FlashcardsViewer({ deckId }: { deckId: string }) {
  const [deck, setDeck] = useState<Deck | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(`/api/flashcards/${deckId}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(String(res.status));
        return (await res.json()) as Deck;
      })
      .then((d) => alive && setDeck(d))
      .catch(() => alive && setError("No se pudieron cargar las flashcards."));
    return () => {
      alive = false;
    };
  }, [deckId]);

  /** Elige una voz INGLESA (preferentemente británica) del navegador. */
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
    (card: Card) => {
      // 1) Audio real pregrabado si existe.
      if (card.audioUrl) {
        if (!audioRef.current) audioRef.current = new Audio();
        audioRef.current.src = card.audioUrl;
        audioRef.current.play().catch(() => speakBrowser(card.term));
        return;
      }
      speakBrowser(card.term);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  function speakBrowser(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    const voice = britishVoice();
    if (voice) utterance.voice = voice;
    utterance.rate = 0.92;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  // Precarga la lista de voces (en algunos navegadores llega asíncrona).
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm">
        {error}
      </div>
    );
  }

  if (!deck) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-gold/25 bg-gold/5 p-4 text-sm">
        <Loader2 className="size-4 animate-spin text-gold" />
        Cargando flashcards…
      </div>
    );
  }

  if (deck.cards.length === 0) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-gold/25 bg-gold/5 p-4 text-sm">
        <WalletCards className="size-5 shrink-0 text-gold" />
        Este mazo aún no tiene cartas.
      </div>
    );
  }

  const card = deck.cards[index] ?? deck.cards[0]!;
  const go = (delta: number) => {
    setFlipped(false);
    setIndex((i) => (i + delta + deck.cards.length) % deck.cards.length);
  };

  return (
    <div className="rounded-lg border border-gold/25 bg-gold/5 p-4">
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5 font-medium">
          <WalletCards className="size-4 text-gold" /> {deck.title}
        </span>
        <span>
          {index + 1} / {deck.cards.length}
        </span>
      </div>

      {/* Carta: click para girar (término ⇄ traducción/explicación). */}
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="flex min-h-40 w-full flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background p-6 text-center transition hover:border-gold/40"
      >
        {!flipped ? (
          <>
            <span className="font-display text-2xl tracking-tighter">{card.term}</span>
            {(card.ipa || card.pronunciation) && (
              <span className="text-sm text-muted-foreground">
                {card.ipa ? `/${card.ipa.replace(/^\/|\/$/g, "")}/` : card.pronunciation}
              </span>
            )}
            {card.category && (
              <span className="mt-1 rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                {card.category}
              </span>
            )}
          </>
        ) : (
          <>
            <span className="text-xl font-medium">{card.translation}</span>
            {card.explanation && (
              <span className="text-sm text-muted-foreground">{card.explanation}</span>
            )}
            {card.example && (
              <span className="mt-1 text-sm italic text-foreground/80">“{card.example}”</span>
            )}
          </>
        )}
        <span className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
          <RotateCw className="size-3" /> Toca para {flipped ? "ver el término" : "ver el significado"}
        </span>
      </button>

      <div className="mt-3 flex items-center justify-between gap-2">
        <Button type="button" variant="outline" size="sm" onClick={() => go(-1)}>
          ← Anterior
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => speak(card)}
          className="gap-1.5"
        >
          <Volume2 className="size-4" /> Escuchar
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => go(1)}>
          Siguiente →
        </Button>
      </div>
    </div>
  );
}
