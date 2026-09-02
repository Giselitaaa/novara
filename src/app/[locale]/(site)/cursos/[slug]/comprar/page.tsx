import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

import { CheckoutFlow } from "@/components/checkout/checkout-flow";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { requireSession } from "@/lib/require-session";
import { getCourseBySlug } from "@/modules/courses/server/queries";
import {
  getActivePaymentForUserCourse,
  getPaymentInstructions,
} from "@/modules/payments/server/queries";

export const metadata: Metadata = { title: "Comprar curso" };

type Props = { params: Promise<{ slug: string }> };

export default async function CheckoutPage({ params }: Props) {
  const { slug } = await params;
  const session = await requireSession();
  if (!session?.user?.id) {
    redirect(`/auth/iniciar-sesion?callbackUrl=/cursos/${slug}/comprar`);
  }

  const course = await getCourseBySlug(slug);
  if (!course || course.accessType !== "premium") notFound();

  const [existingPayment, instructions] = await Promise.all([
    getActivePaymentForUserCourse(session.user.id, course.id),
    getPaymentInstructions(),
  ]);

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
        instructions={instructions}
        existingPayment={existingPayment}
        cardEnabled={Boolean(process.env.STRIPE_SECRET_KEY)}
      />
    </Container>
  );
}
