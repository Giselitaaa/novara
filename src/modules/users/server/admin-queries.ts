import "server-only";

import { db } from "@/lib/db";

export async function listUsersAdmin(params: {
  search?: string;
  statusKey?: string;
  page: number;
}) {
  const pageSize = 20;
  const where = {
    deletedAt: null,
    ...(params.search
      ? {
          OR: [
            { email: { contains: params.search, mode: "insensitive" as const } },
            {
              profile: {
                firstName: { contains: params.search, mode: "insensitive" as const },
              },
            },
            {
              profile: {
                lastName: { contains: params.search, mode: "insensitive" as const },
              },
            },
          ],
        }
      : {}),
    ...(params.statusKey ? { status: { key: params.statusKey } } : {}),
  };

  const [users, total] = await Promise.all([
    db.user.findMany({
      where,
      include: {
        profile: true,
        status: true,
        roles: { include: { role: true } },
        _count: { select: { enrollments: true, payments: true } },
      },
      orderBy: { createdAt: "desc" },
      skip: (params.page - 1) * pageSize,
      take: pageSize,
    }),
    db.user.count({ where }),
  ]);

  return { users, total, totalPages: Math.max(1, Math.ceil(total / pageSize)) };
}

export async function getUserDetailAdmin(id: string) {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      profile: true,
      status: true,
      roles: { include: { role: true } },
      payments: {
        orderBy: { createdAt: "desc" },
        include: { course: { select: { title: true } }, status: true },
      },
      enrollments: {
        orderBy: { enrolledAt: "desc" },
        include: { course: { select: { title: true, slug: true } } },
      },
      certificates: { include: { course: { select: { title: true } } } },
      activityLogs: { orderBy: { createdAt: "desc" }, take: 20 },
    },
  });

  return user;
}

export async function listRoles() {
  return db.role.findMany({ orderBy: { name: "asc" } });
}

export async function listUserStatuses() {
  return db.userStatus.findMany();
}
