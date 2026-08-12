import { Award, GraduationCap, Receipt } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StatusBadge } from "@/components/admin/status-badge";
import { UserRoleStatusControls } from "@/components/admin/users/user-role-status-controls";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { formatPrice, getInitials } from "@/lib/format";
import {
  getUserDetailAdmin,
  listRoles,
  listUserStatuses,
} from "@/modules/users/server/admin-queries";

export const metadata: Metadata = { title: "Detalle de usuario" };

type Props = { params: Promise<{ id: string }> };

export default async function UserDetailPage({ params }: Props) {
  const { id } = await params;
  const [user, roles, statuses] = await Promise.all([
    getUserDetailAdmin(id),
    listRoles(),
    listUserStatuses(),
  ]);
  if (!user || !user.profile) notFound();

  return (
    <div className="flex max-w-3xl flex-col gap-8">
      <div className="flex items-center gap-4">
        <Avatar className="size-16">
          <AvatarImage src={user.profile.avatarUrl ?? undefined} alt="" />
          <AvatarFallback className="text-lg">
            {getInitials(`${user.profile.firstName} ${user.profile.lastName}`)}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-display text-2xl tracking-tighter">
            {user.profile.firstName} {user.profile.lastName}
          </h1>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <UserRoleStatusControls
            userId={user.id}
            currentRoleId={user.roles[0]?.role.id}
            currentStatusKey={user.status.key}
            roles={roles}
            statuses={statuses}
          />
        </CardContent>
      </Card>

      <div>
        <h2 className="mb-3 flex items-center gap-2 font-display text-lg tracking-tighter">
          <GraduationCap className="size-4.5 text-gold" /> Cursos inscritos
        </h2>
        {user.enrollments.length === 0 ? (
          <EmptyState icon={GraduationCap} title="Sin inscripciones" />
        ) : (
          <ul className="flex flex-col gap-2">
            {user.enrollments.map((e) => (
              <li
                key={e.id}
                className="rounded-md border border-border px-3.5 py-2.5 text-sm"
              >
                {e.course.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="mb-3 flex items-center gap-2 font-display text-lg tracking-tighter">
          <Receipt className="size-4.5 text-gold" /> Pagos
        </h2>
        {user.payments.length === 0 ? (
          <EmptyState icon={Receipt} title="Sin pagos registrados" />
        ) : (
          <ul className="flex flex-col gap-2">
            {user.payments.map((payment) => (
              <li
                key={payment.id}
                className="flex items-center justify-between rounded-md border border-border px-3.5 py-2.5 text-sm"
              >
                <span>
                  {payment.course?.title ?? "—"} · {formatPrice(Number(payment.amount))}
                </span>
                <StatusBadge
                  statusKey={payment.status.key}
                  label={payment.status.label}
                />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="mb-3 flex items-center gap-2 font-display text-lg tracking-tighter">
          <Award className="size-4.5 text-gold" /> Certificados
        </h2>
        {user.certificates.length === 0 ? (
          <EmptyState icon={Award} title="Sin certificados todavía" />
        ) : (
          <ul className="flex flex-col gap-2">
            {user.certificates.map((cert) => (
              <li
                key={cert.id}
                className="rounded-md border border-border px-3.5 py-2.5 text-sm"
              >
                {cert.course?.title ?? "Certificado"} —{" "}
                <span className="font-mono text-xs">{cert.uniqueCode}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
