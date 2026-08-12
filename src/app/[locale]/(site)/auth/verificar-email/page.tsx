import { CheckCircle2, XCircle } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { verifyEmailToken } from "@/modules/users/server/actions";

export const metadata: Metadata = { title: "Verificar email" };

type Props = { searchParams: Promise<{ token?: string }> };

export default async function VerifyEmailPage({ searchParams }: Props) {
  const { token } = await searchParams;
  const result = token ? await verifyEmailToken(token) : { success: false as const };

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {result.success ? (
        <>
          <CheckCircle2 className="size-10 text-success" />
          <h1 className="font-display text-2xl tracking-tighter">Email verificado</h1>
          <p className="text-sm text-muted-foreground">
            Tu cuenta ya está activa. Puedes empezar a aprender.
          </p>
          <Button asChild variant="gold">
            <Link href="/cursos">Explorar cursos</Link>
          </Button>
        </>
      ) : (
        <>
          <XCircle className="size-10 text-destructive" />
          <h1 className="font-display text-2xl tracking-tighter">
            Enlace no válido o caducado
          </h1>
          <p className="text-sm text-muted-foreground">
            Solicita un nuevo enlace de verificación desde tu perfil o vuelve a
            registrarte.
          </p>
          <Button asChild variant="outline">
            <Link href="/auth/iniciar-sesion">Iniciar sesión</Link>
          </Button>
        </>
      )}
    </div>
  );
}
