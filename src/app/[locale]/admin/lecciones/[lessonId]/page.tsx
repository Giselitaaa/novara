import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LessonBlocksEditor } from "@/components/admin/lessons/lesson-blocks-editor";
import { Link } from "@/i18n/navigation";
import {
  getLessonWithBlocks,
  listCourseExamOptions,
  listDeckOptions,
  listLessonExerciseOptions,
  listTemplates,
} from "@/modules/lessons/server/block-queries";

export const metadata: Metadata = { title: "Editar bloques" };

type Props = { params: Promise<{ lessonId: string }> };

export default async function AdminLessonBlocksPage({ params }: Props) {
  const { lessonId } = await params;
  const [lesson, decks, exerciseOptions, examOptions, templates] = await Promise.all([
    getLessonWithBlocks(lessonId),
    listDeckOptions(),
    listLessonExerciseOptions(lessonId),
    listCourseExamOptions(lessonId),
    listTemplates(),
  ]);
  if (!lesson) notFound();

  const course = lesson.module?.course;

  return (
    <div className="flex flex-col gap-6">
      {course && (
        <Link
          href={`/admin/cursos/${course.id}` as never}
          className="flex w-fit items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> {course.title}
        </Link>
      )}

      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Editor de bloques
          </p>
          <h1 className="font-display text-2xl tracking-tighter">{lesson.title}</h1>
        </div>
        <Link
          href={`/admin/lecciones/${lesson.id}/ejercicios` as never}
          className="rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-accent"
        >
          Ejercicios de la lección →
        </Link>
      </div>

      <LessonBlocksEditor
        lessonId={lesson.id}
        courseSlug={course?.slug ?? null}
        decks={decks}
        exerciseOptions={exerciseOptions}
        examOptions={examOptions}
        templates={templates}
        blocks={lesson.blocks.map((b) => ({
          id: b.id,
          type: b.type,
          title: b.title,
          content: b.content,
          imageUrl: b.imageUrl,
          videoUrl: b.videoUrl,
          audioUrl: b.audioUrl,
          data: (b.data ?? null) as Record<string, unknown> | null,
          deckId: b.deckId,
          deckTitle: b.deck?.title ?? null,
        }))}
      />
    </div>
  );
}
