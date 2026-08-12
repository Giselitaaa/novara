import { ChevronLeft, ChevronRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  /** Construye el href de una página dado su número. */
  buildHref: (page: number) => string;
}

/**
 * Paginación como enlaces reales (`<Link>`), no botones con
 * `onClick` — cada página es una URL navegable, indexable, y funciona
 * sin JavaScript. Se muestran como máximo 5 números, con elipsis.
 */
export function Pagination({ currentPage, totalPages, buildHref }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <nav aria-label="Paginación" className="flex items-center justify-center gap-1.5">
      <PageLink
        href={buildHref(currentPage - 1)}
        disabled={currentPage <= 1}
        ariaLabel="Página anterior"
      >
        <ChevronLeft className="size-4" />
      </PageLink>

      {pages.map((page, index) =>
        page === "…" ? (
          <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
            …
          </span>
        ) : (
          <PageLink
            key={page}
            href={buildHref(page)}
            active={page === currentPage}
            ariaLabel={`Página ${page}`}
          >
            {page}
          </PageLink>
        )
      )}

      <PageLink
        href={buildHref(currentPage + 1)}
        disabled={currentPage >= totalPages}
        ariaLabel="Página siguiente"
      >
        <ChevronRight className="size-4" />
      </PageLink>
    </nav>
  );
}

function PageLink({
  href,
  active,
  disabled,
  ariaLabel,
  children,
}: {
  href: string;
  active?: boolean;
  disabled?: boolean;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  if (disabled) {
    return (
      <span className="flex size-9 cursor-not-allowed items-center justify-center rounded-md text-sm text-muted-foreground/40">
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href as never}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex size-9 items-center justify-center rounded-md text-sm font-medium transition-colors",
        active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"
      )}
    >
      {children}
    </Link>
  );
}

function getVisiblePages(current: number, total: number): (number | "…")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

  if (current <= 3) return [1, 2, 3, 4, "…", total];
  if (current >= total - 2) return [1, "…", total - 3, total - 2, total - 1, total];
  return [1, "…", current - 1, current, current + 1, "…", total];
}
