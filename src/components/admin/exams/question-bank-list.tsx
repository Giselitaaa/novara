"use client";

import { Trash2 } from "lucide-react";
import { useState, useTransition } from "react";

import { QuestionForm } from "@/components/admin/exams/question-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { deleteQuestion } from "@/modules/exams/server/actions";

type QuestionRow = {
  id: string;
  statement: string;
  explanation: string | null;
  questionTypeId: string;
  questionType: { label: string };
  options: { id: string; text: string; isCorrect: boolean }[];
};

export function QuestionBankList({
  questions,
  questionTypes,
}: {
  questions: QuestionRow[];
  questionTypes: { id: string; key: string; label: string }[];
}) {
  const router = useRouter();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-col gap-3">
      {questions.map((question) => (
        <div key={question.id} className="rounded-md border border-border p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs text-muted-foreground">
                {question.questionType.label}
              </p>
              <p className="font-medium">{question.statement}</p>
            </div>
            <div className="flex shrink-0 gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setEditingId(editingId === question.id ? null : question.id)
                }
              >
                {editingId === question.id ? "Cerrar" : "Editar"}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Eliminar pregunta del banco"
                disabled={isPending}
                onClick={() => {
                  if (confirm("¿Eliminar esta pregunta del banco?")) {
                    startTransition(async () => {
                      await deleteQuestion(question.id);
                      router.refresh();
                    });
                  }
                }}
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </div>
          </div>

          {editingId === question.id && (
            <div className="mt-4 border-t border-border pt-4">
              <QuestionForm
                questionTypes={questionTypes}
                existing={question}
                onDone={() => setEditingId(null)}
              />
            </div>
          )}
        </div>
      ))}
      {questions.length === 0 && (
        <p className="text-sm text-muted-foreground">
          Todavía no hay preguntas en el banco.
        </p>
      )}
    </div>
  );
}
