import "server-only";

import { db } from "@/lib/db";

export async function getDashboardStats() {
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const [
    totalUsers,
    publishedCourses,
    pendingPayments,
    approvedThisMonth,
    totalEnrollments,
  ] = await Promise.all([
    db.user.count({ where: { deletedAt: null } }),
    db.course.count({ where: { status: { key: "publicado" } } }),
    db.payment.count({
      where: { status: { key: { in: ["pendiente", "en_revision"] } } },
    }),
    db.payment.findMany({
      where: { status: { key: "aprobado" }, reviewedAt: { gte: startOfMonth } },
      select: { amount: true },
    }),
    db.enrollment.count({ where: { status: "activo" } }),
  ]);

  const revenueThisMonth = approvedThisMonth.reduce(
    (sum, payment) => sum + Number(payment.amount),
    0
  );

  return {
    totalUsers,
    publishedCourses,
    pendingPayments,
    revenueThisMonth,
    totalEnrollments,
  };
}

export async function getRecentPayments(limit = 5) {
  return db.payment.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
    include: {
      user: { include: { profile: true } },
      course: { select: { title: true } },
      status: true,
      paymentMethod: true,
    },
  });
}

export async function getRecentUsers(limit = 5) {
  return db.user.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: "desc" },
    take: limit,
    include: { profile: true, status: true },
  });
}

export async function getRecentCourses(limit = 5) {
  return db.course.findMany({
    orderBy: { updatedAt: "desc" },
    take: limit,
    include: { status: true, category: { select: { name: true } } },
  });
}

export async function getRecentActivity(limit = 8) {
  return db.auditLog.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
    include: { actor: { include: { profile: true } } },
  });
}
