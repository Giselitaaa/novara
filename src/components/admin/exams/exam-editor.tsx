"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/i18n/navigation";
import {
  attachQuestionToExam,
  detachQuestionFromExam,
  updateExamSettings,
} from "@/modules/exams/server/actions";

type AttachedQuestion = {
  question: { id: string; statement: string; questionType: { label: string } };
  points: unknown;
};

type BankQuestion = { id: string; statement: string; questionType: { label: string } };

export function ExamSettingsForm({
  examId,
  title,
  passingScore,
  timeLimitMinutes,
  maxAttempts,
}: {
  examId: string;
  title: string;
  passingScore: number;
  timeLimitMinutes: number | null;
  maxAttempts: number | null;
}) {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await updateExamSettings(examId, formData);
      toast.success(result.message);
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-lg flex-col gap-4">
      <FormField id="title" label="Título">
        <Input id="title" name="title" defaultValue={title} required />
      </FormField>
      <div className="grid grid-cols-3 gap-4">
        <FormField id="passingScore" label="Nota mínima (%)">
          <Input
            id="passingScore"
            name="passingScore"
            type="number"
            defaultValue={passingScore}
          />
        </FormField>
        <FormField id="timeLimitMinutes" label="Tiempo límite (min)">
          <Input
            id="timeLimitMinutes"
            name="timeLimitMinutes"
            type="number"
            defaultValue={timeLimitMinutes ?? undefined}
          />
        </FormField>
        <FormField id="maxAttempts" label="Intentos máx.">
          <Input
            id="maxAttempts"
            name="maxAttempts"
            type="number"
            defaultValue={maxAttempts ?? undefined}
          />
        </FormField>
      </div>
      <Button type="submit" variant="gold" disabled={isPending} className="w-fit">
        {isPending ? "Guardando…" : "Guardar ajustes"}
      </Button>
    </form>
  );
}

export function ExamQuestionPicker({
  examId,
  attached,
  bank,
}: {
  examId: string;
  attached: AttachedQuestion[];
  bank: BankQuestion[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const attachedIds = new Set(attached.map((a) => a.question.id));
  const available = bank.filter((q) => !attachedIds.has(q.id));

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div>
        <h3 className="mb-3 font-display text-lg tracking-tighter">
          Preguntas del examen ({attached.length})
        </h3>
        <ul className="flex flex-col gap-2">
          {attached.map(({ question }) => (
            <li
              key={question.id}
              className="flex items-center justify-between gap-3 rounded-md border border-border px-3.5 py-2.5 text-sm"
            >
              <span>
                {question.statement}{" "}
                <span className="text-xs text-muted-foreground">
                  ({question.questionType.label})
                </span>
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Quitar pregunta del examen"
                disabled={isPending}
                onClick={() =>
                  startTransition(async () => {
                    await detachQuestionFromExam(examId, question.id);
                    router.refresh();
                  })
                }
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </li>
          ))}
          {attached.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Añade preguntas desde el banco de la derecha.
            </p>
          )}
        </ul>
      </div>

      <div>
        <h3 className="mb-3 font-display text-lg tracking-tighter">Banco de preguntas</h3>
        <ul className="flex flex-col gap-2">
          {available.map((question) => (
            <li
              key={question.id}
              className="flex items-center justify-between gap-3 rounded-md border border-dashed border-border px-3.5 py-2.5 text-sm"
            >
              <span>
                {question.statement}{" "}
                <span className="text-xs text-muted-foreground">
                  ({question.questionType.label})
                </span>
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={isPending}
                onClick={() =>
                  startTransition(async () => {
                    await attachQuestionToExam(examId, question.id);
                    router.refresh();
                  })
                }
              >
                Añadir
              </Button>
            </li>
          ))}
          {available.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No quedan más preguntas disponibles en el banco.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
