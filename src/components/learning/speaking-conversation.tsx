"use client";

import { Loader2, Mic, Square } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Turn = { role: "ai" | "student"; text: string };
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

  async function aiTurn(history: Turn[]): Promise<boolean> {
    const res = await fetch("/api/speaking/turn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, level, scenario, objective, keywords, history }),
    });
    if (res.status === 503) {
      setStatus("unavailable");
      return false;
    }
    if (!res.ok) {
      toast.error("No se pudo continuar la conversación.");
      return false;
    }
    const data = (await res.json()) as { text: string };
    setTurns((t) => [...t, { role: "ai", text: data.text }]);
    return true;
  }

  async function start() {
    setStatus("loading");
    const ok = await aiTurn([]);
    if (ok) setStatus("active");
  }

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);
      recorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        await handleAudio(new Blob(chunksRef.current, { type: recorder.mimeType }));
      };
      recorderRef.current = recorder;
      recorder.start();
      setStatus("recording");
    } catch {
      toast.error("No se pudo acceder al micrófono.");
    }
  }

  function stopRecording() {
    recorderRef.current?.stop();
    setStatus("loading");
  }

  async function handleAudio(blob: Blob) {
    const form = new FormData();
    form.append("audio", blob, "turn.webm");
    form.append("language", language);
    const res = await fetch("/api/speaking/transcribe", { method: "POST", body: form });
    if (res.status === 503) {
      setStatus("unavailable");
      return;
    }
    if (!res.ok) {
      toast.error("No se pudo transcribir el audio.");
      setStatus("active");
      return;
    }
    const { text } = (await res.json()) as { text: string };
    const history = [...turns, { role: "student" as const, text }];
    setTurns(history);
    const ok = await aiTurn(history);
    setStatus(ok ? "active" : "unavailable");
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
              className={`max-w-[85%] rounded-lg px-3.5 py-2 text-sm ${
                t.role === "ai"
                  ? "self-start bg-muted"
                  : "self-end bg-gold/15 text-gold-foreground dark:text-foreground"
              }`}
            >
              {t.text}
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
