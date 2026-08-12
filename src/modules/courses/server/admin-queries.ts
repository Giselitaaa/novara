import "server-only";

import { db } from "@/lib/db";

export async function listAllCoursesAdmin(params: {
  search?: string;
  statusKey?: string;
  page: number;
}) {
  const pageSize = 20;
  const where = {
    deletedAt: null,
    ...(params.search
      ? { title: { contains: params.search, mode: "insensitive" as const } }
      : {}),
    ...(params.statusKey ? { status: { key: params.statusKey } } : {}),
  };

  const [courses, total] = await Promise.all([
    db.course.findMany({
      where,
      include: {
        status: true,
        category: { select: { name: true } },
        accessType: true,
        _count: { select: { enrollments: true } },
      },
      orderBy: { updatedAt: "desc" },
      skip: (params.page - 1) * pageSize,
      take: pageSize,
    }),
    db.course.count({ where }),
  ]);

  return { courses, total, totalPages: Math.max(1, Math.ceil(total / pageSize)) };
}

export async function getCourseForEdit(id: string) {
  return db.course.findUnique({
    where: { id },
    include: {
      status: true,
      category: true,
      level: true,
      language: true,
      accessType: true,
      author: true,
      objectives: { orderBy: { sortOrder: "asc" } },
      requirements: { orderBy: { sortOrder: "asc" } },
      resources: { include: { resource: { include: { resourceType: true } } } },
      modules: {
        orderBy: { sortOrder: "asc" },
        include: {
          exams: true,
          lessons: {
            orderBy: { sortOrder: "asc" },
            include: { contentType: true, content: true, exercise: true, pedagogy: true },
          },
        },
      },
      finalProject: true,
    },
  });
}

export async function listCatalogOptions() {
  const [
    categories,
    levels,
    languages,
    accessTypes,
    statuses,
    authors,
    resourceTypes,
    contentTypes,
  ] = await Promise.all([
    db.category.findMany({ orderBy: { name: "asc" } }),
    db.courseLevel.findMany({ orderBy: { label: "asc" } }),
    db.language.findMany({ orderBy: { name: "asc" } }),
    db.accessType.findMany(),
    db.courseStatus.findMany(),
    db.author.findMany({ orderBy: { displayName: "asc" } }),
    db.resourceType.findMany(),
    db.contentType.findMany(),
  ]);

  return {
    categories,
    levels,
    languages,
    accessTypes,
    statuses,
    authors,
    resourceTypes,
    contentTypes,
  };
}

export async function listAllResources(search?: string) {
  return db.resource.findMany({
    where: search ? { title: { contains: search, mode: "insensitive" } } : undefined,
    include: { resourceType: true },
    orderBy: { createdAt: "desc" },
    take: 50,
  });
}
