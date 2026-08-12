"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { generateUniqueSlug } from "@/lib/slug";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";
import { courseImportSchema } from "@/modules/courses/server/import-schema";

function uniqueSlugForCourse(base: string) {
  return generateUniqueSlug(
    base,
    async (candidate) => !!(await db.course.findUnique({ where: { slug: candidate } })),
    "curso"
  );
}

export type SimpleActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

// ─── Curso: creación y campos generales ────────────────────────────

export async function createCourse(formData: FormData) {
  const session = await requireAdmin();
  const title = String(formData.get("title") ?? "").trim();
  if (!title) throw new Error("El título es obligatorio.");

  const [draftStatus, defaultAccessType] = await Promise.all([
    db.courseStatus.findUnique({ where: { key: "borrador" } }),
    db.accessType.findUnique({ where: { key: "gratis" } }),
  ]);
  if (!draftStatus || !defaultAccessType) throw new Error("Catálogos base sin sembrar.");

  const categoryId = String(formData.get("categoryId") ?? "");
  const levelId = String(formData.get("levelId") ?? "");
  const languageId = String(formData.get("languageId") ?? "");
  const authorId = String(formData.get("authorId") ?? "");

  const slug = await uniqueSlugForCourse(title);

  const course = await db.course.create({
    data: {
      title,
      slug,
      description: "",
      categoryId,
      levelId,
      languageId,
      authorId,
      statusId: draftStatus.id,
      accessTypeId: defaultAccessType.id,
    },
  });

  await logAdminAction(session.user.id, "courses.create", "Course", course.id, { title });
  revalidatePath("/admin/cursos");
  return course;
}

export async function updateCourseGeneral(courseId: string, formData: FormData) {
  await requireAdmin();

  await db.course.update({
    where: { id: courseId },
    data: {
      title: String(formData.get("title") ?? ""),
      subtitle: String(formData.get("subtitle") ?? "") || null,
      description: String(formData.get("description") ?? ""),
      categoryId: String(formData.get("categoryId") ?? ""),
      levelId: String(formData.get("levelId") ?? ""),
      languageId: String(formData.get("languageId") ?? ""),
      authorId: String(formData.get("authorId") ?? ""),
      durationMinutes: formData.get("durationMinutes")
        ? Number(formData.get("durationMinutes"))
        : null,
      coverImageUrl: String(formData.get("coverImageUrl") ?? "") || null,
      bannerImageUrl: String(formData.get("bannerImageUrl") ?? "") || null,
      updatedContentAt: new Date(),
    },
  });

  revalidatePath(`/admin/cursos/${courseId}`);
  return { status: "success" as const, message: "Información general guardada." };
}

export async function updateCourseSEO(courseId: string, formData: FormData) {
  await requireAdmin();

  await db.course.update({
    where: { id: courseId },
    data: {
      seoTitle: String(formData.get("seoTitle") ?? "") || null,
      seoDescription: String(formData.get("seoDescription") ?? "") || null,
      seoKeywords: String(formData.get("seoKeywords") ?? "") || null,
    },
  });

  revalidatePath(`/admin/cursos/${courseId}`);
  return { status: "success" as const, message: "SEO guardado." };
}

export async function updateCoursePricing(courseId: string, formData: FormData) {
  await requireAdmin();

  const accessTypeId = String(formData.get("accessTypeId") ?? "");
  const priceRaw = formData.get("price");
  const price = priceRaw ? Number(priceRaw) : null;

  await db.$transaction(async (tx) => {
    await tx.course.update({
      where: { id: courseId },
      data: { accessTypeId, price },
    });

    if (price !== null) {
      await tx.coursePriceHistory.create({
        data: { courseId, price, validFrom: new Date() },
      });
    }
  });

  revalidatePath(`/admin/cursos/${courseId}`);
  return { status: "success" as const, message: "Precio actualizado." };
}

const STATUS_ACTIONS: Record<string, string> = {
  borrador: "courses.set_draft",
  en_revision: "courses.submit_review",
  aprobado: "courses.approve",
  publicado: "courses.publish",
  archivado: "courses.archive",
};

