"use client";

import { useEffect } from "react";

import { Container } from "@/components/layout/container";
import { SealMark } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";

/**
 * Frontera de error del segmento con identidad de marca. Cliente por
 * requisito de Next. Ofrece reintentar (re-renderiza el segmento) sin
 * recargar toda la app, y una salida al inicio.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // En producción esto iría a un servicio de monitorización.
    console.error("[error boundary]", error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <SealMark className="mb-6 size-12 text-gold" />
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Algo ha fallado
      </p>
      <h1 className="mb-3 font-display text-3xl tracking-tighter sm:text-4xl">
        No hemos podido cargar esto
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Ha ocurrido un error inesperado. Puedes reintentar; si persiste, vuelve al inicio
        e inténtalo de nuevo en un momento.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="gold" onClick={reset}>
          Reintentar
        </Button>
        <Button asChild variant="outline">
          {/* Recarga dura intencionada: en una frontera de error el estado de
              cliente puede estar corrupto; `<a>` fuerza un arranque limpio de
              la app, cosa que la navegación SPA de <Link> no garantiza. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/">Volver al inicio</a>
        </Button>
      </div>
      {error.digest && (
        <p className="mt-6 font-mono text-[11px] text-muted-foreground">
          ref: {error.digest}
        </p>
      )}
    </Container>
  );
}
