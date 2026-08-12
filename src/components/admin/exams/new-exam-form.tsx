"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { createExam } from "@/modules/exams/server/actions";

export function NewExamForm({ courses }: { courses: { id: string; title: string }[] }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const exam = await createExam(formData);
        toast.success("Examen creado.");
        router.push(`/admin/examenes/${exam.id}`);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo crear el examen."
        );
      }
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-lg flex-col gap-4">
      <FormField id="title" label="Título del examen">
        <Input
          id="title"
          name="title"
          required
          placeholder="Ej. Examen final del módulo 3"
        />
      </FormField>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="courseId">Curso (opcional)</Label>
        <select
          id="courseId"
          name="courseId"
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          <option value="">Sin curso asignado todavía</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <FormField id="passingScore" label="Nota mínima (%)">
          <Input
            id="passingScore"
            name="passingScore"
            type="number"
            defaultValue={70}
            min={0}
            max={100}
          />
        </FormField>
        <FormField id="timeLimitMinutes" label="Tiempo límite (min)">
          <Input id="timeLimitMinutes" name="timeLimitMinutes" type="number" min={0} />
        </FormField>
        <FormField id="maxAttempts" label="Intentos máx.">
          <Input id="maxAttempts" name="maxAttempts" type="number" min={1} />
        </FormField>
      </div>

      <Button type="submit" variant="gold" disabled={isPending} className="mt-2 w-fit">
        {isPending ? "Creando…" : "Crear examen"}
      </Button>
    </form>
  );
}
