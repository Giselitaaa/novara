"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { correctExerciseSubmissionManually } from "@/modules/exercises/server/review-actions";

export function ExerciseCorrectionForm({
  submissionId,
  currentScore,
  currentFeedback,
}: {
  submissionId: string;
  currentScore: number | null;
  currentFeedback: string | null;
}) {
  const router = useRouter();
  const [score, setScore] = useState(currentScore != null ? String(currentScore) : "");
  const [feedback, setFeedback] = useState(currentFeedback ?? "");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function submit() {
    setError(null);
    startTransition(async () => {
      const res = await correctExerciseSubmissionManually(
        submissionId,
        Number(score),
        feedback
      );
      if (res.status === "error")
        setError(res.message ?? "No se pudo guardar la corrección.");
      else router.refresh();
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="score" className="text-sm font-medium">
          Nota (0–100)
        </label>
        <Input
          id="score"
          type="number"
          min={0}
          max={100}
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="max-w-32"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ex-feedback" className="text-sm font-medium">
          Feedback para el alumno
        </label>
        <textarea
          id="ex-feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={5}
          maxLength={4000}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}

      <div>
        <Button
          variant="gold"
          onClick={submit}
          disabled={isPending || score === "" || feedback.trim().length === 0}
        >
          {isPending ? "Guardando…" : "Guardar corrección"}
        </Button>
      </div>
    </div>
  );
}
