import type { LucideIcon } from "lucide-react";

function StatBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
      <div className="bg-gold/12 flex size-9 shrink-0 items-center justify-center rounded-md text-gold-foreground dark:text-gold">
        <Icon className="size-4.5" />
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-lg tracking-tighter">{value}</p>
        <p className="truncate text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export function StatStrip({
  items,
}: {
  items: { icon: LucideIcon; label: string; value: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <StatBlock key={item.label} {...item} />
      ))}
    </div>
  );
}
