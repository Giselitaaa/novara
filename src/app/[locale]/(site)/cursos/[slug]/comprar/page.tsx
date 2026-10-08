import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

import { CheckoutFlow } from "@/components/checkout/checkout-flow";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { requireSession } from "@/lib/require-session";
import { getCourseBySlug } from "@/modules/courses/server/queries";
import { getActivePaymentForUserCourse } from "@/modules/payments/server/queries";

type Props = { params: Promise<{ slug: string }> };

// Existencia comprobada aquí (no solo en el cuerpo de la página): esta
// página no tiene `loading.tsx` propio, pero hereda el límite <Suspense>
// del `loading.tsx` de `cursos/[slug]/`, que ya fija el 200 antes de que
// el cuerpo resuelva y llame a notFound(). generateMetadata se resuelve
// antes de ese streaming, así que aquí notFound() sí produce un 404 real.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course || course.accessType !== "premium") notFound();
  return { title: "Comprar curso", robots: { index: false, follow: false } };
}

export default async function CheckoutPage({ params }: Props) {
  const { slug } = await params;
  const session = await requireSession();
  if (!session?.user?.id) {
    redirect(`/auth/iniciar-sesion?callbackUrl=/cursos/${slug}/comprar`);
  }

  const course = await getCourseBySlug(slug);
  if (!course || course.accessType !== "premium") notFound();

  const existingPayment = await getActivePaymentForUserCourse(session.user.id, course.id);

  return (
    <Container className="max-w-xl py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: "Cursos", href: "/cursos" },
          { label: course.title, href: `/cursos/${course.slug}` },
          { label: "Comprar" },
        ]}
      />

      <h1 className="mb-8 mt-6 font-display text-2xl tracking-tighter sm:text-3xl">
        Comprar «{course.title}»
      </h1>

      <CheckoutFlow
        courseId={course.id}
        courseTitle={course.title}
        price={course.price ?? 0}
        existingPayment={existingPayment}
        cardEnabled={Boolean(process.env.STRIPE_SECRET_KEY)}
      />
    </Container>
  );
}
