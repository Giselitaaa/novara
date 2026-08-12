import { CheckCircle2, Clock, ListChecks, RotateCcw, XCircle } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StartExamButton } from "@/components/exams/start-exam-button";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Link, redirect } from "@/i18n/navigation";
import { requireSession } from "@/lib/require-session";
import {
  getAttemptHistory,
  getExamForTaking,
  getUserAttemptCount,
} from "@/modules/exams/server/student-queries";

export const metadata: Metadata = { title: "Examen" };

type Props = { params: Promise<{ examId: string }> };

export default async function ExamStartPage({ params }: Props) {
  const { examId } = await params;
  const session = await requireSession();
  if (!session?.user?.id)
    redirect(`/auth/iniciar-sesion?callbackUrl=/examenes/${examId}` as never);

  const exam = await getExamForTaking(examId);
  if (!exam) notFound();

  const [attemptsUsed, history] = await Promise.all([
    getUserAttemptCount(examId, session.user.id),
    getAttemptHistory(examId, session.user.id),
  ]);

  const canAttempt = !exam.maxAttempts || attemptsUsed < exam.maxAttempts;

  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <h1 className="mb-2 font-display text-2xl tracking-tighter sm:text-3xl">
        {exam.title}
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Lee las instrucciones antes de empezar — el temporizador arranca en cuanto pulses
        «Empezar».
      </p>

      <Card className="mb-8">
        <CardContent className="grid grid-cols-3 gap-4 pt-6 text-center text-sm">
          <div>
            <ListChecks className="mx-auto mb-1.5 size-5 text-gold" />
            <p className="font-medium">{exam.questions.length}</p>
            <p className="text-xs text-muted-foreground">preguntas</p>
          </div>
          <div>
            <Clock className="mx-auto mb-1.5 size-5 text-gold" />
            <p className="font-medium">
              {exam.timeLimitMinutes ? `${exam.timeLimitMinutes} min` : "Sin límite"}
            </p>
            <p className="text-xs text-muted-foreground">tiempo</p>
          </div>
          <div>
            <CheckCircle2 className="mx-auto mb-1.5 size-5 text-gold" />
            <p className="font-medium">{exam.passingScore}%</p>
            <p className="text-xs text-muted-foreground">nota mínima</p>
          </div>
        </CardContent>
      </Card>

      {canAttempt ? (
        <StartExamButton examId={examId} />
      ) : (
        <p className="text-sm text-destructive">
          Has agotado tus {exam.maxAttempts} intento(s) permitido(s) para este examen.
        </p>
      )}

      {history.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-3 flex items-center gap-2 font-display text-lg tracking-tighter">
            <RotateCcw className="size-4.5 text-gold" /> Historial de intentos
          </h2>
          <ul className="flex flex-col gap-2">
            {history.map((attempt) => (
              <li
                key={attempt.id}
                className="flex items-center justify-between rounded-md border border-border px-3.5 py-2.5 text-sm"
              >
                <span className="flex items-center gap-2">
                  {attempt.passed ? (
                    <CheckCircle2 className="size-4 text-success" />
                  ) : (
                    <XCircle className="size-4 text-destructive" />
                  )}
                  {attempt.score !== null
                    ? `${Number(attempt.score).toFixed(0)}%`
                    : "En curso"}
                </span>
                {attempt.submittedAt && (
                  <Link
                    href={`/examenes/${examId}/resultado/${attempt.id}`}
                    className="text-xs font-medium text-gold-foreground underline dark:text-gold"
                  >
                    Ver resultado
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}