export async function changeCourseStatus(courseId: string, statusKey: string) {
  const session = await requireAdmin();

  const status = await db.courseStatus.findUnique({ where: { key: statusKey } });
  if (!status) throw new Error("Estado no válido.");

  const course = await db.course.findUnique({ where: { id: courseId } });
  if (!course) throw new Error("Curso no encontrado.");

  await db.course.update({
    where: { id: courseId },
    data: {
      statusId: status.id,
      publishedAt:
        statusKey === "publicado" && !course.publishedAt
          ? new Date()
          : course.publishedAt,
    },
  });

  await logAdminAction(
    session.user.id,
    STATUS_ACTIONS[statusKey] ?? "courses.status_change",
    "Course",
    courseId,
    { newStatus: statusKey }
  );

  revalidatePath(`/admin/cursos/${courseId}`);
  revalidatePath("/admin/cursos");
  revalidatePath("/cursos");
  return { status: "success" as const, message: "Estado actualizado." };
}

export async function duplicateCourse(courseId: string) {
  const session = await requireAdmin();

  const original = await db.course.findUnique({
    where: { id: courseId },
    include: {
      objectives: true,
      requirements: true,
      modules: { include: { lessons: { include: { content: true, exercise: true } } } },
    },
  });
  if (!original) throw new Error("Curso no encontrado.");

  const draftStatus = await db.courseStatus.findUnique({ where: { key: "borrador" } });
  if (!draftStatus) throw new Error("Catálogos base sin sembrar.");

  const newSlug = await uniqueSlugForCourse(`${original.title}-copia`);

  const copy = await db.course.create({
    data: {
      title: `${original.title} (copia)`,
      slug: newSlug,
      subtitle: original.subtitle,
      description: original.description,
      categoryId: original.categoryId,
      levelId: original.levelId,
      languageId: original.languageId,
      authorId: original.authorId,
      accessTypeId: original.accessTypeId,
      price: original.price,
      durationMinutes: original.durationMinutes,
      statusId: draftStatus.id,
      objectives: {
        create: original.objectives.map((o) => ({
          text: o.text,
          sortOrder: o.sortOrder,
        })),
      },
      requirements: {
        create: original.requirements.map((r) => ({
          text: r.text,
          sortOrder: r.sortOrder,
        })),
      },
      modules: {
        create: original.modules.map((module) => ({
          title: module.title,
          description: module.description,
          sortOrder: module.sortOrder,
          lessons: {
            create: module.lessons.map((lesson) => ({
              title: lesson.title,
              contentTypeId: lesson.contentTypeId,
              sortOrder: lesson.sortOrder,
              durationSeconds: lesson.durationSeconds,
              isPreview: lesson.isPreview,
              content: lesson.content
                ? {
                    create: {
                      contentTypeId: lesson.content.contentTypeId,
                      body: lesson.content.body,
                      externalUrl: lesson.content.externalUrl,
                      metadata: lesson.content.metadata ?? undefined,
                    },
                  }
                : undefined,
              exercise: lesson.exercise
                ? { create: { instructions: lesson.exercise.instructions } }
                : undefined,
            })),
          },
        })),
      },
    },
  });

  await logAdminAction(session.user.id, "courses.duplicate", "Course", copy.id, {
    fromCourseId: courseId,
  });

  revalidatePath("/admin/cursos");
  return copy;
}

export async function deleteCourse(courseId: string) {
  const session = await requireAdmin();

  // Soft delete: nunca se borra un curso de verdad (podría tener
  // inscripciones, pagos y certificados históricos asociados).
  await db.course.update({ where: { id: courseId }, data: { deletedAt: new Date() } });

  await logAdminAction(session.user.id, "courses.delete", "Course", courseId);
  revalidatePath("/admin/cursos");
  return { status: "success" as const, message: "Curso eliminado." };
}

// ─── Objetivos y requisitos ─────────────────────────────────────────

export async function addObjective(courseId: string, text: string) {
  await requireAdmin();
  const count = await db.courseObjective.count({ where: { courseId } });
  await db.courseObjective.create({ data: { courseId, text, sortOrder: count } });
  revalidatePath(`/admin/cursos/${courseId}`);
}

export async function deleteObjective(id: string, courseId: string) {
  await requireAdmin();
  await db.courseObjective.delete({ where: { id } });
  revalidatePath(`/admin/cursos/${courseId}`);
}

