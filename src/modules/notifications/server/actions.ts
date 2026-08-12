"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { requireSession } from "@/lib/require-session";
import { listNotifications } from "@/modules/notifications/server/queries";

export async function fetchNotificationsForBell() {
  const session = await requireSession();
  if (!session?.user?.id) return { notifications: [], unreadCount: 0 };

  const [notifications, unreadCount] = await Promise.all([
    listNotifications(session.user.id, 8),
    db.notification.count({ where: { userId: session.user.id, isRead: false } }),
  ]);

  return { notifications, unreadCount };
}

export async function markNotificationAsRead(notificationId: string) {
  const session = await requireSession();
  if (!session?.user?.id) return;

  await db.notification.updateMany({
    where: { id: notificationId, userId: session.user.id },
    data: { isRead: true },
  });
  revalidatePath("/notificaciones");
}

export async function markAllNotificationsAsRead() {
  const session = await requireSession();
  if (!session?.user?.id) return;

  await db.notification.updateMany({
    where: { userId: session.user.id, isRead: false },
    data: { isRead: true },
  });
  revalidatePath("/notificaciones");
}
