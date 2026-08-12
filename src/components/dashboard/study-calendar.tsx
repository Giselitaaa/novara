"use client";

import { cn } from "@/lib/utils";

/**
 * Mapa de calor simple de los últimos 14 días de actividad — el
 * "calendario de estudio". Intensidad proporcional al nº de eventos
 * de actividad registrados ese día (lecciones completadas, exámenes).
 */
export function StudyCalendar({ days }: { days: { date: string; count: number }[] }) {
  const maxCount = Math.max(1, ...days.map((d) => d.count));

  return (
    <div className="flex flex-col gap-2">
      <p className="font-display text-sm tracking-tighter">Calendario de estudio</p>
      <div className="flex gap-1.5">
        {days.map((day) => {
          const intensity = day.count / maxCount;
          return (
            <div
              key={day.date}
              title={`${day.date}: ${day.count} actividad(es)`}
              className={cn(
                "h-7 flex-1 rounded-sm",
                day.count === 0
                  ? "bg-muted"
                  : intensity > 0.66
                    ? "bg-gold"
                    : intensity > 0.33
                      ? "bg-gold/60"
                      : "bg-gold/30"
              )}
            />
          );
        })}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground">
        <span>Hace 14 días</span>
        <span>Hoy</span>
      </div>
    </div>
  );
}
