import type { Metadata } from "next";

import { ThemePicker } from "@/components/admin/themes/theme-picker";
import { paletteFromSeason } from "@/lib/palettes";
import { getAllSettings } from "@/modules/cms/server/settings-queries";

export const metadata: Metadata = { title: "Temas" };

export default async function AdminThemesPage() {
  const settings = await getAllSettings();
  const current = paletteFromSeason(settings.active_theme);

  return (
    <div>
      <h1 className="mb-1 font-display text-2xl tracking-tighter">Temas</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Elige el tema visual de la plataforma. Se aplica a <strong>todos los usuarios</strong>{" "}
        a la vez; los alumnos no pueden cambiarlo.
      </p>
      <ThemePicker current={current} />
    </div>
  );
}
