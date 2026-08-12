"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { QuestionView, type Q } from "@/components/learning/question-view";
import { SpeakingConversation } from "@/components/learning/speaking-conversation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  submitExercise,
  type ExerciseResult,
} from "@/modules/exercises/server/attempt-actions";
import type { Response } from "@/modules/exercises/shared/question-types";
import { isCEFRLevel } from "@/modules/exercises/shared/speaking-prompt";
type ExerciseData = {
  id: string;
  category: string;
  title: string;
  instructions: string | null;
  config: Record<string, unknown> | null;
  questions: Q[];
};

const CAT_LABEL: Record<string, string> = {
  reading: "Comprensión lectora",
  writing: "Expresión escrita",
  listening: "Comprensión auditiva",
  speaking: "Expresión oral",
};

export function ExercisePlayer({ exercise }: { exercise: ExerciseData }) {
  const [responses, setResponses] = useState<Record<string, Response>>({});
  const [result, setResult] = useState<ExerciseResult | null>(null);
  const [isPending, startTransition] = useTransition();
  const cfg = exercise.config ?? {};

  function setResp(id: string, r: Response) {
    setResponses((prev) => ({ ...prev, [id]: r }));
  }

  function submit() {
    const ordered = exercise.questions.map((q) => responses[q.id] ?? null);
    startTransition(async () => {
      try {
        setResult(await submitExercise(exercise.id, ordered));
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "No se pudo corregir.");
      }
    });
  }

  const gradable = exercise.category === "reading" || exercise.category === "listening";

  return (
    <Card className="flex flex-col gap-4 p-5">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {CAT_LABEL[exercise.category] ?? exercise.category}
        </p>
        <h3 className="font-display text-lg tracking-tighter">{exercise.title}</h3>
        {exercise.instructions && (
          <p className="mt-1 text-sm text-muted-foreground">{exercise.instructions}</p>
        )}
      </div>

      {/* Base del ejercicio según categoría */}
      {exercise.category === "reading" && typeof cfg.text === "string" && cfg.text && (
        <div className="prose prose-sm max-w-none whitespace-pre-line rounded-md border border-border bg-muted/30 p-4 dark:prose-invert">
          {cfg.text}
        </div>
      )}
      {exercise.category === "listening" && typeof cfg.audioUrl === "string" && cfg.audioUrl && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio controls src={cfg.audioUrl} className="w-full" />
      )}
      {exercise.category === "writing" && (
        <WritingArea config={cfg} />
      )}
      {exercise.category === "speaking" && (
        <SpeakingConversation
          language={String(cfg.language ?? "en")}
          level={isCEFRLevel(String(cfg.level)) ? String(cfg.level) : "B1"}
          scenario={String(cfg.scenario ?? "conversación libre")}
          objective={String(cfg.objective ?? "practicar la conversación")}
          keywords={
            typeof cfg.keywords === "string"
              ? cfg.keywords.split(",").map((s) => s.trim()).filter(Boolean)
              : undefined
          }
        />
      )}

      {/* Preguntas (reading/listening) */}
      {gradable && exercise.questions.length > 0 && (
        <div className="flex flex-col gap-4">
          {exercise.questions.map((q, i) => (
            <QuestionView
              key={q.id}
              index={i}
              question={q}
              response={responses[q.id]}
              onChange={(r) => setResp(q.id, r)}
              result={result?.perQuestion[i]}
              disabled={!!result}
            />
          ))}

          {!result ? (
            <Button variant="gold" size="sm" onClick={submit} disabled={isPending} className="w-fit">
              {isPending ? "Corrigiendo…" : "Corregir"}
            </Button>
          ) : (
            <div className="rounded-md border border-border bg-muted/30 p-4">
              <p className="font-display text-lg tracking-tighter">
                Nota: {result.score}/100
              </p>
              <p className="text-sm text-muted-foreground">
                {result.correctCount} de {result.total} correctas.
                {result.needsManualReview &&
                  " Hay preguntas abiertas que revisará el profesor."}
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="mt-2 w-fit"
                onClick={() => {
                  setResult(null);
                  setResponses({});
                }}
              >
                Reintentar
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

function WritingArea({ config }: { config: Record<string, unknown> }) {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const min = Number(config.minWords) || null;
  const max = Number(config.maxWords) || null;
  return (
    <div className="flex flex-col gap-1.5">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        placeholder="Escribe aquí tu texto…"
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm"
      />
      <p className="text-xs text-muted-foreground">
        {words} palabra(s)
        {min ? ` · mínimo ${min}` : ""}
        {max ? ` · máximo ${max}` : ""} · Tu profesor corregirá esta entrega.
      </p>
    </div>
  );
}

