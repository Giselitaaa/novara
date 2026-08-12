import {
  AlertTriangle,
  BookOpen,
  Brain,
  ListChecks,
  RotateCcw,
  Target,
} from "lucide-react";

type Pedagogy = {
  objective: string | null;
  examples: unknown;
  commonMistakes: unknown;
  visualSchemaUrl: string | null;
  mindMapUrl: string | null;
  summary: string | null;
  reviewPrompts: unknown;
} | null;

function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((v): v is string => typeof v === "string")
    : [];
}

/**
 * Estándar oficial NOVARA de lección. Cada bloque solo se muestra si
 * el admin lo ha rellenado — la mayoría de estos campos son
 * opcionales a propósito (ver `LessonPedagogy` en el esquema), así
 * que un curso más simple no muestra secciones vacías.
 */
export function LessonPedagogyBlocks({ pedagogy }: { pedagogy: Pedagogy }) {
  if (!pedagogy) return null;

  const examples = asStringArray(pedagogy.examples);
  const commonMistakes = asStringArray(pedagogy.commonMistakes);
  const reviewPrompts = asStringArray(pedagogy.reviewPrompts);

  const hasAnything =
    pedagogy.objective ||
    examples.length > 0 ||
    commonMistakes.length > 0 ||
    pedagogy.visualSchemaUrl ||
    pedagogy.mindMapUrl ||
    pedagogy.summary ||
    reviewPrompts.length > 0;

  if (!hasAnything) return null;

  return (
    <div className="flex flex-col gap-6">
      {pedagogy.objective && (
        <div className="flex items-start gap-2.5 rounded-md border border-gold/25 bg-gold/5 p-4">
          <Target className="mt-0.5 size-4 shrink-0 text-gold" />
          <p className="text-sm">
            <span className="font-medium">Objetivo: </span>
            {pedagogy.objective}
          </p>
        </div>
      )}

      {examples.length > 0 && (
        <div>
          <h3 className="mb-2 flex items-center gap-2 font-display text-sm tracking-tighter">
            <BookOpen className="size-4 text-gold" /> Ejemplos
          </h3>
          <ul className="flex flex-col gap-2">
            {examples.map((example, i) => (
              <li
                key={i}
                className="rounded-md border border-border bg-muted/30 p-3 text-sm"
              >
                {example}
              </li>
            ))}
          </ul>
        </div>
      )}

      {commonMistakes.length > 0 && (
        <div>
          <h3 className="mb-2 flex items-center gap-2 font-display text-sm tracking-tighter">
            <AlertTriangle className="size-4 text-gold" /> Errores frecuentes
          </h3>
          <ul className="flex flex-col gap-1.5">
            {commonMistakes.map((mistake, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/85">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-destructive" />
                {mistake}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(pedagogy.visualSchemaUrl || pedagogy.mindMapUrl) && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pedagogy.visualSchemaUrl && (
            <figure className="flex flex-col gap-2">
              <figcaption className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Esquema visual
              </figcaption>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pedagogy.visualSchemaUrl}
                alt="Esquema visual de la lección"
                className="w-full rounded-md border border-border"
              />
            </figure>
          )}
          {pedagogy.mindMapUrl && (
            <figure className="flex flex-col gap-2">
              <figcaption className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Brain className="size-3.5" /> Mapa mental
              </figcaption>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pedagogy.mindMapUrl}
                alt="Mapa mental de la lección"
                className="w-full rounded-md border border-border"
              />
            </figure>
          )}
        </div>
      )}

      {pedagogy.summary && (
        <div className="rounded-md border border-border bg-muted/30 p-4">
          <h3 className="mb-1.5 font-display text-sm tracking-tighter">Resumen</h3>
          <p className="text-sm text-foreground/85">{pedagogy.summary}</p>
        </div>
      )}

      {reviewPrompts.length > 0 && (
        <div>
          <h3 className="mb-2 flex items-center gap-2 font-display text-sm tracking-tighter">
            <RotateCcw className="size-4 text-gold" /> Repaso
          </h3>
          <ul className="flex flex-col gap-1.5">
            {reviewPrompts.map((prompt, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/85">
                <ListChecks className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                {prompt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
