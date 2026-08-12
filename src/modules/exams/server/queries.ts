import "server-only";

import { db } from "@/lib/db";

export async function listQuestions(search?: string) {
  return db.question.findMany({
    where: search ? { statement: { contains: search, mode: "insensitive" } } : undefined,
    include: { questionType: true, category: true, options: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  });
}

export async function getQuestionById(id: string) {
  return db.question.findUnique({
    where: { id },
    include: { questionType: true, options: { orderBy: { sortOrder: "asc" } } },
  });
}

export async function listExams() {
  return db.exam.findMany({
    include: {
      course: { select: { title: true } },
      _count: { select: { questions: true, attempts: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getExamForEdit(id: string) {
  return db.exam.findUnique({
    where: { id },
    include: {
      course: { select: { title: true } },
      questions: {
        orderBy: { sortOrder: "asc" },
        include: { question: { include: { questionType: true } } },
      },
    },
  });
}

export async function listQuestionTypes() {
  return db.questionType.findMany();
}

export async function listCoursesForExamSelect() {
  return db.course.findMany({
    where: { deletedAt: null },
    select: { id: true, title: true },
    orderBy: { title: "asc" },
  });
}