export async function addRequirement(courseId: string, text: string) {
  await requireAdmin();
  const count = await db.courseRequirement.count({ where: { courseId } });
  await db.courseRequirement.create({ data: { courseId, text, sortOrder: count } });
  revalidatePath(`/admin/cursos/${courseId}`);
}

export async function deleteRequirement(id: string, courseId: string) {
  await requireAdmin();
  await db.courseRequirement.delete({ where: { id } });
  revalidatePath(`/admin/cursos/${courseId}`);
}

// ─── Módulos ─────────────────────────────────────────────────────────

export async function addModule(courseId: string, title: string) {
  await requireAdmin();
  const count = await db.module.count({ where: { courseId } });
  const createdModule = await db.module.create({
    data: { courseId, title, sortOrder: count },
  });
  revalidatePath(`/admin/cursos/${courseId}`);
  return createdModule;
}

export async function updateModule(
  moduleId: string,
  courseId: string,
  data: { title: string; description?: string }
) {
  await requireAdmin();
  await db.module.update({
    where: { id: moduleId },
    data: { title: data.title, description: data.description || null },
  });
  revalidatePath(`/admin/cursos/${courseId}`);
}

export async function deleteModule(moduleId: string, courseId: string) {
  await requireAdmin();
  await db.module.delete({ where: { id: moduleId } });
  revalidatePath(`/admin/cursos/${courseId}`);
}

export async function moveModule(
  courseId: string,
  moduleId: string,
  direction: "up" | "down"
) {
  await requireAdmin();
  const modules = await db.module.findMany({
    where: { courseId },
    orderBy: { sortOrder: "asc" },
  });
  const index = modules.findIndex((m) => m.id === moduleId);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || swapWith < 0 || swapWith >= modules.length) return;

  const a = modules[index]!;
  const b = modules[swapWith]!;
  await db.$transaction([
    db.module.update({ where: { id: a.id }, data: { sortOrder: b.sortOrder } }),
    db.module.update({ where: { id: b.id }, data: { sortOrder: a.sortOrder } }),
  ]);
  revalidatePath(`/admin/cursos/${courseId}`);
}

// ─── Lecciones ───────────────────────────────────────────────────────

export async function addLesson(
  moduleId: string,
  courseId: string,
  data: { title: string; contentTypeId: string }
) {
  await requireAdmin();
  const count = await db.lesson.count({ where: { moduleId } });
  await db.lesson.create({
    data: {
      moduleId,
      title: data.title,
      contentTypeId: data.contentTypeId,
      sortOrder: count,
    },
  });
  revalidatePath(`/admin/cursos/${courseId}`);
}

export async function updateLesson(
  lessonId: string,
  courseId: string,
  data: {
    title: string;
    isPreview: boolean;
    durationSeconds?: number;
    body?: string;
    externalUrl?: string;
  }
) {
  await requireAdmin();

  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    include: { contentType: true },
  });
  if (!lesson) throw new Error("Lección no encontrada.");

  const isExercise = lesson.contentType.key === "ejercicio";

  await db.$transaction([
    db.lesson.update({
      where: { id: lessonId },
      data: {
        title: data.title,
        isPreview: data.isPreview,
        durationSeconds: data.durationSeconds ?? null,
      },
    }),
    // Las lecciones tipo "ejercicio" guardan sus instrucciones en
    // `LessonExercise` (que es lo que lee el reproductor del alumno),
    // no en `LessonContent.body` — antes de esta corrección quedaban
    // desconectadas entre el editor y el reproductor.
    isExercise
      ? db.lessonExercise.upsert({
          where: { lessonId },
          create: { lessonId, instructions: data.body || "" },
          update: { instructions: data.body || "" },
        })
      : db.lessonContent.upsert({
          where: { lessonId },
          create: {
            lessonId,
            contentTypeId: lesson.contentTypeId,
            body: data.body || null,
            externalUrl: data.externalUrl || null,
          },
          update: {
            body: data.body || null,
            externalUrl: data.externalUrl || null,
          },
        }),
  ]);

  revalidatePath(`/admin/cursos/${courseId}`);
  return { status: "success" as const, message: "Lección guardada." };
}

