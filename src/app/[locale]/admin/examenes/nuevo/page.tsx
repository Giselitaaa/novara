import type { Metadata } from "next";

import { NewExamForm } from "@/components/admin/exams/new-exam-form";
import { listCoursesForExamSelect } from "@/modules/exams/server/queries";

export const metadata: Metadata = { title: "Nuevo examen" };

export default async function NewExamPage() {
  const courses = await listCoursesForExamSelect();

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl tracking-tighter">Nuevo examen</h1>
      <NewExamForm courses={courses} />
    </div>
  );
}
