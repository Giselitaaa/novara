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
  "payment_bizum_number",
  "payment_bank_iban",
  "payment_bank_holder",
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

export async function getAllSettings(): Promise<SettingsMap> {
  const rows = await db.globalSetting.findMany({
    where: { key: { in: [...SETTINGS_KEYS] } },
  });
  const map = Object.fromEntries(rows.map((r) => [r.key, r.value as string]));

  return Object.fromEntries(
    SETTINGS_KEYS.map((key) => [key, map[key] ?? ""])
  ) as SettingsMap;
}
