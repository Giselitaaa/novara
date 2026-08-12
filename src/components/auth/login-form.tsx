"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { loginSchema, type LoginInput } from "@/modules/users/shared/validation";

export function LoginForm() {
  const t = useTranslations("nav");
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginInput) => {
    setIsSubmitting(true);
    const result = await signIn("credentials", { ...data, redirect: false });

    if (result?.error) {
      setIsSubmitting(false);
      toast.error("Email o contraseña incorrectos.");
      return;
    }

    // Navegación DURA tras autenticar: fuerza al servidor a re-renderizar
    // con la nueva cookie de sesión (el middleware y los Server Components
    // la ven en el mismo golpe). Es más fiable que `router.push` seguido de
    // `router.refresh()`, cuyo refresh síncrono puede abortar el push.
    // El callbackUrl se restringe a rutas relativas para evitar open-redirect.
    const callbackUrl = searchParams.get("callbackUrl");
    const target =
      callbackUrl && callbackUrl.startsWith("/") && !callbackUrl.startsWith("//")
        ? callbackUrl
        : "/";
    window.location.assign(target);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="font-display text-2xl tracking-tighter">{t("signIn")}</h1>
      </div>

      <GoogleSignInButton />

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground">o</span>
        <Separator className="flex-1" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
        <FormField id="email" label="Email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            invalid={!!errors.email}
            {...register("email")}
          />
        </FormField>

        <FormField id="password" label="Contraseña" error={errors.password?.message}>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            invalid={!!errors.password}
            {...register("password")}
          />
        </FormField>

        <div className="flex justify-end">
          <Link
            href="/auth/recuperar-contrasena"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button type="submit" variant="gold" disabled={isSubmitting} className="mt-2">
          {isSubmitting ? "Entrando…" : t("signIn")}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        ¿No tienes cuenta?{" "}
        <Link
          href="/auth/crear-cuenta"
          className="font-medium text-foreground hover:underline"
        >
          {t("signUp")}
        </Link>
      </p>
    </div>
  );
}
