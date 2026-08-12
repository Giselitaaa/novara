import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { Container } from "@/components/layout/container";
import { ComposedExamPlayer } from "@/components/learning/composed-exam-player";
import { requireSession } from "@/lib/require-session";
import { getComposedExamForStudent } from "@/modules/exams/server/composition-queries";

export const metadata: Metadata = { title: "Examen" };

type Props = { params: Promise<{ examId: string }> };

export default async function ComposedExamPage({ params }: Props) {
  const { examId } = await params;
  const session = await requireSession();
  if (!session?.user?.id) redirect(`/auth/iniciar-sesion?callbackUrl=/examenes/${examId}/secciones`);

  const exam = await getComposedExamForStudent(examId);
  if (!exam) notFound();

  return (
    <Container className="py-10 sm:py-14">
      {exam.sections.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border p-8 text-center">
          <h1 className="font-display text-xl tracking-tighter">{exam.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Este examen todavía no tiene secciones configuradas.
          </p>
        </div>
      ) : (
        <ComposedExamPlayer
          examId={exam.id}
          title={exam.title}
          passingScore={Number(exam.passingScore)}
          timeLimitMinutes={exam.timeLimitMinutes}
          sections={exam.sections.map((s) => ({
            id: s.id,
            weight: Number(s.weight),
            category: s.exercise.category,
            exerciseTitle: s.exercise.title,
            instructions: s.exercise.instructions,
            config: (s.exercise.config ?? null) as Record<string, unknown> | null,
            questions: s.exercise.questions.map((q) => ({
              id: q.id,
              kind: q.kind,
              data: q.data as Record<string, unknown>,
            })),
          }))}
        />
      )}
    </Container>
  );
}
