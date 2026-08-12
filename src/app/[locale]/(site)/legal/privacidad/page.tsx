import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LegalPageContent } from "@/components/legal/legal-page-content";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legalPages.privacy");
  return { title: t("metaTitle") };
}

export default async function PrivacyPage() {
  const t = await getTranslations("legalPages.privacy");
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
