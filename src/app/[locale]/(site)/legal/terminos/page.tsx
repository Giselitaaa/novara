import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LegalPageContent } from "@/components/legal/legal-page-content";
import { buildPageMetadata } from "@/lib/seo";

export const revalidate = 3600;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("legalPages.terms");
  return buildPageMetadata({
    locale,
    path: "/legal/terminos",
    title: t("metaTitle"),
    description: t("intro"),
  });
}

export default async function TermsPage() {
  const t = await getTranslations("legalPages.terms");
  const tShared = await getTranslations("legalPages");
  const sections = t.raw("sections") as { heading: string; body: string }[];

  return (
    <LegalPageContent
      breadcrumbLabel={t("title")}
      title={t("title")}
      intro={t("intro")}
      sections={sections}
      lastUpdated={tShared("lastUpdated")}
      lastUpdatedLabel={tShared("lastUpdatedLabel")}
      backToHomeLabel={tShared("backToHome")}
    />
  );
}
