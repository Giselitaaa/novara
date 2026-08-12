"use client";

import { AlertCircle, Building2, CheckCircle2, Clock, Smartphone } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { formatPrice } from "@/lib/format";
import { requestPurchase, uploadPaymentProof } from "@/modules/payments/server/actions";

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
  instructions: { bizumNumber: string; bankIban: string; bankHolder: string };
  existingPayment: PaymentState;
}

export function CheckoutFlow({
  courseId,
  courseTitle,
  price,
  instructions,
  existingPayment,
}: CheckoutFlowProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleRequest(methodKey: "bizum" | "transferencia_bancaria") {
    startTransition(async () => {
      try {
        await requestPurchase(courseId, methodKey);
        toast.success("Pedido generado. Sigue las instrucciones de pago.");
        router.refresh();
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "No se pudo generar el pedido."
        );
      }
    });
  }

  function handleUploadProof(formData: FormData) {
    if (!existingPayment) return;
    const proofFileUrl = String(formData.get("proofFileUrl") ?? "").trim();
    if (!proofFileUrl) {
      toast.error("Indica la URL del justificante.");
      return;
    }
    startTransition(async () => {
      const result = await uploadPaymentProof(existingPayment.id, proofFileUrl);
      toast.success(result.message);
      router.refresh();
    });
  }

  // Estado 1: sin pedido todavía — elegir método de pago.
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Button
            variant="outline"
            className="h-auto flex-col gap-2 py-6"
            disabled={isPending}
            onClick={() => handleRequest("bizum")}
          >
            <Smartphone className="size-6" />
            Bizum
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-col gap-2 py-6"
            disabled={isPending}
            onClick={() => handleRequest("transferencia_bancaria")}
          >
            <Building2 className="size-6" />
            Transferencia bancaria
          </Button>
        </div>
      </div>
    );
  }

  // Estado 2: pedido pendiente — mostrar instrucciones + subir justificante.
  if (existingPayment.status.key === "pendiente") {
    const isBizum = existingPayment.paymentMethod.key === "bizum";
    return (
      <div className="flex flex-col gap-6">
        <Card className="p-5">
          <h3 className="mb-3 font-display text-lg tracking-tighter">
            Instrucciones de pago
          </h3>
          {isBizum ? (
            <p className="text-sm">
              Envía <strong>{formatPrice(price)}</strong> por Bizum al número{" "}
              <span className="font-mono">
                {instructions.bizumNumber || "(pendiente de configurar)"}
              </span>{" "}
              indicando tu nombre en el concepto.
            </p>
          ) : (
            <div className="flex flex-col gap-1 text-sm">
              <p>
                Transfiere <strong>{formatPrice(price)}</strong> a:
              </p>
              <p className="font-mono">
                {instructions.bankIban || "(pendiente de configurar)"}
              </p>
              <p>Titular: {instructions.bankHolder || "(pendiente de configurar)"}</p>
            </div>
          )}
        </Card>

        <form action={handleUploadProof} className="flex flex-col gap-3">
          <Label htmlFor="proofFileUrl">
            URL del justificante (captura o PDF ya subido)
          </Label>
          <div className="flex gap-2">
            <input
              id="proofFileUrl"
              name="proofFileUrl"
              placeholder="https://…"
              required
              className="h-11 flex-1 rounded-md border border-input bg-background px-3.5 text-sm"
            />
            <Button type="submit" variant="gold" disabled={isPending}>
              Enviar justificante
            </Button>
          </div>
        </form>
      </div>
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
