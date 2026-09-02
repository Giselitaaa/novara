"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { replyToMyTicket } from "@/modules/support/server/actions";

/**
 * Respuesta del alumno dentro de su ticket de soporte. Simple: un cuadro de
 * texto y un botón. La conversación es de ida y vuelta, sin líos.
 */
export function TicketReplyForm({ ticketId }: { ticketId: string }) {
  const [body, setBody] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function send() {
    const text = body.trim();
    if (!text) {
      toast.error("Escribe una respuesta.");
      return;
    }
    startTransition(async () => {
      const res = await replyToMyTicket(ticketId, text);
      if (res.status === "success") {
        setBody("");
        toast.success("Respuesta enviada.");
        router.refresh();
      } else {
        toast.error(res.message ?? "No se pudo enviar.");
      }
    });
  }

  return (
    <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        placeholder="Escribe tu respuesta…"
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
      <Button size="sm" variant="gold" onClick={send} disabled={isPending || !body.trim()} className="w-fit">
        {isPending ? "Enviando…" : "Responder"}
      </Button>
    </div>
  );
}
