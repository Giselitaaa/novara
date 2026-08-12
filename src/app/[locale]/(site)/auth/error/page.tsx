import { AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export const metadata: Metadata = { title: "Error de autenticación" };

const ERROR_MESSAGES: Record<string, string> = {
  Configuration:
    "La plataforma no ha podido completar el inicio de sesión. Inténtalo de nuevo en unos minutos.",
  AccessDenied: "No tienes permiso para acceder con esta cuenta.",
  Verification: "El enlace de verificación no es válido o ha caducado.",
  Default: "Ha ocurrido un error al iniciar sesión. Inténtalo de nuevo.",
};

type Props = { searchParams: Promise<{ error?: string }> };

export default async function AuthErrorPage({ searchParams }: Props) {
  const { error } = await searchParams;
  const message = ERROR_MESSAGES[error ?? "Default"] ?? ERROR_MESSAGES.Default;

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <AlertTriangle className="size-10 text-destructive" />
      <h1 className="font-display text-2xl tracking-tighter">
        No hemos podido iniciar sesión
      </h1>
      <p className="text-sm text-muted-foreground">{message}</p>
      <Button asChild variant="gold">
        <Link href="/auth/iniciar-sesion">Volver a intentarlo</Link>
      </Button>
    </div>
  );
}
