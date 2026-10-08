"use client";

import { AlertCircle, CheckCircle2, Clock, CreditCard } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import { startCardCheckout } from "@/modules/payments/server/actions";

type PaymentState = {
  id: string;
  status: { key: string; label: string };
  paymentMethod: { key: string; label: string };
  adminNotes: string | null;
} | null;

interface CheckoutFlowProps {
  courseId: string;
  courseTitle: string;
  price: number;
  existingPayment: PaymentState;
  /** Solo true si Stripe está configurado (STRIPE_SECRET_KEY presente). */
  cardEnabled?: boolean;
}

export function CheckoutFlow({
  courseId,
  courseTitle,
  price,
  existingPayment,
  cardEnabled = false,
}: CheckoutFlowProps) {
  const [isPending, startTransition] = useTransition();

  function handleCardCheckout() {
    startTransition(async () => {
      try {
        const url = await startCardCheckout(courseId);
        window.location.href = url;
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "No se pudo iniciar el pago con tarjeta."
        );
      }
    });
  }

  // Estado 1: sin pedido todavía — pagar con tarjeta (Stripe).
  if (!existingPayment || existingPayment.status.key === "rechazado") {
    return (
      <div className="flex flex-col gap-6">
        {existingPayment?.status.key === "rechazado" && (
          <Card className="border-destructive/40 bg-destructive/5 p-4">
            <div className="flex items-start gap-2.5 text-sm">
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
              <div>
                <p className="font-medium text-destructive">
                  Tu pago anterior fue rechazado
                </p>
                <p className="text-muted-foreground">{existingPayment.adminNotes}</p>
              </div>
            </div>
          </Card>
        )}

        <p className="text-sm text-muted-foreground">
          Elige cómo quieres pagar <strong>{formatPrice(price)}</strong> por «
          {courseTitle}».
        </p>

        {cardEnabled && (
          <Button
            variant="gold"
            className="h-auto flex-col gap-2 py-6"
            disabled={isPending}
            onClick={handleCardCheckout}
          >
            <CreditCard className="size-6" />
            Pagar con tarjeta
            <span className="text-xs font-normal opacity-80">
              Pago inmediato y seguro con Stripe
            </span>
          </Button>
        )}
      </div>
    );
  }

  // Estado 2: pedido pendiente de una compra anterior. Hoy NOVARA solo
  // acepta tarjeta (Stripe); un pedido pendiente con un método antiguo
  // se conserva en la base de datos para auditoría, pero ya no se
  // gestiona desde aquí — se deriva a soporte.
  if (existingPayment.status.key === "pendiente") {
    const isTarjeta = existingPayment.paymentMethod.key === "tarjeta";

    if (isTarjeta) {
      return (
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col items-center gap-3 p-8 text-center">
            <CreditCard className="size-8 text-gold" />
            <h3 className="font-display text-lg tracking-tighter">
              Tu pago con tarjeta no se completó
            </h3>
            <p className="text-sm text-muted-foreground">
              Se canceló o no llegaste a terminarlo — no se te ha cobrado nada.
            </p>
            <Button
              variant="gold"
              className="mt-2"
              disabled={isPending}
              onClick={handleCardCheckout}
            >
              {isPending ? "Abriendo…" : "Reintentar con tarjeta"}
            </Button>
          </Card>
        </div>
      );
    }

    return (
      <Card className="flex flex-col items-center gap-3 p-8 text-center">
        <AlertCircle className="size-8 text-muted-foreground" />
        <h3 className="font-display text-lg tracking-tighter">
          Este pedido ya no se puede completar por este medio
        </h3>
        <p className="text-sm text-muted-foreground">
          NOVARA gestiona todos los pagos mediante Stripe. Contacta con soporte para
          resolver este pedido pendiente.
        </p>
      </Card>
    );
  }

  // Estado 3: en revisión.
  if (existingPayment.status.key === "en_revision") {
    return (
      <Card className="flex flex-col items-center gap-3 p-8 text-center">
        <Clock className="size-8 text-gold" />
        <h3 className="font-display text-lg tracking-tighter">
          Tu pago está en revisión
        </h3>
        <p className="text-sm text-muted-foreground">
          Un administrador lo revisará en breve. Te avisaremos por email en cuanto se
          apruebe.
        </p>
      </Card>
    );
  }

  // Estado 4: aprobado.
  return (
    <Card className="flex flex-col items-center gap-3 p-8 text-center">
      <CheckCircle2 className="size-8 text-success" />
      <h3 className="font-display text-lg tracking-tighter">
        Ya tienes acceso a este curso
      </h3>
    </Card>
  );
}
