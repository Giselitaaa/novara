"use client";

import { RotateCw, Volume2, WalletCards } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

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
 * Visor de flashcards del alumno dentro de una lección. Recibe las cartas YA
 * cargadas desde el servidor (props) para que se vean al instante — nada de
 * fetch en el cliente que pueda quedarse colgado. Permite girar la carta,
 * avanzar/retroceder y ESCUCHAR la pronunciación del término. Honestidad de
 * audio: si la carta trae `audioUrl` real se reproduce ese fichero; si no, cae
 * a la voz INGLESA del navegador (SpeechSynthesis en-GB) — nunca finge audio.
 */
export function FlashcardsViewer({ cards, title }: { cards: FlashcardCard[]; title?: string | null }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const speak = useCallback((card: FlashcardCard) => {
    if (card.audioUrl) {
      if (!audioRef.current) audioRef.current = new Audio();
      audioRef.current.src = card.audioUrl;
      audioRef.current.play().catch(() => speakBrowser(card.term));
      return;
    }
    speakBrowser(card.term);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const card = cards[index] ?? cards[0]!;
  const go = (delta: number) => {
    setFlipped(false);
    setIndex((i) => (i + delta + cards.length) % cards.length);
  };

  return (
    <div className="rounded-lg border border-gold/25 bg-gold/5 p-4">
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5 font-medium">
          <WalletCards className="size-4 text-gold" /> {title || "Flashcards"}
        </span>
        <span>
          {index + 1} / {cards.length}
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
        <Button type="button" variant="secondary" size="sm" onClick={() => speak(card)} className="gap-1.5">
          <Volume2 className="size-4" /> Escuchar
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => go(1)}>
          Siguiente →
        </Button>
      </div>
    </div>
  );
}
