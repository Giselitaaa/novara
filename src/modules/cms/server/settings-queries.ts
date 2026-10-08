import "server-only";

import { db } from "@/lib/db";

export const SETTINGS_KEYS = [
  "site_name",
  "site_logo_url",
  "site_favicon_url",
  "social_instagram",
  "social_linkedin",
  "social_youtube",
  "contact_email",
  "contact_phone",
  "seo_default_title",
  "seo_default_description",
  "cookies_notice",
  "legal_company_name",
  "analytics_enabled",
  "analytics_ga_id",
  "analytics_gtm_id",
  "analytics_clarity_id",
  "analytics_plausible_domain",
  "affiliate_program_enabled",
  "affiliate_default_commission",
  "active_theme",
] as const;

export type SettingsMap = Record<(typeof SETTINGS_KEYS)[number], string>;

const EMPTY_SETTINGS = Object.fromEntries(
  SETTINGS_KEYS.map((key) => [key, ""])
) as SettingsMap;

/**
 * Se ejecuta en el layout raíz, en el camino de CADA request (incluido
 * el health check de despliegue). Si la base de datos no responde, no
 * puede colgar la página indefinidamente: tras 8s devuelve valores por
 * defecto en vez de dejar la petición esperando para siempre.
 */
export async function getAllSettings(): Promise<SettingsMap> {
  try {
    const rows = await Promise.race([
      db.globalSetting.findMany({ where: { key: { in: [...SETTINGS_KEYS] } } }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("getAllSettings: timeout tras 8s")), 8000)
      ),
    ]);
    const map = Object.fromEntries(rows.map((r) => [r.key, r.value as string]));

    return Object.fromEntries(
      SETTINGS_KEYS.map((key) => [key, map[key] ?? ""])
    ) as SettingsMap;
  } catch (error) {
    console.error(
      "[getAllSettings] fallo al leer ajustes, usando valores por defecto:",
      error
    );

    return EMPTY_SETTINGS;
  }
}
