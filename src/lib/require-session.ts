import { redirect } from "next/navigation";
import type { Session } from "next-auth";

import { auth } from "@/lib/auth";

export async function requireSession(): Promise<Session> {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/iniciar-sesion");
  }

  return session;
}
