"use client";

import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Headphones,
  Mic,
  PenLine,
  Plus,
  Trash2,
} from "lucide-react";
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
  addQuestion,
  createExercise,
  deleteExercise,
  deleteQuestion,
  moveQuestion,
  updateExercise,
  updateQuestion,
} from "@/modules/exercises/server/exercise-actions";
import {
  QUESTION_KINDS,
  QUESTION_KIND_LABELS,
  type QuestionKind,
} from "@/modules/exercises/shared/question-types";
import { CEFR_LEVELS } from "@/modules/exercises/shared/speaking-prompt";

type QuestionData = { id: string; kind: string; data: Record<string, unknown> };
type ExerciseData = {
  id: string;
  category: string;
  title: string;
  instructions: string | null;
  config: Record<string, unknown> | null;
  questions: QuestionData[];
};

const CATEGORY_META: Record<string, { label: string; icon: LucideIcon }> = {
  reading: { label: "Reading", icon: BookOpen },
  writing: { label: "Writing", icon: PenLine },
  listening: { label: "Listening", icon: Headphones },
  speaking: { label: "Speaking", icon: Mic },
};

function catMeta(category: string): { label: string; icon: LucideIcon } {
  return CATEGORY_META[category] ?? { label: "Ejercicio", icon: PenLine };
}

export function LessonExercisesEditor({
  lessonId,
  exercises,
}: {
  lessonId: string;
  exercises: ExerciseData[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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
    <div className="flex flex-col gap-5">
      <Card className="p-4">
        <p className="mb-2 font-display text-sm tracking-tighter">Añadir ejercicio</p>
        <div className="flex flex-wrap gap-2">
          {(["reading", "listening", "writing", "speaking"] as const).map((cat) => {
            const Icon = catMeta(cat).icon;
            return (
              <Button
                key={cat}
                variant="outline"
                size="sm"
                disabled={isPending}
                onClick={() => run(() => createExercise(lessonId, cat))}
              >
                <Icon className="size-4" /> {catMeta(cat).label}
              </Button>
            );
          })}
        </div>
      </Card>

      {exercises.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          Esta lección todavía no tiene ejercicios. Añade el primero eligiendo una categoría.
        </p>
      ) : (
        exercises.map((ex) => (
          <ExerciseCard key={ex.id} exercise={ex} isPending={isPending} run={run} />
        ))
      )}
    </div>
  );
}

