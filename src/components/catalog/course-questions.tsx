import { MessageCircle } from "lucide-react";

import { EmptyState } from "@/components/ui/empty-state";
import type { CourseQuestionDTO } from "@/modules/courses/types/course-dto";

function formatRelativeDate(date: Date) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

/**
 * Preguntas y respuestas reales sobre el curso (`CourseQuestion` /
 * `CourseQuestionAnswer`). Cumple la función de "FAQ" del curso sin
 * inventar preguntas frecuentes genéricas: son preguntas reales de
 * alumnos, respondidas por NOVARA o por la comunidad en el futuro.
 */
export function CourseQuestions({ questions }: { questions: CourseQuestionDTO[] }) {
  if (questions.length === 0) {
    return (
      <EmptyState
        icon={MessageCircle}
        title="Todavía no hay preguntas sobre este curso"
        description="Sé el primero en preguntar algo una vez inscrito."
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {questions.map((question) => (
        <div key={question.id} className="border-b border-border pb-6 last:border-0">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-medium">{question.authorName}</p>
            <span className="shrink-0 text-xs text-muted-foreground">
              {formatRelativeDate(question.createdAt)}
            </span>
          </div>
          <p className="mt-1.5 text-sm text-foreground/90">{question.body}</p>

          {question.answers.length > 0 && (
            <div className="mt-4 flex flex-col gap-3 border-l-2 border-gold/30 pl-4">
              {question.answers.map((answer) => (
                <div key={answer.id}>
                  <p className="text-xs font-medium text-gold-foreground dark:text-gold">
                    {answer.authorName}
                  </p>
                  <p className="mt-1 text-sm text-foreground/90">{answer.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
