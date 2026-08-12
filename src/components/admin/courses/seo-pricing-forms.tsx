"use client";

import { Sparkles } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateSEOMetadata } from "@/modules/ai/server/generation";
import {
  updateCoursePricing,
  updateCourseSEO,
} from "@/modules/courses/server/admin-actions";

export function SEOForm({
  courseId,
  courseTitle,
  courseDescription,
  seoTitle,
  seoDescription,
  seoKeywords,
}: {
  courseId: string;
  courseTitle: string;
  courseDescription: string;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeywords: string | null;
}) {
  const [isPending, startTransition] = useTransition();
  const [isGenerating, startGenerating] = useTransition();
  const [fields, setFields] = useState({
    seoTitle: seoTitle ?? "",
    seoDescription: seoDescription ?? "",
    seoKeywords: seoKeywords ?? "",
  });

  function handleGenerate() {
    startGenerating(async () => {
      try {
        const result = await generateSEOMetadata(courseTitle, courseDescription);
        setFields(result);
        toast.success("Sugerencia generada — revísala antes de guardar.");
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo generar el SEO."
        );
      }
    });
  }

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await updateCourseSEO(courseId, formData);
      toast.success(result.message);
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-xl flex-col gap-4">
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="w-fit"
        disabled={isGenerating}
        onClick={handleGenerate}
      >
        <Sparkles className="size-4" />
        {isGenerating ? "Generando…" : "Sugerir con IA"}
      </Button>

      <FormField id="seoTitle" label="Título SEO">
        <Input
          id="seoTitle"
          name="seoTitle"
          value={fields.seoTitle}
          onChange={(e) => setFields({ ...fields, seoTitle: e.target.value })}
          maxLength={70}
        />
      </FormField>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="seoDescription">Meta descripción</Label>
        <textarea
          id="seoDescription"
          name="seoDescription"
          value={fields.seoDescription}
          onChange={(e) => setFields({ ...fields, seoDescription: e.target.value })}
          maxLength={160}
          rows={3}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>
      <FormField id="seoKeywords" label="Palabras clave (separadas por coma)">
        <Input
          id="seoKeywords"
          name="seoKeywords"
          value={fields.seoKeywords}
          onChange={(e) => setFields({ ...fields, seoKeywords: e.target.value })}
        />
      </FormField>
      <Button type="submit" variant="gold" disabled={isPending} className="mt-2 w-fit">
        {isPending ? "Guardando…" : "Guardar SEO"}
      </Button>
    </form>
  );
}

export function PricingForm({
  courseId,
  accessTypeId,
  price,
  accessTypes,
}: {
  courseId: string;
  accessTypeId: string;
  price: number | null;
  accessTypes: { id: string; key: string; label: string }[];
}) {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await updateCoursePricing(courseId, formData);
      toast.success(result.message);
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="accessTypeId">Tipo de acceso</Label>
        <select
          id="accessTypeId"
          name="accessTypeId"
          defaultValue={accessTypeId}
          className="h-11 rounded-md border border-input bg-background px-3.5 text-sm"
        >
          {accessTypes.map((a) => (
            <option key={a.id} value={a.id}>
              {a.label}
            </option>
          ))}
        </select>
      </div>
      <FormField id="price" label="Precio (EUR)">
        <Input
          id="price"
          name="price"
          type="number"
          min={0}
          step="0.01"
          defaultValue={price ?? ""}
        />
      </FormField>
      <Button type="submit" variant="gold" disabled={isPending} className="mt-2 w-fit">
        {isPending ? "Guardando…" : "Guardar precio"}
      </Button>
    </form>
  );
}
