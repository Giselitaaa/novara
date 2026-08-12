"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { startExamAttempt } from "@/modules/exams/server/student-actions";

export function StartExamButton({ examId }: { examId: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="gold"
      size="lg"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          try {
            const attempt = await startExamAttempt(examId);
            router.push(`/examenes/${examId}/intento/${attempt.id}` as never);
          } catch (error) {
            toast.error(
              error instanceof Error ? error.message : "No se pudo iniciar el examen."
            );
          }
        })
      }
    >
      {isPending ? "Preparando…" : "Empezar examen"}
    </Button>
  );
}
