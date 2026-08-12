"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateCourseGeneral } from "@/modules/courses/server/admin-actions";

type Options = {
  categories: { id: string; name: string }[];
  levels: { id: string; label: string }[];
  languages: { id: string; name: string }[];
  authors: { id: string; displayName: string }[];
};

export function GeneralForm({
  courseId,
  course,
  options,
}: {
  courseId: string;
  course: {
    title: string;
    subtitle: string | null;
    description: string;
    categoryId: string;
    levelId: string;
    languageId: string;
    authorId: string;
    durationMinutes: number | null;
    coverImageUrl: string | null;
    bannerImageUrl: string | null;
  };
  options: Options;
}) {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await updateCourseGeneral(courseId, formData);
      toast.success(result.message);
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-2xl flex-col gap-4">
      <FormField id="title" label="Título">
        <Input id="title" name="title" defaultValue={course.title} required />
      </FormField>

      <FormField id="subtitle" label="Subtítulo">
        <Input id="subtitle" name="subtitle" defaultValue={course.subtitle ?? ""} />
      </FormField>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="description">Descripción</Label>
        <textarea
          id="description"
          name="description"
          defaultValue={course.description}
          rows={6}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="categoryId">Categoría</Label>
          <select
            id="categoryId"
            name="categoryId"
            defaultValue={course.categoryId}
            className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
          >
            {options.categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="levelId">Nivel</Label>
          <select
            id="levelId"
            name="levelId"
            defaultValue={course.levelId}
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
            defaultValue={course.languageId}
            className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
          >
            {options.languages.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="authorId">Profesor</Label>
          <select
            id="authorId"
            name="authorId"
            defaultValue={course.authorId}
            className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
          >
            {options.authors.map((a) => (
              <option key={a.id} value={a.id}>
                {a.displayName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <FormField id="durationMinutes" label="Duración total (minutos)">
        <Input
          id="durationMinutes"
          name="durationMinutes"
          type="number"
          min={0}
          defaultValue={course.durationMinutes ?? undefined}
        />
      </FormField>

      <FormField id="coverImageUrl" label="URL de portada">
        <Input
          id="coverImageUrl"
          name="coverImageUrl"
          defaultValue={course.coverImageUrl ?? ""}
        />
      </FormField>

      <FormField id="bannerImageUrl" label="URL de banner">
        <Input
          id="bannerImageUrl"
          name="bannerImageUrl"
          defaultValue={course.bannerImageUrl ?? ""}
        />
      </FormField>

      <Button type="submit" variant="gold" disabled={isPending} className="mt-2 w-fit">
        {isPending ? "Guardando…" : "Guardar cambios"}
      </Button>
    </form>
  );
}
