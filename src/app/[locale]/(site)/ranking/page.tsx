import { Trophy } from "lucide-react";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Link } from "@/i18n/navigation";
import { auth } from "@/lib/auth";
import { getInitials } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  getMyRankPosition,
  getRanking,
  type RankingPeriod,
} from "@/modules/gamification/server/ranking-queries";

export const metadata: Metadata = { title: "Ranking" };

// La página es dinámica (muestra tu posición según tu sesión), pero la
// agregación pesada del ranking está cacheada 2 min en la propia query
// (`getRanking` con unstable_cache) — ahí está el ahorro de rendimiento.

const PERIODS: { key: RankingPeriod; label: string }[] = [
  { key: "week", label: "Esta semana" },
  { key: "month", label: "Este mes" },
  { key: "all", label: "Histórico" },
];

type Props = { searchParams: Promise<{ periodo?: string }> };

export default async function RankingPage({ searchParams }: Props) {
  const { periodo } = await searchParams;
  const period: RankingPeriod =
    periodo === "month" || periodo === "all" ? periodo : "week";

  const session = await auth();
  const [rows, myPosition] = await Promise.all([
    getRanking(period),
    session?.user?.id
      ? getMyRankPosition(session.user.id, period)
      : Promise.resolve(null),
  ]);

  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Ranking" }]} />

      <div className="mb-6 mt-6 flex items-center gap-2">
        <Trophy className="size-6 text-gold" />
        <h1 className="font-display text-3xl tracking-tighter sm:text-4xl">Ranking</h1>
      </div>
      <p className="mb-8 text-sm text-muted-foreground">
        Clasificación por XP. Puedes ocultarte desde{" "}
        <Link href="/perfil" className="underline">
          tu perfil › Preferencias
        </Link>
        .
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {PERIODS.map((p) => (
          <Button
            key={p.key}
            asChild
            variant={period === p.key ? "gold" : "outline"}
            size="sm"
          >
            <Link href={`/ranking?periodo=${p.key}`}>{p.label}</Link>
          </Button>
        ))}
      </div>

      {myPosition && (
        <div className="mb-6 flex items-center justify-between rounded-lg border border-gold/30 bg-gold/5 px-4 py-3">
          <span className="text-sm font-medium">Tu posición</span>
          <span className="font-mono text-sm">
            #{myPosition.rank} · {myPosition.xp} XP
          </span>
        </div>
      )}

      {rows.length === 0 ? (
        <EmptyState
          icon={Trophy}
          title="Todavía no hay actividad en este periodo"
          description="Completa lecciones y aprueba exámenes para ganar XP y aparecer aquí."
        />
      ) : (
        <ol className="flex flex-col gap-1.5">
          {rows.map((row) => {
            const isMe = row.userId === session?.user?.id;
            return (
              <li
                key={row.userId}
                className={cn(
                  "flex items-center gap-3 rounded-md border px-3 py-2.5",
                  isMe ? "border-gold/40 bg-gold/5" : "border-border",
                  row.rank <= 3 && "bg-muted/40"
                )}
              >
                <span
                  className={cn(
                    "w-7 shrink-0 text-center font-mono text-sm",
                    row.rank === 1 && "text-gold",
                    row.rank <= 3 ? "font-bold" : "text-muted-foreground"
                  )}
                >
                  {row.rank}
                </span>
                <Avatar className="size-8">
                  <AvatarImage src={row.avatarUrl ?? undefined} alt="" />
                  <AvatarFallback>{getInitials(row.name)}</AvatarFallback>
                </Avatar>
                <span className="min-w-0 flex-1 truncate text-sm font-medium">
                  {row.name}
                  {isMe && (
                    <span className="ml-1.5 text-xs text-muted-foreground">(tú)</span>
                  )}
                </span>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {row.xp} XP
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </Container>
  );
}
