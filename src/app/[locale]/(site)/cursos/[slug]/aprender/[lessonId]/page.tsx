import { ShieldQuestion } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { ExercisePlayer } from "@/components/learning/exercise-player";
import { ExerciseSubmissionPanel } from "@/components/learning/exercise-submission-panel";
import { LessonActionsBar } from "@/components/learning/lesson-actions-bar";
import { LessonContentViewer } from "@/components/learning/lesson-content-viewer";
import { LessonNotesPanel } from "@/components/learning/lesson-notes-panel";
import { LessonPedagogyBlocks } from "@/components/learning/lesson-pedagogy-blocks";
import { LessonSidebar } from "@/components/learning/lesson-sidebar";
import { MobileLessonNav } from "@/components/learning/mobile-lesson-nav";
import { LessonBlocksRenderer } from "@/components/lessons/lesson-blocks-renderer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link, redirect } from "@/i18n/navigation";
import { formatSeconds } from "@/lib/format";
import { requireSession } from "@/lib/require-session";
import {
  getCourseLearningData,
  getLessonNote,
} from "@/modules/enrollments/server/learning-queries";
import { getLatestSubmission } from "@/modules/exercises/server/actions";

export const metadata: Metadata = { title: "Aprendiendo" };

type Props = { params: Promise<{ slug: string; lessonId: string }> };