export async function deleteLesson(lessonId: string, courseId: string) {
  await requireAdmin();
  await db.lesson.delete({ where: { id: lessonId } });
  revalidatePath(`/admin/cursos/${courseId}`);
}

export async function moveLesson(
  moduleId: string,
  courseId: string,
  lessonId: string,
  direction: "up" | "down"
) {
  await requireAdmin();
  const lessons = await db.lesson.findMany({
    where: { moduleId },
    orderBy: { sortOrder: "asc" },
  });
  const index = lessons.findIndex((l) => l.id === lessonId);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || swapWith < 0 || swapWith >= lessons.length) return;

  const a = lessons[index]!;
  const b = lessons[swapWith]!;
  await db.$transaction([
    db.lesson.update({ where: { id: a.id }, data: { sortOrder: b.sortOrder } }),
    db.lesson.update({ where: { id: b.id }, data: { sortOrder: a.sortOrder } }),
  ]);
  revalidatePath(`/admin/cursos/${courseId}`);
}

// ─── Recursos ────────────────────────────────────────────────────────

export async function createAndAttachResource(
  courseId: string,
  data: { title: string; fileUrl: string; resourceTypeId: string }
) {
  const session = await requireAdmin();
  const resource = await db.resource.create({
    data: { ...data, uploadedById: session.user.id },
  });
  await db.courseResource.create({ data: { courseId, resourceId: resource.id } });
  revalidatePath(`/admin/cursos/${courseId}`);
}

export async function attachExistingResource(courseId: string, resourceId: string) {
  await requireAdmin();
  await db.courseResource.upsert({
    where: { courseId_resourceId: { courseId, resourceId } },
    create: { courseId, resourceId },
    update: {},
  });
  revalidatePath(`/admin/cursos/${courseId}`);
}

export async function detachResource(courseId: string, resourceId: string) {
  await requireAdmin();
  await db.courseResource.delete({
    where: { courseId_resourceId: { courseId, resourceId } },
  });
  revalidatePath(`/admin/cursos/${courseId}`);
}

// ─── Creación asistida por IA ────────────────────────────────────────

type AIGeneratedStructure = {
  title: string;
  subtitle: string;
  description: string;
  objectives: string[];
  requirements: string[];
  modules: { title: string; description: string; lessons: string[] }[];
};

/**
 * Crea un curso completo (borrador) a partir de una estructura ya
 * generada y REVISADA por el administrador en el asistente de IA.
 * Nunca se llama directamente desde la generación — siempre pasa por
 * la pantalla de revisión, tal como exige esta fase ("todo editable
 * antes de publicarse"). El curso nace en estado "borrador", igual
 * que uno creado a mano.
 */
export async function createCourseFromAIStructure(
  structure: AIGeneratedStructure,
  categoryId: string,
  levelId: string,
  languageId: string,
  authorId: string
) {
  const session = await requireAdmin();

  const [draftStatus, defaultAccessType, textContentType] = await Promise.all([
    db.courseStatus.findUnique({ where: { key: "borrador" } }),
    db.accessType.findUnique({ where: { key: "gratis" } }),
    db.contentType.findUnique({ where: { key: "texto" } }),
  ]);
  if (!draftStatus || !defaultAccessType || !textContentType) {
    throw new Error("Catálogos base sin sembrar.");
  }

  const slug = await uniqueSlugForCourse(structure.title);

  const course = await db.course.create({
    data: {
      title: structure.title,
      subtitle: structure.subtitle,
      slug,
      description: structure.description,
      categoryId,
      levelId,
      languageId,
      authorId,
      statusId: draftStatus.id,
      accessTypeId: defaultAccessType.id,
      objectives: {
        create: structure.objectives.map((text, i) => ({ text, sortOrder: i })),
      },
      requirements: {
        create: structure.requirements.map((text, i) => ({ text, sortOrder: i })),
      },
      modules: {
        create: structure.modules.map((module, mi) => ({
          title: module.title,
          description: module.description,
          sortOrder: mi,
          lessons: {
            create: module.lessons.map((title, li) => ({
              title,
              contentTypeId: textContentType.id,
              sortOrder: li,
            })),
          },
        })),
      },
    },
  });

  await logAdminAction(session.user.id, "courses.create_ai", "Course", course.id, {
    title: structure.title,
    source: "ai_assistant",
  });

  revalidatePath("/admin/cursos");
  return course;
}

