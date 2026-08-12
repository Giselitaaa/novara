import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
}

/**
 * Estado vacío reutilizado en catálogo, resultados de búsqueda,
 * cursos inscritos, certificados... Cualquier listado de contenido
 * real que hoy no tenga elementos usa este componente en vez de
 * inventar datos de muestra para "que no se vea vacío".
 */
export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-border py-16 text-center">
      <Icon className="size-8 text-muted-foreground" aria-hidden />
      <h3 className="font-display text-lg tracking-tighter">{title}</h3>
      {description && (
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      )}
      {action}
    </div>
  );
}
