import { ExternalLink } from "lucide-react";

import { CourseRowActions } from "@/components/admin/courses/course-row-actions";
import { StatusBadge } from "@/components/admin/status-badge";
import { Link } from "@/i18n/navigation";

export function CourseEditorHeader({
  id,
  title,
  slug,
  statusKey,
  statusLabel,
}: {
  id: string;
  title: string;
  slug: string;
  statusKey: string;
  statusLabel: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-2.5">
          <h1 className="font-display text-2xl tracking-tighter">
            {title || "Sin título"}
          </h1>
          <StatusBadge statusKey={statusKey} label={statusLabel} />
        </div>
        <Link
          href={`/cursos/${slug}`}
          target="_blank"
          className="mt-1 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          Vista previa <ExternalLink className="size-3.5" />
        </Link>
      </div>
      <CourseRowActions courseId={id} statusKey={statusKey} />
    </div>
  );
}
