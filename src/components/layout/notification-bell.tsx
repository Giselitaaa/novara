"use client";

import { Award, Bell, BookOpen, Info, Receipt } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/navigation";
import {
  fetchNotificationsForBell,
  markNotificationAsRead,
} from "@/modules/notifications/server/actions";

type NotificationItem = {
  id: string;
  type: string;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: Date;
};

const TYPE_ICONS: Record<string, LucideIcon> = {
  pago: Receipt,
  logro: Award,
  curso: BookOpen,
  sistema: Info,
};

export function NotificationBell() {
  const { status } = useSession();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetchNotificationsForBell().then((data) => {
      setNotifications(data.notifications);
      setUnreadCount(data.unreadCount);
    });
  }, [status, open]);

  if (status !== "authenticated") return null;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Notificaciones"
        >
          <Bell className="size-4.5" />
          {unreadCount > 0 && (
            <span className="absolute right-1.5 top-1.5 flex size-2 rounded-full bg-gold" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between px-2.5 py-2">
          <span className="font-display text-sm tracking-tighter">Notificaciones</span>
          <Link
            href="/notificaciones"
            className="text-xs text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Ver todas
          </Link>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <p className="px-2.5 py-4 text-center text-sm text-muted-foreground">
              No tienes notificaciones.
            </p>
          ) : (
            notifications.map((n) => {
              const Icon = TYPE_ICONS[n.type] ?? Info;
              return (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => {
                    if (!n.isRead) {
                      markNotificationAsRead(n.id);
                      setNotifications((prev) =>
                        prev.map((item) =>
                          item.id === n.id ? { ...item, isRead: true } : item
                        )
                      );
                      setUnreadCount((c) => Math.max(0, c - 1));
                    }
                  }}
                  className="flex w-full items-start gap-2.5 px-2.5 py-2.5 text-left text-sm transition-colors hover:bg-accent"
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span className="min-w-0 flex-1">
                    <span className={`block truncate ${!n.isRead ? "font-medium" : ""}`}>
                      {n.title}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {n.body}
                    </span>
                  </span>
                  {!n.isRead && (
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                  )}
                </button>
              );
            })
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
