"use client";

import { Plus } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { createQuestion, updateQuestion } from "@/modules/exams/server/actions";

type ExistingOption = { id: string; text: string; isCorrect: boolean };

interface QuestionFormProps {
  questionTypes: { id: string; key: string; label: string }[];
  existing?: {
    id: string;
    statement: string;
    explanation: string | null;
    questionTypeId: string;
    options: ExistingOption[];
  };
  onDone?: () => void;
}

/**
 * Formulario de pregunta reutilizado para crear y editar. Soporta
 * opción múltiple / verdadero-falso con hasta 6 opciones marcables
 * como correctas — cubre el caso de uso principal del banco de
 * preguntas sin necesitar una pantalla distinta por tipo.
 */
export function QuestionForm({ questionTypes, existing, onDone }: QuestionFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [optionCount, setOptionCount] = useState(
    Math.max(existing?.options.length ?? 2, 2)
  );

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      if (existing) {
        const result = await updateQuestion(existing.id, formData);
        toast.success(result.message);
        onDone?.();
      } else {
        await createQuestion(formData);
        toast.success("Pregunta creada.");
        onDone?.();
      }
      router.refresh();
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-xl flex-col gap-4">
      {!existing && (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="questionTypeId">Tipo de pregunta</Label>
          <select
            id="questionTypeId"
            name="questionTypeId"
            className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
          >
            {questionTypes.map((qt) => (
              <option key={qt.id} value={qt.id}>
                {qt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <FormField id="statement" label="Enunciado">
        <Input
          id="statement"
          name="statement"
          defaultValue={existing?.statement}
          required
        />
      </FormField>

      <FormField id="explanation" label="Explicación (se muestra tras responder)">
        <Input
          id="explanation"
          name="explanation"
          defaultValue={existing?.explanation ?? ""}
        />
      </FormField>

      <div className="flex flex-col gap-2">
        <Label>Opciones (marca las correctas)</Label>
        {Array.from({ length: optionCount }).map((_, index) => {
          const opt = existing?.options[index];
          return (
            <div key={index} className="flex items-center gap-2.5">
              {existing && <input type="hidden" name="optionId" value={opt?.id ?? ""} />}
              <Checkbox
                name="optionCorrect"
                value={String(index)}
                defaultChecked={opt?.isCorrect}
              />
              <Input
                name="optionText"
                defaultValue={opt?.text ?? ""}
                placeholder={`Opción ${index + 1}`}
              />
            </div>
          );
        })}
        {!existing && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="w-fit"
            onClick={() => setOptionCount((c) => c + 1)}
          >
            <Plus className="size-4" /> Añadir opción
          </Button>
        )}
      </div>

      <Button type="submit" variant="gold" disabled={isPending} className="mt-2 w-fit">
        {isPending ? "Guardando…" : existing ? "Guardar cambios" : "Crear pregunta"}
      </Button>
    </form>
  );
}
