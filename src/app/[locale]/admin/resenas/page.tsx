import { Star } from "lucide-react";
import type { Metadata } from "next";

import { ReviewModerationActions } from "@/components/admin/courses/review-moderation-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { Link } from "@/i18n/navigation";
import { requireAdmin } from "@/modules/admin/server/guard";
import { listReviewsForModeration } from "@/modules/courses/server/review-queries";

export const metadata: Metadata = { title: "Reseñas" };

const STATUS_FILTERS = [
  { key: "pendiente_moderacion", label: "Pendientes" },
  { key: "publicada", label: "Publicadas" },
  { key: "rechazada", label: "Rechazadas" },
  { key: "", label: "Todas" },
];

const STATUS_TONE: Record<string, "gold" | "success" | "outline" | "neutral"> = {
  pendiente_moderacion: "gold",
  publicada: "success",
  rechazada: "outline",
};

type Props = { searchParams: Promise<{ estado?: string; page?: string }> };

export default async function AdminReviewsPage({ searchParams }: Props) {
  await requireAdmin();
  const { estado, page } = await searchParams;
  const statusKey = estado === undefined ? "pendiente_moderacion" : estado;
  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const { reviews, total, totalPages } = await listReviewsForModeration({
    statusKey: statusKey || undefined,
    page: currentPage,
  });

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (statusKey) params.set("estado", statusKey);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/admin/resenas?${query}` : "/admin/resenas";
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Reseñas</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {total} reseña(s) en este filtro.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {STATUS_FILTERS.map((filter) => (
          <Button
            key={filter.key}
            asChild
            variant={statusKey === filter.key ? "gold" : "outline"}
            size="sm"
          >
            <Link
              href={
                filter.key
                  ? `/admin/resenas?estado=${filter.key}`
                  : "/admin/resenas?estado="
              }
            >
              {filter.label}
            </Link>
          </Button>
        ))}
      </div>

      {reviews.length === 0 ? (
        <EmptyState icon={Star} title="No hay reseñas en este filtro" />
      ) : (
        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-gold" aria-hidden>
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </span>
                      <span className="text-sm font-medium">{review.rating}/5</span>
                      <Badge variant={STATUS_TONE[review.status.key] ?? "neutral"}>
                        {review.status.label}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {review.user.profile
                        ? `${review.user.profile.firstName} ${review.user.profile.lastName}`
                        : review.user.email}{" "}
                      · {review.course.title} ·{" "}
                      {new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
                        review.createdAt
                      )}
                    </p>
                  </div>
                  <ReviewModerationActions
                    reviewId={review.id}
                    statusKey={review.status.key}
                  />
                </div>
                {review.comment && (
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed">
                    {review.comment}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        buildHref={buildHref}
      />
    </div>
  );
}
