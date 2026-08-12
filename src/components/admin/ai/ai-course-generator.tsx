"use client";

import { Sparkles, Trash2 } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import {
  generateCourseStructure,
  type GeneratedCourseStructure,
} from "@/modules/ai/server/generation";
import { createCourseFromAIStructure } from "@/modules/courses/server/admin-actions";

type Options = {
  categories: { id: string; name: string }[];
  levels: { id: string; label: string }[];
  languages: { id: string; name: string }[];
  authors: { id: string; displayName: string }[];
};

/**
 * Mensaje de error del asistente listo para mostrar. En desarrollo, las
 * server actions dejan pasar el mensaje real (p. ej. "No hay
 * ANTHROPIC_API_KEY configurada…") y se muestra tal cual. En producción,
 * Next.js REDACTA el mensaje de cualquier error lanzado por una server
 * action ("An error occurred in the Server Components render…") por
 * seguridad; detectarlo y sustituirlo por un texto accionable en español
 * evita enseñar al administrador un error genérico y opaco.
 */
function aiErrorMessage(error: unknown, fallback: string): string {
  const raw = error instanceof Error ? error.message : "";
  const isRedacted = /server components render|omitted in production/i.test(raw);
  if (raw && !isRedacted) return raw;
  return `${fallback} Revisa que el asistente de IA esté configurado (ANTHROPIC_API_KEY) e inténtalo de nuevo.`;
}

/**
 * Asistente de IA para creación de curso. Flujo: idea → generar
 * (proveedor configurado vía `AI_PROVIDER`/`ANTHROPIC_API_KEY`/
 * `OPENAI_API_KEY`) → REVISAR Y EDITAR cada campo → crear curso como
 * borrador. Nunca se publica automáticamente ni se salta la revisión.
 */
export function AICourseGenerator({ options }: { options: Options }) {
  const router = useRouter();
  const [idea, setIdea] = useState("");
  const [structure, setStructure] = useState<GeneratedCourseStructure | null>(null);
  const [isGenerating, startGenerating] = useTransition();
  const [isCreating, startCreating] = useTransition();
  const [categoryId, setCategoryId] = useState(options.categories[0]?.id ?? "");
  const [levelId, setLevelId] = useState(options.levels[0]?.id ?? "");
  const [languageId, setLanguageId] = useState(options.languages[0]?.id ?? "");
  const [authorId, setAuthorId] = useState(options.authors[0]?.id ?? "");

  function handleGenerate() {
    if (!idea.trim()) {
      toast.error("Describe brevemente la idea del curso.");
      return;
    }
    startGenerating(async () => {
      try {
        const result = await generateCourseStructure(idea);
        setStructure(result);
      } catch (error) {
        toast.error(aiErrorMessage(error, "No se pudo generar la estructura."));
      }
    });
  }

  function handleCreate() {
    if (!structure) return;
    startCreating(async () => {
      try {
        const course = await createCourseFromAIStructure(
          structure,
          categoryId,
          levelId,
          languageId,
          authorId
        );
        toast.success("Curso creado como borrador. Revísalo y complétalo.");
        router.push(`/admin/cursos/${course.id}`);
      } catch (error) {
        toast.error(aiErrorMessage(error, "No se pudo crear el curso."));
      }
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <Input
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Ej. Curso de Excel avanzado para analistas financieros"
          className="flex-1"
        />
        <Button variant="gold" onClick={handleGenerate} disabled={isGenerating}>
          <Sparkles className="size-4" />
          {isGenerating ? "Generando…" : "Generar estructura"}
        </Button>
      </div>

      {structure && (
        <div className="flex flex-col gap-6 rounded-lg border border-gold/30 bg-gold/5 p-5">
          <p className="text-xs font-medium uppercase tracking-widest text-gold-foreground dark:text-gold">
            Revisa y edita antes de crear el curso
          </p>

          <div className="flex flex-col gap-3">
            <Label htmlFor="ai-title">Título</Label>
            <Input
              id="ai-title"
              value={structure.title}
              onChange={(e) => setStructure({ ...structure, title: e.target.value })}
            />
            <Label htmlFor="ai-subtitle">Subtítulo</Label>
            <Input
              id="ai-subtitle"
              value={structure.subtitle}
              onChange={(e) => setStructure({ ...structure, subtitle: e.target.value })}
            />
            <Label htmlFor="ai-description">Descripción</Label>
            <textarea
              id="ai-description"
              value={structure.description}
              onChange={(e) =>
                setStructure({ ...structure, description: e.target.value })
              }
              rows={4}
              className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <EditableList
              title="Objetivos"
              items={structure.objectives}
              onChange={(objectives) => setStructure({ ...structure, objectives })}
            />
            <EditableList
              title="Requisitos"
              items={structure.requirements}
              onChange={(requirements) => setStructure({ ...structure, requirements })}
            />
          </div>

          <div>
            <p className="mb-2 font-display text-sm tracking-tighter">
              Módulos ({structure.modules.length})
            </p>
            <div className="flex flex-col gap-3">
              {structure.modules.map((module, mi) => (
                <div key={mi} className="rounded-md border border-border bg-card p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <Input
                      value={module.title}
                      onChange={(e) => {
                        const modules = [...structure.modules];
                        modules[mi] = { ...module, title: e.target.value };
                        setStructure({ ...structure, modules });
                      }}
                      className="font-medium"
                    />
                    <button
                      type="button"
                      aria-label={`Eliminar módulo "${module.title || "sin título"}"`}
                      onClick={() => {
                        const modules = structure.modules.filter((_, i) => i !== mi);
                        setStructure({ ...structure, modules });
                      }}
                      className="shrink-0 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <ul className="flex flex-col gap-1.5 pl-2 text-sm text-muted-foreground">
                    {module.lessons.map((lesson, li) => (
                      <li key={li}>· {lesson}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 sm:grid-cols-4">
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
              options={options.authors.map((a) => ({
                value: a.id,
                label: a.displayName,
              }))}
            />
          </div>

          <Button
            variant="gold"
            onClick={handleCreate}
            disabled={isCreating}
            className="w-fit"
          >
            {isCreating ? "Creando…" : "Crear curso como borrador"}
          </Button>
        </div>
      )}
    </div>
  );
}

function EditableList({
  title,
  items,
  onChange,
}: {
  title: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  return (
    <div>
      <p className="mb-2 font-display text-sm tracking-tighter">{title}</p>
      <ul className="flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <Input
              value={item}
              onChange={(e) => {
                const next = [...items];
                next[i] = e.target.value;
                onChange(next);
              }}
              className="text-sm"
            />
            <button
              type="button"
              aria-label={`Eliminar "${item || "elemento"}"`}
              onClick={() => onChange(items.filter((_, idx) => idx !== i))}
              className="shrink-0 text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="size-3.5" />
            </button>
          </li>
        ))}
      </ul>
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
