import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Link } from "@/i18n/navigation";

type LegalSection = { heading: string; body: string };

/**
 * Layout compartido de las tres páginas legales (términos, privacidad,
 * cookies) — mismo título, misma fecha de actualización, mismas
 * secciones con encabezado + cuerpo. Una sola vez, no tres páginas
 * casi idénticas con su propio marcado.
 */
export function LegalPageContent({
  breadcrumbLabel,
  title,
  intro,
  lastUpdated,
  lastUpdatedLabel,
  sections,
  backToHomeLabel,
}: {
  breadcrumbLabel: string;
  title: string;
  intro: string;
  lastUpdated: string;
  lastUpdatedLabel: string;
  sections: LegalSection[];
  backToHomeLabel: string;
}) {
  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <Breadcrumbs items={[{ label: breadcrumbLabel }]} />

      <h1 className="mb-2 mt-6 font-display text-3xl tracking-tighter sm:text-4xl">
        {title}
      </h1>
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {lastUpdatedLabel}: {lastUpdated}
      </p>

      <p className="mb-10 text-balance text-base leading-relaxed text-muted-foreground">
        {intro}
      </p>

      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <section key={section.heading} className="ledger-rule">
            <h2 className="mb-2.5 font-display text-lg tracking-tighter">
              {section.heading}
            </h2>
            <p className="text-sm leading-relaxed text-foreground/85">{section.body}</p>
          </section>
        ))}
      </div>

      <Link
        href="/"
        className="mt-12 inline-block text-sm font-medium text-gold-foreground underline underline-offset-2 dark:text-gold"
      >
        ← {backToHomeLabel}
      </Link>
    </Container>
  );
}
