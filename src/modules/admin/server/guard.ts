import "server-only";

import { redirect } from "next/navigation";

import { requireSession } from "@/lib/require-session";

/**
 * Única puerta de entrada a cualquier página o server action del
 * panel de administración. El middleware ya protege `/admin/**` a
 * nivel de "hay sesión o no" (edge, sin acceso a roles reales); aquí
 * se comprueba el rol de verdad, con datos frescos del JWT.
 */
export async function requireAdmin() {
  const session = await requireSession();

  if (!session?.user?.id) {
    redirect("/auth/iniciar-sesion?callbackUrl=/admin");
  }

  if (!session.user.roles?.includes("administrador")) {
    redirect("/");
  }

  return session;
}
