import { CalendarClock, GraduationCap, Info, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { FinalOutcome } from "@/modules/readiness/shared/final-outcome";

/**
 * Muestra el resultado ADAPTATIVO del simulacro final (punto 12): directrices
 * de inscripción si aprueba, o el plan intensivo de refuerzo si no. Solo se
 * renderiza cuando el examen es el simulacro final del nivel.
 */
export function FinalExamOutcome({
  outcome,
  courseSlug,
}: {
  outcome: FinalOutcome;
  courseSlug: string;
}) {
  if (outcome.status === "passed") {
    return (
      <Card className="mb-8 border-success/40 bg-success/5">
        <CardContent className="flex flex-col gap-4 pt-6">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 size-6 shrink-0 text-success" />
            <div>
              <h2 className="font-display text-xl tracking-tighter">{outcome.headline}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{outcome.message}</p>
            </div>
          </div>
          <ol className="flex flex-col gap-2.5">
            {outcome.registrationSteps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15 font-mono text-xs font-medium text-success">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="flex items-start gap-2 rounded-md bg-muted/60 p-3 text-xs text-muted-foreground">
            <Info className="mt-0.5 size-3.5 shrink-0" />
            {outcome.disclaimer}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-8 border-gold/40 bg-gold/5">
      <CardContent className="flex flex-col gap-4 pt-6">
        <div className="flex items-start gap-3">
          <Target className="mt-0.5 size-6 shrink-0 text-gold" />
          <div>
            <h2 className="font-display text-xl tracking-tighter">{outcome.headline}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{outcome.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {outcome.focusSkills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-foreground dark:text-gold"
            >
              Refuerzo: {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <CalendarClock className="size-4" />
          Plan intensivo de {outcome.months} {outcome.months === 1 ? "mes" : "meses"}
        </div>

        <ol className="flex flex-col gap-2">
          {outcome.plan.map((w) => (
            <li key={w.week} className="flex gap-3 rounded-md border border-border p-3 text-sm">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-medium text-gold-foreground dark:text-gold">
                {w.week}
              </span>
              <span>
                <span className="font-medium">{w.focus}.</span>{" "}
                <span className="text-muted-foreground">{w.task}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant="gold" size="sm">
            <Link href={`/cursos/${courseSlug}/aprender`}>Volver a mi preparación</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/mi-aprendizaje">Ver mi progreso y banco de errores</Link>
          </Button>
        </div>

        <p className="flex items-start gap-2 rounded-md bg-muted/60 p-3 text-xs text-muted-foreground">
          <Info className="mt-0.5 size-3.5 shrink-0" />
          {outcome.disclaimer}
        </p>
      </CardContent>
    </Card>
  );
}
