import { Award, BookOpen, ClipboardCheck, History } from "lucide-react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { requireSession } from "@/lib/require-session";
import { getLearningHistory } from "@/modules/users/server/history-queries";

export const metadata: Metadata = { title: "Historial de aprendizaje" };

const ICON_BY_KIND = {
  lesson: BookOpen,
  exam: ClipboardCheck,
  certificate: Award,
} as const;

type Props = { searchParams: Promise<{ page?: string }> };

export default async function LearningHistoryPage({ searchParams }: Props) {
  const session = await requireSession();
  if (!session?.user?.id)
    redirect("/auth/iniciar-sesion?callbackUrl=/mi-aprendizaje/historial");

  const { page } = await searchParams;
  const currentPage = Number(page) > 0 ? Number(page) : 1;
  const { entries, total, totalPages } = await getLearningHistory(
    session.user.id,
    currentPage
  );

  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: "Mi aprendizaje", href: "/mi-aprendizaje" },
          { label: "Historial" },
        ]}
      />

      <h1 className="mb-2 mt-6 font-display text-3xl tracking-tighter sm:text-4xl">
        Historial de aprendizaje
      </h1>
      <p className="mb-10 text-base text-muted-foreground">
        {total} {total === 1 ? "hito registrado" : "hitos registrados"} en tu recorrido.
      </p>

      {entries.length === 0 ? (
        <EmptyState
          icon={History}
          title="Todavía no hay actividad registrada"
          description="Completa lecciones y exámenes y aquí verás tu progreso paso a paso."
        />
      ) : (
        <ol className="relative flex flex-col gap-6 border-l border-border pl-6">
          {entries.map((entry) => {
            const Icon = ICON_BY_KIND[entry.kind];
            return (
              <li key={entry.id} className="relative">
                <span className="absolute -left-[31px] flex size-6 items-center justify-center rounded-full border border-border bg-background">
                  <Icon className="size-3.5 text-gold" />
                </span>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium">{entry.title}</p>
                  <time className="font-mono text-xs text-muted-foreground">
                    {new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
                      entry.date
                    )}
                  </time>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {entry.meta}
                  {entry.subtitle ? ` · ${entry.subtitle}` : ""}
                </p>
              </li>
            );
          })}
        </ol>
      )}

      <div className="mt-10">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          buildHref={(p) =>
            p > 1 ? `/mi-aprendizaje/historial?page=${p}` : "/mi-aprendizaje/historial"
          }
        />
      </div>
    </Container>
  );
}
