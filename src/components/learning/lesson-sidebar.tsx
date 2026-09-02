"use client";

import {
  CheckCircle2,
  Circle,
  FileText,
  Headphones,
  Link2,
  Lock,
  PencilLine,
  PlayCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const CONTENT_ICONS: Record<string, LucideIcon> = {
  video: PlayCircle,
  audio: Headphones,
  texto: FileText,
  pdf: FileText,
  enlace_externo: Link2,
  ejercicio: PencilLine,
};

type SidebarLesson = {
  id: string;
  title: string;
  moduleId: string;
  moduleTitle: string;
  contentType: { key: string };
  isCompleted: boolean;
  isLocked?: boolean;
  /** Motivo del bloqueo para la UI (ej. "Se desbloquea el 14 de marzo"). */
  unlockLabel?: string | null;
};

export function LessonSidebar({
  courseSlug,
  lessons,
  currentLessonId,
}: {
  courseSlug: string;
  lessons: SidebarLesson[];
  currentLessonId: string;
}) {
  const moduleGroups = lessons.reduce<
    Record<string, { title: string; lessons: SidebarLesson[] }>
  >((acc, lesson) => {
    acc[lesson.moduleId] ??= { title: lesson.moduleTitle, lessons: [] };
    acc[lesson.moduleId]!.lessons.push(lesson);
    return acc;
  }, {});

  return (
    <nav aria-label="Contenido del curso" className="flex flex-col gap-5">
      {Object.entries(moduleGroups).map(([moduleId, group]) => (
        <div key={moduleId}>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {group.title}
          </p>
          <ul className="flex flex-col gap-0.5">
            {group.lessons.map((lesson) => {
              const Icon = CONTENT_ICONS[lesson.contentType.key] ?? FileText;
              const isCurrent = lesson.id === currentLessonId;

              if (lesson.isLocked) {
                return (
                  <li key={lesson.id}>
                    <span className="flex cursor-not-allowed flex-col gap-0.5 rounded-md px-2.5 py-2 text-sm text-muted-foreground/50">
                      <span className="flex items-center gap-2.5">
                        <Lock className="size-4 shrink-0" />
                        <Icon className="size-3.5 shrink-0" />
                        <span className="truncate">{lesson.title}</span>
                      </span>
                      {lesson.unlockLabel && (
                        <span className="pl-[26px] text-xs text-muted-foreground/70">
                          {lesson.unlockLabel}
                        </span>
                      )}
                    </span>
                  </li>
                );
              }

              return (
                <li key={lesson.id}>
                  <Link
                    href={`/cursos/${courseSlug}/aprender/${lesson.id}`}
                    className={cn(
                      "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
                      isCurrent
                        ? "bg-gold/12 font-medium text-gold-foreground dark:text-gold"
                        : "text-foreground/80 hover:bg-accent"
                    )}
                  >
                    {lesson.isCompleted ? (
                      <CheckCircle2 className="size-4 shrink-0 text-success" />
                    ) : (
                      <Circle className="size-4 shrink-0 text-muted-foreground" />
                    )}
                    <Icon className="size-3.5 shrink-0 text-muted-foreground" />
                    <span className="truncate">{lesson.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
