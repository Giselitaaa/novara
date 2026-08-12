"use client";

import { useState } from "react";

import { formatPrice } from "@/lib/format";
import type { SeriesPoint } from "@/modules/admin/server/analytics-queries";

/**
 * Gráfica de barras de una sola serie para el panel (usuarios,
 * inscripciones, ingresos en el tiempo). Ligera y sin dependencias: SVG
 * puro. Sigue la guía de dataviz — marca única en el oro de marca,
 * ejes recesivos, extremos redondeados anclados a la línea base, hueco
 * de 2px entre barras, tooltip por barra al pasar, y etiqueta directa
 * del máximo (no un número en cada barra). Al ser una sola serie no
 * lleva leyenda: el título la nombra.
 */
export function TimeSeriesChart({
  data,
  format = "number",
  height = 160,
}: {
  data: SeriesPoint[];
  /** Formato del valor. Es un string (no una función) porque este es un
   * Client Component y las funciones no cruzan la frontera RSC. */
  format?: "number" | "currency";
  height?: number;
}) {
  const [hover, setHover] = useState<number | null>(null);
  const formatValue = (n: number) => (format === "currency" ? formatPrice(n) : String(n));

  if (data.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">Sin datos todavía.</p>
    );
  }

  const max = Math.max(1, ...data.map((d) => d.value));
  const maxIdx = data.reduce(
    (best, d, i) => (d.value > (data[best]?.value ?? 0) ? i : best),
    0
  );
  const maxValue = data[maxIdx]?.value ?? 0;
  const W = 100; // viewBox width en %
  const gap = 2;
  const barW = data.length > 0 ? (W - gap * (data.length - 1)) / data.length : W;
  const plotH = height - 24; // deja hueco para etiquetas del eje X

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${W} ${height}`}
        preserveAspectRatio="none"
        className="h-40 w-full overflow-visible"
        role="img"
        aria-label="Gráfica de evolución temporal"
      >
        {/* línea base recesiva */}
        <line
          x1="0"
          y1={plotH}
          x2={W}
          y2={plotH}
          stroke="hsl(var(--border))"
          strokeWidth="0.3"
        />
        {data.map((d, i) => {
          const h = (d.value / max) * (plotH - 6);
          const x = i * (barW + gap);
          const isActive = hover === i;
          return (
            <rect
              key={i}
              x={x}
              y={plotH - h}
              width={barW}
              height={Math.max(h, d.value > 0 ? 1 : 0)}
              rx="1"
              fill="hsl(var(--gold))"
              opacity={hover === null || isActive ? 1 : 0.45}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{ transition: "opacity 120ms" }}
            />
          );
        })}
      </svg>

      {/* etiqueta directa del máximo */}
      {data.length > 0 && (
        <span
          className="pointer-events-none absolute -top-1 text-xs font-medium text-foreground"
          style={{
            left: `${((maxIdx + 0.5) / data.length) * 100}%`,
            transform: "translateX(-50%)",
          }}
        >
          {formatValue(maxValue)}
        </span>
      )}

      {/* eje X: primera, media y última etiqueta (no todas, para no saturar) */}
      <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
        <span>{data[0]?.label}</span>
        <span>{data[Math.floor(data.length / 2)]?.label}</span>
        <span>{data[data.length - 1]?.label}</span>
      </div>

      {/* tooltip por barra */}
      {hover !== null && data[hover] && (
        <div
          className="pointer-events-none absolute -top-8 z-10 -translate-x-1/2 rounded-md border border-border bg-popover px-2 py-1 text-xs shadow-lifted"
          style={{ left: `${((hover + 0.5) / data.length) * 100}%` }}
        >
          <span className="font-medium">{formatValue(data[hover].value)}</span>{" "}
          <span className="text-muted-foreground">· {data[hover].label}</span>
        </div>
      )}
    </div>
  );
}
