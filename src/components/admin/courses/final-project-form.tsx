"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import {
  deleteFinalProject,
  upsertFinalProject,
} from "@/modules/courses/server/admin-actions";

export function FinalProjectForm({
  courseId,
  existing,
}: {
  courseId: string;
  existing: { title: string; instructions: string } | null;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const result = await upsertFinalProject(courseId, formData);
        toast.success(result.message);
        router.refresh();
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo guardar el proyecto final."
        );
      }
    });
  }

  function handleDelete() {
    if (
      !confirm("¿Eliminar el proyecto final de este curso? Los alumnos dejarán de verlo.")
    )
      return;
    startTransition(async () => {
      await deleteFinalProject(courseId);
      toast.success("Proyecto final eliminado.");
      router.refresh();
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-xl flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        Un proyecto final es opcional por curso: si lo defines, el alumno lo verá al
        terminar todas las lecciones y podrá entregarlo desde su reproductor.
      </p>

      <FormField id="title" label="Título del proyecto">
        <Input id="title" name="title" defaultValue={existing?.title ?? ""} required />
      </FormField>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="instructions">Instrucciones</Label>
        <textarea
          id="instructions"
          name="instructions"
          defaultValue={existing?.instructions ?? ""}
          rows={8}
          required
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit" variant="gold" disabled={isPending}>
          {isPending
            ? "Guardando…"
            : existing
              ? "Guardar cambios"
              : "Crear proyecto final"}
        </Button>
        {existing && (
          <Button
            type="button"
            variant="outline"
            disabled={isPending}
            onClick={handleDelete}
          >
            <Trash2 className="size-4" /> Eliminar
          </Button>
        )}
      </div>
    </form>
  );
}
