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
