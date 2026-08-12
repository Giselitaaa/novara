"use client";

/**
 * Último recurso: captura errores que ocurren en el propio layout raíz
 * (donde `error.tsx` de segmento ya no aplica). Debe renderizar su
 * propio <html>/<body>. Deliberadamente mínimo y sin dependencias del
 * árbol de la app, que es justo lo que podría estar roto.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body
        style={{
          fontFamily: "-apple-system, Helvetica, Arial, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          padding: "24px",
          textAlign: "center",
          background: "#F8F7F2",
          color: "#14121F",
        }}
      >
        <p
          style={{
            letterSpacing: "0.16em",
            fontSize: 12,
            textTransform: "uppercase",
            color: "#C9973D",
          }}
        >
          NOVARA
        </p>
        <h1 style={{ fontSize: 26, margin: 0 }}>Algo ha fallado</h1>
        <p style={{ color: "#6b6770", maxWidth: 420 }}>
          Ha ocurrido un error inesperado. Reintenta; si persiste, recarga la página en
          unos segundos.
        </p>
        <button
          onClick={reset}
          style={{
            background: "#C9973D",
            color: "#14121F",
            border: "none",
            fontWeight: 600,
            padding: "12px 24px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Reintentar
        </button>
        {error.digest && (
          <p style={{ fontFamily: "monospace", fontSize: 11, color: "#8a8580" }}>
            ref: {error.digest}
          </p>
        )}
      </body>
    </html>
  );
}
