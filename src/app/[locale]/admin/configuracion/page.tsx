import type { Metadata } from "next";

import { SettingsForm } from "@/components/admin/cms/settings-form";
import { getAllSettings } from "@/modules/cms/server/settings-queries";

export const metadata: Metadata = { title: "Configuración" };

export default async function AdminSettingsPage() {
  const settings = await getAllSettings();

  return (
    <div>
      <h1 className="mb-1 font-display text-2xl tracking-tighter">
        Configuración global
      </h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Cambios aquí afectan a toda la plataforma inmediatamente.
      </p>
      <SettingsForm settings={settings} />
    </div>
  );
}
