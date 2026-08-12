import "server-only";

import { db } from "@/lib/db";

export async function listEmailTemplates() {
  return db.emailTemplate.findMany({ orderBy: { key: "asc" } });
}

export async function getEmailTemplateById(id: string) {
  return db.emailTemplate.findUnique({ where: { id } });
}

export async function listEmailLogs(limit = 50) {
  return db.emailLog.findMany({
    orderBy: { sentAt: "desc" },
    take: limit,
    include: { user: { include: { profile: true } } },
  });
}
