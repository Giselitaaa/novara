"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import {
  replyToSupportTicket,
  setSupportTicketStatus,
} from "@/modules/support/server/actions";

const STATUS_ACTIONS = [
  { key: "en_proceso", label: "Marcar en proceso" },
  { key: "cerrada", label: "Cerrar solicitud" },
  { key: "abierto", label: "Reabrir" },
] as const;

export function SupportReplyForm({
  ticketId,
  currentStatusKey,
}: {
  ticketId: string;
  currentStatusKey: string;
}) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleReply() {
    setError(null);
    startTransition(async () => {
      const res = await replyToSupportTicket(ticketId, body);
      if (res.status === "error") {
        setError(res.message ?? "No se pudo enviar la respuesta.");
        return;
      }
      setBody("");
      router.refresh();
    });
  }

  function handleStatus(statusKey: string) {
    setError(null);
    startTransition(async () => {
      const res = await setSupportTicketStatus(ticketId, statusKey);
      if (res.status === "error")
        setError(res.message ?? "No se pudo cambiar el estado.");
      else router.refresh();
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="reply" className="text-sm font-medium">
          Responder al alumno
        </label>
        <textarea
          id="reply"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5}
          maxLength={4000}
          placeholder="Escribe tu respuesta…"
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="gold"
          onClick={handleReply}
          disabled={isPending || body.trim().length === 0}
        >
          {isPending ? "Enviando…" : "Enviar respuesta"}
        </Button>
        <span className="mx-1 h-5 w-px bg-border" aria-hidden />
        {STATUS_ACTIONS.filter((s) => s.key !== currentStatusKey).map((s) => (
          <Button
            key={s.key}
            variant="outline"
            size="sm"
            onClick={() => handleStatus(s.key)}
            disabled={isPending}
          >
            {s.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
