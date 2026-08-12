"use client";

import { Copy, Sparkles } from "lucide-react";
import { useMemo, useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  generateCambridgeContent,
  insertContentAsBlock,
} from "@/modules/cambridge/server/actions";

type Level = {
  id: string;
  name: string;
  exam: string;
  cefr: string;
  ageRange: string;
  forWhom: string;
};
type Mode = { id: string; label: string; description: string; fields: string[] };
type Lesson = { id: string; title: string; courseTitle: string };

const SKILLS = [
  "Reading",
  "Reading & Use of English",
  "Writing",
  "Listening",
  "Speaking",
  "curso completo",
];

export function CambridgeGenerator({
  levels,
  modes,
  lessons,
}: {
  levels: Level[];
  modes: Mode[];
  lessons: Lesson[];
}) {
  const [levelId, setLevelId] = useState<string>("");
  const [modeId, setModeId] = useState<string>(modes[0]?.id ?? "");
  const [fields, setFields] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);
  const [unavailable, setUnavailable] = useState<string | null>(null);
  const [insertLessonId, setInsertLessonId] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [isInserting, startInserting] = useTransition();

  function insert() {
    if (!insertLessonId || !result) return;
    startInserting(async () => {
      try {
        await insertContentAsBlock(insertLessonId, result);
        toast.success("Insertado como bloque de texto en la lección.");
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "No se pudo insertar.");
      }
    });
  }

  const mode = useMemo(() => modes.find((m) => m.id === modeId), [modes, modeId]);

  function setField(key: string, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function generate() {
    if (!levelId) {
      toast.error("Elige primero un nivel.");
      return;
    }
    setResult(null);
    setUnavailable(null);
    startTransition(async () => {
      const res = await generateCambridgeContent({
        mode: modeId as never,
        levelId,
        skill: fields.skill,
        part: fields.part,
        count: fields.count ? Number(fields.count) : undefined,
        week: fields.week,
        topic: fields.topic,
        profile: fields.profile,
        studentText: fields.studentText,
      });
      if (res.status === "ok") setResult(res.content);
      else if (res.status === "not_configured") setUnavailable(res.message);
      else toast.error(res.message);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Selector de nivel */}
      <div>
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
          1 · Elige el nivel
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((l) => {
            const active = levelId === l.id;
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => setLevelId(l.id)}
                className={`rounded-lg border p-3 text-left transition-colors ${
                  active
                    ? "border-gold bg-gold/10"
                    : "border-border hover:bg-accent"
                }`}
              >
                <p className="text-sm font-medium">{l.name}</p>
                <p className="text-xs text-muted-foreground">
                  {l.cefr} · {l.ageRange}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{l.forWhom}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Modo + parámetros */}
      <Card className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="mode">2 · Qué generar</Label>
          <select
            id="mode"
            value={modeId}
            onChange={(e) => {
              setModeId(e.target.value);
              setFields({});
            }}
            className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
          >
            {modes.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
          {mode && <p className="text-xs text-muted-foreground">{mode.description}</p>}
        </div>

        {mode && mode.fields.length > 0 && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {mode.fields.includes("skill") && (
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="skill">Destreza</Label>
                <select
                  id="skill"
                  value={fields.skill ?? ""}
                  onChange={(e) => setField("skill", e.target.value)}
                  className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
                >
                  <option value="">— Elige —</option>
                  {SKILLS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {mode.fields.includes("part") && (
              <FormField id="part" label="Parte del examen (opcional)">
                <Input
                  id="part"
                  value={fields.part ?? ""}
                  onChange={(e) => setField("part", e.target.value)}
                  placeholder="p. ej. Parte 1 (ensayo)"
                />
              </FormField>
            )}
            {mode.fields.includes("count") && (
              <FormField id="count" label="Nº de ejercicios">
                <Input
                  id="count"
                  type="number"
                  min={1}
                  max={10}
                  value={fields.count ?? "3"}
                  onChange={(e) => setField("count", e.target.value)}
                />
              </FormField>
            )}
            {mode.fields.includes("week") && (
              <FormField id="week" label="Semana / unidad">
                <Input
                  id="week"
                  value={fields.week ?? ""}
                  onChange={(e) => setField("week", e.target.value)}
                  placeholder="1"
                />
              </FormField>
            )}
            {mode.fields.includes("topic") && (
              <FormField id="topic" label="Tema (opcional)">
                <Input
                  id="topic"
                  value={fields.topic ?? ""}
                  onChange={(e) => setField("topic", e.target.value)}
                  placeholder="p. ej. medio ambiente"
                />
              </FormField>
            )}
            {mode.fields.includes("profile") && (
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor="profile">Perfil del alumno</Label>
                <textarea
                  id="profile"
                  rows={3}
                  value={fields.profile ?? ""}
                  onChange={(e) => setField("profile", e.target.value)}
                  placeholder="Tiempo semanal disponible, fecha objetivo de examen, destreza más débil…"
                  className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm"
                />
              </div>
            )}
            {mode.fields.includes("studentText") && (
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor="studentText">Texto del alumno a corregir</Label>
                <textarea
                  id="studentText"
                  rows={6}
                  value={fields.studentText ?? ""}
                  onChange={(e) => setField("studentText", e.target.value)}
                  placeholder="Pega aquí el texto que ha escrito el alumno…"
                  className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm"
                />
              </div>
            )}
          </div>
        )}

        <Button variant="gold" onClick={generate} disabled={isPending} className="w-fit">
          <Sparkles className="size-4" /> {isPending ? "Generando…" : "Generar contenido"}
        </Button>
      </Card>

      {/* 3. Resultado */}
      {unavailable && (
        <div className="rounded-md border border-dashed border-border p-4 text-sm text-muted-foreground">
          {unavailable} Mientras tanto, el contenido maestro de cada nivel sigue disponible como
          guía en el editor de cursos.
        </div>
      )}

      {result && (
        <Card className="flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between">
            <p className="font-display text-sm tracking-tighter">Resultado generado</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(result);
                toast.success("Copiado al portapapeles.");
              }}
            >
              <Copy className="size-3.5" /> Copiar
            </Button>
          </div>
          <div className="max-h-[70vh] overflow-y-auto whitespace-pre-wrap rounded-md border border-border bg-muted/20 p-4 font-mono text-xs leading-relaxed">
            {result}
          </div>

          {/* Insertar directamente como bloque de una lección */}
          {lessons.length > 0 && (
            <div className="flex flex-wrap items-end gap-2 border-t border-border pt-3">
              <div className="flex flex-1 flex-col gap-1.5">
                <Label htmlFor="insertLesson">Insertar en una lección (como bloque de texto)</Label>
                <select
                  id="insertLesson"
                  value={insertLessonId}
                  onChange={(e) => setInsertLessonId(e.target.value)}
                  className="h-10 rounded-md border border-input bg-background px-2.5 text-sm"
                >
                  <option value="">— Elige una lección —</option>
                  {lessons.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.courseTitle} · {l.title}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                variant="gold"
                onClick={insert}
                disabled={isInserting || !insertLessonId}
              >
                {isInserting ? "Insertando…" : "Insertar en la lección"}
              </Button>
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            Revísalo antes de publicarlo. Se inserta como bloque de texto; puedes refinarlo o
            dividirlo en el editor de bloques.
          </p>
        </Card>
      )}
    </div>
  );
}
