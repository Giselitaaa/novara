"use client";

import { Monitor, Send, Smartphone } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendTemplateTest } from "@/modules/cms/server/email-actions";

/**
 * Previsualización del correo (escritorio/móvil) con datos de ejemplo + envío
 * de una prueba real al correo de la administradora. Parte del sistema de
 * comunicación (punto 14): ver el correo antes de activar una campaña.
 */
export function EmailTemplatePreview({
  templateId,
  html,
  adminEmail,
}: {
  templateId: string;
  html: string;
  adminEmail: string;
}) {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [isPending, startTransition] = useTransition();

  function sendTest() {
    startTransition(async () => {
      try {
        const res = await sendTemplateTest(templateId);
        if (res.status === "success") toast.success(res.message);
        else toast.error(res.message);
      } catch {
        toast.error("No se pudo enviar la prueba.");
      }
    });
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <div className="inline-flex rounded-lg border border-border p-0.5">
          <button
            type="button"
            onClick={() => setView("desktop")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium",
              view === "desktop" ? "bg-gold/15 text-gold-foreground dark:text-gold" : "text-muted-foreground"
            )}
          >
            <Monitor className="size-3.5" /> Escritorio
          </button>
          <button
            type="button"
            onClick={() => setView("mobile")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium",
              view === "mobile" ? "bg-gold/15 text-gold-foreground dark:text-gold" : "text-muted-foreground"
            )}
          >
            <Smartphone className="size-3.5" /> Móvil
          </button>
        </div>
        <Button type="button" variant="gold" size="sm" disabled={isPending} onClick={sendTest}>
          <Send className="size-3.5" />
          {isPending ? "Enviando…" : "Enviar prueba"}
        </Button>
      </div>

      <div className="flex justify-center rounded-xl border border-border bg-muted/30 p-4">
        <iframe
          title="Previsualización del correo"
          srcDoc={html}
          sandbox=""
          className={cn(
            "h-[560px] rounded-lg border border-border bg-white transition-all",
            view === "mobile" ? "w-[380px]" : "w-full"
          )}
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Vista con datos de ejemplo. El envío de prueba va a <strong>{adminEmail}</strong>{" "}
        (verifica que el remitente esté validado en Brevo).
      </p>
    </div>
  );
}
