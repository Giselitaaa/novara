import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

import { ExamRunner } from "@/components/exams/exam-runner";
import { Container } from "@/components/layout/container";
import { db } from "@/lib/db";
import { requireSession } from "@/lib/require-session";
import { getExamForTaking } from "@/modules/exams/server/student-queries";

type Props = { params: Promise<{ examId: string; attemptId: string }> };

export default async function ExamAttemptPage({ params }: Props) {
  const { examId, attemptId } = await params;
  const session = await requireSession();
  if (!session?.user?.id)
    redirect(`/auth/iniciar-sesion?callbackUrl=/examenes/${examId}`);

  const attempt = await db.examAttempt.findUnique({ where: { id: attemptId } });
  if (!attempt || attempt.userId !== session.user.id) notFound();
  if (attempt.submittedAt) {
    redirect(`/examenes/${examId}/resultado/${attemptId}` as never);
  }

  const exam = await getExamForTaking(examId);
  if (!exam) notFound();

  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <ExamRunner
        attemptId={attemptId}
        examId={examId}
        title={exam.title}
        questions={exam.questions}
        timeLimitMinutes={exam.timeLimitMinutes}
      />
    </Container>
  );
}
