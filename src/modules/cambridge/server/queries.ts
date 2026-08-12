import "server-only";

import { db } from "@/lib/db";

/**
 * Lecciones disponibles para insertar contenido generado, agrupables por
 * curso. Se limita a un tamaño razonable; el selector muestra curso · lección.
 */
export async function listLessonsForInsert() {
  const lessons = await db.lesson.findMany({
    orderBy: [{ module: { course: { title: "asc" } } }, { sortOrder: "asc" }],
    select: {
      id: true,
      title: true,
      module: { select: { course: { select: { title: true } } } },
    },
    take: 500,
  });
  return lessons.map((l) => ({
    id: l.id,
    title: l.title,
    courseTitle: l.module?.course?.title ?? "—",
  }));
}
