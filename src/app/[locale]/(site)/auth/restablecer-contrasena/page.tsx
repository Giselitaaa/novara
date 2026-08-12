import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export const metadata: Metadata = { title: "Restablecer contraseña" };

type Props = { searchParams: Promise<{ token?: string }> };

export default async function ResetPasswordPage({ searchParams }: Props) {
  const { token } = await searchParams;
  if (!token) notFound();

  return <ResetPasswordForm token={token} />;
}
