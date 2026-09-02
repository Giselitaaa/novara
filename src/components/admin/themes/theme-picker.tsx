"use client";

import { Check } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { useRouter } from "@/i18n/navigation";
import { PALETTES } from "@/lib/palettes";
import { cn } from "@/lib/utils";
import { setActiveTheme } from "@/modules/cms/server/settings-actions";

/**
 * Selector de TEMA global — SOLO administración. La paleta elegida aquí se
 * aplica a TODA la plataforma y a todos los usuarios a la vez (los alumnos
 * no pueden cambiarla). El claro/oscuro sigue siendo preferencia de cada
 * usuario; el tema define la identidad de color.
 */
export function ThemePicker({ current }: { current: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState(current);

  const normal = PALETTES.filter((p) => p.kind === "normal");
  const festive = PALETTES.filter((p) => p.kind === "festivo");

  function apply(id: string) {
    setSelected(id);
    startTransition(async () => {
      try {
        const res = await setActiveTheme(id);
        toast.success(res.message);
        router.refresh();
      } catch {
        toast.error("No se pudo aplicar el tema.");
        setSelected(current);
      }
    });
  }

  function Grid({ items }: { items: typeof PALETTES }) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((p) => {
          const active = selected === p.id;
          return (
            <button
              key={p.id}
              type="button"
              disabled={isPending}
              onClick={() => apply(p.id)}
              aria-pressed={active}
              className={cn(
                "group relative flex flex-col gap-3 rounded-xl border p-4 text-left transition-all",
                active
                  ? "border-gold ring-2 ring-gold/40"
                  : "border-border hover:border-gold/50 hover:shadow-sm"
              )}
            >
              {active && (
                <span className="absolute right-3 top-3 flex size-5 items-center justify-center rounded-full bg-gold text-gold-foreground">
                  <Check className="size-3.5" />
                </span>
              )}
              <div className="flex h-14 overflow-hidden rounded-lg ring-1 ring-black/5">
                {p.swatch.map((c, i) => (
                  <span key={i} className="flex-1" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                {p.emoji && <span className="text-base leading-none">{p.emoji}</span>}
                <span className="text-sm font-medium">{p.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex max-w-3xl flex-col gap-8">
      <section>
        <h2 className="mb-3 font-display text-lg tracking-tighter">Temas profesionales</h2>
        <Grid items={normal} />
      </section>
      <section>
        <h2 className="mb-1 font-display text-lg tracking-tighter">Temas festivos</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          Cambian la paleta y muestran un banner de temporada en el sitio.
        </p>
        <Grid items={festive} />
      </section>
      <p className="text-xs text-muted-foreground">
        El tema se aplica al instante a todos los usuarios. El modo claro/oscuro sigue
        siendo elección de cada persona.
      </p>
    </div>
  );
}
