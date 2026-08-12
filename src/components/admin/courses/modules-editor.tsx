"use client";

import {
  ChevronDown,
  ChevronUp,
  Layers,
  Pencil,
  Plus,
  ShieldQuestion,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useRouter } from "@/i18n/navigation";
import { generateExercise, generateLessonContent } from "@/modules/ai/server/generation";
import {
  addLesson,
  addModule,
  createModuleTest,
  deleteLesson,
  deleteModule,
  deleteModuleTest,
  moveLesson,
  moveModule,
  updateLesson,
  updateLessonPedagogy,
  updateModule,
} from "@/modules/courses/server/admin-actions";

type LessonPedagogyData = {
  objective: string | null;
  examples: unknown;
  commonMistakes: unknown;
  visualSchemaUrl: string | null;
  mindMapUrl: string | null;
  summary: string | null;
  reviewPrompts: unknown;
} | null;

type Lesson = {
  id: string;
  title: string;
  contentTypeId: string;
  contentType: { key: string; label: string };
  durationSeconds: number | null;
  isPreview: boolean;
  content: { body: string | null; externalUrl: string | null } | null;
  exercise: { instructions: string } | null;
  pedagogy: LessonPedagogyData;
};

type ModuleTest = { id: string; title: string; passingScore: unknown };

type ModuleWithLessons = {
  id: string;
  title: string;
  description: string | null;
  lessons: Lesson[];
  exams: ModuleTest[];
};

type ContentTypeOption = { id: string; key: string; label: string };

