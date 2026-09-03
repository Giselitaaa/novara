import { ExercisePlayer } from "@/components/learning/exercise-player";
import { Link } from "@/i18n/navigation";

import { LessonBlockRenderer, type LessonBlockWithDeck } from "./lesson-block-renderer";

export type ExerciseForPlayer = {
  id: string;
  category: string;
  title: string;
  instructions: string | null;
  config: Record<string, unknown> | null;
  questions: { id: string; kind: string; data: Record<string, unknown> }[];
};

/**
 * Renderiza los bloques de una lección EN ORDEN. Los bloques de tipo
 * EXERCISE se pintan como el reproductor del ejercicio referenciado (en su
 * posición dentro del flujo), y los EXAM como un enlace para realizar el
 * examen. El resto se delega en `LessonBlockRenderer`.
 */
export function LessonBlocksRenderer({
  blocks,
  exercisesById,
  lessonId,
}: {
  blocks: LessonBlockWithDeck[];
  exercisesById?: Map<string, ExerciseForPlayer>;
  lessonId?: string;
}) {
  if (!blocks.length) return null;

  return (
    <div className="flex flex-col gap-8">
      {blocks.map((block) => {
        const data = (block.data ?? null) as Record<string, unknown> | null;

        if (block.type === "EXERCISE") {
          const exerciseId = data?.exerciseId as string | undefined;
          const exercise = exerciseId ? exercisesById?.get(exerciseId) : undefined;
          return exercise ? (
            <ExercisePlayer key={block.id} exercise={exercise} lessonId={lessonId} />
          ) : null;
        }

        if (block.type === "EXAM") {
          const examId = data?.examId as string | undefined;
          return examId ? (
            <Link
              key={block.id}
              href={`/examenes/${examId}/secciones` as never}
              className="flex w-fit items-center gap-2 rounded-md border border-gold/25 bg-gold/5 px-4 py-3 text-sm font-medium text-gold-foreground hover:bg-gold/10 dark:text-gold"
            >
              🎯 Realizar examen
            </Link>
          ) : null;
        }

        return <LessonBlockRenderer key={block.id} block={block} />;
      })}
    </div>
  );
}
