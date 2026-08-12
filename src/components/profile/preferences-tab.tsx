"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState, useTransition } from "react";

import { Switch } from "@/components/ui/switch";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  updateMarketingPreference,
  updateRankingVisibility,
} from "@/modules/users/server/actions";

const LOCALE_LABELS: Record<string, string> = { es: "Español", en: "English" };

export function PreferencesTab({
  showInRanking = true,
  acceptsMarketing = true,
}: {
  showInRanking?: boolean;
  acceptsMarketing?: boolean;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [ranking, setRanking] = useState(showInRanking);
  const [marketing, setMarketing] = useState(acceptsMarketing);
  const [, startTransition] = useTransition();

  function toggleRanking(checked: boolean) {
    setRanking(checked);
    startTransition(() => {
      updateRankingVisibility(checked);
    });
  }

  function toggleMarketing(checked: boolean) {
    setMarketing(checked);
    startTransition(() => {
      updateMarketingPreference(checked);
    });
  }

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("theme");

  return (
    <div className="flex max-w-md flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{t("dark")}</p>
          <p className="text-sm text-muted-foreground">
            Cambia el aspecto de toda la plataforma.
          </p>
        </div>
        <Switch
          checked={mounted && resolvedTheme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          aria-label={t("dark")}
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Aparecer en el ranking</p>
          <p className="text-sm text-muted-foreground">
            Si lo desactivas, no apareces en la clasificación pública por XP.
          </p>
        </div>
        <Switch
          checked={ranking}
          onCheckedChange={toggleRanking}
          aria-label="Aparecer en el ranking"
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Comunicaciones por email</p>
          <p className="text-sm text-muted-foreground">
            Novedades, recordatorios y recomendaciones. Los avisos imprescindibles
            (seguridad, pagos) se envían igualmente.
          </p>
        </div>
        <Switch
          checked={marketing}
          onCheckedChange={toggleMarketing}
          aria-label="Comunicaciones por email"
        />
      </div>

      <div>
        <p className="mb-3 font-medium">Idioma</p>
        <div className="flex gap-2">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => router.replace(pathname, { locale: loc })}
              className={
                "rounded-md border px-3.5 py-2 text-sm transition-colors " +
                (loc === locale
                  ? "border-gold bg-gold/10 font-medium"
                  : "border-border hover:bg-accent")
              }
            >
              {LOCALE_LABELS[loc] ?? loc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
