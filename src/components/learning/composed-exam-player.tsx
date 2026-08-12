"use client";

import { Clock } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

import { QuestionView, type Q } from "@/components/learning/question-view";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  submitComposedExam,
  type ComposedExamResult,
} from "@/modules/exams/server/attempt-actions";
import type { Response } from "@/modules/exercises/shared/question-types";

type SectionData = {
  id: string;
  weight: number;
  category: string;
  exerciseTitle: string;
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

export function ComposedExamPlayer({
  examId,
  title,
  passingScore,
  timeLimitMinutes,
  sections,
}: {
  examId: string;
  title: string;
  passingScore: number;
  timeLimitMinutes: number | null;
  sections: SectionData[];
}) {
  // responses[sectionId][questionId] = Response
  const [responses, setResponses] = useState<Record<string, Record<string, Response>>>({});
  const [result, setResult] = useState<ComposedExamResult | null>(null);
  const [isPending, startTransition] = useTransition();
  const [secondsLeft, setSecondsLeft] = useState<number | null>(
    timeLimitMinutes && timeLimitMinutes > 0 ? timeLimitMinutes * 60 : null
  );

  // Cuenta atrás: al llegar a 0, se autoenvía el examen (una sola vez).
  useEffect(() => {
    if (secondsLeft === null || result) return;
    if (secondsLeft <= 0) {
      submit();
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => (s === null ? null : s - 1)), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, result]);

  function setResp(sectionId: string, questionId: string, r: Response) {
    setResponses((prev) => ({
      ...prev,
      [sectionId]: { ...(prev[sectionId] ?? {}), [questionId]: r },
    }));
  }

  function submit() {
    const payload = sections.map((sec) => ({
      sectionId: sec.id,
      responses: sec.questions.map((q) => responses[sec.id]?.[q.id] ?? null),
    }));
    startTransition(async () => {
      try {
        setResult(await submitComposedExam(examId, payload));
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "No se pudo corregir el examen.");
      }
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">{title}</h1>
          <p className="text-sm text-muted-foreground">
            {sections.length} sección(es) · aprobado a partir de {passingScore}%
          </p>
        </div>
        {secondsLeft !== null && !result && (
          <div
            className={`flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-sm ${
              secondsLeft <= 60
                ? "border-destructive/40 bg-destructive/10 text-destructive"
                : "border-border"
            }`}
            aria-label="Tiempo restante"
          >
            <Clock className="size-4" />
            {String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:
            {String(secondsLeft % 60).padStart(2, "0")}
          </div>
        )}
      </div>

      {result && (
        <Card
          className={`p-5 ${result.passed ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"}`}
        >
          <p className="font-display text-2xl tracking-tighter">
            {result.finalScore}/100 — {result.passed ? "Aprobado" : "No superado"}
          </p>
          <p className="text-sm text-muted-foreground">
            Nota mínima: {result.passingScore}%.
            {result.needsManualReview && " Hay secciones con respuestas abiertas que revisará el profesor."}
          </p>
          <ul className="mt-3 flex flex-col gap-1 text-sm">
            {result.sections.map((s, i) => (
              <li key={i} className="flex justify-between border-b border-border/50 py-1">
                <span>
                  {s.title}{" "}
                  <span className="text-muted-foreground">({CAT_LABEL[s.category] ?? s.category})</span>
                </span>
                <span className="text-muted-foreground">
                  {s.score}/100 · peso {s.weight}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {sections.map((sec, si) => {
        const cfg = sec.config ?? {};
        return (
          <Card key={sec.id} className="flex flex-col gap-4 p-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Sección {si + 1} · {CAT_LABEL[sec.category] ?? sec.category}
              </p>
              <h2 className="font-display text-lg tracking-tighter">{sec.exerciseTitle}</h2>
              {sec.instructions && (
                <p className="mt-1 text-sm text-muted-foreground">{sec.instructions}</p>
              )}
            </div>

            {sec.category === "reading" && typeof cfg.text === "string" && cfg.text && (
              <div className="prose prose-sm max-w-none whitespace-pre-line rounded-md border border-border bg-muted/30 p-4 dark:prose-invert">
                {cfg.text}
              </div>
            )}
            {sec.category === "listening" && typeof cfg.audioUrl === "string" && cfg.audioUrl && (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <audio controls src={cfg.audioUrl} className="w-full" />
            )}

            {sec.questions.length > 0 ? (
              <div className="flex flex-col gap-3">
                {sec.questions.map((q, i) => (
                  <QuestionView
                    key={q.id}
                    index={i}
                    question={q}
                    response={responses[sec.id]?.[q.id]}
                    onChange={(r) => setResp(sec.id, q.id, r)}
                    disabled={!!result}
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Sección sin preguntas auto-corregibles (se evalúa aparte).
              </p>
            )}
          </Card>
        );
      })}

      {!result && (
        <Button variant="gold" onClick={submit} disabled={isPending} className="w-fit">
          {isPending ? "Corrigiendo…" : "Finalizar examen"}
        </Button>
      )}
    </div>
  );
}
