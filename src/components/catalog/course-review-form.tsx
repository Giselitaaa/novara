"use client";

import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitReview } from "@/modules/courses/server/review-actions";

export function CourseReviewForm({
  courseId,
  initialRating,
  initialComment,
  statusLabel,
}: {
  courseId: string;
  initialRating?: number;
  initialComment?: string | null;
  statusLabel?: string;
}) {
  const router = useRouter();
  const [rating, setRating] = useState(initialRating ?? 0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState(initialComment ?? "");
  const [message, setMessage] = useState<{ type: "ok" | "error"; text: string } | null>(
    null
  );
  const [isPending, startTransition] = useTransition();

  function submit() {
    setMessage(null);
    if (rating < 1) {
      setMessage({ type: "error", text: "Elige una puntuación de 1 a 5 estrellas." });
      return;
    }
    startTransition(async () => {
      const res = await submitReview(courseId, rating, comment.trim() || undefined);
      if (res.status === "error")
        setMessage({ type: "error", text: res.message ?? "No se pudo enviar." });
      else {
        setMessage({ type: "ok", text: res.message ?? "¡Gracias por tu reseña!" });
        router.refresh();
      }
    });
  }

  return (
    <div className="rounded-lg border border-border p-5">
      <p className="mb-1 font-medium">Tu reseña</p>
      {statusLabel && (
        <p className="mb-3 text-xs text-muted-foreground">
          Estado de tu reseña: {statusLabel}
        </p>
      )}
      <div
        className="mb-3 flex items-center gap-1"
        role="radiogroup"
        aria-label="Puntuación"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`${n} estrella${n > 1 ? "s" : ""}`}
            onClick={() => setRating(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            className="p-0.5"
          >
            <Star
              className={cn(
                "size-6 transition-colors",
                (hover || rating) >= n ? "fill-gold text-gold" : "text-muted-foreground"
              )}
            />
          </button>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        maxLength={2000}
        placeholder="¿Qué te ha parecido el curso? (opcional)"
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
      {message && (
        <p
          className={cn(
            "mt-2 text-sm",
            message.type === "ok" ? "text-success" : "text-destructive"
          )}
          role="status"
        >
          {message.text}
        </p>
      )}
      <div className="mt-3">
        <Button variant="gold" onClick={submit} disabled={isPending}>
          {isPending ? "Enviando…" : "Enviar reseña"}
        </Button>
      </div>
    </div>
  );
}
