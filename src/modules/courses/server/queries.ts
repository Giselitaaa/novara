import "server-only";

import type { Prisma } from "@prisma/client";

import { db } from "@/lib/db";
import { DEFAULT_PAGE_SIZE, type CourseFilters } from "@/modules/courses/shared/filters";
import type { CourseCardDTO, CourseDetailDTO } from "@/modules/courses/types/course-dto";

/**
 * Capa de consultas del catálogo de cursos. Única puerta de entrada a
 * `db.course.*` para código de presentación — así el filtro "solo
 * cursos publicados" no depende de que cada page se acuerde de
 * aplicarlo. Nada en este archivo inventa datos: si el catálogo está
 * vacío, se devuelve una lista vacía, no un array de relleno.
 */

const PUBLISHED_FILTER = { status: { key: "publicado" } } as const;

function toCourseCardDTO(course: {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  durationMinutes: number | null;
  price: Prisma.Decimal | null;
  category: { name: string; slug: string };
  level: { label: string };
  accessType: { key: string };
}): CourseCardDTO {
  return {
    id: course.id,
    slug: course.slug,
    title: course.title,
    subtitle: course.subtitle ?? "",
    categoryName: course.category.name,
    categorySlug: course.category.slug,
    levelLabel: course.level.label,
    durationMinutes: course.durationMinutes,
    accessType: course.accessType.key === "premium" ? "premium" : "gratis",
    price: course.price ? Number(course.price) : null,
  };
}

const cardInclude = {
  category: { select: { name: true, slug: true } },
  level: { select: { label: true } },
  accessType: { select: { key: true } },
} satisfies Prisma.CourseInclude;

function buildWhere(filters: CourseFilters): Prisma.CourseWhereInput {
  const where: Prisma.CourseWhereInput = { ...PUBLISHED_FILTER };

  if (filters.search) {
    where.OR = [
      { title: { contains: filters.search, mode: "insensitive" } },
      { subtitle: { contains: filters.search, mode: "insensitive" } },
      { description: { contains: filters.search, mode: "insensitive" } },
    ];
  }
  if (filters.categorySlug) {
    where.category = { slug: filters.categorySlug };
  }
  if (filters.levelKey) {
    where.level = { key: filters.levelKey };
  }
  if (filters.accessType) {
    where.accessType = { key: filters.accessType };
  }

  return where;
}

function buildOrderBy(
  sort: CourseFilters["sort"]
): Prisma.CourseOrderByWithRelationInput {
  switch (sort) {
    case "duracion_asc":
      return { durationMinutes: "asc" };
    case "duracion_desc":
      return { durationMinutes: "desc" };
    case "titulo_asc":
      return { title: "asc" };
    case "recientes":
    default:
      return { publishedAt: "desc" };
  }
}

export async function listCourses(filters: CourseFilters) {
  const where = buildWhere(filters);
  const pageSize = DEFAULT_PAGE_SIZE;
  const skip = (filters.page - 1) * pageSize;

  const [courses, total] = await Promise.all([
    db.course.findMany({
      where,
      include: cardInclude,
      orderBy: buildOrderBy(filters.sort),
      skip,
      take: pageSize,
    }),
    db.course.count({ where }),
  ]);

  return {
    courses: courses.map(toCourseCardDTO),
    total,
    page: filters.page,
    pageSize,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}

export async function getFeaturedCourses(limit = 4) {
  const courses = await db.course.findMany({
    where: PUBLISHED_FILTER,
    include: cardInclude,
    orderBy: { publishedAt: "desc" },
    take: limit,
  });
  return courses.map(toCourseCardDTO);
}

export async function getCourseBySlug(
  slug: string,
  options?: { allowUnpublished?: boolean }
): Promise<CourseDetailDTO | null> {
  const course = await db.course.findFirst({
    where: options?.allowUnpublished ? { slug } : { slug, ...PUBLISHED_FILTER },
    include: {
      ...cardInclude,
      author: { select: { displayName: true } },
      language: { select: { name: true } },
      status: { select: { key: true } },
      objectives: { orderBy: { sortOrder: "asc" } },
      requirements: { orderBy: { sortOrder: "asc" } },
      resources: {
        include: { resource: { include: { resourceType: true } } },
      },
      modules: {
        orderBy: { sortOrder: "asc" },
        include: {
          lessons: {
            orderBy: { sortOrder: "asc" },
            include: { contentType: { select: { key: true } } },
          },
        },
      },
      courseQuestions: {
        orderBy: { createdAt: "desc" },
        take: 10,
        include: {
          user: { include: { profile: true } },
          answers: {
            orderBy: { createdAt: "asc" },
            include: { user: { include: { profile: true } } },
          },
        },
      },
    },
  });

  if (!course) return null;

  const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);

  return {
    ...toCourseCardDTO(course),
    description: course.description,
    bannerImageUrl: course.bannerImageUrl,
    authorName: course.author.displayName,
    languageName: course.language.name,
    statusKey: course.status.key,
    ratingAverage: Number(course.ratingAverage),
    ratingCount: course.ratingCount,
    updatedContentAt: course.updatedContentAt,
    objectives: course.objectives.map((o) => o.text),
    requirements: course.requirements.map((r) => r.text),
    totalLessons,
    modules: course.modules.map((module) => ({
      id: module.id,
      title: module.title,
      description: module.description,
      lessons: module.lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        contentTypeKey: lesson.contentType.key,
        durationSeconds: lesson.durationSeconds,
        isPreview: lesson.isPreview,
      })),
    })),
    resources: course.resources.map((r) => ({
      id: r.resource.id,
      title: r.resource.title,
      resourceTypeLabel: r.resource.resourceType.label,
    })),
    questions: course.courseQuestions.map((q) => ({
      id: q.id,
      body: q.body,
      createdAt: q.createdAt,
      authorName: q.user.profile
        ? `${q.user.profile.firstName} ${q.user.profile.lastName[0]}.`
        : "Alumno de NOVARA",
      answers: q.answers.map((a) => ({
        id: a.id,
        body: a.body,
        createdAt: a.createdAt,
        authorName: a.user.profile ? a.user.profile.firstName : "NOVARA",
      })),
    })),
  };
}

export async function getRelatedCourses(
  courseId: string,
  categorySlug: string,
  limit = 3
) {
  const courses = await db.course.findMany({
    where: {
      ...PUBLISHED_FILTER,
      category: { slug: categorySlug },
      id: { not: courseId },
    },
    include: cardInclude,
    orderBy: { publishedAt: "desc" },
    take: limit,
  });
  return courses.map(toCourseCardDTO);
}

export async function listCourseLevels() {
  return db.courseLevel.findMany({ orderBy: { label: "asc" } });
}

export async function getEnrollmentStatus(userId: string | undefined, courseId: string) {
  if (!userId) return { enrolled: false as const };

  const enrollment = await db.enrollment.findUnique({
    where: { userId_courseId: { userId, courseId } },
  });
  if (!enrollment) return { enrolled: false as const };

  const progress = await db.courseProgressSummary.findUnique({
    where: { userId_courseId: { userId, courseId } },
  });

  return {
    enrolled: true as const,
    percentComplete: progress ? Number(progress.percentComplete) : 0,
  };
}
