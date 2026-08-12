"use client";

import { Clock } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "@/i18n/navigation";
import { gradeAndSubmitAttempt } from "@/modules/exams/server/student-actions";

type ExamQuestion = {
  questionId: string;
  points: number;
  statement: string;
  typeKey: string;
  options: { id: string; text: string }[];
};

type Answer = { selectedOptionIds?: string[]; freeTextAnswer?: string };

export function ExamRunner({
  attemptId,
  examId,
  title,
  questions,
  timeLimitMinutes,
  courseSlug,
}: {
  attemptId: string;
  examId: string;
  title: string;
  questions: ExamQuestion[];
  timeLimitMinutes: number | null;
  courseSlug?: string;
}) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(
    timeLimitMinutes ? timeLimitMinutes * 60 : null
  );

  const current = questions[index]!;
  // Simplificación deliberada: el banco de preguntas trata "opción
  // múltiple" como selección única (una respuesta correcta por
  // pregunta). Multi-respuesta real es una extensión natural futura.
  const isMultiSelect = false;

  const handleSubmit = useMemo(
    () => async () => {
      setIsSubmitting(true);
      const payload = Object.entries(answers).map(([questionId, answer]) => ({
        questionId,
        ...answer,
      }));
      try {
        const result = await gradeAndSubmitAttempt(attemptId, payload, courseSlug);
        router.push(`/examenes/${examId}/resultado/${result.attemptId}` as never);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo enviar el examen."
        );
        setIsSubmitting(false);
      }
    },
    [answers, attemptId, courseSlug, examId, router]
  );

  useEffect(() => {
    if (secondsLeft === null) return;
    if (secondsLeft <= 0) {
      toast.info("Se acabó el tiempo. Enviando tus respuestas…");
      handleSubmit();
      return;
    }
    const timer = setTimeout(() => setSecondsLeft((s) => (s !== null ? s - 1 : s)), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, handleSubmit]);

  function selectOption(optionId: string) {
    setAnswers((prev) => ({
      ...prev,
      [current.questionId]: {
        selectedOptionIds: isMultiSelect
          ? toggleInArray(prev[current.questionId]?.selectedOptionIds ?? [], optionId)
          : [optionId],
      },
    }));
  }

  function setFreeText(text: string) {
    setAnswers((prev) => ({ ...prev, [current.questionId]: { freeTextAnswer: text } }));
  }

  const answeredCount = Object.keys(answers).length;
  const minutes = secondsLeft !== null ? Math.floor(secondsLeft / 60) : null;
  const seconds = secondsLeft !== null ? secondsLeft % 60 : null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-xl tracking-tighter">{title}</h1>
        {secondsLeft !== null && (
          <span
            className={`flex items-center gap-1.5 font-mono text-sm ${secondsLeft < 60 ? "text-destructive" : "text-muted-foreground"}`}
          >
            <Clock className="size-4" />
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Progress value={((index + 1) / questions.length) * 100} className="flex-1" />
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {index + 1} / {questions.length}
        </span>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <p className="mb-5 font-display text-lg tracking-tighter">{current.statement}</p>

        {current.typeKey === "respuesta_corta" ? (
          <Input
            value={answers[current.questionId]?.freeTextAnswer ?? ""}
            onChange={(e) => setFreeText(e.target.value)}
            placeholder="Escribe tu respuesta…"
          />
        ) : (
          <div className="flex flex-col gap-2.5">
            {current.options.map((option) => {
              const selected = (
                answers[current.questionId]?.selectedOptionIds ?? []
              ).includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectOption(option.id)}
                  className={`flex items-center gap-3 rounded-md border px-4 py-3 text-left text-sm transition-colors ${
                    selected ? "border-gold bg-gold/10" : "border-border hover:bg-accent"
                  }`}
                >
                  <Checkbox checked={selected} className="pointer-events-none" />
                  {option.text}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          disabled={index === 0}
          onClick={() => setIndex((i) => i - 1)}
        >
          Anterior
        </Button>
        <span className="text-xs text-muted-foreground">
          {answeredCount} de {questions.length} respondidas
        </span>
        {index < questions.length - 1 ? (
          <Button variant="outline" onClick={() => setIndex((i) => i + 1)}>
            Siguiente
          </Button>
        ) : (
          <Button variant="gold" disabled={isSubmitting} onClick={handleSubmit}>
            {isSubmitting ? "Enviando…" : "Finalizar examen"}
          </Button>
        )}
      </div>
    </div>
  );
}

function toggleInArray(arr: string[], value: string) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}
