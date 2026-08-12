/**
 * Inserta un bloque JSON-LD. Único componente para todos los
 * esquemas (Organization, Course, Breadcrumb, Article, FAQ) — el
 * `dangerouslySetInnerHTML` está confinado aquí y a
 * `components/layout/breadcrumbs.tsx`, nunca esparcido por la app.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
