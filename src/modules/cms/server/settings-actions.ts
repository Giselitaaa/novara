"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { requireAdmin } from "@/modules/admin/server/guard";
import { SETTINGS_KEYS } from "@/modules/cms/server/settings-queries";

export async function updateGlobalSettings(formData: FormData) {
  await requireAdmin();

  await Promise.all(
    SETTINGS_KEYS.map((key) =>
      db.globalSetting.upsert({
        where: { key },
        create: { key, value: String(formData.get(key) ?? "") },
        update: { value: String(formData.get(key) ?? "") },
      })
    )
  );

  revalidatePath("/admin/configuracion");
  return { status: "success" as const, message: "Configuración guardada." };
}

/**
 * Fija el TEMA visual global de la plataforma (apartado "Temas" del panel).
 * Lo elige SOLO la administración y se aplica a TODOS los usuarios a la vez
 * (se renderiza en `data-theme` del <html> desde el layout). Acción dedicada
 * para no tocar el resto de ajustes.
 */
export async function setActiveTheme(themeId: string) {
  await requireAdmin();

  await db.globalSetting.upsert({
    where: { key: "active_theme" },
    create: { key: "active_theme", value: themeId },
    update: { value: themeId },
  });

  // Refresca el layout para todos los usuarios en la próxima carga.
  revalidatePath("/", "layout");
  revalidatePath("/admin/temas");
  return { status: "success" as const, message: "Tema aplicado a toda la plataforma." };
}
