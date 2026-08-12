"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import { captureReferralCode } from "@/modules/affiliates/server/actions";

/**
 * Captura silenciosa de `?ref=CODE` en cualquier página pública. No
 * renderiza nada — si el programa de afiliados está desactivado,
 * `captureReferralCode` no hace nada (comprobado en el servidor).
 */
export function ReferralCapture() {
  const searchParams = useSearchParams();
  const captured = useRef(false);

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref && !captured.current) {
      captured.current = true;
      captureReferralCode(ref);
    }
  }, [searchParams]);

  return null;
}
