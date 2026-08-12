import { Award, BookOpen, Sparkles, Target } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { NextObjective } from "@/modules/users/server/objectives-queries";

const ICON_BY_KIND = {
  lessons: BookOpen,
  level: Sparkles,
  certificate: Award,
  start: Target,
} as const;

/**
 * Tarjeta "Próximos objetivos": metas concretas y accionables del
 * alumno, cada una enlazando a donde se cumple. Todo proviene de datos
 * reales (progreso, XP, certificados) — si no hay objetivos, no se
 * muestra la tarjeta en vez de inventar uno.
 */
export function NextObjectivesCard({ objectives }: { objectives: NextObjective[] }) {
  if (objectives.length === 0) return null;

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="mb-4 flex items-center gap-2 font-display text-lg tracking-tighter">
          <Target className="size-4.5 text-gold" /> Próximos objetivos
        </h2>
        <ul className="flex flex-col gap-3">
          {objectives.map((objective, i) => {
            const Icon = ICON_BY_KIND[objective.kind];
            return (
              <li key={i}>
                <Link
                  href={objective.href}
                  className="group flex items-start gap-3 rounded-md border border-border p-3 transition-colors hover:border-gold/50 hover:bg-gold/5"
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span className="text-sm text-foreground/90 group-hover:text-foreground">
                    {objective.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
