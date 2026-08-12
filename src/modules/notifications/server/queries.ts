import "server-only";

import { db } from "@/lib/db";

export async function listNotifications(userId: string, limit = 20) {
  return db.notification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}

export async function getUnreadNotificationCount(userId: string) {
  return db.notification.count({ where: { userId, isRead: false } });
}
