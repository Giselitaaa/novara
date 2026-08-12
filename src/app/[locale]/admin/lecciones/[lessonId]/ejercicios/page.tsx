import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LessonExercisesEditor } from "@/components/admin/exercises/lesson-exercises-editor";
import { Link } from "@/i18n/navigation";
import { db } from "@/lib/db";

export const metadata: Metadata = { title: "Ejercicios de la lección" };

type Props = { params: Promise<{ lessonId: string }> };

export default async function AdminLessonExercisesPage({ params }: Props) {
  const { lessonId } = await params;
  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    include: {
      module: { include: { course: { select: { id: true, title: true } } } },
      exercises: {
        orderBy: { sortOrder: "asc" },
        include: { questions: { orderBy: { order: "asc" } } },
      },
    },
  });
  if (!lesson) notFound();

  const course = lesson.module?.course;

  return (
    <div className="flex flex-col gap-6">
      <Link
        href={`/admin/lecciones/${lessonId}` as never}
        className="flex w-fit items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" /> Bloques de la lección
      </Link>

      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Ejercicios{course && ` · ${course.title}`}
        </p>
        <h1 className="font-display text-2xl tracking-tighter">{lesson.title}</h1>
      </div>

      <LessonExercisesEditor
        lessonId={lesson.id}
        exercises={lesson.exercises.map((e) => ({
          id: e.id,
          category: e.category,
          title: e.title,
          instructions: e.instructions,
          config: (e.config ?? null) as Record<string, unknown> | null,
          questions: e.questions.map((q) => ({
            id: q.id,
            kind: q.kind,
            data: q.data as Record<string, unknown>,
          })),
        }))}
      />
    </div>
  );
}
