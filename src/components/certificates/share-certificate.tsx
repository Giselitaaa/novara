"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";

/**
 * Botón para compartir el certificado. Usa la Web Share API nativa si
 * está disponible (móvil); si no, copia el enlace de verificación al
 * portapapeles. El enlace lleva metadatos Open Graph, así que se
 * previsualiza bien al pegarlo en redes o mensajería.
 */
export function ShareCertificate({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = `${window.location.origin}/verificar/${code}`;
    const shareData = {
      title: "Mi certificado NOVARA",
      text: "Verifica mi certificado de finalización de NOVARA:",
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // el usuario canceló: caemos a copiar
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // sin permisos de portapapeles: no hacemos nada ruidoso
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
    >
      {copied ? (
        <>
          <Check className="size-4 text-success" /> Enlace copiado
        </>
      ) : (
        <>
          <Share2 className="size-4" /> Compartir
        </>
      )}
    </button>
  );
}
