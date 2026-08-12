"use client";

import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { submitExercise } from "@/modules/exercises/server/actions";

type Submission = {
  id: string;
  content: string;
  status: string;
  aiScore: unknown;
  aiFeedback: string | null;
} | null;

export function ExerciseSubmissionPanel({
  lessonId,
  courseSlug,
  latestSubmission,
}: {
  lessonId: string;
  courseSlug: string;
  latestSubmission: Submission;
}) {
  const [content, setContent] = useState("");
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState(latestSubmission);

  function handleSubmit() {
    if (!content.trim()) {
      toast.error("Escribe tu entrega antes de enviarla.");
      return;
    }
    startTransition(async () => {
      const response = await submitExercise(lessonId, courseSlug, content);
      if (response.status === "corrected") {
        toast.success("Corregido por el asistente de IA.");
        setResult({
          id: "latest",
          content,
          status: "corregido",
          aiScore: response.score,
          aiFeedback: response.feedback,
        });
      } else {
        toast.info("Entrega registrada. Queda pendiente de revisión.");
        setResult({
          id: "latest",
          content,
          status: "pendiente",
          aiScore: null,
          aiFeedback: null,
        });
      }
      setContent("");
    });
  }

  return (
    <div className="rounded-lg border border-border p-5">
      <h3 className="mb-3 flex items-center gap-2 font-display text-sm tracking-tighter">
        <Sparkles className="size-4 text-gold" /> Entrega tu ejercicio
      </h3>

      {result && (
        <div className="mb-4 rounded-md border border-border bg-muted/30 p-4">
          <p className="mb-1 text-xs text-muted-foreground">Tu última entrega:</p>
          <p className="mb-3 whitespace-pre-line text-sm">{result.content}</p>

          {result.status === "corregido" ? (
            <div className="flex items-start gap-2 rounded-md bg-gold/10 p-3">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
              <div>
                <p className="text-sm font-medium">
                  Puntuación de la IA: {Number(result.aiScore)}%
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{result.aiFeedback}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4" /> Pendiente de revisión.
            </div>
          )}
        </div>
      )}

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribe o pega aquí tu entrega…"
        rows={5}
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
      <Button
        variant="gold"
        size="sm"
        className="mt-3"
        disabled={isPending}
        onClick={handleSubmit}
      >
        {isPending ? "Enviando…" : "Enviar ejercicio"}
      </Button>
    </div>
  );
}
