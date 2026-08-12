"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { reviewProjectSubmission } from "@/modules/courses/server/project-review-actions";

export function ProjectReviewForm({
  submissionId,
  currentStatus,
  currentFeedback,
}: {
  submissionId: string;
  currentStatus: string;
  currentFeedback: string | null;
}) {
  const router = useRouter();
  const [feedback, setFeedback] = useState(currentFeedback ?? "");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function decide(decision: "aprobado" | "rechazado") {
    setError(null);
    startTransition(async () => {
      const res = await reviewProjectSubmission(
        submissionId,
        decision,
        feedback.trim() || undefined
      );
      if (res.status === "error")
        setError(res.message ?? "No se pudo guardar la revisión.");
      else router.refresh();
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="feedback" className="text-sm font-medium">
          Feedback para el alumno{" "}
          <span className="font-normal text-muted-foreground">
            (obligatorio si rechazas)
          </span>
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={5}
          maxLength={4000}
          placeholder="Qué está bien, qué mejorar…"
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Button variant="gold" onClick={() => decide("aprobado")} disabled={isPending}>
          {isPending ? "Guardando…" : "Aprobar proyecto"}
        </Button>
        <Button
          variant="outline"
          onClick={() => decide("rechazado")}
          disabled={isPending}
        >
          Pedir cambios
        </Button>
        {currentStatus !== "pendiente" && (
          <span className="text-xs text-muted-foreground">
            Estado actual:{" "}
            {currentStatus === "aprobado" ? "aprobado" : "requiere cambios"}
          </span>
        )}
      </div>
    </div>
  );
}
