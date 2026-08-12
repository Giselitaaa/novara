import { BookOpen, Euro, GraduationCap, Plus, Receipt, Tags, Users } from "lucide-react";
import type { Metadata } from "next";

import {
  RecentActivityCard,
  RecentCoursesCard,
  RecentPaymentsCard,
  RecentUsersCard,
} from "@/components/admin/dashboard/recent-lists";
import { StatCard } from "@/components/admin/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { formatPrice } from "@/lib/format";
import {
  getDashboardStats,
  getRecentActivity,
  getRecentCourses,
  getRecentPayments,
  getRecentUsers,
} from "@/modules/admin/server/dashboard-queries";

export const metadata: Metadata = { title: "Dashboard" };

const QUICK_ACTIONS = [
  { label: "Nuevo curso", href: "/admin/cursos/nuevo", icon: Plus },
  { label: "Nueva categoría", href: "/admin/categorias/nueva", icon: Tags },
  { label: "Pagos pendientes", href: "/admin/pagos", icon: Receipt },
];

export default async function AdminDashboardPage() {
  const [stats, payments, users, courses, activity] = await Promise.all([
    getDashboardStats(),
    getRecentPayments(5),
    getRecentUsers(5),
    getRecentCourses(5),
    getRecentActivity(8),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl tracking-tighter sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Estado general de la academia, en tiempo real.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {QUICK_ACTIONS.map((action) => (
            <Button key={action.href} asChild variant="outline" size="sm">
              <Link href={action.href}>
                <action.icon className="size-4" />
                {action.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Usuarios totales"
          value={String(stats.totalUsers)}
          icon={Users}
        />
        <StatCard
          label="Cursos publicados"
          value={String(stats.publishedCourses)}
          icon={BookOpen}
        />
        <StatCard
          label="Pagos por revisar"
          value={String(stats.pendingPayments)}
          icon={Receipt}
        />
        <StatCard
          label="Ingresos este mes"
          value={formatPrice(stats.revenueThisMonth)}
          icon={Euro}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentPaymentsCard payments={payments} />
        <RecentUsersCard users={users} />
        <RecentCoursesCard courses={courses} />
        <RecentActivityCard activity={activity} />
      </div>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <GraduationCap className="size-3.5" />
        {stats.totalEnrollments} inscripciones activas en total.
      </div>
    </div>
  );
}
