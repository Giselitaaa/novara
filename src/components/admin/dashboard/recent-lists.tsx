import { Activity } from "lucide-react";

import { StatusBadge } from "@/components/admin/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Link } from "@/i18n/navigation";
import { formatPrice } from "@/lib/format";

type RecentPayment = {
  id: string;
  amount: unknown;
  createdAt: Date;
  user: { profile: { firstName: string; lastName: string } | null };
  course: { title: string } | null;
  status: { key: string; label: string };
  paymentMethod: { label: string };
};

export function RecentPaymentsCard({ payments }: { payments: RecentPayment[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Últimos pagos</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {payments.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Todavía no hay pagos registrados.
          </p>
        ) : (
          payments.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <div className="min-w-0">
                <p className="truncate font-medium">
                  {payment.user.profile
                    ? `${payment.user.profile.firstName} ${payment.user.profile.lastName}`
                    : "Alumno"}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {payment.course?.title ?? "—"} · {payment.paymentMethod.label}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="font-mono text-xs">
                  {formatPrice(Number(payment.amount))}
                </span>
                <StatusBadge
                  statusKey={payment.status.key}
                  label={payment.status.label}
                />
              </div>
            </div>
          ))
        )}
        <Link
          href="/admin/pagos"
          className="mt-2 text-sm font-medium text-gold-foreground underline underline-offset-2 dark:text-gold"
        >
          Ver todos los pagos
        </Link>
      </CardContent>
    </Card>
  );
}

type RecentUser = {
  id: string;
  email: string;
  createdAt: Date;
  profile: { firstName: string; lastName: string } | null;
  status: { key: string; label: string };
};

export function RecentUsersCard({ users }: { users: RecentUser[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Últimos usuarios</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {users.length === 0 ? (
          <p className="text-sm text-muted-foreground">Sin usuarios todavía.</p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <div className="min-w-0">
                <p className="truncate font-medium">
                  {user.profile
                    ? `${user.profile.firstName} ${user.profile.lastName}`
                    : user.email}
                </p>
                <p className="truncate text-xs text-muted-foreground">{user.email}</p>
              </div>
              <StatusBadge statusKey={user.status.key} label={user.status.label} />
            </div>
          ))
        )}
        <Link
          href="/admin/usuarios"
          className="mt-2 text-sm font-medium text-gold-foreground underline underline-offset-2 dark:text-gold"
        >
          Ver todos los usuarios
        </Link>
      </CardContent>
    </Card>
  );
}

type RecentCourse = {
  id: string;
  title: string;
  slug: string;
  status: { key: string; label: string };
  category: { name: string };
};

export function RecentCoursesCard({ courses }: { courses: RecentCourse[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Últimos cursos</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {courses.length === 0 ? (
          <EmptyState
            icon={Activity}
            title="Todavía no hay cursos"
            description="Crea el primero desde «Cursos → Nuevo curso»."
          />
        ) : (
          courses.map((course) => (
            <div
              key={course.id}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <div className="min-w-0">
                <Link
                  href={`/admin/cursos/${course.id}`}
                  className="truncate font-medium hover:text-gold-foreground"
                >
                  {course.title}
                </Link>
                <p className="truncate text-xs text-muted-foreground">
                  {course.category.name}
                </p>
              </div>
              <StatusBadge statusKey={course.status.key} label={course.status.label} />
            </div>
          ))
        )}
        <Link
          href="/admin/cursos"
          className="mt-2 text-sm font-medium text-gold-foreground underline underline-offset-2 dark:text-gold"
        >
          Ver todos los cursos
        </Link>
      </CardContent>
    </Card>
  );
}

type ActivityItem = {
  id: string;
  action: string;
  createdAt: Date;
  actor: { profile: { firstName: string; lastName: string } | null };
};

const ACTION_LABELS: Record<string, string> = {
  "courses.publish": "publicó el curso",
  "courses.unpublish": "despublicó el curso",
  "courses.archive": "archivó el curso",
  "courses.create": "creó el curso",
  "courses.delete": "eliminó un curso",
  "payments.approve": "aprobó un pago",
  "payments.reject": "rechazó un pago",
  "users.ban": "bloqueó a un usuario",
  "users.role_change": "cambió el rol de un usuario",
  "categories.create": "creó una categoría",
};

export function RecentActivityCard({ activity }: { activity: ActivityItem[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad reciente</CardTitle>
      </CardHeader>
      <CardContent>
        {activity.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Sin actividad registrada todavía.
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {activity.map((item) => (
              <li key={item.id} className="flex items-center gap-2.5 text-sm">
                <Activity className="size-3.5 shrink-0 text-gold" />
                <span>
                  <span className="font-medium">
                    {item.actor.profile?.firstName ?? "Un administrador"}
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {ACTION_LABELS[item.action] ?? item.action}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