export function ModulesEditor({
  courseId,
  courseTitle,
  modules,
  contentTypes,
}: {
  courseId: string;
  courseTitle: string;
  modules: ModuleWithLessons[];
  contentTypes: ContentTypeOption[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);

  function refresh() {
    router.refresh();
  }

  function handleAddModule(formData: FormData) {
    const title = String(formData.get("moduleTitle") ?? "").trim();
    if (!title) return;
    startTransition(async () => {
      await addModule(courseId, title);
      refresh();
    });
  }

  return (
    <div className="flex flex-col gap-5">
      {modules.map((module, index) => (
        <Card key={module.id} className="p-5">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg tracking-tighter">{module.title}</h3>
              {module.description && (
                <p className="text-sm text-muted-foreground">{module.description}</p>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Subir módulo"
                disabled={isPending || index === 0}
                onClick={() =>
                  startTransition(async () => {
                    await moveModule(courseId, module.id, "up");
                    refresh();
                  })
                }
              >
                <ChevronUp className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Bajar módulo"
                disabled={isPending || index === modules.length - 1}
                onClick={() =>
                  startTransition(async () => {
                    await moveModule(courseId, module.id, "down");
                    refresh();
                  })
                }
              >
                <ChevronDown className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Renombrar módulo"
                onClick={() => {
                  const title = prompt("Nuevo título del módulo", module.title);
                  if (title) {
                    startTransition(async () => {
                      await updateModule(module.id, courseId, { title });
                      refresh();
                    });
                  }
                }}
              >
                <Pencil className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Eliminar módulo"
                onClick={() => {
                  if (confirm("¿Eliminar este módulo y todas sus lecciones?")) {
                    startTransition(async () => {
                      await deleteModule(module.id, courseId);
                      refresh();
                    });
                  }
                }}
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </div>
          </div>

          <ModuleTestSection courseId={courseId} module={module} />

          <ul className="mt-4 flex flex-col gap-2">
            {module.lessons.map((lesson, lessonIndex) => (
              <li key={lesson.id} className="rounded-md border border-border">
                <div className="flex items-center justify-between gap-3 px-3.5 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{lesson.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {lesson.contentType.label}
                      {lesson.isPreview && " · Vista previa"}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Subir lección"
                      disabled={isPending || lessonIndex === 0}
                      onClick={() =>
                        startTransition(async () => {
                          await moveLesson(module.id, courseId, lesson.id, "up");
                          refresh();
                        })
                      }
                    >
                      <ChevronUp className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Bajar lección"
                      disabled={isPending || lessonIndex === module.lessons.length - 1}
                      onClick={() =>
                        startTransition(async () => {
                          await moveLesson(module.id, courseId, lesson.id, "down");
                          refresh();
                        })
                      }
                    >
                      <ChevronDown className="size-4" />
                    </Button>
                    <Button asChild variant="ghost" size="icon" aria-label="Editar bloques">
                      <Link href={`/admin/lecciones/${lesson.id}` as never}>
                        <Layers className="size-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Editar lección"
                      onClick={() =>
                        setEditingLessonId(
                          editingLessonId === lesson.id ? null : lesson.id
                        )
                      }
                    >
                      <Pencil className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Eliminar lección"
                      onClick={() => {
                        if (confirm("¿Eliminar esta lección?")) {
                          startTransition(async () => {
                            await deleteLesson(lesson.id, courseId);
                            refresh();
                          });
                        }
                      }}
                    >
                      <Trash2 className="size-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                {editingLessonId === lesson.id && (
                  <>
                    <LessonInlineEditor
                      lesson={lesson}
                      courseId={courseId}
                      courseTitle={courseTitle}
                      onSaved={() => {
                        setEditingLessonId(null);
                        refresh();
                      }}
                    />
                    <LessonPedagogyEditor lesson={lesson} courseId={courseId} />
                  </>
                )}
              </li>
            ))}
          </ul>

          <AddLessonForm
            moduleId={module.id}
            courseId={courseId}
            contentTypes={contentTypes}
          />
        </Card>
      ))}

      <form action={handleAddModule} className="flex gap-2">
        <Input name="moduleTitle" placeholder="Título del nuevo módulo…" />
        <Button type="submit" variant="outline" disabled={isPending}>
          <Plus className="size-4" /> Añadir módulo
        </Button>
      </form>
    </div>
  );
}

function AddLessonForm({
  moduleId,
  courseId,
  contentTypes,
}: {
  moduleId: string;
  courseId: string;
  contentTypes: ContentTypeOption[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleAdd(formData: FormData) {
    const title = String(formData.get("lessonTitle") ?? "").trim();
    const contentTypeId = String(formData.get("contentTypeId") ?? "");
    if (!title || !contentTypeId) return;
    startTransition(async () => {
      await addLesson(moduleId, courseId, { title, contentTypeId });
      router.refresh();
    });
  }

  return (
    <form
      action={handleAdd}
      className="mt-3 flex flex-wrap gap-2 border-t border-border pt-3"
    >
      <Input name="lessonTitle" placeholder="Título de la lección…" className="flex-1" />
      <select
        name="contentTypeId"
        defaultValue={contentTypes[0]?.id}
        className="h-11 rounded-md border border-input bg-background px-3 text-sm"
      >
        {contentTypes.map((ct) => (
          <option key={ct.id} value={ct.id}>
            {ct.label}
          </option>
        ))}
      </select>
      <Button type="submit" variant="outline" size="sm" disabled={isPending}>
        <Plus className="size-4" /> Añadir lección
      </Button>
    </form>
  );
}

function ModuleTestSection({
  courseId,
  module,
}: {
  courseId: string;
  module: { id: string; exams: ModuleTest[] };
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showForm, setShowForm] = useState(false);
  const existingTest = module.exams[0];

  function handleCreate(formData: FormData) {
    startTransition(async () => {
      try {
        await createModuleTest(module.id, courseId, formData);
        toast.success("Test del módulo creado.");
        setShowForm(false);
        router.refresh();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "No se pudo crear el test.");
      }
    });
  }

  if (existingTest) {
    return (
      <div className="mt-3 flex items-center justify-between gap-3 rounded-md border border-gold/25 bg-gold/5 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <ShieldQuestion className="size-4 text-gold" />
          <span className="text-sm">
            {existingTest.title} — nota mínima {Number(existingTest.passingScore)}%
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href={`/admin/examenes/${existingTest.id}`}>Gestionar preguntas</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Eliminar test del módulo"
            disabled={isPending}
            onClick={() => {
              if (
                confirm(
                  "¿Eliminar el test de este módulo? El desbloqueo dejará de aplicarse."
                )
              ) {
                startTransition(async () => {
                  await deleteModuleTest(existingTest.id, courseId);
                  router.refresh();
                });
              }
            }}
          >
            <Trash2 className="size-4 text-destructive" />
          </Button>
        </div>
      </div>
    );
  }

  if (!showForm) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="mt-3 w-fit"
        onClick={() => setShowForm(true)}
      >
        <ShieldQuestion className="size-4" /> Añadir test de módulo (desbloqueo por nota
        mínima)
      </Button>
    );
  }

  return (
    <form
      action={handleCreate}
      className="mt-3 flex flex-wrap items-end gap-2 rounded-md border border-dashed border-border p-3"
    >
      <Input name="title" placeholder="Título del test…" className="flex-1" required />
      <Input
        name="passingScore"
        type="number"
        min={0}
        max={100}
        defaultValue={70}
        className="w-24"
        aria-label="Nota mínima (%)"
      />
      <Button type="submit" variant="gold" size="sm" disabled={isPending}>
        Crear test
      </Button>
      <Button type="button" variant="ghost" size="sm" onClick={() => setShowForm(false)}>
        Cancelar
      </Button>
    </form>
  );
}

