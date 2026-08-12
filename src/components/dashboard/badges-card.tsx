import { Award } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BadgesCard({
  badges,
}: {
  badges: {
    id: string;
    awardedAt: Date;
    badge: { name: string; criteriaDescription: string | null };
  }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Award className="size-4.5 text-gold" /> Insignias y logros
        </CardTitle>
      </CardHeader>
      <CardContent>
        {badges.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Todavía no has desbloqueado ninguna insignia — sigue estudiando.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map(({ id, badge }) => (
              <div
                key={id}
                className="flex flex-col items-center gap-2 rounded-lg border border-gold/30 bg-gold/5 p-4 text-center"
              >
                <Award className="size-6 text-gold" />
                <p className="text-xs font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
