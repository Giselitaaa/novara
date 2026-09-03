"use client";

import { Volume2 } from "lucide-react";

/**
 * Botón de altavoz para una palabra. Reproduce el audio real si existe; si no,
 * usa la voz británica del navegador (SpeechSynthesis en-GB). Es una pequeña
 * "isla" cliente: si el JS fallara, el vocabulario (que se pinta en el servidor)
 * sigue visible — solo se perdería el sonido.
 */
export function SpeakButton({ term, audioUrl }: { term: string; audioUrl: string | null }) {
  function speak() {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(() => browserTTS());
      return;
    }
    browserTTS();
  }

  function browserTTS() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(term);
    u.lang = "en-GB";
    const voices = window.speechSynthesis.getVoices();
    const v =
      voices.find((x) => /en[-_]GB/i.test(x.lang)) ??
      voices.find((x) => /^en[-_]/i.test(x.lang)) ??
      null;
    if (v) u.voice = v;
    u.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  return (
    <button
      type="button"
      onClick={speak}
      aria-label={`Escuchar ${term}`}
      className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition hover:bg-gold/10"
    >
      <Volume2 className="size-4" />
    </button>
  );
}