export default async function LessonPlayerPage({ params }: Props) {
  const { slug, lessonId } = await params;
  const session = await requireSession();
  if (!session?.user?.id) {
    redirect(
      `/auth/iniciar-sesion?callbackUrl=/cursos/${slug}/aprender/${lessonId}` as never
    );
  }

  const data = await getCourseLearningData(slug, session.user.id);
  if (!data || !data.enrolled) notFound();

  const currentIndex = data.lessons.findIndex((l) => l.id === lessonId);
  const currentLesson = data.lessons[currentIndex];
  if (!currentLesson) notFound();

  // Cumplimiento real del bloqueo por test de módulo, no solo visual:
  // una visita directa a la URL de una lección bloqueada también se
  // rechaza en el servidor.
  if (currentLesson.isLocked) {
    redirect(`/cursos/${slug}` as never);
  }

  const note = await getLessonNote(session.user.id, lessonId);
  const latestSubmission =
    currentLesson.contentType.key === "ejercicio"
      ? await getLatestSubmission(session.user.id, lessonId)
      : null;

  const totalLessons = data.lessons.length;
  const completedCount = data.lessons.filter(
    (l) => data.progressByLessonId.get(l.id)?.status === "completado"
  ).length;
  const percentComplete = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

  const sidebarLessons = data.lessons.map((l) => ({
    id: l.id,
    title: l.title,
    moduleId: l.moduleId,
    moduleTitle: l.moduleTitle,
    contentType: l.contentType,
    isCompleted: data.progressByLessonId.get(l.id)?.status === "completado",
    isLocked: l.isLocked,
  }));

  const progress = data.progressByLessonId.get(lessonId);

  // ¿Es esta la última lección de su módulo, y ese módulo tiene test?
  const currentModule = data.course.modules.find((m) => m.id === currentLesson.moduleId);
  const lessonsOfModule = data.lessons.filter(
    (l) => l.moduleId === currentLesson.moduleId
  );
  const isLastLessonOfModule =
    lessonsOfModule[lessonsOfModule.length - 1]?.id === lessonId;
  const moduleTest = currentModule?.exams[0];

  // Tiempo restante estimado: suma de la duración de las lecciones aún
  // no completadas. Si el contenido no tiene duraciones, no se muestra
  // (mejor nada que un "0 min" engañoso).
  const remainingSeconds = data.lessons
    .filter((l) => data.progressByLessonId.get(l.id)?.status !== "completado")
    .reduce((sum, l) => sum + (l.durationSeconds ?? 0), 0);
  const remainingLabel =
    remainingSeconds > 0
      ? `${Math.max(1, Math.round(remainingSeconds / 60))} min restantes`
      : null;

  // Ejercicios: un bloque EXERCISE los coloca en su posición; los no
  // referenciados por ningún bloque se muestran al final del contenido.
  const exercisesById = new Map(
    currentLesson.exercises.map((ex) => [
      ex.id,
      {
        id: ex.id,
        category: ex.category,
        title: ex.title,
        instructions: ex.instructions,
        config: (ex.config ?? null) as Record<string, unknown> | null,
        questions: ex.questions.map((q) => ({
          id: q.id,
          kind: q.kind,
          data: q.data as Record<string, unknown>,
        })),
      },
    ])
  );
  const referencedExerciseIds = new Set(
    currentLesson.blocks
      .filter((b) => b.type === "EXERCISE")
      .map((b) => (b.data as { exerciseId?: string } | null)?.exerciseId)
      .filter((id): id is string => Boolean(id))
  );
  const unreferencedExercises = currentLesson.exercises.filter(
    (ex) => !referencedExerciseIds.has(ex.id)
  );

  return (
    <>
      <MobileLessonNav
        courseSlug={slug}
        lessons={sidebarLessons}
        currentLessonId={lessonId}
        percentComplete={percentComplete}
        remainingLabel={remainingLabel}
        hasFinalProject={Boolean(data.course.finalProject)}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
        <aside className="hidden border-r border-border bg-muted/20 p-5 lg:block">
          <Link
            href={`/cursos/${slug}`}
            className="mb-4 block text-xs text-muted-foreground hover:text-foreground"
          >
            ← Volver al curso
          </Link>

          <div className="mb-5 rounded-md border border-border bg-background p-3">
            <div className="mb-1.5 flex items-center justify-between gap-2 text-xs text-muted-foreground">
              <span>{Math.round(percentComplete)}% completado</span>
              {remainingLabel && <span>{remainingLabel}</span>}
            </div>
            <Progress value={percentComplete} className="h-1.5" />
          </div>

          <LessonSidebar
            courseSlug={slug}
            lessons={sidebarLessons}
            currentLessonId={lessonId}
          />

          {data.course.finalProject && (
            <Link
              href={`/cursos/${slug}/proyecto-final`}
              className="mt-5 flex items-center gap-2 rounded-md border border-gold/25 bg-gold/5 px-3 py-2.5 text-sm font-medium text-gold-foreground hover:bg-gold/10 dark:text-gold"
            >
              🎓 Proyecto final
            </Link>
          )}
        </aside>

        <Container className="max-w-3xl py-8 sm:py-10">
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {currentLesson.moduleTitle}
          </p>
          <h1 className="mb-1 font-display text-2xl tracking-tighter">
            {currentLesson.title}
          </h1>
          {currentLesson.durationSeconds && (
            <p className="mb-6 text-sm text-muted-foreground">
              Duración estimada: {formatSeconds(currentLesson.durationSeconds)}
            </p>
          )}

          <div className="mb-6">
            <LessonPedagogyBlocks pedagogy={currentLesson.pedagogy} />
          </div>

          <LessonBlocksRenderer
            blocks={currentLesson.blocks}
            exercisesById={exercisesById}
          />

          {unreferencedExercises.length > 0 && (
            <div className="mt-6 flex flex-col gap-4">
              {unreferencedExercises.map((ex) => (
                <ExercisePlayer
                  key={ex.id}
                  exercise={{
                    id: ex.id,
                    category: ex.category,
                    title: ex.title,
                    instructions: ex.instructions,
                    config: (ex.config ?? null) as Record<string, unknown> | null,
                    questions: ex.questions.map((q) => ({
                      id: q.id,
                      kind: q.kind,
                      data: q.data as Record<string, unknown>,
                    })),
                  }}
                />
              ))}
            </div>
          )}

          <LessonContentViewer
            lessonId={lessonId}
            content={{
              contentTypeKey: currentLesson.contentType.key,
              body: currentLesson.content?.body ?? null,
              externalUrl: currentLesson.content?.externalUrl ?? null,
              exerciseInstructions: currentLesson.exercise?.instructions ?? null,
              lastPositionSeconds: progress?.lastPositionSeconds ?? 0,
            }}
          />

          {currentLesson.contentType.key === "ejercicio" && (
            <div className="mt-6">
              <ExerciseSubmissionPanel
                lessonId={lessonId}
                courseSlug={slug}
                latestSubmission={latestSubmission}
              />
            </div>
          )}

          {currentLesson.resources.length > 0 && (
            <div className="mt-6 flex flex-col gap-2">
              <p className="font-display text-sm tracking-tighter">
                Recursos descargables
              </p>
              {currentLesson.resources.map((r) => (
                <a
                  key={r.resource.id}
                  href={r.resource.fileUrl}
                  target="_blank"
                  className="flex w-fit items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent"
                >
                  {r.resource.title}
                </a>
              ))}
            </div>
          )}

          <div className="mt-8">
            <LessonNotesPanel lessonId={lessonId} initialNote={note?.body ?? ""} />
          </div>

          {isLastLessonOfModule && moduleTest && (
            <div className="mt-8 flex items-center justify-between gap-4 rounded-lg border border-gold/30 bg-gold/5 p-5">
              <div className="flex items-center gap-2.5">
                <ShieldQuestion className="size-5 text-gold" />
                <div>
                  <p className="font-display text-sm tracking-tighter">
                    Test de &ldquo;{currentLesson.moduleTitle}&rdquo;
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Necesitas aprobarlo (nota mínima {Number(moduleTest.passingScore)}%)
                    para desbloquear el siguiente módulo.
                  </p>
                </div>
              </div>
              <Button asChild variant="gold" size="sm">
                <Link href={`/examenes/${moduleTest.id}`}>Hacer el test</Link>
              </Button>
            </div>
          )}

          <div className="mt-8">
            <LessonActionsBar
              courseSlug={slug}
              lessonId={lessonId}
              isCompleted={progress?.status === "completado"}
              isFavorite={progress?.isFavorite ?? false}
              percentComplete={percentComplete}
              prevLessonId={data.lessons[currentIndex - 1]?.id ?? null}
              nextLessonId={data.lessons[currentIndex + 1]?.id ?? null}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
