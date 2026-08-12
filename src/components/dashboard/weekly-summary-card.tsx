import { BookOpen, Clock, Flame, Sparkles, TrendingDown, TrendingUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { WeeklySummary } from "@/modules/users/server/weekly-summary-queries";

function Delta({
  current,
  previous,
  hasHistory,
}: {
  current: number;
  previous: number;
  hasHistory: boolean;
}) {
  if (!hasHistory) {
    return <span className="text-xs text-muted-foreground">tu primera semana</span>;
  }
  const diff = current - previous;
  if (diff === 0) {
    return (
      <span className="text-xs text-muted-foreground">igual que la semana pasada</span>
    );
  }
  const up = diff > 0;
  const Icon = up ? TrendingUp : TrendingDown;
  return (
    <span
      className={cn(
        "flex items-center gap-1 text-xs",
        up ? "text-success" : "text-muted-foreground"
      )}
    >
      <Icon className="size-3.5" />
      {up ? "+" : ""}
      {diff} vs. semana pasada
    </span>
  );
}

/**
 * Resumen de la semana en curso frente a la anterior. Cifras reales
 * con marca de tiempo; nunca un porcentaje inventado cuando no hay
 * histórico con el que comparar.
 */
export function WeeklySummaryCard({ summary }: { summary: WeeklySummary }) {
  const metrics = [
    {
      icon: BookOpen,
      label: "Lecciones completadas",
      value: summary.lessonsThisWeek,
      previous: summary.lessonsLastWeek,
    },
    {
      icon: Sparkles,
      label: "XP ganado",
      value: summary.xpThisWeek,
      previous: summary.xpLastWeek,
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="mb-4 font-display text-lg tracking-tighter">Tu semana</h2>
        <div className="flex flex-col gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <m.icon className="size-4.5 text-gold" />
                <div>
                  <p className="font-mono text-lg leading-none">{m.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                </div>
              </div>
              <Delta
                current={m.value}
                previous={m.previous}
                hasHistory={summary.hasHistory}
              />
            </div>
          ))}

          <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
            <div className="flex items-center gap-2.5">
              <Clock className="size-4.5 text-gold" />
              <div>
                <p className="font-mono text-lg leading-none">
                  {summary.minutesThisWeek} min
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Tiempo esta semana</p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Flame className="size-3.5 text-gold" /> Racha: {summary.currentStreak} día
              {summary.currentStreak === 1 ? "" : "s"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
