import { MessageCircleQuestion } from "lucide-react";
import type { Metadata } from "next";

import { QuestionAnswerForm } from "@/components/admin/courses/question-answer-form";
import { StatusBadge } from "@/components/admin/status-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { Link } from "@/i18n/navigation";
import { requireAdmin } from "@/modules/admin/server/guard";
import { listQuestionsForAdmin } from "@/modules/courses/server/qa-queries";

export const metadata: Metadata = { title: "Preguntas" };

const STATUS_FILTERS = [
  { key: "abierta", label: "Sin responder" },
  { key: "respondida", label: "Respondidas" },
  { key: "", label: "Todas" },
];

type Props = { searchParams: Promise<{ estado?: string; page?: string }> };

export default async function AdminQuestionsPage({ searchParams }: Props) {
  await requireAdmin();
  const { estado, page } = await searchParams;
  const statusKey = estado === undefined ? "abierta" : estado;
  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const { questions, total, totalPages } = await listQuestionsForAdmin({
    statusKey: statusKey || undefined,
    page: currentPage,
  });

  function buildHref(targetPage: number) {
    const params = new URLSearchParams();
    if (statusKey) params.set("estado", statusKey);
    if (targetPage > 1) params.set("page", String(targetPage));
    const query = params.toString();
    return query ? `/admin/preguntas?${query}` : "/admin/preguntas";
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Preguntas</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {total} pregunta(s) en este filtro.
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
                  ? `/admin/preguntas?estado=${filter.key}`
                  : "/admin/preguntas?estado="
              }
            >
              {filter.label}
            </Link>
          </Button>
        ))}
      </div>

      {questions.length === 0 ? (
        <EmptyState
          icon={MessageCircleQuestion}
          title="No hay preguntas en este filtro"
        />
      ) : (
        <div className="flex flex-col gap-4">
          {questions.map((q) => (
            <Card key={q.id}>
              <CardContent className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="text-xs text-muted-foreground">
                    {q.user.profile
                      ? `${q.user.profile.firstName} ${q.user.profile.lastName}`
                      : q.user.email}{" "}
                    · {q.course.title} ·{" "}
                    {new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
                      q.createdAt
                    )}
                  </p>
                  <StatusBadge statusKey={q.status.key} label={q.status.label} />
                </div>
                <p className="mt-2 text-sm leading-relaxed">{q.body}</p>

                {q.answers.length > 0 && (
                  <div className="mt-3 flex flex-col gap-2 border-l-2 border-gold/30 pl-4">
                    {q.answers.map((a) => (
                      <div key={a.id}>
                        <p className="text-xs font-medium text-gold-foreground dark:text-gold">
                          {a.user.profile
                            ? `${a.user.profile.firstName} ${a.user.profile.lastName}`
                            : "NOVARA"}
                        </p>
                        <p className="mt-0.5 text-sm text-foreground/90">{a.body}</p>
                      </div>
                    ))}
                  </div>
                )}

                <QuestionAnswerForm questionId={q.id} />
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
