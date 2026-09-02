import { Card, CardContent } from "@/components/ui/card";
import type { CourseReadiness } from "@/modules/readiness/server/queries";
import type { SkillId } from "@/modules/readiness/shared/readiness";
import type { RecommendationAction } from "@/modules/readiness/shared/recommend";

const SKILL_LABELS: Record<SkillId, string> = {
  reading: "Reading",
  writing: "Writing",
  listening: "Listening",
  speaking: "Speaking",
};

const ACTION_LABELS: Record<RecommendationAction, string> = {
  diagnostic: "Haz tu evaluación inicial",
  continue_lessons: "Sigue tu itinerario",
  reinforce_skill: "Refuerza tu destreza más débil",
  intensive_reinforcement: "Refuerzo intensivo",
  take_mock_exam: "Haz un simulacro completo",
  register_exam: "Prepárate para el examen oficial",
};

/**
 * Panel de READINESS del alumno en una preparación: rendimiento real por
 * destreza (distinto del progreso de contenido), recomendación de siguiente
 * paso y banco de errores por destreza. Se alimenta de datos reales
 * (`getCourseReadinessBySlug`). Componente de servidor (solo presentación).
 */
export function ReadinessCard({ data }: { data: CourseReadiness }) {
  const { readiness, recommendation, contentProgress, errorsBySkill, courseTitle } = data;

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 pt-6">
        <div>
          <p className="font-display text-lg tracking-tighter">Tu preparación (readiness)</p>
          <p className="text-sm text-muted-foreground">{courseTitle}</p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold">
            {readiness.overall ?? "—"}
            <span className="text-base text-muted-foreground">/100</span>
          </span>
          <span className="text-sm text-muted-foreground">
            {readiness.overall === null
              ? "sin datos aún"
              : readiness.ready
                ? "nivel objetivo alcanzado (estimado)"
                : "en progreso"}
          </span>
        </div>

        {readiness.scale && readiness.cambridgeScaleEstimate !== null && (
          <p className="text-xs text-muted-foreground">
            Estimación Cambridge English Scale:{" "}
            <span className="font-medium text-foreground">≈ {readiness.cambridgeScaleEstimate}</span>{" "}
            (aprobado desde {readiness.scale.pass}; rango {readiness.scale.min}–{readiness.scale.max})
          </p>
        )}

        <div className="flex flex-col gap-2">
          {readiness.perSkill.map((s) => (
            <div key={s.skill} className="flex items-center gap-3 text-sm">
              <span className="w-20 text-muted-foreground">{SKILL_LABELS[s.skill]}</span>
              <div className="h-2 flex-1 overflow-hidden rounded bg-muted">
                <div className="h-full rounded bg-gold" style={{ width: `${s.readiness ?? 0}%` }} />
              </div>
              <span className="w-10 text-right tabular-nums">{s.readiness ?? "—"}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Progreso de contenido: <span className="font-medium text-foreground">{contentProgress}%</span>{" "}
          (cuánto material has visto, distinto de tu preparación real).
        </p>

        <div className="rounded-md border border-gold/25 bg-gold/5 p-3 text-sm">
          <p className="font-medium">Siguiente paso: {ACTION_LABELS[recommendation.action]}</p>
          <p className="text-muted-foreground">{recommendation.message}</p>
        </div>

        {errorsBySkill.length > 0 && (
          <div className="text-sm">
            <p className="mb-1 text-muted-foreground">Dónde fallas más:</p>
            <div className="flex flex-wrap gap-2">
              {errorsBySkill.map((e) => (
                <span key={e.skill} className="rounded-full border border-border px-2.5 py-0.5 text-xs">
                  {SKILL_LABELS[e.skill]}: {e.errors} {e.errors === 1 ? "fallo" : "fallos"}
                </span>
              ))}
            </div>
          </div>
        )}

        <p className="text-[11px] text-muted-foreground">{readiness.disclaimer}</p>
      </CardContent>
    </Card>
  );
}
