import "server-only";

import { db } from "@/lib/db";

export type SeriesPoint = { label: string; value: number };

export type CourseFunnel = {
  courseId: string;
  courseTitle: string;
  totalEnrolled: number;
  modules: { title: string; reached: number }[];
};

/**
 * Embudo de finalización por curso: cuántos alumnos DISTINTOS han
 * completado al menos una lección de cada módulo (en orden). Es la
 * métrica más valiosa de una academia — muestra dónde abandonan. Se
 * calcula sobre datos reales (`lesson_progress`), agregando en la BD.
 * Solo para cursos con alguna inscripción (sin datos no hay embudo que
 * mostrar, en vez de inventar uno).
 */
export async function getCompletionFunnels(maxCourses = 6): Promise<CourseFunnel[]> {
  const courses = await db.course.findMany({
    where: { enrollments: { some: {} } },
    orderBy: { enrollments: { _count: "desc" } },
    take: maxCourses,
    select: { id: true, title: true, _count: { select: { enrollments: true } } },
  });

  const funnels: CourseFunnel[] = [];
  for (const course of courses) {
    const rows = await db.$queryRawUnsafe<{ title: string; reached: bigint }[]>(
      `SELECT m.title AS title, count(distinct lp.user_id)::bigint AS reached
       FROM modules m
       LEFT JOIN lessons l ON l.module_id = m.id
       LEFT JOIN lesson_progress lp ON lp.lesson_id = l.id AND lp.completed_at IS NOT NULL
       WHERE m.course_id = $1
       GROUP BY m.id, m.title, m.sort_order
       ORDER BY m.sort_order ASC`,
      course.id
    );
    funnels.push({
      courseId: course.id,
      courseTitle: course.title,
      totalEnrolled: course._count.enrollments,
      modules: rows.map((r) => ({ title: r.title, reached: Number(r.reached) })),
    });
  }
  return funnels;
}

/**
 * Series temporales para las gráficas del panel: usuarios nuevos por
 * día e inscripciones por día (últimos 30 días) e ingresos por mes
 * (últimos 6 meses). Se agregan en la BASE DE DATOS con `date_trunc`
 * (no se traen las tablas a memoria) — escala con muchos registros.
 */
export async function getAnalyticsTimeSeries() {
  const [usersByDay, enrollmentsByDay, revenueByMonth] = await Promise.all([
    db.$queryRawUnsafe<{ bucket: Date; count: bigint }[]>(
      `SELECT date_trunc('day', created_at) AS bucket, count(*)::bigint AS count
       FROM users WHERE created_at >= now() - interval '29 days'
       GROUP BY 1 ORDER BY 1`
    ),
    db.$queryRawUnsafe<{ bucket: Date; count: bigint }[]>(
      `SELECT date_trunc('day', enrolled_at) AS bucket, count(*)::bigint AS count
       FROM enrollments WHERE enrolled_at >= now() - interval '29 days'
       GROUP BY 1 ORDER BY 1`
    ),
    db.$queryRawUnsafe<{ bucket: Date; total: number }[]>(
      `SELECT date_trunc('month', p.created_at) AS bucket, coalesce(sum(p.amount),0)::float8 AS total
       FROM payments p JOIN "PaymentStatus" s ON s.id = p.status_id
       WHERE s.key = 'aprobado' AND p.created_at >= now() - interval '5 months'
       GROUP BY 1 ORDER BY 1`
    ),
  ]);

  // Rellena los días/meses sin datos con 0, para que la gráfica no
  // tenga huecos y el eje temporal sea continuo y honesto.
  const dayFmt = new Intl.DateTimeFormat("es-ES", { day: "2-digit", month: "short" });
  const monthFmt = new Intl.DateTimeFormat("es-ES", { month: "short", year: "2-digit" });

  const fillDays = (rows: { bucket: Date; count: bigint }[]): SeriesPoint[] => {
    const byKey = new Map(
      rows.map((r) => [new Date(r.bucket).toDateString(), Number(r.count)])
    );
    const out: SeriesPoint[] = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      out.push({ label: dayFmt.format(d), value: byKey.get(d.toDateString()) ?? 0 });
    }
    return out;
  };

  const revenue: SeriesPoint[] = [];
  const revByKey = new Map(
    revenueByMonth.map((r) => [
      new Date(r.bucket).getFullYear() * 12 + new Date(r.bucket).getMonth(),
      r.total,
    ])
  );
  for (let i = 5; i >= 0; i--) {
    const d = new Date();
    d.setDate(1);
    d.setMonth(d.getMonth() - i);
    revenue.push({
      label: monthFmt.format(d),
      value: revByKey.get(d.getFullYear() * 12 + d.getMonth()) ?? 0,
    });
  }

  return {
    usersByDay: fillDays(usersByDay),
    enrollmentsByDay: fillDays(enrollmentsByDay),
    revenueByMonth: revenue,
  };
}

