import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StatusBadge } from "@/components/admin/status-badge";
import { SupportReplyForm } from "@/components/admin/support/support-reply-form";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { requireAdmin } from "@/modules/admin/server/guard";
import { getSupportTicketById } from "@/modules/support/server/queries";

export const metadata: Metadata = { title: "Solicitud de soporte" };

const CATEGORY_LABELS: Record<string, string> = {
  pagos: "Pagos",
  tecnico: "Técnico",
  contenido: "Contenido",
  cuenta: "Cuenta",
};

function isAdminSender(sender: { roles: { role: { name: string } }[] }) {
  return sender.roles.some((r) => r.role.name === "administrador");
}

type Props = { params: Promise<{ id: string }> };

export default async function AdminSupportTicketPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const ticket = await getSupportTicketById(id);
  if (!ticket) notFound();

  const studentName = ticket.user.profile
    ? `${ticket.user.profile.firstName} ${ticket.user.profile.lastName}`
    : ticket.user.email;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link
          href="/admin/soporte"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-4" /> Volver a soporte
        </Link>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">{ticket.subject}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {studentName} · {CATEGORY_LABELS[ticket.category] ?? ticket.category} ·{" "}
            {new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
              ticket.createdAt
            )}
          </p>
        </div>
        <StatusBadge statusKey={ticket.status.key} label={ticket.status.label} />
      </div>

      <div className="flex flex-col gap-3">
        {ticket.messages.map((message) => {
          const fromAdmin = isAdminSender(message.sender);
          return (
            <Card
              key={message.id}
              className={fromAdmin ? "border-gold/40 bg-gold/5" : undefined}
            >
              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {fromAdmin ? "NOVARA · Soporte" : studentName}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {new Intl.DateTimeFormat("es-ES", {
                      dateStyle: "short",
                      timeStyle: "short",
                    }).format(message.createdAt)}
                  </span>
                </div>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.body}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardContent className="p-4">
          <SupportReplyForm ticketId={ticket.id} currentStatusKey={ticket.status.key} />
        </CardContent>
      </Card>
    </div>
  );
}
