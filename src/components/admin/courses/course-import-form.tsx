"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { importCourseFromJSON } from "@/modules/courses/server/admin-actions";

const EXAMPLE_JSON = `{
  "title": "Fundamentos de Excel para analistas",
  "subtitle": "De cero a informes que se sostienen solos",
  "description": "Curso completo de Excel orientado a análisis de datos reales.",
  "objectives": ["Dominar tablas dinámicas", "Automatizar informes con fórmulas"],
  "requirements": ["Ninguno"],
  "modules": [
    {
      "title": "Primeros pasos",
      "description": "Fundamentos de la hoja de cálculo",
      "test": { "title": "Test: Primeros pasos", "passingScore": 70 },
      "lessons": [
        {
          "title": "La interfaz de Excel",
          "contentTypeKey": "texto",
          "body": "Contenido completo de la lección...",
          "pedagogy": {
            "objective": "Reconocer las partes principales de la interfaz.",
            "examples": ["Ejemplo 1", "Ejemplo 2"],
            "commonMistakes": ["Confundir fila y columna"],
            "summary": "Resumen de la lección.",
            "reviewPrompts": ["¿Qué es una celda?"]
          }
        },
        {
          "title": "Ejercicio: crea tu primera hoja",
          "contentTypeKey": "ejercicio",
          "exerciseInstructions": "Crea una hoja con 3 columnas y súbela."
        }
      ]
    }
  ],
  "finalProject": {
    "title": "Informe de ventas trimestral",
    "instructions": "Entrega un informe completo con tablas dinámicas."
  }
}`;

type Options = {
  categories: { id: string; name: string }[];
  levels: { id: string; label: string }[];
  languages: { id: string; name: string }[];
  authors: { id: string; displayName: string }[];
};

export function CourseImportForm({ options }: { options: Options }) {
  const router = useRouter();
  const [json, setJson] = useState("");
  const [categoryId, setCategoryId] = useState(options.categories[0]?.id ?? "");
  const [levelId, setLevelId] = useState(options.levels[0]?.id ?? "");
  const [languageId, setLanguageId] = useState(options.languages[0]?.id ?? "");
  const [authorId, setAuthorId] = useState(options.authors[0]?.id ?? "");
  const [isPending, startTransition] = useTransition();

  function handleImport() {
    if (!json.trim()) {
      toast.error("Pega el JSON del curso a importar.");
      return;
    }
    startTransition(async () => {
      try {
        const course = await importCourseFromJSON(
          json,
          categoryId,
          levelId,
          languageId,
          authorId
        );
        toast.success("Curso importado como borrador.");
        router.push(`/admin/cursos/${course.id}`);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo importar el curso."
        );
      }
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <SelectField
          label="Categoría"
          value={categoryId}
          onChange={setCategoryId}
          options={options.categories.map((c) => ({ value: c.id, label: c.name }))}
        />
        <SelectField
          label="Nivel"
          value={levelId}
          onChange={setLevelId}
          options={options.levels.map((l) => ({ value: l.id, label: l.label }))}
        />
        <SelectField
          label="Idioma"
          value={languageId}
          onChange={setLanguageId}
          options={options.languages.map((l) => ({ value: l.id, label: l.name }))}
        />
        <SelectField
          label="Profesor"
          value={authorId}
          onChange={setAuthorId}
          options={options.authors.map((a) => ({ value: a.id, label: a.displayName }))}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="json">JSON del curso</Label>
          <button
            type="button"
            onClick={() => setJson(EXAMPLE_JSON)}
            className="text-xs font-medium text-gold-foreground underline dark:text-gold"
          >
            Rellenar con un ejemplo
          </button>
        </div>
        <textarea
          id="json"
          value={json}
          onChange={(e) => setJson(e.target.value)}
          rows={20}
          placeholder="Pega aquí el JSON completo del curso…"
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 font-mono text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      <Button
        variant="gold"
        disabled={isPending}
        onClick={handleImport}
        className="w-fit"
      >
        {isPending ? "Importando…" : "Importar curso"}
      </Button>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