// ─── Estándar NOVARA de lección: pedagogía completa ──────────────────

export async function updateLessonPedagogy(
  lessonId: string,
  courseId: string,
  data: {
    objective?: string;
    examples?: string[];
    commonMistakes?: string[];
    visualSchemaUrl?: string;
    mindMapUrl?: string;
    summary?: string;
    reviewPrompts?: string[];
  }
) {
  await requireAdmin();

  await db.lessonPedagogy.upsert({
    where: { lessonId },
    create: {
      lessonId,
      objective: data.objective || null,
      examples: data.examples?.length ? data.examples : undefined,
      commonMistakes: data.commonMistakes?.length ? data.commonMistakes : undefined,
      visualSchemaUrl: data.visualSchemaUrl || null,
      mindMapUrl: data.mindMapUrl || null,
      summary: data.summary || null,
      reviewPrompts: data.reviewPrompts?.length ? data.reviewPrompts : undefined,
    },
    update: {
      objective: data.objective || null,
      examples: data.examples?.length ? data.examples : undefined,
      commonMistakes: data.commonMistakes?.length ? data.commonMistakes : undefined,
      visualSchemaUrl: data.visualSchemaUrl || null,
      mindMapUrl: data.mindMapUrl || null,
      summary: data.summary || null,
      reviewPrompts: data.reviewPrompts?.length ? data.reviewPrompts : undefined,
    },
  });

  revalidatePath(`/admin/cursos/${courseId}`);
  return { status: "success" as const, message: "Pedagogía de la lección guardada." };
}

// ─── Test de módulo (desbloqueo por nota mínima) ─────────────────────

export async function createModuleTest(
  moduleId: string,
  courseId: string,
  formData: FormData
) {
  const session = await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const passingScore = Number(formData.get("passingScore") ?? 70);
  if (!title) throw new Error("El título del test es obligatorio.");

  const exam = await db.exam.create({
    data: { title, moduleId, courseId, passingScore },
  });

  await logAdminAction(session.user.id, "modules.create_test", "Exam", exam.id, {
    moduleId,
  });
  revalidatePath(`/admin/cursos/${courseId}`);
  return exam;
}

export async function deleteModuleTest(examId: string, courseId: string) {
  await requireAdmin();
  await db.exam.delete({ where: { id: examId } });
  revalidatePath(`/admin/cursos/${courseId}`);
}

// ─── Proyecto final del curso ────────────────────────────────────────

export async function upsertFinalProject(courseId: string, formData: FormData) {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const instructions = String(formData.get("instructions") ?? "").trim();
  if (!title || !instructions)
    throw new Error("Título e instrucciones son obligatorios.");

  await db.courseFinalProject.upsert({
    where: { courseId },
    create: { courseId, title, instructions },
    update: { title, instructions },
  });

  revalidatePath(`/admin/cursos/${courseId}`);
  return { status: "success" as const, message: "Proyecto final guardado." };
}

export async function deleteFinalProject(courseId: string) {
  await requireAdmin();
  await db.courseFinalProject.delete({ where: { courseId } }).catch(() => null);
  revalidatePath(`/admin/cursos/${courseId}`);
}

// ─── Importación de cursos completos por JSON ────────────────────────

/**
 * Crea un curso completo (borrador) a partir de un JSON que cumple
 * `courseImportSchema` — objetivos, requisitos, módulos, lecciones
 * con su contenido y pedagogía completa, tests de módulo y proyecto
 * final, todo en una sola operación. Es el mecanismo pensado para
 * añadir cursos completos en el futuro sin tocar código: cualquier
 * herramienta externa (o una persona escribiendo el JSON a mano) que
 * respete ese esquema puede generar un curso real en NOVARA.
 *
 * El curso siempre nace en "borrador", igual que el resto de vías de
 * creación — importar no salta la revisión editorial.
 */
