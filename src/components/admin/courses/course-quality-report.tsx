import { AlertTriangle, CheckCircle2 } from "lucide-react";

import type { QualityIssue } from "@/modules/courses/shared/quality";

/**
 * Panel de control de calidad (9.7): lista de avisos NO bloqueantes antes de
 * publicar. Server component: solo muestra el resultado del checker.
 */
export function CourseQualityReport({ issues }: { issues: QualityIssue[] }) {
  if (issues.length === 0) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-success/30 bg-success/5 p-5">
        <CheckCircle2 className="size-5 text-success" />
        <div>
          <p className="text-sm font-medium">Todo en orden</p>
          <p className="text-sm text-muted-foreground">
            No se han detectado problemas de contenido. El curso está listo para publicar.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <AlertTriangle className="size-4 text-gold" />
        {issues.length} aviso(s). No impiden publicar, pero conviene revisarlos.
      </div>
      <ul className="flex flex-col gap-2">
        {issues.map((issue, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-md border border-border bg-card p-3"
          >
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-gold" />
            <div className="min-w-0">
              <p className="text-sm">{issue.message}</p>
              <p className="truncate text-xs text-muted-foreground">{issue.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
