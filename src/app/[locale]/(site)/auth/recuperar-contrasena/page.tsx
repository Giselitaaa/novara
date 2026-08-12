import type { Metadata } from "next";

import { RequestResetForm } from "@/components/auth/request-reset-form";

export const metadata: Metadata = { title: "Recuperar contraseña" };

export default function RequestResetPage() {
  return <RequestResetForm />;
}
