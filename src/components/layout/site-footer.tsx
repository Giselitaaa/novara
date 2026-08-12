import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t("columns.platform.title"),
      links: [
        { label: t("columns.platform.courses"), href: "/cursos" },
        { label: t("columns.platform.categories"), href: "/categorias" },
        { label: t("columns.platform.howItWorks"), href: "/#como-funciona" },
      ],
    },
    {
      title: t("columns.legal.title"),
      links: [
        { label: t("columns.legal.terms"), href: "/legal/terminos" },
        { label: t("columns.legal.privacy"), href: "/legal/privacidad" },
        { label: t("columns.legal.cookies"), href: "/legal/cookies" },
      ],
    },
    {
      title: t("columns.help.title"),
      links: [
        { label: t("columns.help.support"), href: "/soporte" },
        { label: t("columns.help.faq"), href: "/#faq" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_2fr]">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">{t("tagline")}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {column.title}
              </span>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-gold-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row">
        <span>
          © {year} {siteConfig.name} — {t("rights")}
        </span>
        <span className="font-mono uppercase tracking-widest">Aprende de verdad</span>
      </Container>
    </footer>
  );
}
