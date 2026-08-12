"use client";

import { BookOpen, ChevronDown, ChevronUp, Headphones, Mic, PenLine, Plus, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import {
  addExamSection,
  moveExamSection,
  removeExamSection,
  updateExamComposition,
  updateExamSection,
} from "@/modules/exams/server/composition-actions";
import { sectionWeightPercentages } from "@/modules/exams/shared/scoring";

const CAT_ICON: Record<string, LucideIcon> = {
  reading: BookOpen,
  writing: PenLine,
  listening: Headphones,
  speaking: Mic,
};
const CAT_LABEL: Record<string, string> = {
  reading: "Reading",
  writing: "Writing",
  listening: "Listening",
  speaking: "Speaking",
};

type Section = {
  id: string;
  weight: number;
  timeLimitMinutes: number | null;
  exerciseTitle: string;
  category: string;
  questionCount: number;
};
type Available = {
  id: string;
  title: string;
  category: string;
  lessonTitle: string;
  questionCount: number;
};
type Exam = {
  id: string;
  title: string;
  passingScore: number;
  timeLimitMinutes: number | null;
  randomizeSections: boolean;
};

export function ExamCompositionEditor({
  exam,
  sections,
  available,
}: {
  exam: Exam;
  sections: Section[];
  available: Available[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const percentages = sectionWeightPercentages(sections.map((s) => s.weight));

  function run(fn: () => Promise<unknown>, ok?: string) {
    startTransition(async () => {
      try {
        await fn();
        if (ok) toast.success(ok);
        router.refresh();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Algo ha fallado.");
      }
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <ExamConfig exam={exam} isPending={isPending} run={run} />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm tracking-tighter">
            Secciones ({sections.length})
          </p>
          <p className="text-xs text-muted-foreground">
            La nota final es la media ponderada de las secciones auto-corregibles.
          </p>
        </div>

        {sections.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
            El examen aún no tiene secciones. Añade ejercicios desde la lista de abajo.
          </p>
        ) : (
          sections.map((s, i) => {
            const Icon = CAT_ICON[s.category] ?? BookOpen;
            return (
              <Card key={s.id} className="flex flex-wrap items-center gap-3 p-3">
                <div className="flex shrink-0 flex-col">
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Subir sección"
                    className="h-5"
                    disabled={isPending || i === 0}
                    onClick={() => run(() => moveExamSection(s.id, "up"))}
                  >
                    <ChevronUp className="size-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Bajar sección"
                    className="h-5"
                    disabled={isPending || i === sections.length - 1}
                    onClick={() => run(() => moveExamSection(s.id, "down"))}
                  >
                    <ChevronDown className="size-3.5" />
                  </Button>
                </div>
                <Icon className="size-4 shrink-0 text-gold" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{s.exerciseTitle}</p>
                  <p className="text-xs text-muted-foreground">
                    {CAT_LABEL[s.category] ?? s.category} · {s.questionCount} pregunta(s) ·{" "}
                    <span className="text-gold">{percentages[i]}% de la nota</span>
                  </p>
                </div>
                <SectionControls section={s} run={run} />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Quitar sección"
                  disabled={isPending}
                  onClick={() => run(() => removeExamSection(s.id))}
                >
                  <Trash2 className="size-4 text-destructive" />
                </Button>
              </Card>
            );
          })
        )}
      </div>

      <Card className="p-4">
        <p className="mb-2 font-display text-sm tracking-tighter">Añadir sección</p>
        {available.length === 0 ? (
          <p className="text-xs text-muted-foreground">
            No hay ejercicios disponibles para añadir. Crea ejercicios en las lecciones del curso.
          </p>
        ) : (
          <div className="flex flex-col gap-1.5">
            {available.map((ex) => {
              const Icon = CAT_ICON[ex.category] ?? BookOpen;
              return (
                <div
                  key={ex.id}
                  className="flex items-center gap-2.5 rounded-md border border-border p-2.5"
                >
                  <Icon className="size-4 shrink-0 text-gold" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{ex.title}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {CAT_LABEL[ex.category] ?? ex.category} · {ex.lessonTitle} ·{" "}
                      {ex.questionCount} pregunta(s)
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={isPending}
                    onClick={() => run(() => addExamSection(exam.id, ex.id), "Sección añadida.")}
                  >
                    <Plus className="size-3.5" /> Añadir
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}

function ExamConfig({
  exam,
  isPending,
  run,
}: {
  exam: Exam;
  isPending: boolean;
  run: (fn: () => Promise<unknown>, ok?: string) => void;
}) {
  const [title, setTitle] = useState(exam.title);
  const [passing, setPassing] = useState(String(exam.passingScore));
  const [time, setTime] = useState(exam.timeLimitMinutes ? String(exam.timeLimitMinutes) : "");
  const [randomize, setRandomize] = useState(exam.randomizeSections);

  return (
    <Card className="flex flex-col gap-3 p-4">
      <p className="font-display text-sm tracking-tighter">Configuración</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <FormField id="title" label="Título">
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormField>
        <FormField id="passing" label="Nota mínima (%)">
          <Input
            id="passing"
            type="number"
            min={0}
            max={100}
            value={passing}
            onChange={(e) => setPassing(e.target.value)}
          />
        </FormField>
        <FormField id="time" label="Tiempo global (min, opcional)">
          <Input
            id="time"
            type="number"
            min={0}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </FormField>
      </div>
      <label className="flex w-fit items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={randomize}
          onChange={(e) => setRandomize(e.target.checked)}
        />
        Barajar el orden de las secciones en cada intento
      </label>
      <Button
        variant="gold"
        size="sm"
        disabled={isPending}
        className="w-fit"
        onClick={() =>
          run(
            () =>
              updateExamComposition(exam.id, {
                title,
                passingScore: Number(passing) || 0,
                timeLimitMinutes: time ? Number(time) : null,
                randomizeSections: randomize,
              }),
            "Configuración guardada."
          )
        }
      >
        {isPending ? "Guardando…" : "Guardar configuración"}
      </Button>
    </Card>
  );
}

function SectionControls({
  section,
  run,
}: {
  section: Section;
  run: (fn: () => Promise<unknown>, ok?: string) => void;
}) {
  const [weight, setWeight] = useState(String(section.weight));
  const [time, setTime] = useState(section.timeLimitMinutes ? String(section.timeLimitMinutes) : "");

  return (
    <div className="flex items-end gap-2">
      <div className="flex flex-col gap-1">
        <Label htmlFor={`w-${section.id}`} className="text-xs">
          Peso
        </Label>
        <Input
          id={`w-${section.id}`}
          type="number"
          min={0}
          step="0.5"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          onBlur={() =>
            run(() =>
              updateExamSection(section.id, { weight: Number(weight) || 0 })
            )
          }
          className="h-9 w-20"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor={`tm-${section.id}`} className="text-xs">
          Min.
        </Label>
        <Input
          id={`tm-${section.id}`}
          type="number"
          min={0}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onBlur={() =>
            run(() =>
              updateExamSection(section.id, {
                timeLimitMinutes: time ? Number(time) : null,
              })
            )
          }
          className="h-9 w-20"
          placeholder="—"
        />
      </div>
    </div>
  );
}
