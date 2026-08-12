"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { createCourse } from "@/modules/courses/server/admin-actions";

type Options = {
  categories: { id: string; name: string }[];
  levels: { id: string; label: string }[];
  languages: { id: string; name: string }[];
  authors: { id: string; displayName: string }[];
};

export function NewCourseForm({ options }: { options: Options }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const course = await createCourse(formData);
        toast.success("Curso creado como borrador.");
        router.push(`/admin/cursos/${course.id}`);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo crear el curso."
        );
      }
    });
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4">
      <FormField id="title" label="Título del curso">
        <Input
          id="title"
          name="title"
          required
          placeholder="Ej. Fundamentos de Python para datos"
        />
      </FormField>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="categoryId">Categoría</Label>
        <select
          id="categoryId"
          name="categoryId"
          required
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          {options.categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="levelId">Nivel</Label>
          <select
            id="levelId"
            name="levelId"
            required
            className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
          >
            {options.levels.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="languageId">Idioma</Label>
          <select
            id="languageId"
            name="languageId"
            required
            className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
          >
            {options.languages.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="authorId">Profesor</Label>
        <select
          id="authorId"
          name="authorId"
          required
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          {options.authors.map((a) => (
            <option key={a.id} value={a.id}>
              {a.displayName}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" variant="gold" disabled={isPending} className="mt-2 w-fit">
        {isPending ? "Creando…" : "Crear curso"}
      </Button>
    </form>
  );
}