export async function importCourseFromJSON(
  rawJson: string,
  categoryId: string,
  levelId: string,
  languageId: string,
  authorId: string
) {
  const session = await requireAdmin();

  let parsedInput: unknown;
  try {
    parsedInput = JSON.parse(rawJson);
  } catch {
    throw new Error("El JSON no es válido. Revisa la sintaxis.");
  }

  const parsed = courseImportSchema.safeParse(parsedInput);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    throw new Error(
      `El JSON no cumple el formato esperado (${firstIssue?.path.join(".")}: ${firstIssue?.message}).`
    );
  }
  const data = parsed.data;

  const [draftStatus, defaultAccessType, contentTypes] = await Promise.all([
    db.courseStatus.findUnique({ where: { key: "borrador" } }),
    db.accessType.findUnique({ where: { key: "gratis" } }),
    db.contentType.findMany(),
  ]);
  if (!draftStatus || !defaultAccessType) throw new Error("Catálogos base sin sembrar.");
  const contentTypeIdByKey = new Map(contentTypes.map((ct) => [ct.key, ct.id]));

  const slug = await uniqueSlugForCourse(data.title);

  const course = await db.course.create({
    data: {
      title: data.title,
      subtitle: data.subtitle || null,
      slug,
      description: data.description,
      categoryId,
      levelId,
      languageId,
      authorId,
      statusId: draftStatus.id,
      accessTypeId: defaultAccessType.id,
      objectives: { create: data.objectives.map((text, i) => ({ text, sortOrder: i })) },
      requirements: {
        create: data.requirements.map((text, i) => ({ text, sortOrder: i })),
      },
    },
  });

  for (const [moduleIndex, moduleData] of data.modules.entries()) {
    const createdModule = await db.module.create({
      data: {
        courseId: course.id,
        title: moduleData.title,
        description: moduleData.description || null,
        sortOrder: moduleIndex,
      },
    });

    if (moduleData.test) {
      await db.exam.create({
        data: {
          moduleId: createdModule.id,
          courseId: course.id,
          title: moduleData.test.title,
          passingScore: moduleData.test.passingScore,
        },
      });
    }

    for (const [lessonIndex, lessonData] of moduleData.lessons.entries()) {
      const contentTypeId =
        contentTypeIdByKey.get(lessonData.contentTypeKey) ??
        contentTypeIdByKey.get("texto");
      if (!contentTypeId) continue;

      const lesson = await db.lesson.create({
        data: {
          moduleId: createdModule.id,
          title: lessonData.title,
          contentTypeId,
          sortOrder: lessonIndex,
          durationSeconds: lessonData.durationSeconds ?? null,
          isPreview: lessonData.isPreview ?? false,
        },
      });

      if (lessonData.contentTypeKey === "ejercicio" && lessonData.exerciseInstructions) {
        await db.lessonExercise.create({
          data: { lessonId: lesson.id, instructions: lessonData.exerciseInstructions },
        });
      } else if (lessonData.body || lessonData.externalUrl) {
        await db.lessonContent.create({
          data: {
            lessonId: lesson.id,
            contentTypeId,
            body: lessonData.body || null,
            externalUrl: lessonData.externalUrl || null,
          },
        });
      }

      if (lessonData.pedagogy) {
        await db.lessonPedagogy.create({
          data: {
            lessonId: lesson.id,
            objective: lessonData.pedagogy.objective || null,
            examples: lessonData.pedagogy.examples?.length
              ? lessonData.pedagogy.examples
              : undefined,
            commonMistakes: lessonData.pedagogy.commonMistakes?.length
              ? lessonData.pedagogy.commonMistakes
              : undefined,
            visualSchemaUrl: lessonData.pedagogy.visualSchemaUrl || null,
            mindMapUrl: lessonData.pedagogy.mindMapUrl || null,
            summary: lessonData.pedagogy.summary || null,
            reviewPrompts: lessonData.pedagogy.reviewPrompts?.length
              ? lessonData.pedagogy.reviewPrompts
              : undefined,
          },
        });
      }
    }
  }

  if (data.finalProject) {
    await db.courseFinalProject.create({
      data: {
        courseId: course.id,
        title: data.finalProject.title,
        instructions: data.finalProject.instructions,
      },
    });
  }

  await logAdminAction(session.user.id, "courses.import_json", "Course", course.id, {
    title: data.title,
    moduleCount: data.modules.length,
  });

  revalidatePath("/admin/cursos");
  return course;
}
