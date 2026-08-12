import { CheckCircle2, ListChecks, Star } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { after } from "next/server";

import { CourseCurriculum } from "@/components/catalog/course-curriculum";
import { CourseHero } from "@/components/catalog/course-hero";
import { CourseQuestionForm } from "@/components/catalog/course-question-form";
import { CourseQuestions } from "@/components/catalog/course-questions";
import { CourseReviewForm } from "@/components/catalog/course-review-form";
import { CourseSidebar } from "@/components/catalog/course-sidebar";
import { Container } from "@/components/layout/container";
import { CourseCard } from "@/components/marketing/course-card";
import { JsonLd } from "@/lib/json-ld";
import { requireSession } from "@/lib/require-session";
import { buildCourseSchema } from "@/lib/seo";
import { logProductEvent } from "@/modules/analytics/server/events";
import {
  getCourseBySlug,
  getEnrollmentStatus,
  getRelatedCourses,
} from "@/modules/courses/server/queries";
import {
  getMyReview,
  getPublishedReviews,
} from "@/modules/courses/server/review-queries";
import { isCourseFavorited } from "@/modules/courses/server/student-actions";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.subtitle || course.description.slice(0, 155),
    alternates: { canonical: `/cursos/${course.slug}` },
    openGraph: {
      type: "website",
      title: course.title,
      description: course.subtitle || undefined,
      url: `/cursos/${course.slug}`,
      images: course.bannerImageUrl ? [course.bannerImageUrl] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.subtitle || undefined,
      images: course.bannerImageUrl ? [course.bannerImageUrl] : undefined,
    },
  };
}

/**
 * Nota honesta sobre esta página: usa `auth()` (sesión, estado de
 * inscripción/favorito, vista previa de admin), así que Next.js la
 * renderiza dinámicamente en cada petición pese a este `revalidate` —
 * no hay ISR real aquí mientras dependa de datos por usuario. Se deja
 * declarado para el día que esa parte personalizada se mueva a un
 * componente cliente separado y el resto de la página sí pueda
 * cachearse.
 */
export const revalidate = 300;

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const session = await requireSession();
  const isAdmin = session?.user?.roles?.includes("administrador") ?? false;

  const course = await getCourseBySlug(slug, { allowUnpublished: isAdmin });
  if (!course) notFound();
  const [enrollment, relatedCourses, isFavorite, reviews, myReview] = await Promise.all([
    getEnrollmentStatus(session?.user?.id, course.id),
    getRelatedCourses(course.id, course.categorySlug),
    isCourseFavorited(session?.user?.id, course.id),
    getPublishedReviews(course.id),
    session?.user?.id ? getMyReview(session.user.id, course.id) : Promise.resolve(null),
  ]);

  // Evento de producto "curso visto" — registrado DESPUÉS de responder
  // (no añade latencia) y solo para alumnos identificados.
  if (session?.user?.id) {
    const uid = session.user.id;
    after(() =>
      logProductEvent({
        userId: uid,
        eventType: "curso_visto",
        description: `Vio el curso «${course.title}»`,
        relatedEntityType: "Course",
        relatedEntityId: course.id,
      })
    );
  }

  return (
    <>
      {isAdmin && course.statusKey !== "publicado" && (
        <div className="bg-gold/15 py-2 text-center text-sm font-medium text-gold-foreground dark:text-gold">
          Vista previa de administrador — este curso todavía no está publicado (
          {course.statusKey}).
        </div>
      )}
      <CourseHero course={course} />
      <JsonLd data={buildCourseSchema(course)} />

      <Container className="grid grid-cols-1 gap-12 py-10 sm:py-14 lg:grid-cols-[1fr_360px]">
        <div className="flex flex-col gap-12">
          <section>
            <h2 className="mb-4 font-display text-2xl tracking-tighter">
              Sobre este curso
            </h2>
            <p className="max-w-3xl whitespace-pre-line leading-relaxed text-foreground/90">
              {course.description}
            </p>
          </section>

          {course.objectives.length > 0 && (
            <section>
              <h2 className="mb-4 flex items-center gap-2 font-display text-2xl tracking-tighter">
                <CheckCircle2 className="size-5 text-gold" /> Qué vas a aprender
              </h2>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {course.objectives.map((objective, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                    {objective}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {course.requirements.length > 0 && (
            <section>
              <h2 className="mb-4 flex items-center gap-2 font-display text-2xl tracking-tighter">
                <ListChecks className="size-5 text-gold" /> Requisitos
              </h2>
              <ul className="flex flex-col gap-2">
                {course.requirements.map((requirement, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/90">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="mb-4 font-display text-2xl tracking-tighter">
              Contenido del curso
            </h2>
            <CourseCurriculum modules={course.modules} />
          </section>

          <section>
            <div className="mb-4 flex items-center gap-2">
              <h2 className="font-display text-2xl tracking-tighter">Reseñas</h2>
              {course.ratingCount > 0 && (
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="size-4 fill-gold text-gold" />
                  {course.ratingAverage.toFixed(1)} · {course.ratingCount} reseña
                  {course.ratingCount === 1 ? "" : "s"}
                </span>
              )}
            </div>

            {enrollment.enrolled && (
              <div className="mb-6">
                <CourseReviewForm
                  courseId={course.id}
                  initialRating={myReview?.rating}
                  initialComment={myReview?.comment}
                  statusLabel={myReview?.statusLabel}
                />
              </div>
            )}

            {reviews.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Este curso todavía no tiene reseñas publicadas.
              </p>
            ) : (
              <div className="flex flex-col gap-5">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-border pb-5 last:border-0"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium">{review.authorName}</p>
                      <span className="font-mono text-xs text-gold" aria-hidden>
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </span>
                    </div>
                    {review.comment && (
                      <p className="mt-1.5 text-sm text-foreground/90">
                        {review.comment}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl tracking-tighter">
              Preguntas sobre el curso
            </h2>
            {enrollment.enrolled && <CourseQuestionForm courseId={course.id} />}
            <CourseQuestions questions={course.questions} />
          </section>
        </div>

        <aside>
          <CourseSidebar
            course={course}
            enrollment={enrollment}
            initialIsFavorite={isFavorite}
          />
        </aside>
      </Container>

      {relatedCourses.length > 0 && (
        <Container className="border-t border-border py-14">
          <h2 className="mb-8 font-display text-2xl tracking-tighter">
            Cursos relacionados
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {relatedCourses.map((related) => (
              <CourseCard key={related.id} course={related} />
            ))}
          </div>
        </Container>
      )}
    </>
  );
}
