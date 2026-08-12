import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

import { requireSession } from "@/lib/require-session";
import { getCourseLearningData } from "@/modules/enrollments/server/learning-queries";

type Props = { params: Promise<{ slug: string }> };

/**
 * Punto de entrada "Continuar curso": redirige a la primera lección
 * sin completar (o a la primera de todas si el alumno acaba de
 * inscribirse). El estado real vive en `LessonProgress`, no aquí.
 */
export default async function LearnEntryPage({ params }: Props) {
  const { slug } = await params;
  const session = await requireSession();
  if (!session?.user?.id)
    redirect(`/auth/iniciar-sesion?callbackUrl=/cursos/${slug}/aprender`);

  const data = await getCourseLearningData(slug, session.user.id);
  if (!data || !data.enrolled) notFound();

  const nextLesson =
    data.lessons.find(
      (l) => !l.isLocked && data.progressByLessonId.get(l.id)?.status !== "completado"
    ) ?? data.lessons.find((l) => !l.isLocked);

  if (!nextLesson) notFound();

  redirect(`/cursos/${slug}/aprender/${nextLesson.id}` as never);
}
