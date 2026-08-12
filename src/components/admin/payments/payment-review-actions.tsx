"use client";

import { Check, X } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { approvePayment, rejectPayment } from "@/modules/payments/server/actions";

export function PaymentReviewActions({ paymentId }: { paymentId: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showRejectForm, setShowRejectForm] = useState(false);
  const [reason, setReason] = useState("");

  function handleApprove() {
    startTransition(async () => {
      const result = await approvePayment(paymentId);
      toast.success(result.message);
      router.refresh();
    });
  }

  function handleReject() {
    if (!reason.trim()) {
      toast.error("Indica el motivo del rechazo.");
      return;
    }
    startTransition(async () => {
      const result = await rejectPayment(paymentId, reason);
      toast.success(result.message);
      router.refresh();
    });
  }

  if (showRejectForm) {
    return (
      <div className="flex flex-col gap-3">
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Motivo del rechazo (se envía al alumno por email)…"
          rows={3}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
        <div className="flex gap-2">
          <Button variant="destructive" disabled={isPending} onClick={handleReject}>
            Confirmar rechazo
          </Button>
          <Button variant="ghost" onClick={() => setShowRejectForm(false)}>
            Cancelar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Button variant="gold" disabled={isPending} onClick={handleApprove}>
        <Check className="size-4" /> Aprobar pago
      </Button>
      <Button
        variant="outline"
        disabled={isPending}
        onClick={() => setShowRejectForm(true)}
      >
        <X className="size-4" /> Rechazar
      </Button>
    </div>
  );
}
