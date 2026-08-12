import { Suspense } from "react";

import { ReferralCapture } from "@/components/affiliates/referral-capture";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

/**
 * Layout del grupo `(site)`: header y footer públicos, aplicados solo
 * a las páginas de marketing/app (home, catálogo, auth, perfil). El
 * panel de administración vive fuera de este grupo — mismo `[locale]`
 * raíz (html/body/providers/fuentes), sin este chrome.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <ReferralCapture />
      </Suspense>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
