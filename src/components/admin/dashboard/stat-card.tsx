import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
}) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between gap-4 pt-6">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 font-display text-2xl tracking-tighter">{value}</p>
        </div>
        <div className="bg-gold/12 flex size-11 items-center justify-center rounded-md text-gold-foreground dark:text-gold">
          <Icon className="size-5" />
        </div>
      </CardContent>
    </Card>
  );
}
