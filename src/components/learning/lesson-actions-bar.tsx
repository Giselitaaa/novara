"use client";

import { Bookmark, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { AchievementCelebration } from "@/components/learning/achievement-celebration";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { markLessonComplete } from "@/modules/enrollments/server/actions";
import { toggleLessonFavorite } from "@/modules/enrollments/server/favorite-actions";

export function LessonActionsBar({
  courseSlug,
  lessonId,
  isCompleted,
  isFavorite: initialIsFavorite = false,
  percentComplete,
  prevLessonId,
  nextLessonId,
}: {
  courseSlug: string;
  lessonId: string;
  isCompleted: boolean;
  isFavorite?: boolean;
  percentComplete: number;
  prevLessonId: string | null;
  nextLessonId: string | null;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const [isFavPending, startFavTransition] = useTransition();
  const [newBadges, setNewBadges] = useState<{ key: string; name: string }[]>([]);

  function handleToggleFavorite() {
    setIsFavorite((v) => !v); // optimista
    startFavTransition(async () => {
      const res = await toggleLessonFavorite(lessonId, courseSlug);
      if (res.status === "success") setIsFavorite(res.isFavorite);
    });
  }

  function handleComplete() {
    startTransition(async () => {
      const result = await markLessonComplete(lessonId, courseSlug);
      if (result.percentComplete >= 100) {
        toast.success("¡Curso completado! Revisa tu certificado en tu perfil.");
      } else {
        toast.success("Lección completada.");
      }
      if (result.newBadges?.length) {
        // Celebración; retrasamos la navegación para que se vea.
        setNewBadges(result.newBadges);
        router.refresh();
        return;
      }
      router.refresh();
      if (nextLessonId)
        router.push(`/cursos/${courseSlug}/aprender/${nextLessonId}` as never);
    });
  }

  return (
    <div className="flex flex-col gap-4 border-t border-border pt-5">
      <div className="flex items-center gap-3">
        <Progress value={percentComplete} className="flex-1" />
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {Math.round(percentComplete)}%
        </span>
        <button
          type="button"
          onClick={handleToggleFavorite}
          disabled={isFavPending}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? "Quitar de favoritas" : "Marcar como favorita"}
          className={cn(
            "shrink-0 rounded-md p-1.5 transition-colors hover:bg-muted",
            isFavorite ? "text-gold" : "text-muted-foreground"
          )}
        >
          <Bookmark className={cn("size-4.5", isFavorite && "fill-gold")} />
        </button>
      </div>

      <div className="flex items-center justify-between gap-3">
        <Button asChild variant="ghost" disabled={!prevLessonId}>
          <Link
            href={prevLessonId ? `/cursos/${courseSlug}/aprender/${prevLessonId}` : "#"}
          >
            <ChevronLeft className="size-4" /> Anterior
          </Link>
        </Button>

        {!isCompleted ? (
          <Button variant="gold" disabled={isPending} onClick={handleComplete}>
            <CheckCircle2 className="size-4" />
            {isPending ? "Guardando…" : "Marcar como completada"}
          </Button>
        ) : (
          <span className="flex items-center gap-1.5 text-sm font-medium text-success">
            <CheckCircle2 className="size-4" /> Completada
          </span>
        )}

        <Button asChild variant="ghost" disabled={!nextLessonId}>
          <Link
            href={nextLessonId ? `/cursos/${courseSlug}/aprender/${nextLessonId}` : "#"}
          >
            Siguiente <ChevronRight className="size-4" />
          </Link>
        </Button>
      </div>

      <AchievementCelebration badges={newBadges} />
    </div>
  );
}
