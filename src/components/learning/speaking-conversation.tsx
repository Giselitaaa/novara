"use client";

import { Loader2, Mic, Square, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Turn = { role: "ai" | "student"; text: string; audioUrl?: string };

/** Idioma del ejercicio → código BCP-47 para el TTS del navegador (fallback). */
function toBCP47(language: string): string {
  const l = language.toLowerCase();
  if (/\bes|espa/.test(l)) return "es-ES";
  if (/\bfr|franc/.test(l)) return "fr-FR";
  return "en-US";
}
type Evaluation = {
  fluency: number;
  pronunciation: number;
  grammar: number;
  vocabulary: number;
  comprehension: number;
  naturalness: number;
  overall: number;
  feedback: string;
};

type Status = "idle" | "loading" | "recording" | "active" | "unavailable" | "evaluated";

// Reconocimiento de voz del NAVEGADOR (Web Speech API). Es keyless: transcribe
// sin depender de ninguna clave/servidor, así que evita el error 401 de un STT
// en la nube. Safari/Chrome lo exponen (webkitSpeechRecognition). Tipos mínimos.
type SRAlternative = { transcript: string };
type SRResult = { isFinal: boolean } & Record<number, SRAlternative>;
type SRResultEvent = { resultIndex: number; results: { length: number } & Record<number, SRResult> };
type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onresult: ((e: SRResultEvent) => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
  onend: (() => void) | null;
};

export function SpeakingConversation({
  language,
  level,
  scenario,
  objective,
  keywords,
}: {
  language: string;
  level: string;
  scenario: string;
  objective: string;
  keywords?: string[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  // Precarga las voces del navegador (getVoices puede tardar en poblarse).
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  /** Reproduce el turno de la IA: audio de Piper si lo hay; si no, TTS del navegador. */
  function speak(turn: { text: string; audioUrl?: string }) {
    if (turn.audioUrl) {
      const audio = new Audio(turn.audioUrl);
      audio.play().catch(() => fallbackTTS(turn.text));
      return;
    }
    fallbackTTS(turn.text);
  }

  /** Elige una voz INGLESA del navegador (evita que una voz española lea inglés y suene raro). */
  function englishVoice(): SpeechSynthesisVoice | null {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    return (
      voices.find((v) => /^en[-_]/i.test(v.lang)) ??
      voices.find((v) => v.lang.toLowerCase().startsWith("en")) ??
      null
    );
  }

  function fallbackTTS(text: string) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = toBCP47(language);
    const voice = englishVoice();
    if (voice) utterance.voice = voice;
    utterance.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  async function errorMessage(res: Response, fallback: string): Promise<string> {
    const msg = await res
      .clone()
      .json()
      .then((d: { error?: string; message?: string }) => d?.message || d?.error)
      .catch(() => null);
    return typeof msg === "string" && msg ? msg : fallback;
  }

  async function aiTurn(history: Turn[]): Promise<boolean> {
    let res: Response;
    try {
      res = await fetch("/api/speaking/turn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, level, scenario, objective, keywords, history, withAudio: true }),
      });
    } catch {
      toast.error("Sin conexión con el servidor. ¿Está arrancado NOVARA?");
      return false;
    }
    if (res.status === 503) {
      setStatus("unavailable");
      return false;
    }
    if (!res.ok) {
      toast.error(
        await errorMessage(res, "No se pudo continuar la conversación. ¿Está arrancado Ollama (LLM local)?")
      );
      return false;
    }
    const data = (await res.json()) as { text: string; audioUrl?: string };
    setTurns((t) => [...t, { role: "ai", text: data.text, audioUrl: data.audioUrl }]);
    speak(data); // la IA "habla" en cuanto responde
    return true;
  }

  async function start() {
    setStatus("loading");
    const ok = await aiTurn([]);
    // Si falla, vuelve a "idle" para poder reintentar (no se queda en "Procesando…").
    setStatus(ok ? "active" : "idle");
  }

  /** Clase de reconocimiento del navegador (con prefijo webkit en Safari/Chrome). */
  function getSpeechRecognition(): (new () => SpeechRecognitionLike) | null {
    if (typeof window === "undefined") return null;
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };
    return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
  }

  function srLang(): string {
    const l = language.toLowerCase();
    if (/\bes|espa/.test(l)) return "es-ES";
    if (/\bfr|franc/.test(l)) return "fr-FR";
    return "en-GB"; // inglés británico (Cambridge)
  }

  /** Transcribe con el navegador (keyless). Devuelve false si no se pudo iniciar. */
  function startBrowserRecognition(SR: new () => SpeechRecognitionLike): boolean {
    let rec: SpeechRecognitionLike;
    try {
      rec = new SR();
    } catch {
      return false;
    }
    rec.lang = srLang();
    rec.interimResults = false;
    rec.continuous = true;
    rec.maxAlternatives = 1;
    let finalText = "";
    let permissionError = false;
    rec.onresult = (e) => {
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r && r.isFinal && r[0]) finalText += r[0].transcript + " ";
      }
    };
    rec.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        permissionError = true;
        toast.error("Has bloqueado el micrófono. Permítelo en la barra de direcciones y reintenta.");
      }
    };
    rec.onend = () => {
      recognitionRef.current = null;
      if (finalText.trim()) {
        void handleTranscript(finalText.trim());
      } else if (!permissionError) {
        toast.error("No te he entendido bien. Inténtalo de nuevo, hablando claro y un poco más largo.");
        setStatus("active");
      } else {
        setStatus("active");
      }
    };
    recognitionRef.current = rec;
    try {
      rec.start();
    } catch {
      recognitionRef.current = null;
      return false;
    }
    setStatus("recording");
    return true;
  }

  async function startRecording() {
    // 1) Reconocimiento del navegador (keyless, sin depender del STT en la nube).
    const SR = getSpeechRecognition();
    if (SR && startBrowserRecognition(SR)) return;

    // 2) Respaldo: grabar y transcribir en el servidor.
    // getUserMedia solo existe en contextos SEGUROS: localhost o HTTPS. Si la
    // app se abre por la IP de red (http://192.168.x.x) el micrófono se bloquea.
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      toast.error(
        "Tu navegador bloquea el micrófono aquí. Abre la app en http://localhost:3001 (no en la IP de red) o usa HTTPS."
      );
      return;
    }
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (err) {
      const name = err instanceof Error ? err.name : "";
      toast.error(
        name === "NotAllowedError" || name === "SecurityError"
          ? "Has bloqueado el micrófono. Permítelo en el icono de la barra de direcciones y reintenta."
          : name === "NotFoundError"
            ? "No se detecta ningún micrófono conectado."
            : "No se pudo acceder al micrófono. Revisa los permisos del navegador."
      );
      setStatus("active");
      return;
    }
    let recorder: MediaRecorder;
    try {
      // Elegimos un formato que el navegador ADMITA de verdad. Chrome/Edge usan
      // webm/opus; Safari solo admite audio/mp4. Sin esto, Safari grababa mp4
      // pero se enviaba como .webm y la transcripción fallaba ("error al detener").
      const candidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"];
      const supported =
        typeof MediaRecorder !== "undefined" && typeof MediaRecorder.isTypeSupported === "function"
          ? candidates.find((t) => MediaRecorder.isTypeSupported(t))
          : undefined;
      recorder = supported ? new MediaRecorder(stream, { mimeType: supported }) : new MediaRecorder(stream);
    } catch {
      stream.getTracks().forEach((t) => t.stop());
      toast.error("Tu navegador no admite la grabación de audio. Prueba con Chrome o Edge actualizados.");
      setStatus("active");
      return;
    }
    chunksRef.current = [];
    recorder.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);
    recorder.onstop = async () => {
      stream.getTracks().forEach((t) => t.stop());
      await handleAudio(new Blob(chunksRef.current, { type: recorder.mimeType }));
    };
    recorderRef.current = recorder;
    recorder.start();
    setStatus("recording");
  }

  function stopRecording() {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        /* onend hará el resto */
      }
      setStatus("loading");
      return;
    }
    recorderRef.current?.stop();
    setStatus("loading");
  }

  /** Con el texto ya transcrito (por navegador o servidor), avanza la conversación. */
  async function handleTranscript(text: string) {
    if (!text.trim()) {
      toast.error("No te he entendido bien. Inténtalo de nuevo, hablando claro.");
      setStatus("active");
      return;
    }
    const history = [...turns, { role: "student" as const, text: text.trim() }];
    setTurns(history);
    const ok = await aiTurn(history);
    if (ok) setStatus("active");
    else setStatus((s) => (s === "unavailable" ? s : "active"));
  }

  async function handleAudio(blob: Blob) {
    if (blob.size === 0) {
      toast.error("No se grabó audio. Habla un poco más largo antes de detener.");
      setStatus("active");
      return;
    }
    // La extensión del fichero debe coincidir con el formato REAL grabado
    // (Safari = mp4, Chrome = webm); si no, el servicio de transcripción lo rechaza.
    const type = blob.type || "audio/webm";
    const ext = type.includes("mp4") || type.includes("mpeg") || type.includes("m4a")
      ? "mp4"
      : type.includes("ogg")
        ? "ogg"
        : type.includes("wav")
          ? "wav"
          : "webm";
    const form = new FormData();
    form.append("audio", blob, `turn.${ext}`);
    form.append("language", language);
    let res: Response;
    try {
      res = await fetch("/api/speaking/transcribe", { method: "POST", body: form });
    } catch {
      toast.error("Sin conexión al transcribir tu voz.");
      setStatus("active");
      return;
    }
    if (res.status === 503) {
      setStatus("unavailable");
      return;
    }
    if (!res.ok) {
      toast.error(await errorMessage(res, "No se pudo transcribir tu voz. ¿Está arrancado Whisper?"));
      setStatus("active");
      return;
    }
    const { text } = (await res.json()) as { text: string };
    await handleTranscript(text);
  }

  async function finish() {
    setStatus("loading");
    const res = await fetch("/api/speaking/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, level, objective, transcript: turns }),
    });
    if (res.status === 503) {
      setStatus("unavailable");
      return;
    }
    if (!res.ok) {
      toast.error("No se pudo evaluar la conversación.");
      setStatus("active");
      return;
    }
    setEvaluation((await res.json()) as Evaluation);
    setStatus("evaluated");
  }

  if (status === "unavailable") {
    return (
      <div className="rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground">
        La práctica conversacional por voz no está disponible: requiere un proveedor de IA y de
        voz configurado (claves de API). El escenario y el objetivo ya están definidos por el
        profesor; en cuanto se configuren las claves, la conversación funcionará aquí.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-md border border-gold/25 bg-gold/5 p-3 text-sm">
        <p className="font-medium">Escenario: {scenario}</p>
        <p className="text-muted-foreground">Objetivo: {objective} · Nivel {level}</p>
      </div>

      {turns.length > 0 && (
        <div className="flex flex-col gap-2">
          {turns.map((t, i) => (
            <div
              key={i}
              className={`flex max-w-[85%] items-start gap-2 rounded-lg px-3.5 py-2 text-sm ${
                t.role === "ai"
                  ? "self-start bg-muted"
                  : "self-end bg-gold/15 text-gold-foreground dark:text-foreground"
              }`}
            >
              <span className="flex-1">{t.text}</span>
              {t.role === "ai" && (
                <button
                  type="button"
                  onClick={() => speak(t)}
                  aria-label="Escuchar de nuevo"
                  className="mt-0.5 shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <Volume2 className="size-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {status === "idle" && (
          <Button variant="gold" size="sm" onClick={start}>
            <Mic className="size-4" /> Iniciar conversación
          </Button>
        )}
        {status === "loading" && (
          <Button variant="outline" size="sm" disabled>
            <Loader2 className="size-4 animate-spin" /> Procesando…
          </Button>
        )}
        {status === "active" && (
          <>
            <Button variant="gold" size="sm" onClick={startRecording}>
              <Mic className="size-4" /> Hablar
            </Button>
            <Button variant="outline" size="sm" onClick={finish} disabled={turns.length === 0}>
              Finalizar y evaluar
            </Button>
          </>
        )}
        {status === "recording" && (
          <Button variant="destructive" size="sm" onClick={stopRecording}>
            <Square className="size-4" /> Detener y enviar
          </Button>
        )}
      </div>

      {evaluation && (
        <Card className="p-4">
          <p className="font-display text-lg tracking-tighter">
            Evaluación: {evaluation.overall}/100
          </p>
          <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-sm sm:grid-cols-3">
            {[
              ["Fluidez", evaluation.fluency],
              ["Pronunciación", evaluation.pronunciation],
              ["Gramática", evaluation.grammar],
              ["Vocabulario", evaluation.vocabulary],
              ["Comprensión", evaluation.comprehension],
              ["Naturalidad", evaluation.naturalness],
            ].map(([label, value]) => (
              <div key={label as string} className="flex justify-between">
                <span className="text-muted-foreground">{label}</span>
                <span className="font-medium">{value as number}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{evaluation.feedback}</p>
        </Card>
      )}
    </div>
  );
}
