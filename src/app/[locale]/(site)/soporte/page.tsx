import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { StatusBadge } from "@/components/admin/status-badge";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { SupportTicketForm } from "@/components/support/support-ticket-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { auth } from "@/lib/auth";
import { getAllSettings } from "@/modules/cms/server/settings-queries";
import { listMySupportTickets } from "@/modules/support/server/queries";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("support");
  return { title: t("metaTitle") };
}

export default async function SupportPage() {
  const t = await getTranslations("support");
  const [session, settings] = await Promise.all([auth(), getAllSettings()]);
  const myTickets = session?.user?.id ? await listMySupportTickets(session.user.id) : [];

  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <Breadcrumbs items={[{ label: t("title") }]} />

      <h1 className="mb-2 mt-6 font-display text-3xl tracking-tighter sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mb-10 text-base text-muted-foreground">{t("subtitle")}</p>

      <div className="mb-10 flex flex-wrap items-center gap-4">
        <Button asChild variant="outline">
          <Link href="/#faq">{t("faqCta")}</Link>
        </Button>
        {settings.contact_email && (
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Mail className="size-4" />
            {t("contactEmailLabel")}{" "}
            <a
              href={`mailto:${settings.contact_email}`}
              className="font-medium text-foreground underline"
            >
              {settings.contact_email}
            </a>
          </p>
        )}
      </div>

      {session?.user ? (
        <SupportTicketForm />
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 pb-8 pt-8 text-center">
            <p className="font-display text-lg tracking-tighter">
              {t("loginRequiredTitle")}
            </p>
            <p className="text-sm text-muted-foreground">{t("loginRequiredBody")}</p>
            <Button asChild variant="gold">
              <Link href="/auth/iniciar-sesion?callbackUrl=/soporte">
                {t("loginCta")}
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {myTickets.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 font-display text-xl tracking-tighter">Mis solicitudes</h2>
          <div className="flex flex-col gap-4">
            {myTickets.map((ticket) => (
              <Card key={ticket.id}>
                <CardContent className="p-5">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{ticket.subject}</p>
                    <StatusBadge
                      statusKey={ticket.status.key}
                      label={ticket.status.label}
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {ticket.messages.map((message) => {
                      const fromAdmin = message.sender.roles.some(
                        (r) => r.role.name === "administrador"
                      );
                      return (
                        <div
                          key={message.id}
                          className={
                            fromAdmin
                              ? "rounded-md border border-gold/40 bg-gold/5 px-3.5 py-2.5"
                              : "rounded-md border border-border px-3.5 py-2.5"
                          }
                        >
                          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            {fromAdmin ? "NOVARA · Soporte" : "Tú"}
                          </p>
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">
                            {message.body}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
