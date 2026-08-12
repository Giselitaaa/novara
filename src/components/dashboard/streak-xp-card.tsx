import { Flame, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function StreakXPCard({
  currentStreak,
  xp,
  levelName,
  nextLevelXp,
}: {
  currentStreak: number;
  xp: number;
  levelName: string;
  nextLevelXp: number | null;
}) {
  return (
    <Card>
      <CardContent className="grid grid-cols-2 gap-4 pt-6">
        <div className="flex items-center gap-2.5">
          <Flame
            className={
              currentStreak > 0 ? "size-6 text-gold" : "size-6 text-muted-foreground"
            }
          />
          <div>
            <p className="font-display text-lg tracking-tighter">{currentStreak}</p>
            <p className="text-xs text-muted-foreground">días de racha</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Sparkles className="size-6 text-gold" />
          <div>
            <p className="font-display text-lg tracking-tighter">{levelName}</p>
            <p className="text-xs text-muted-foreground">
              {xp} XP{nextLevelXp ? ` · ${nextLevelXp - xp} para subir` : ""}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
