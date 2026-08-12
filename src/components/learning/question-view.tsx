"use client";

import { CheckCircle2, ChevronDown, ChevronUp, XCircle } from "lucide-react";
import { useEffect, useMemo } from "react";

import { Button } from "@/components/ui/button";
import type { Response } from "@/modules/exercises/shared/question-types";

export type Q = { id: string; kind: string; data: Record<string, unknown> };

/** Barajado DETERMINISTA por semilla: no se re-baraja en cada render. */
function seededShuffle<T>(arr: T[], seed: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = (h ^ seed.charCodeAt(i)) * 16777619;
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/**
 * Vista de UNA pregunta para el alumno (controlada): recibe la respuesta y
 * un `onChange`. Reutilizada por el reproductor de ejercicios y de exámenes.
 * Soporta los 6 tipos del motor: opción múltiple, verdadero/falso, huecos,
 * relacionar, ordenar y abierta.
 */
export function QuestionView({
  index,
  question,
  response,
  onChange,
  result,
  disabled,
}: {
  index: number;
  question: Q;
  response: Response | undefined;
  onChange: (r: Response) => void;
  result?: { correct: boolean; autoGradable: boolean; explanation: string | null };
  disabled: boolean;
}) {
  const d = question.data;
  const prompt = String(d.prompt ?? "");
  const options = Array.isArray(d.options) ? (d.options as string[]) : [];
  const blanks = Array.isArray(d.blanks) ? (d.blanks as unknown[]) : [];
  const pairs = useMemo(
    () => (Array.isArray(d.pairs) ? (d.pairs as { left: string; right: string }[]) : []),
    [d.pairs]
  );
  const items = useMemo(() => (Array.isArray(d.items) ? (d.items as string[]) : []), [d.items]);

  // Barajados de presentación (una vez por pregunta).
  const shuffledRights = useMemo(
    () => seededShuffle(pairs.map((p, i) => ({ text: p.right, idx: i })), `r-${question.id}`),
    [pairs, question.id]
  );
  const initialOrder = useMemo(
    () => seededShuffle(items.map((_, i) => i), `o-${question.id}`),
    [items, question.id]
  );

  // Ordering: inicializa la respuesta con el orden barajado si aún no existe.
  useEffect(() => {
    if (question.kind === "ordering" && !response && items.length > 0) {
      onChange({ kind: "ordering", order: initialOrder });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.kind]);

  const mapping = response?.kind === "matching" ? response.mapping : {};
  const order = response?.kind === "ordering" ? response.order : initialOrder;

  function moveItem(pos: number, dir: -1 | 1) {
    const next = [...order];
    const swap = pos + dir;
    if (swap < 0 || swap >= next.length) return;
    [next[pos], next[swap]] = [next[swap]!, next[pos]!];
    onChange({ kind: "ordering", order: next });
  }

  return (
    <div className="rounded-md border border-border p-3.5">
      <div className="mb-2 flex items-start gap-2">
        <span className="text-sm font-medium text-muted-foreground">{index + 1}.</span>
        <p className="text-sm font-medium">{prompt}</p>
        {result && result.autoGradable && (
          <span className="ml-auto">
            {result.correct ? (
              <CheckCircle2 className="size-4 text-success" />
            ) : (
              <XCircle className="size-4 text-destructive" />
            )}
          </span>
        )}
      </div>

      {question.kind === "multiple_choice" && (
        <div className="flex flex-col gap-1.5">
          {options.map((opt, i) => {
            const selected =
              response?.kind === "multiple_choice" && response.selected.includes(i);
            return (
              <label key={i} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  disabled={disabled}
                  checked={!!selected}
                  onChange={(e) => {
                    const prev =
                      response?.kind === "multiple_choice" ? response.selected : [];
                    onChange({
                      kind: "multiple_choice",
                      selected: e.target.checked ? [...prev, i] : prev.filter((x) => x !== i),
                    });
                  }}
                />
                {opt}
              </label>
            );
          })}
        </div>
      )}

      {question.kind === "true_false" && (
        <div className="flex gap-4 text-sm">
          {[true, false].map((v) => (
            <label key={String(v)} className="flex items-center gap-1.5">
              <input
                type="radio"
                name={`q-${question.id}`}
                disabled={disabled}
                checked={response?.kind === "true_false" && response.value === v}
                onChange={() => onChange({ kind: "true_false", value: v })}
              />
              {v ? "Verdadero" : "Falso"}
            </label>
          ))}
        </div>
      )}

      {question.kind === "fill_blank" && (
        <div className="flex flex-col gap-1.5">
          {blanks.map((_, i) => (
            <input
              key={i}
              disabled={disabled}
              placeholder={`Hueco ${i + 1}`}
              value={response?.kind === "fill_blank" ? (response.answers[i] ?? "") : ""}
              onChange={(e) => {
                const prev = response?.kind === "fill_blank" ? [...response.answers] : [];
                prev[i] = e.target.value;
                onChange({ kind: "fill_blank", answers: prev });
              }}
              className="rounded-md border border-input bg-background px-3 py-1.5 text-sm"
            />
          ))}
        </div>
      )}

      {question.kind === "matching" && (
        <div className="flex flex-col gap-1.5">
          {pairs.map((p, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="min-w-0 flex-1 truncate">{p.left}</span>
              <span className="text-muted-foreground">→</span>
              <select
                disabled={disabled}
                value={mapping[i] ?? ""}
                onChange={(e) =>
                  onChange({
                    kind: "matching",
                    mapping: { ...mapping, [i]: Number(e.target.value) },
                  })
                }
                className="h-9 min-w-0 flex-1 rounded-md border border-input bg-background px-2 text-sm"
              >
                <option value="">— Elige —</option>
                {shuffledRights.map((r) => (
                  <option key={r.idx} value={r.idx}>
                    {r.text}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {question.kind === "ordering" && (
        <div className="flex flex-col gap-1.5">
          {order.map((origIdx, pos) => (
            <div
              key={pos}
              className="flex items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1.5 text-sm"
            >
              <span className="text-muted-foreground">{pos + 1}.</span>
              <span className="min-w-0 flex-1 truncate">{items[origIdx]}</span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Subir"
                className="h-6"
                disabled={disabled || pos === 0}
                onClick={() => moveItem(pos, -1)}
              >
                <ChevronUp className="size-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Bajar"
                className="h-6"
                disabled={disabled || pos === order.length - 1}
                onClick={() => moveItem(pos, 1)}
              >
                <ChevronDown className="size-3.5" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {question.kind === "open" && (
        <textarea
          disabled={disabled}
          rows={3}
          placeholder="Tu respuesta…"
          value={response?.kind === "open" ? response.text : ""}
          onChange={(e) => onChange({ kind: "open", text: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm"
        />
      )}

      {result?.explanation && (
        <p className="mt-2 rounded bg-muted/50 p-2 text-xs text-muted-foreground">
          {result.explanation}
        </p>
      )}
    </div>
  );
}
