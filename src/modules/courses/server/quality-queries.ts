import "server-only";

import { db } from "@/lib/db";
import { runQualityChecks, type QCCourse } from "@/modules/courses/shared/quality";

/**
 * Reúne el contenido del curso y ejecuta el control de calidad (9.7).
 * Devuelve la lista de avisos no bloqueantes, o `null` si el curso no existe.
 */
export async function getCourseQualityReport(courseId: string) {
  const course = await db.course.findUnique({
    where: { id: courseId },
    include: {
      accessType: true,
      modules: {
        orderBy: { sortOrder: "asc" },
        include: {
          lessons: {
            orderBy: { sortOrder: "asc" },
            include: {
              blocks: true,
              exercises: { include: { questions: true } },
              content: { select: { id: true } },
            },
          },
        },
      },
    },
  });
  if (!course) return null;

  const input: QCCourse = {
    title: course.title,
    description: course.description,
    isPremium: course.accessType.key === "premium",
    price: course.price ? Number(course.price) : null,
    modules: course.modules.map((m) => ({
      title: m.title,
      lessons: m.lessons.map((l) => ({
        title: l.title,
        blocks: l.blocks.map((b) => ({
          type: b.type,
          content: b.content,
          imageUrl: b.imageUrl,
          videoUrl: b.videoUrl,
          audioUrl: b.audioUrl,
          deckId: b.deckId,
          data: (b.data ?? null) as Record<string, unknown> | null,
        })),
        exercises: l.exercises.map((e) => ({
          category: e.category,
          title: e.title,
          config: (e.config ?? null) as Record<string, unknown> | null,
          questions: e.questions.map((q) => ({
            kind: q.kind,
            data: q.data as Record<string, unknown>,
          })),
        })),
        hasLegacyContent: Boolean(l.content),
      })),
    })),
  };

  return runQualityChecks(input);
}
