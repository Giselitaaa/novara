"use client";

import { ListTree } from "lucide-react";
import { useState } from "react";

import { LessonSidebar } from "@/components/learning/lesson-sidebar";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";

type SidebarLesson = React.ComponentProps<typeof LessonSidebar>["lessons"][number];

/**
 * Navegación del temario en móvil. En pantallas pequeñas el temario
 * lateral está oculto; esta barra fija (con la barra de progreso del
 * curso siempre visible) abre un panel deslizante con el temario
 * completo, sin sacar al alumno del reproductor.
 */
export function MobileLessonNav({
  courseSlug,
  lessons,
  currentLessonId,
  percentComplete,
  remainingLabel,
  hasFinalProject,
}: {
  courseSlug: string;
  lessons: SidebarLesson[];
  currentLessonId: string;
  percentComplete: number;
  remainingLabel: string | null;
  hasFinalProject: boolean;
}) {
  const [open, setOpen] = useState(false);
  const completed = lessons.filter((l) => l.isCompleted).length;

  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur lg:hidden">
      <div className="flex items-center gap-3 px-4 py-2.5">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="flex shrink-0 items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium"
            >
              <ListTree className="size-4" /> Temario
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-sm overflow-y-auto">
            <SheetTitle>Temario del curso</SheetTitle>
            <Link
              href={`/cursos/${courseSlug}`}
              className="block text-xs text-muted-foreground hover:text-foreground"
            >
              ← Volver al curso
            </Link>
            {/* Cierra el panel al navegar. No es un control propio: los
                elementos interactivos son los enlaces del sidebar (accesibles
                por teclado); su activación con Enter también burbujea este
                onClick, así que los usuarios de teclado quedan cubiertos. */}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
            <div onClick={() => setOpen(false)}>
              <LessonSidebar
                courseSlug={courseSlug}
                lessons={lessons}
                currentLessonId={currentLessonId}
              />
            </div>
            {hasFinalProject && (
              <Link
                href={`/cursos/${courseSlug}/proyecto-final`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md border border-gold/25 bg-gold/5 px-3 py-2.5 text-sm font-medium text-gold-foreground hover:bg-gold/10 dark:text-gold"
              >
                🎓 Proyecto final
              </Link>
            )}
          </SheetContent>
        </Sheet>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>
              {completed}/{lessons.length} lecciones
            </span>
            {remainingLabel && <span className="shrink-0">{remainingLabel}</span>}
          </div>
          <Progress value={percentComplete} className="h-1.5" />
        </div>
      </div>
    </div>
  );
}
