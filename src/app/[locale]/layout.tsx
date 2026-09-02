import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { AppProviders } from "@/components/providers/app-providers";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import { fontDisplay, fontMono, fontSans } from "@/lib/fonts";
import { JsonLd } from "@/lib/json-ld";
import { paletteFromSeason } from "@/lib/palettes";
import { buildOrganizationSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { AnalyticsScripts } from "@/modules/analytics/client/analytics-scripts";
import { getAllSettings } from "@/modules/cms/server/settings-queries";

import "@/app/globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} — ${isEs ? siteConfig.tagline.es : siteConfig.tagline.en}`,
      template: `%s — ${siteConfig.name}`,
    },
    description: isEs ? siteConfig.description.es : siteConfig.description.en,
  };
}

/**
 * Layout raíz: SOLO `<html>`/`<body>`, providers globales, fuentes y
 * el enlace "saltar al contenido". Deliberadamente NO incluye header
 * ni footer — esos viven en `(site)/layout.tsx`, para que el panel de
 * administración (fuera de ese grupo) no herede el chrome público.
 */
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const settings = await getAllSettings();
  const defaultPalette = paletteFromSeason(settings.active_theme);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-theme={defaultPalette}
      className={cn(fontDisplay.variable, fontSans.variable, fontMono.variable)}
    >
      <body
        className="min-h-screen bg-background font-sans antialiased"
        data-season={settings.active_theme || "none"}
      >
        <JsonLd data={buildOrganizationSchema()} />
        <AnalyticsScripts
          config={{
            enabled: settings.analytics_enabled === "on",
            gaId: settings.analytics_ga_id,
            gtmId: settings.analytics_gtm_id,
            clarityId: settings.analytics_clarity_id,
            plausibleDomain: settings.analytics_plausible_domain,
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-gold-foreground"
            >
              Saltar al contenido
            </a>
            {children}
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
