import type { CourseFunnel } from "@/modules/admin/server/analytics-queries";

/**
 * Embudo de finalización de un curso: cada módulo como una barra cuya
 * longitud es la proporción de inscritos que llegaron a completar al
 * menos una lección suya. Deja ver de un vistazo en qué módulo se cae
 * la gente. Datos reales; si un módulo tiene 0, se muestra 0 (honesto).
 */
export function CompletionFunnel({ funnel }: { funnel: CourseFunnel }) {
  const base = Math.max(1, funnel.totalEnrolled);

  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <p className="font-medium">{funnel.courseTitle}</p>
        <span className="font-mono text-xs text-muted-foreground">
          {funnel.totalEnrolled} inscrito{funnel.totalEnrolled === 1 ? "" : "s"}
        </span>
      </div>
      {funnel.modules.length === 0 ? (
        <p className="text-sm text-muted-foreground">Este curso no tiene módulos.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {funnel.modules.map((m, i) => {
            const pct = Math.round((m.reached / base) * 100);
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="w-40 shrink-0 truncate text-sm" title={m.title}>
                  <span className="mr-1.5 font-mono text-xs text-muted-foreground">
                    {i + 1}.
                  </span>
                  {m.title}
                </span>
                <div className="h-5 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gold transition-all"
                    style={{ width: `${Math.max(pct, m.reached > 0 ? 3 : 0)}%` }}
                  />
                </div>
                <span className="w-20 shrink-0 text-right font-mono text-xs text-muted-foreground">
                  {m.reached} · {pct}%
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
