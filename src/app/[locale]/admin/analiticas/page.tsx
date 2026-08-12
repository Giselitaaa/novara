import {
  Activity,
  BarChart3,
  Download,
  Percent,
  ShoppingCart,
  Timer,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

import { CompletionFunnel } from "@/components/admin/dashboard/completion-funnel";
import { StatCard } from "@/components/admin/dashboard/stat-card";
import { TimeSeriesChart } from "@/components/admin/dashboard/time-series-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getActiveUsers,
  getAnalyticsTimeSeries,
  getCompletionFunnels,
  getInternalAnalytics,
} from "@/modules/admin/server/analytics-queries";

export const metadata: Metadata = { title: "Analíticas" };

const CSV_EXPORTS = [
  { label: "Usuarios", href: "/api/admin/export/usuarios" },
  { label: "Pagos", href: "/api/admin/export/pagos" },
  { label: "Inscripciones", href: "/api/admin/export/inscripciones" },
];

const FUNNEL_LABELS: Record<string, string> = {
  pendiente: "Pendientes",
  en_revision: "En revisión",
  aprobado: "Aprobados",
  rechazado: "Rechazados",
};

export default async function AdminAnalyticsPage() {
  const [data, series, active, funnels] = await Promise.all([
    getInternalAnalytics(),
    getAnalyticsTimeSeries(),
    getActiveUsers(),
    getCompletionFunnels(),
  ]);
  const funnelTotal = Object.values(data.purchaseFunnel).reduce((a, b) => a + b, 0) || 1;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">Analíticas</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Métricas calculadas sobre datos reales de NOVARA.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground">Exportar CSV:</span>
          {CSV_EXPORTS.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium hover:bg-muted"
            >
              <Download className="size-3.5" /> {e.label}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <StatCard
          label="Usuarios activos (7 días)"
          value={String(active.active7)}
          icon={Activity}
        />
        <StatCard
          label="Usuarios activos (30 días)"
          value={String(active.active30)}
          icon={UserCheck}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Usuarios nuevos (30 días)</CardTitle>
          </CardHeader>
          <CardContent>
            <TimeSeriesChart data={series.usersByDay} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inscripciones (30 días)</CardTitle>
          </CardHeader>
          <CardContent>
            <TimeSeriesChart data={series.enrollmentsByDay} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ingresos (6 meses)</CardTitle>
          </CardHeader>
          <CardContent>
            <TimeSeriesChart data={series.revenueByMonth} format="currency" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Usuarios totales" value={String(data.totalUsers)} icon={Users} />
        <StatCard
          label="Cursos totales"
          value={String(data.totalCourses)}
          icon={BarChart3}
        />
        <StatCard
          label="Inscripciones"
          value={String(data.totalEnrollments)}
          icon={ShoppingCart}
        />
        <StatCard
          label="Tasa de finalización"
          value={`${data.completionRate.toFixed(1)}%`}
          icon={Percent}
        />
        <StatCard
          label="Tasa de conversión de pagos"
          value={`${data.conversionRate.toFixed(1)}%`}
          icon={TrendingUp}
        />
        <StatCard
          label="Tiempo medio de estudio"
          value={`${data.averageStudyMinutes} min`}
          icon={Timer}
        />
      </div>

      {funnels.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Embudo de finalización por curso</CardTitle>
            <p className="text-sm text-muted-foreground">
              Cuántos inscritos llegan a cada módulo. Donde cae la barra, ahí abandonan.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            {funnels.map((funnel) => (
              <CompletionFunnel key={funnel.courseId} funnel={funnel} />
            ))}
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cursos más vendidos</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2.5">
            {data.bestSellingCourses.length === 0 ? (
              <p className="text-sm text-muted-foreground">Sin inscripciones todavía.</p>
            ) : (
              data.bestSellingCourses.map((c) => (
                <div key={c.title} className="flex items-center justify-between text-sm">
                  <span>{c.title}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {c.enrollments}
                  </span>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Categorías más pobladas</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2.5">
            {data.topCategories.length === 0 ? (
              <p className="text-sm text-muted-foreground">Sin categorías todavía.</p>
            ) : (
              data.topCategories.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-sm">
                  <span>{c.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {c.courseCount} cursos
                  </span>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Embudo de compra</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {Object.entries(data.purchaseFunnel).map(([key, count]) => (
            <div key={key} className="flex items-center gap-3">
              <span className="w-28 shrink-0 text-sm text-muted-foreground">
                {FUNNEL_LABELS[key] ?? key}
              </span>
              <div className="h-6 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gold"
                  style={{ width: `${(count / funnelTotal) * 100}%` }}
                />
              </div>
              <span className="w-10 shrink-0 text-right font-mono text-xs">{count}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
