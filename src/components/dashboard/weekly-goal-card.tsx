"use client";

import { Check, Pencil, Target, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { updateWeeklyGoal } from "@/modules/users/server/actions";

/**
 * Objetivo semanal de estudio, ahora CONFIGURABLE por el alumno
 * (persistido en `UserProfile.weeklyGoalMinutes`). Muestra el progreso
 * de la semana frente a la meta y permite ajustarla en línea.
 */
export function WeeklyGoalCard({
  weekMinutes,
  goalMinutes,
}: {
  weekMinutes: number;
  goalMinutes: number;
}) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(String(goalMinutes));
  const [isPending, startTransition] = useTransition();

  const percent = Math.min(100, goalMinutes > 0 ? (weekMinutes / goalMinutes) * 100 : 0);

  function save() {
    const minutes = Number(value);
    if (!Number.isFinite(minutes) || minutes < 30) return;
    startTransition(async () => {
      await updateWeeklyGoal(minutes);
      setEditing(false);
      router.refresh();
    });
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-3 pt-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Target className="size-4.5 text-gold" />
            <p className="font-display text-sm tracking-tighter">Objetivo semanal</p>
          </div>
          {!editing && (
            <button
              type="button"
              onClick={() => {
                setValue(String(goalMinutes));
                setEditing(true);
              }}
              aria-label="Editar objetivo semanal"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Pencil className="size-3.5" />
            </button>
          )}
        </div>

        {editing ? (
          <div className="flex items-center gap-2">
            <Input
              type="number"
              min={30}
              max={2400}
              step={30}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="h-9 max-w-24"
              aria-label="Minutos por semana"
            />
            <span className="text-sm text-muted-foreground">min/semana</span>
            <button
              type="button"
              onClick={save}
              disabled={isPending}
              aria-label="Guardar"
              className="ml-auto rounded-md p-1.5 text-gold transition-colors hover:bg-gold/10"
            >
              <Check className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              aria-label="Cancelar"
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted"
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            {weekMinutes} / {goalMinutes} min esta semana
          </p>
        )}

        <Progress value={percent} />
      </CardContent>
    </Card>
  );
}
