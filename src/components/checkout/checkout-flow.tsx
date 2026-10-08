"use client";

import { AlertCircle, CheckCircle2, Clock, CreditCard, Paperclip } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { formatPrice } from "@/lib/format";
import { startCardCheckout, uploadPaymentProof } from "@/modules/payments/server/actions";

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
  /** Solo true si Stripe está configurado (STRIPE_SECRET_KEY presente). */
  cardEnabled?: boolean;
}

export function CheckoutFlow({
  courseId,
  courseTitle,
  price,
  instructions,
  existingPayment,
  cardEnabled = false,
}: CheckoutFlowProps) {
  const router = useRouter();
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

  const ALLOWED_PROOF_TYPES = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/webp",
  ];
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [useUrlFallback, setUseUrlFallback] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleSelectFile(file: File | null) {
    if (!file) {
      setProofFile(null);
      return;
    }
    if (!ALLOWED_PROOF_TYPES.includes(file.type)) {
      toast.error("Formato no admitido. Usa PDF, JPG, PNG o WEBP.");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      toast.error("El archivo supera el tamaño máximo (8 MB).");
      return;
    }
    setProofFile(file);
  }

  function handleUploadProof() {
    if (!existingPayment || !proofFile) return;
    const file = proofFile;
    startTransition(async () => {
      try {
        const presignRes = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contentType: file.type,
            size: file.size,
            folder: "payment-proofs",
          }),
        });
        const presignData = await presignRes.json();
        if (!presignRes.ok) {
          if (presignData.error === "not_configured") {
            setUseUrlFallback(true);
            toast.error(
              "La subida de archivos no está disponible; pega la URL manualmente."
            );
            return;
          }
          toast.error(presignData.message ?? "No se pudo preparar la subida.");
          return;
        }

        const putRes = await fetch(presignData.uploadUrl, {
          method: "PUT",
          headers: { "Content-Type": file.type },
          body: file,
        });
        if (!putRes.ok) {
          toast.error("No se pudo subir el archivo.");
          return;
        }

        const result = await uploadPaymentProof(
          existingPayment.id,
          presignData.publicUrl
        );
        toast.success(result.message);
        setProofFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        router.refresh();
      } catch {
        toast.error("No se pudo subir el justificante.");
      }
    });
  }

  function handleUploadProofUrl(formData: FormData) {
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

  // Estado 2: pedido pendiente — mostrar instrucciones + subir justificante
  // (Bizum/transferencia), o permitir reintentar (tarjeta abandonada).
  if (existingPayment.status.key === "pendiente") {
    const isBizum = existingPayment.paymentMethod.key === "bizum";
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

        {useUrlFallback ? (
          <form action={handleUploadProofUrl} className="flex flex-col gap-3">
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
        ) : (
          <div className="flex flex-col gap-3">
            <Label htmlFor="proofFile">
              Justificante (PDF, JPG, PNG o WEBP — máx. 8 MB)
            </Label>
            <div className="flex gap-2">
              <input
                ref={fileInputRef}
                id="proofFile"
                type="file"
                accept="application/pdf,image/jpeg,image/png,image/webp"
                onChange={(e) => handleSelectFile(e.target.files?.[0] ?? null)}
                className="h-11 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button
                type="button"
                variant="gold"
                disabled={isPending || !proofFile}
                onClick={handleUploadProof}
              >
                <Paperclip className="size-4" />
                {isPending ? "Subiendo…" : "Enviar justificante"}
              </Button>
            </div>
            {proofFile && (
              <p className="text-xs text-muted-foreground">
                Seleccionado: {proofFile.name} (
                {(proofFile.size / 1024 / 1024).toFixed(1)} MB)
              </p>
            )}
          </div>
        )}
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
