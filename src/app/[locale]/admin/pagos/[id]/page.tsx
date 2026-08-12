import { FileText } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PaymentReviewActions } from "@/components/admin/payments/payment-review-actions";
import { StatusBadge } from "@/components/admin/status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { formatPrice } from "@/lib/format";
import { getPaymentDetail } from "@/modules/payments/server/queries";

export const metadata: Metadata = { title: "Detalle de pago" };

type Props = { params: Promise<{ id: string }> };

export default async function PaymentDetailPage({ params }: Props) {
  const { id } = await params;
  const payment = await getPaymentDetail(id);
  if (!payment) notFound();

  const canReview = ["pendiente", "en_revision"].includes(payment.status.key);

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl tracking-tighter">Pedido de pago</h1>
        <StatusBadge statusKey={payment.status.key} label={payment.status.label} />
      </div>

      <Card>
        <CardContent className="grid grid-cols-2 gap-4 pt-6 text-sm">
          <div>
            <p className="text-muted-foreground">Alumno</p>
            <p className="font-medium">
              {payment.user.profile
                ? `${payment.user.profile.firstName} ${payment.user.profile.lastName}`
                : payment.user.email}
            </p>
            <p className="text-xs text-muted-foreground">{payment.user.email}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Curso</p>
            <p className="font-medium">{payment.course?.title ?? "—"}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Método</p>
            <p className="font-medium">{payment.paymentMethod.label}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Importe</p>
            <p className="font-medium">{formatPrice(Number(payment.amount))}</p>
          </div>
        </CardContent>
      </Card>

      {payment.proofFileUrl && (
        <Card>
          <CardContent className="pt-6">
            <p className="mb-2 text-sm text-muted-foreground">Justificante</p>
            <Link
              href={payment.proofFileUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-gold-foreground underline dark:text-gold"
            >
              <FileText className="size-4" /> Ver justificante
            </Link>
          </CardContent>
        </Card>
      )}

      {payment.adminNotes && (
        <Card className="border-destructive/40 bg-destructive/5">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Motivo de rechazo</p>
            <p className="text-sm">{payment.adminNotes}</p>
          </CardContent>
        </Card>
      )}

      {canReview && payment.proofFileUrl && (
        <PaymentReviewActions paymentId={payment.id} />
      )}
      {canReview && !payment.proofFileUrl && (
        <p className="text-sm text-muted-foreground">
          Esperando a que el alumno suba el justificante.
        </p>
      )}

      <div>
        <h2 className="mb-3 font-display text-lg tracking-tighter">Historial</h2>
        <ul className="flex flex-col gap-2 text-sm">
          {payment.statusHistory.map((entry) => (
            <li
              key={entry.id}
              className="flex items-center justify-between border-b border-border pb-2"
            >
              <span>{entry.toStatus.label}</span>
              <span className="text-xs text-muted-foreground">
                {new Intl.DateTimeFormat("es-ES", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(entry.createdAt)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
