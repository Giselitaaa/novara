import { CheckCircle2, XCircle } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, redirect } from "@/i18n/navigation";
import { requireSession } from "@/lib/require-session";
import { getAttemptResult } from "@/modules/exams/server/student-queries";

export const metadata: Metadata = { title: "Resultado del examen" };

type Props = { params: Promise<{ examId: string; attemptId: string }> };

export default async function ExamResultPage({ params }: Props) {
  const { examId, attemptId } = await params;
  const session = await requireSession();
  if (!session?.user?.id)
    redirect(`/auth/iniciar-sesion?callbackUrl=/examenes/${examId}` as never);

  const attempt = await getAttemptResult(attemptId, session.user.id);
  if (!attempt || !attempt.submittedAt) notFound();

  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <Card className="mb-8">
        <CardContent className="flex flex-col items-center gap-3 pb-8 pt-8 text-center">
          {attempt.passed ? (
            <CheckCircle2 className="size-10 text-success" />
          ) : (
            <XCircle className="size-10 text-destructive" />
          )}
          <h1 className="font-display text-2xl tracking-tighter">
            {attempt.passed ? "¡Examen aprobado!" : "No has alcanzado la nota mínima"}
          </h1>
          <p className="font-mono text-3xl tracking-tighter">
            {Number(attempt.score).toFixed(0)}%
          </p>
          <p className="text-sm text-muted-foreground">
            Nota mínima requerida: {Number(attempt.exam.passingScore)}%
          </p>
        </CardContent>
      </Card>

      <h2 className="mb-4 font-display text-lg tracking-tighter">
        Revisión de respuestas
      </h2>
      <div className="flex flex-col gap-4">
        {attempt.answers.map((answer) => (
          <div key={answer.id} className="rounded-lg border border-border p-5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <p className="font-medium">{answer.question.statement}</p>
              {answer.isCorrect ? (
                <CheckCircle2 className="size-5 shrink-0 text-success" />
              ) : (
                <XCircle className="size-5 shrink-0 text-destructive" />
              )}
            </div>

            {answer.question.questionType.key === "respuesta_corta" ? (
              <p className="text-sm text-muted-foreground">
                Tu respuesta:{" "}
                <span className="text-foreground">{answer.freeTextAnswer}</span>
              </p>
            ) : (
              <ul className="flex flex-col gap-1.5">
                {answer.question.options.map((option) => {
                  const wasSelected = (
                    answer.selectedOptionIds as string[] | null
                  )?.includes(option.id);
                  return (
                    <li
                      key={option.id}
                      className={`rounded-md border px-3 py-1.5 text-sm ${
                        option.isCorrect
                          ? "border-success/40 bg-success/10"
                          : wasSelected
                            ? "border-destructive/40 bg-destructive/10"
                            : "border-border"
                      }`}
                    >
                      {option.text}
                      {wasSelected && !option.isCorrect && " (tu respuesta)"}
                      {option.isCorrect && " (correcta)"}
                    </li>
                  );
                })}
              </ul>
            )}

            {answer.question.explanation && (
              <p className="mt-2 text-xs text-muted-foreground">
                {answer.question.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Button asChild variant="outline">
          <Link href={`/examenes/${examId}`}>Volver al examen</Link>
        </Button>
      </div>
    </Container>
  );
}
