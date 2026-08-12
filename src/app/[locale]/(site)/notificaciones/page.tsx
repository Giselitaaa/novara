import { Award, Bell, BookOpen, Info, Receipt } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { requireSession } from "@/lib/require-session";
import { markAllNotificationsAsRead } from "@/modules/notifications/server/actions";
import { listNotifications } from "@/modules/notifications/server/queries";

export const metadata: Metadata = { title: "Notificaciones" };

const TYPE_ICONS: Record<string, LucideIcon> = {
  pago: Receipt,
  logro: Award,
  curso: BookOpen,
  sistema: Info,
};

export default async function NotificationsPage() {
  const session = await requireSession();
  if (!session?.user?.id) redirect("/auth/iniciar-sesion?callbackUrl=/notificaciones");

  const notifications = await listNotifications(session.user.id, 50);

  async function handleMarkAll() {
    "use server";
    await markAllNotificationsAsRead();
  }

  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-display text-2xl tracking-tighter sm:text-3xl">
          Notificaciones
        </h1>
        <form action={handleMarkAll}>
          <Button type="submit" variant="outline" size="sm">
            Marcar todas como leídas
          </Button>
        </form>
      </div>

      {notifications.length === 0 ? (
        <EmptyState icon={Bell} title="No tienes notificaciones todavía" />
      ) : (
        <ul className="flex flex-col gap-2">
          {notifications.map((n) => {
            const Icon = TYPE_ICONS[n.type] ?? Info;
            return (
              <li
                key={n.id}
                className={`flex items-start gap-3 rounded-lg border border-border p-4 ${
                  !n.isRead ? "bg-gold/5" : ""
                }`}
              >
                <Icon className="mt-0.5 size-4.5 shrink-0 text-gold" />
                <div className="min-w-0 flex-1">
                  <p className={`text-sm ${!n.isRead ? "font-medium" : ""}`}>{n.title}</p>
                  <p className="text-sm text-muted-foreground">{n.body}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {new Intl.DateTimeFormat("es-ES", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(n.createdAt)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
}
