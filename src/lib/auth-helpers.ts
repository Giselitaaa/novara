import { redirect } from "next/navigation";

import { requireSession } from "@/lib/require-session";

export async function getRequiredSession() {
  const session = await requireSession();

  if (!session?.user) {
    redirect("/auth/iniciar-sesion");
  }

  return session;
}