function ExerciseCard({
  exercise,
  isPending,
  run,
}: {
  exercise: ExerciseData;
  isPending: boolean;
  run: (fn: () => Promise<unknown>, ok?: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const meta = catMeta(exercise.category);
  const Icon = meta.icon;
  const hasQuestions = exercise.category === "reading" || exercise.category === "listening";

  return (
    <Card className="p-4">
      <div className="flex items-center gap-3">
        <Icon className="size-4 shrink-0 text-gold" />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="min-w-0 flex-1 text-left"
        >
          <p className="truncate text-sm font-medium">{exercise.title}</p>
          <p className="text-xs text-muted-foreground">
            {meta.label}
            {hasQuestions && ` · ${exercise.questions.length} pregunta(s)`}
          </p>
        </button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Eliminar ejercicio"
          disabled={isPending}
          onClick={() =>
            confirm("¿Eliminar este ejercicio?") && run(() => deleteExercise(exercise.id))
          }
        >
          <Trash2 className="size-4 text-destructive" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Abrir" onClick={() => setOpen((o) => !o)}>
          {open ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        </Button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-4 border-t border-border pt-4">
          <ExerciseMeta exercise={exercise} isPending={isPending} run={run} />
          {hasQuestions && <QuestionsSection exercise={exercise} isPending={isPending} run={run} />}
        </div>
      )}
    </Card>
  );
}

function ExerciseMeta({
  exercise,
  isPending,
  run,
}: {
  exercise: ExerciseData;
  isPending: boolean;
  run: (fn: () => Promise<unknown>, ok?: string) => void;
}) {
  const cfg = exercise.config ?? {};
  const [title, setTitle] = useState(exercise.title);
  const [instructions, setInstructions] = useState(exercise.instructions ?? "");
  // Config por categoría
  const [text, setText] = useState((cfg.text as string) ?? "");
  const [audioUrl, setAudioUrl] = useState((cfg.audioUrl as string) ?? "");
  const [transcript, setTranscript] = useState((cfg.transcript as string) ?? "");
  const [textType, setTextType] = useState((cfg.textType as string) ?? "email");
  const [minWords, setMinWords] = useState(String((cfg.minWords as number) ?? ""));
  const [maxWords, setMaxWords] = useState(String((cfg.maxWords as number) ?? ""));
  const [rubric, setRubric] = useState(
    (Array.isArray(cfg.rubric) ? (cfg.rubric as string[]) : []).join("\n")
  );
  const [modelAnswer, setModelAnswer] = useState((cfg.modelAnswer as string) ?? "");
  const [scenario, setScenario] = useState((cfg.scenario as string) ?? "");
  const [objective, setObjective] = useState((cfg.objective as string) ?? "");
  const [level, setLevel] = useState((cfg.level as string) ?? "B1");
  const [keywords, setKeywords] = useState((cfg.keywords as string) ?? "");

  function save() {
    let config: Record<string, unknown> = {};
    switch (exercise.category) {
      case "reading":
        config = { text };
        break;
      case "listening":
        config = { audioUrl, transcript };
        break;
      case "writing":
        config = {
          textType,
          minWords: minWords ? Number(minWords) : null,
          maxWords: maxWords ? Number(maxWords) : null,
          rubric: rubric.split(/\n/).map((s) => s.trim()).filter(Boolean),
          modelAnswer: modelAnswer || null,
        };
        break;
      case "speaking":
        config = { scenario, objective, level, keywords };
        break;
    }
    run(
      () =>
        updateExercise(exercise.id, {
          title,
          instructions: instructions || null,
          config,
        }),
      "Ejercicio guardado."
    );
  }

  const ta = (v: string, set: (s: string) => void, ph: string, rows = 3) => (
    <textarea
      value={v}
      onChange={(e) => set(e.target.value)}
      rows={rows}
      placeholder={ph}
      className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm"
    />
  );

  return (
    <div className="flex flex-col gap-3">
      <FormField id={`t-${exercise.id}`} label="Título">
        <Input id={`t-${exercise.id}`} value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormField>
      <div className="flex flex-col gap-1.5">
        <Label>Enunciado / instrucciones</Label>
        {ta(instructions, setInstructions, "Qué debe hacer el alumno…")}
      </div>

      {exercise.category === "reading" && (
        <div className="flex flex-col gap-1.5">
          <Label>Texto base</Label>
          {ta(text, setText, "Pega aquí el texto de lectura…", 6)}
        </div>
      )}

      {exercise.category === "listening" && (
        <>
          <FormField id={`a-${exercise.id}`} label="URL del audio">
            <Input
              id={`a-${exercise.id}`}
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              placeholder="https://… (o genera audio en la sección de voz)"
            />
          </FormField>
          <div className="flex flex-col gap-1.5">
            <Label>Transcripción</Label>
            {ta(transcript, setTranscript, "Transcripción del audio…", 5)}
          </div>
        </>
      )}

      {exercise.category === "writing" && (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`tt-${exercise.id}`}>Tipo de texto</Label>
              <select
                id={`tt-${exercise.id}`}
                value={textType}
                onChange={(e) => setTextType(e.target.value)}
                className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
              >
                {["email", "ensayo", "artículo", "reseña", "carta", "informe", "narración", "otro"].map(
                  (t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  )
                )}
              </select>
            </div>
            <FormField id={`min-${exercise.id}`} label="Mín. palabras">
              <Input
                id={`min-${exercise.id}`}
                type="number"
                min={0}
                value={minWords}
                onChange={(e) => setMinWords(e.target.value)}
              />
            </FormField>
            <FormField id={`max-${exercise.id}`} label="Máx. palabras">
              <Input
                id={`max-${exercise.id}`}
                type="number"
                min={0}
                value={maxWords}
                onChange={(e) => setMaxWords(e.target.value)}
              />
            </FormField>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Rúbrica (un criterio por línea)</Label>
            {ta(rubric, setRubric, "Uso correcto del pasado simple\nEstructura formal de email", 4)}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Respuesta modelo (opcional)</Label>
            {ta(modelAnswer, setModelAnswer, "Se puede mostrar tras la entrega…", 4)}
          </div>
        </>
      )}

      {exercise.category === "speaking" && (
        <>
          <FormField id={`sc-${exercise.id}`} label="Escenario / rol-play">
            <Input
              id={`sc-${exercise.id}`}
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              placeholder="Eres un camarero y el alumno pide en un restaurante"
            />
          </FormField>
          <FormField id={`ob-${exercise.id}`} label="Objetivo lingüístico">
            <Input
              id={`ob-${exercise.id}`}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              placeholder="Practicar el uso de condicionales"
            />
          </FormField>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor={`lv-${exercise.id}`}>Nivel (MCER)</Label>
              <select
                id={`lv-${exercise.id}`}
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
              >
                {CEFR_LEVELS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <FormField id={`kw-${exercise.id}`} label="Palabras clave (coma)">
              <Input
                id={`kw-${exercise.id}`}
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </FormField>
          </div>
        </>
      )}

      <Button variant="gold" size="sm" disabled={isPending} onClick={save} className="w-fit">
        {isPending ? "Guardando…" : "Guardar ejercicio"}
      </Button>
    </div>
  );
}

function QuestionsSection({
  exercise,
  isPending,
  run,
}: {
  exercise: ExerciseData;
  isPending: boolean;
  run: (fn: () => Promise<unknown>, ok?: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-muted/30 p-3">
      <div className="flex items-center justify-between">
        <p className="font-display text-sm tracking-tighter">Preguntas</p>
      </div>

      {exercise.questions.map((q, i) => (
        <QuestionEditor
          key={q.id}
          question={q}
          index={i}
          total={exercise.questions.length}
          isPending={isPending}
          run={run}
        />
      ))}

      <div className="flex flex-wrap gap-1.5">
        {QUESTION_KINDS.map((kind) => (
          <Button
            key={kind}
            variant="ghost"
            size="sm"
            disabled={isPending}
            onClick={() => run(() => addQuestion(exercise.id, kind))}
          >
            <Plus className="size-3.5" /> {QUESTION_KIND_LABELS[kind]}
          </Button>
        ))}
      </div>
    </div>
  );
}

function QuestionEditor({
  question,
  index,
  total,
  isPending,
  run,
}: {
  question: QuestionData;
  index: number;
  total: number;
  isPending: boolean;
  run: (fn: () => Promise<unknown>, ok?: string) => void;
}) {
  const kind = question.kind as QuestionKind;
  const d = question.data;
  const [prompt, setPrompt] = useState((d.prompt as string) ?? "");
  const [options, setOptions] = useState<string[]>(
    Array.isArray(d.options) ? (d.options as string[]) : ["", ""]
  );
  const [correct, setCorrect] = useState<number[]>(
    Array.isArray(d.correct) ? (d.correct as number[]) : []
  );
  const [tfCorrect, setTfCorrect] = useState<boolean>(
    typeof d.correct === "boolean" ? d.correct : true
  );
  const [blanks, setBlanks] = useState<string>(
    Array.isArray(d.blanks)
      ? (d.blanks as { accepted: string[] }[]).map((b) => b.accepted.join(", ")).join("\n")
      : ""
  );
  const [items, setItems] = useState<string>(
    Array.isArray(d.items) ? (d.items as string[]).join("\n") : ""
  );
  const [pairs, setPairs] = useState<string>(
    Array.isArray(d.pairs)
      ? (d.pairs as { left: string; right: string }[]).map((p) => `${p.left} | ${p.right}`).join("\n")
      : ""
  );

  function save() {
    let data: Record<string, unknown> = { kind, prompt };
    switch (kind) {
      case "multiple_choice":
        data = { kind, prompt, options, correct };
        break;
      case "true_false":
        data = { kind, prompt, correct: tfCorrect };
        break;
      case "fill_blank":
        data = {
          kind,
          prompt,
          blanks: blanks
            .split(/\n/)
            .map((l) => l.trim())
            .filter(Boolean)
            .map((l) => ({ accepted: l.split(",").map((s) => s.trim()).filter(Boolean) })),
        };
        break;
      case "ordering":
        data = {
          kind,
          prompt,
          items: items.split(/\n/).map((s) => s.trim()).filter(Boolean),
        };
        break;
      case "matching":
        data = {
          kind,
          prompt,
          pairs: pairs
            .split(/\n/)
            .map((l) => l.split("|"))
            .filter((p) => p.length === 2)
            .map(([left, right]) => ({ left: left!.trim(), right: right!.trim() })),
        };
        break;
      case "open":
        data = { kind, prompt };
        break;
    }
    run(() => updateQuestion(question.id, data), "Pregunta guardada.");
  }

  return (
    <div className="rounded-md border border-border bg-background p-3">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded bg-muted px-1.5 py-0.5 text-xs">
          {QUESTION_KIND_LABELS[kind]}
        </span>
        <div className="ml-auto flex items-center gap-0.5">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Subir pregunta"
            className="h-6"
            disabled={isPending || index === 0}
            onClick={() => run(() => moveQuestion(question.id, "up"))}
          >
            <ChevronUp className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Bajar pregunta"
            className="h-6"
            disabled={isPending || index === total - 1}
            onClick={() => run(() => moveQuestion(question.id, "down"))}
          >
            <ChevronDown className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Eliminar pregunta"
            disabled={isPending}
            onClick={() => run(() => deleteQuestion(question.id))}
          >
            <Trash2 className="size-3.5 text-destructive" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enunciado de la pregunta" />

        {kind === "multiple_choice" && (
          <div className="flex flex-col gap-1.5">
            {options.map((opt, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={correct.includes(i)}
                  onChange={(e) =>
                    setCorrect((c) =>
                      e.target.checked ? [...c, i] : c.filter((x) => x !== i)
                    )
                  }
                  aria-label={`Opción ${i + 1} correcta`}
                />
                <Input
                  value={opt}
                  onChange={(e) =>
                    setOptions((o) => o.map((v, j) => (j === i ? e.target.value : v)))
                  }
                  placeholder={`Opción ${i + 1}`}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Quitar opción"
                  onClick={() => {
                    setOptions((o) => o.filter((_, j) => j !== i));
                    setCorrect((c) => c.filter((x) => x !== i).map((x) => (x > i ? x - 1 : x)));
                  }}
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </div>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="w-fit"
              onClick={() => setOptions((o) => [...o, ""])}
            >
              <Plus className="size-3.5" /> Añadir opción
            </Button>
            <p className="text-xs text-muted-foreground">
              Marca la casilla de las opciones correctas.
            </p>
          </div>
        )}

        {kind === "true_false" && (
          <div className="flex gap-3 text-sm">
            <label className="flex items-center gap-1.5">
              <input
                type="radio"
                name={`tf-${question.id}`}
                checked={tfCorrect}
                onChange={() => setTfCorrect(true)}
              />
              Verdadero
            </label>
            <label className="flex items-center gap-1.5">
              <input
                type="radio"
                name={`tf-${question.id}`}
                checked={!tfCorrect}
                onChange={() => setTfCorrect(false)}
              />
              Falso
            </label>
          </div>
        )}

        {kind === "fill_blank" && (
          <div className="flex flex-col gap-1">
            <Label className="text-xs">
              Un hueco por línea; respuestas aceptadas separadas por coma
            </Label>
            <textarea
              value={blanks}
              onChange={(e) => setBlanks(e.target.value)}
              rows={3}
              placeholder={"colour, color\nfavourite"}
              className="w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm"
            />
          </div>
        )}

        {kind === "ordering" && (
          <div className="flex flex-col gap-1">
            <Label className="text-xs">Elementos en el ORDEN correcto (uno por línea)</Label>
            <textarea
              value={items}
              onChange={(e) => setItems(e.target.value)}
              rows={3}
              className="w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm"
            />
          </div>
        )}

        {kind === "matching" && (
          <div className="flex flex-col gap-1">
            <Label className="text-xs">Pares «izquierda | derecha» (uno por línea)</Label>
            <textarea
              value={pairs}
              onChange={(e) => setPairs(e.target.value)}
              rows={3}
              placeholder={"1 | one\n2 | two"}
              className="w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm"
            />
          </div>
        )}

        <Button variant="outline" size="sm" disabled={isPending} onClick={save} className="w-fit">
          {isPending ? "Guardando…" : "Guardar pregunta"}
        </Button>
      </div>
    </div>
  );
}
