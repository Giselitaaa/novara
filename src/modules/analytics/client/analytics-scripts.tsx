"use client";

import Script from "next/script";

export type AnalyticsConfig = {
  enabled: boolean;
  gaId: string;
  gtmId: string;
  clarityId: string;
  plausibleDomain: string;
};

/**
 * Inyecta los scripts de analítica externa configurados desde
 * `/admin/configuracion`. Cada proveedor es independiente y solo se
 * carga si tiene un ID relleno — activar/desactivar analíticas por
 * completo es el interruptor `enabled` (Módulo 3: "debe poder
 * activarse o desactivarse desde configuración").
 *
 * Añadir un proveedor nuevo en el futuro (ej. Mixpanel, PostHog) es
 * añadir un bloque más aquí, con su propio campo en `AnalyticsConfig`
 * — el resto de la plataforma no sabe ni necesita saber qué
 * proveedores están activos.
 */
export function AnalyticsScripts({ config }: { config: AnalyticsConfig }) {
  if (!config.enabled) return null;

  return (
    <>
      {config.gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${config.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.gaId}');`}
          </Script>
        </>
      )}

      {config.gtmId && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${config.gtmId}');`}
        </Script>
      )}

      {config.clarityId && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${config.clarityId}");`}
        </Script>
      )}

      {config.plausibleDomain && (
        <Script
          src="https://plausible.io/js/script.js"
          data-domain={config.plausibleDomain}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