function LessonInlineEditor({
  lesson,
  courseId,
  courseTitle,
  onSaved,
}: {
  lesson: Lesson;
  courseId: string;
  courseTitle: string;
  onSaved: () => void;
}) {
  const [isPending, startTransition] = useTransition();
  const [isGenerating, startGenerating] = useTransition();
  const isMediaType = ["video", "audio", "pdf", "enlace_externo"].includes(
    lesson.contentType.key
  );
  const isExercise = lesson.contentType.key === "ejercicio";
  const [body, setBody] = useState(
    isExercise ? (lesson.exercise?.instructions ?? "") : (lesson.content?.body ?? "")
  );

  function handleGenerate() {
    startGenerating(async () => {
      try {
        if (isExercise) {
          const result = await generateExercise(lesson.title, courseTitle);
          setBody(result.instructions);
        } else {
          const result = await generateLessonContent(lesson.title, courseTitle);
          setBody(result.body);
        }
        toast.success("Contenido generado — revísalo antes de guardar.");
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo generar el contenido."
        );
      }
    });
  }

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await updateLesson(lesson.id, courseId, {
        title: String(formData.get("title") ?? lesson.title),
        isPreview: formData.get("isPreview") === "on",
        durationSeconds: formData.get("durationSeconds")
          ? Number(formData.get("durationSeconds"))
          : undefined,
        body: isMediaType ? "" : body,
        externalUrl: String(formData.get("externalUrl") ?? ""),
      });
      toast.success(result.message);
      onSaved();
    });
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-3 border-t border-border p-3.5"
    >
      <Input name="title" defaultValue={lesson.title} placeholder="Título" />

      {isMediaType ? (
        <Input
          name="externalUrl"
          defaultValue={lesson.content?.externalUrl ?? ""}
          placeholder="URL del vídeo / audio / PDF / enlace"
        />
      ) : (
        <div className="flex flex-col gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-fit"
            disabled={isGenerating}
            onClick={handleGenerate}
          >
            <Sparkles className="size-4" />
            {isGenerating ? "Generando…" : "Generar contenido con IA"}
          </Button>
          <textarea
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            placeholder="Contenido de texto / instrucciones del ejercicio"
            className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          />
        </div>
      )}

      <div className="flex items-center gap-4">
        <Input
          name="durationSeconds"
          type="number"
          min={0}
          defaultValue={lesson.durationSeconds ?? undefined}
          placeholder="Duración (segundos)"
          className="w-48"
        />
        <div className="flex items-center gap-2">
          <Checkbox
            id={`preview-${lesson.id}`}
            name="isPreview"
            defaultChecked={lesson.isPreview}
          />
          <Label htmlFor={`preview-${lesson.id}`} className="font-normal">
            Vista previa gratuita
          </Label>
        </div>
      </div>

      <Button
        type="submit"
        variant="gold"
        size="sm"
        disabled={isPending}
        className="w-fit"
      >
        {isPending ? "Guardando…" : "Guardar lección"}
      </Button>
    </form>
  );
}