/**
 * Usuarios activos reales (7 y 30 días): alumnos con actividad de
 * estudio en la ventana, según `lesson_progress.last_activity_at`.
 * Cuenta usuarios DISTINTOS en la BD, no filas.
 */
export async function getActiveUsers() {
  const [d7, d30] = await Promise.all([
    db.lessonProgress.findMany({
      where: { lastActivityAt: { gte: new Date(Date.now() - 7 * 864e5) } },
      distinct: ["userId"],
      select: { userId: true },
    }),
    db.lessonProgress.findMany({
      where: { lastActivityAt: { gte: new Date(Date.now() - 30 * 864e5) } },
      distinct: ["userId"],
      select: { userId: true },
    }),
  ]);
  return { active7: d7.length, active30: d30.length };
}

/**
 * Analíticas internas de NOVARA — todo calculado sobre datos propios
 * (Prisma), sin depender de ningún proveedor externo. Es el
 * complemento natural de `AnalyticsScripts` (Módulo 3): aquello no
 * mide nada por sí mismo, esto sí, porque vive en nuestra propia base
 * de datos.
 */
export async function getInternalAnalytics() {
  const [
    totalUsers,
    totalCourses,
    payments,
    enrollments,
    completedEnrollments,
    avgWatchedSeconds,
    topCourses,
    topCategories,
  ] = await Promise.all([
    db.user.count({ where: { deletedAt: null } }),
    db.course.count({ where: { deletedAt: null } }),
    db.payment.groupBy({ by: ["statusId"], _count: true }),
    db.enrollment.count(),
    db.courseProgressSummary.count({ where: { percentComplete: 100 } }),
    db.lessonProgress.aggregate({ _avg: { watchedSeconds: true } }),
    db.enrollment.groupBy({
      by: ["courseId"],
      _count: { courseId: true },
      orderBy: { _count: { courseId: "desc" } },
      take: 5,
    }),
    db.course.groupBy({
      by: ["categoryId"],
      _count: { categoryId: true },
      orderBy: { _count: { categoryId: "desc" } },
      take: 5,
    }),
  ]);

  const statuses = await db.paymentStatus.findMany();
  const statusMap = new Map(statuses.map((s) => [s.id, s.key]));
  const paymentsByStatus = Object.fromEntries(
    payments.map((p) => [statusMap.get(p.statusId) ?? "desconocido", p._count])
  );

  const totalPaymentRequests = payments.reduce((sum, p) => sum + p._count, 0);
  const approvedPayments = paymentsByStatus["aprobado"] ?? 0;
  const conversionRate =
    totalPaymentRequests > 0 ? (approvedPayments / totalPaymentRequests) * 100 : 0;
  const completionRate = enrollments > 0 ? (completedEnrollments / enrollments) * 100 : 0;

  const courseIds = topCourses.map((c) => c.courseId);
  const courseTitles = courseIds.length
    ? await db.course.findMany({
        where: { id: { in: courseIds } },
        select: { id: true, title: true },
      })
    : [];
  const titleById = new Map(courseTitles.map((c) => [c.id, c.title]));

  const categoryIds = topCategories.map((c) => c.categoryId);
  const categoryNames = categoryIds.length
    ? await db.category.findMany({
        where: { id: { in: categoryIds } },
        select: { id: true, name: true },
      })
    : [];
  const nameById = new Map(categoryNames.map((c) => [c.id, c.name]));

  return {
    totalUsers,
    totalCourses,
    totalEnrollments: enrollments,
    completionRate,
    conversionRate,
    averageStudyMinutes: Math.round((avgWatchedSeconds._avg.watchedSeconds ?? 0) / 60),
    bestSellingCourses: topCourses.map((c) => ({
      title: titleById.get(c.courseId) ?? "—",
      enrollments: c._count.courseId,
    })),
    topCategories: topCategories.map((c) => ({
      name: nameById.get(c.categoryId) ?? "—",
      courseCount: c._count.categoryId,
    })),
    purchaseFunnel: {
      pendiente: paymentsByStatus["pendiente"] ?? 0,
      en_revision: paymentsByStatus["en_revision"] ?? 0,
      aprobado: approvedPayments,
      rechazado: paymentsByStatus["rechazado"] ?? 0,
    },
  };
}
