"use client";

import { Plus } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { addReviewAsAdmin } from "@/modules/courses/server/review-actions";

/**
 * Formulario para que la administración añada una reseña/testimonio manual
 * (con nombre de autor propio), sin necesitar un alumno real. Se publica al
 * instante y aparece en la ficha del curso.
 */
export function AddReviewForm({ courses }: { courses: { id: string; title: string }[] }) {
  const [open, setOpen] = useState(false);
  const [courseId, setCourseId] = useState(courses[0]?.id ?? "");
  const [rating, setRating] = useState(5);
  const [authorName, setAuthorName] = useState("");
  const [comment, setComment] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function submit() {
    if (!courseId) return toast.error("Elige un curso.");
    if (authorName.trim().length < 2) return toast.error("Escribe el nombre del autor.");
    startTransition(async () => {
      const res = await addReviewAsAdmin({ courseId, rating, authorName: authorName.trim(), comment: comment.trim() || undefined });
      if (res.status === "success") {
        toast.success("Reseña añadida y publicada.");
        setAuthorName("");
        setComment("");
        setOpen(false);
        router.refresh();
      } else {
        toast.error(res.message ?? "No se pudo añadir la reseña.");
      }
    });
  }

  if (!open) {
    return (
      <Button variant="gold" size="sm" onClick={() => setOpen(true)} className="w-fit">
        <Plus className="size-4" /> Añadir reseña
      </Button>
    );
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-3 pt-6">
        <p className="font-display text-sm tracking-tighter">Añadir una reseña</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="rev-course">Curso</Label>
            <select
              id="rev-course"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="rev-rating">Puntuación</Label>
            <select
              id="rev-rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {"★".repeat(n)} ({n})
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="rev-author">Nombre del autor</Label>
          <Input id="rev-author" value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder="p. ej. María G." />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="rev-comment">Comentario (opcional)</Label>
          <textarea
            id="rev-comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            placeholder="El comentario de la reseña…"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="gold" size="sm" onClick={submit} disabled={isPending}>
            {isPending ? "Guardando…" : "Publicar reseña"}
          </Button>
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