/**
 * Estándar NOVARA de lección: los 10 puntos pedagógicos. Bloque
 * independiente del formulario principal (acción distinta,
 * `updateLessonPedagogy`) — todos los campos opcionales, para no
 * obligar a rellenarlos en cursos más simples.
 */
function LessonPedagogyEditor({
  lesson,
  courseId,
}: {
  lesson: Lesson;
  courseId: string;
}) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const p = lesson.pedagogy;

  const [objective, setObjective] = useState(p?.objective ?? "");
  const [examples, setExamples] = useState(
    Array.isArray(p?.examples) ? (p.examples as string[]).join("\n") : ""
  );
  const [commonMistakes, setCommonMistakes] = useState(
    Array.isArray(p?.commonMistakes) ? (p.commonMistakes as string[]).join("\n") : ""
  );
  const [visualSchemaUrl, setVisualSchemaUrl] = useState(p?.visualSchemaUrl ?? "");
  const [mindMapUrl, setMindMapUrl] = useState(p?.mindMapUrl ?? "");
  const [summary, setSummary] = useState(p?.summary ?? "");
  const [reviewPrompts, setReviewPrompts] = useState(
    Array.isArray(p?.reviewPrompts) ? (p.reviewPrompts as string[]).join("\n") : ""
  );

  function linesToArray(value: string) {
    return value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  function handleSave() {
    startTransition(async () => {
      const result = await updateLessonPedagogy(lesson.id, courseId, {
        objective,
        examples: linesToArray(examples),
        commonMistakes: linesToArray(commonMistakes),
        visualSchemaUrl,
        mindMapUrl,
        summary,
        reviewPrompts: linesToArray(reviewPrompts),
      });
      toast.success(result.message);
    });
  }

  if (!open) {
    return (
      <div className="border-t border-border p-3.5">
        <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
          Estándar NOVARA de lección (objetivo, ejemplos, errores frecuentes, esquema
          visual, mapa mental, resumen, repaso)
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 border-t border-border bg-muted/20 p-3.5">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Estándar NOVARA de lección
      </p>

      <FieldBlock label="1. Objetivo de la lección">
        <Input value={objective} onChange={(e) => setObjective(e.target.value)} />
      </FieldBlock>

      <FieldBlock label="3. Ejemplos (uno por línea)">
        <textarea
          value={examples}
          onChange={(e) => setExamples(e.target.value)}
          rows={3}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </FieldBlock>

      <FieldBlock label="4. Errores frecuentes (uno por línea)">
        <textarea
          value={commonMistakes}
          onChange={(e) => setCommonMistakes(e.target.value)}
          rows={3}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </FieldBlock>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <FieldBlock label="5. Esquema visual (URL de imagen)">
          <Input
            value={visualSchemaUrl}
            onChange={(e) => setVisualSchemaUrl(e.target.value)}
          />
        </FieldBlock>
        <FieldBlock label="6. Mapa mental (URL de imagen)">
          <Input value={mindMapUrl} onChange={(e) => setMindMapUrl(e.target.value)} />
        </FieldBlock>
      </div>

      <FieldBlock label="9. Resumen">
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={2}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </FieldBlock>

      <FieldBlock label="10. Repaso (una pregunta de autoevaluación por línea)">
        <textarea
          value={reviewPrompts}
          onChange={(e) => setReviewPrompts(e.target.value)}
          rows={3}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </FieldBlock>

      <p className="text-xs text-muted-foreground">
        2. Explicación completa, 7. Ejercicios y 8. Corrección inteligente ya se gestionan
        arriba, en el contenido principal de la lección (para las lecciones tipo
        &ldquo;ejercicio&rdquo;, la corrección la hace el asistente de IA cuando el alumno
        entrega).
      </p>

      <div className="flex gap-2">
        <Button
          variant="gold"
          size="sm"
          disabled={isPending}
          onClick={handleSave}
          className="w-fit"
        >
          {isPending ? "Guardando…" : "Guardar pedagogía"}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
          Cerrar
        </Button>
      </div>
    </div>
  );
}

function FieldBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
