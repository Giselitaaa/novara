"use server";

import { randomBytes } from "node:crypto";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

import { signIn } from "@/lib/auth";
import { db } from "@/lib/db";
import { emailShell, sendTransactionalEmail } from "@/lib/mail";
import { checkRateLimit } from "@/lib/rate-limit";
import { requireSession } from "@/lib/require-session";
import { linkReferralOnRegister } from "@/modules/affiliates/server/actions";
import {
  changePasswordSchema,
  registerSchema,
  requestPasswordResetSchema,
  resetPasswordSchema,
  updateProfileSchema,
} from "@/modules/users/shared/validation";

const TOKEN_TTL_HOURS = { email_verification: 48, password_reset: 2 } as const;

function generateToken() {
  return randomBytes(32).toString("hex");
}

async function issueToken(userId: string, type: keyof typeof TOKEN_TTL_HOURS) {
  const token = generateToken();
  const expiresAt = new Date(Date.now() + TOKEN_TTL_HOURS[type] * 60 * 60 * 1000);
  await db.verificationToken.create({ data: { userId, token, type, expiresAt } });
  return token;
}

export type ActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string | undefined>;
};

/**
 * Registro por credenciales. Crea `User` + `UserProfile` + `UserRole`
 * (alumno) en una única transacción, envía el correo de verificación,
 * y a continuación inicia sesión automáticamente — el alumno no tiene
 * por qué volver a escribir su contraseña justo después de crearla.
 */
export async function registerUser(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = Object.fromEntries(formData) as Record<string, string>;
  const parsed = registerSchema.safeParse({
    ...raw,
    acceptTerms: raw.acceptTerms === "on" || raw.acceptTerms === "true",
  });

  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: flattenZodErrors(parsed.error),
    };
  }

  const { firstName, lastName, email, password } = parsed.data;

  const rateLimit = checkRateLimit(`register:${email}`, 5, 60 * 60);
  if (!rateLimit.allowed) {
    return {
      status: "error",
      message: `Demasiados intentos. Inténtalo de nuevo en ${Math.ceil(rateLimit.resetInSeconds / 60)} minutos.`,
    };
  }

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return {
      status: "error",
      fieldErrors: { email: "Ya existe una cuenta con este email" },
    };
  }

  const [activeStatus, alumnoRole] = await Promise.all([
    db.userStatus.findUnique({ where: { key: "pendiente_verificacion" } }),
    db.role.findUnique({ where: { name: "alumno" } }),
  ]);

  if (!activeStatus || !alumnoRole) {
    return {
      status: "error",
      message:
        "La plataforma no está lista para registrar usuarios todavía (catálogos base sin sembrar).",
    };
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await db.user.create({
    data: {
      email,
      passwordHash,
      statusId: activeStatus.id,
      profile: { create: { firstName, lastName } },
      roles: { create: { roleId: alumnoRole.id } },
    },
  });

  const token = await issueToken(user.id, "email_verification");
  const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verificar-email?token=${token}`;

  await sendTransactionalEmail({
    userId: user.id,
    to: email,
    templateKey: "verificacion_email",
    subject: "Confirma tu cuenta en NOVARA",
    html: emailShell({
      title: `Bienvenido a NOVARA, ${firstName}`,
      bodyHtml:
        "Confirma tu email para activar tu cuenta y empezar a aprender. El enlace caduca en 48 horas.",
      ctaLabel: "Confirmar mi email",
      ctaUrl: verifyUrl,
    }),
  });

  await linkReferralOnRegister(user.id);

  await signIn("credentials", { email, password, redirect: false });

  return { status: "success" };
}

export async function requestPasswordReset(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const parsed = requestPasswordResetSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success)
    return { status: "error", fieldErrors: flattenZodErrors(parsed.error) };

  const rateLimit = checkRateLimit(`reset:${parsed.data.email}`, 3, 60 * 60);
  if (!rateLimit.allowed) {
    return {
      status: "success",
      message:
        "Si el email existe en NOVARA, hemos enviado un enlace para restablecer la contraseña.",
    };
  }

  const user = await db.user.findUnique({ where: { email: parsed.data.email } });

  // Respuesta idéntica exista o no el usuario — no revelamos qué
  // emails están registrados en la plataforma.
  if (user) {
    const token = await issueToken(user.id, "password_reset");
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/restablecer-contrasena?token=${token}`;
    await sendTransactionalEmail({
      userId: user.id,
      to: user.email,
      templateKey: "recuperar_contrasena",
      subject: "Restablece tu contraseña de NOVARA",
      html: emailShell({
        title: "Restablece tu contraseña",
        bodyHtml:
          "Recibimos una solicitud para restablecer tu contraseña. El enlace caduca en 2 horas.",
        ctaLabel: "Restablecer contraseña",
        ctaUrl: resetUrl,
      }),
    });
  }

  return {
    status: "success",
    message:
      "Si el email existe en NOVARA, hemos enviado un enlace para restablecer la contraseña.",
  };
}

export async function resetPassword(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const parsed = resetPasswordSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success)
    return { status: "error", fieldErrors: flattenZodErrors(parsed.error) };

  const { token, password } = parsed.data;
  const verification = await db.verificationToken.findUnique({ where: { token } });

  if (
    !verification ||
    verification.type !== "password_reset" ||
    verification.usedAt ||
    verification.expiresAt < new Date()
  ) {
    return {
      status: "error",
      message: "Este enlace de recuperación no es válido o ha caducado.",
    };
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await db.$transaction([
    db.user.update({ where: { id: verification.userId }, data: { passwordHash } }),
    db.verificationToken.update({
      where: { id: verification.id },
      data: { usedAt: new Date() },
    }),
  ]);

  return { status: "success", message: "Contraseña actualizada correctamente." };
}

export async function verifyEmailToken(token: string) {
  const verification = await db.verificationToken.findUnique({ where: { token } });

  if (
    !verification ||
    verification.type !== "email_verification" ||
    verification.usedAt ||
    verification.expiresAt < new Date()
  ) {
    return { success: false as const };
  }

  const activeStatus = await db.userStatus.findUnique({ where: { key: "activo" } });

  await db.$transaction([
    db.user.update({
      where: { id: verification.userId },
      data: {
        emailVerifiedAt: new Date(),
        ...(activeStatus ? { statusId: activeStatus.id } : {}),
      },
    }),
    db.verificationToken.update({
      where: { id: verification.id },
      data: { usedAt: new Date() },
    }),
  ]);

  return { success: true as const };
}

export async function updateProfile(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const session = await requireSession();
  if (!session?.user?.id) return { status: "error", message: "No has iniciado sesión." };

  const parsed = updateProfileSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success)
    return { status: "error", fieldErrors: flattenZodErrors(parsed.error) };

  await db.userProfile.update({
    where: { userId: session.user.id },
    data: parsed.data,
  });

  revalidatePath("/perfil");
  return { status: "success", message: "Perfil actualizado." };
}

/**
 * Fija el objetivo de estudio semanal (en minutos) del alumno. Se acota
 * a un rango razonable (30 min – 40 h) para que la barra de progreso
 * siga teniendo sentido.
 */
export async function updateWeeklyGoal(minutes: number) {
  const session = await requireSession();
  if (!session?.user?.id)
    return { status: "error" as const, message: "No has iniciado sesión." };

  const clamped = Math.max(30, Math.min(2400, Math.round(minutes)));
  await db.userProfile.update({
    where: { userId: session.user.id },
    data: { weeklyGoalMinutes: clamped },
  });

  revalidatePath("/mi-aprendizaje");
  return { status: "success" as const, goalMinutes: clamped };
}

/** Muestra u oculta al alumno del ranking público. */
export async function updateRankingVisibility(show: boolean) {
  const session = await requireSession();
  if (!session?.user?.id) return { status: "error" as const };

  await db.userProfile.update({
    where: { userId: session.user.id },
    data: { showInRanking: show },
  });
  const { revalidateTag } = await import("next/cache");
  revalidateTag("ranking"); // invalida el ranking cacheado al instante
  return { status: "success" as const, showInRanking: show };
}

/** Da de alta/baja al alumno de las comunicaciones de marketing y retención. */
export async function updateMarketingPreference(accepts: boolean) {
  const session = await requireSession();
  if (!session?.user?.id) return { status: "error" as const };

  await db.userProfile.update({
    where: { userId: session.user.id },
    data: { acceptsMarketing: accepts },
  });
  return { status: "success" as const, acceptsMarketing: accepts };
}

export async function changePassword(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const session = await requireSession();
  if (!session?.user?.id) return { status: "error", message: "No has iniciado sesión." };

  const parsed = changePasswordSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success)
    return { status: "error", fieldErrors: flattenZodErrors(parsed.error) };

  const user = await db.user.findUnique({ where: { id: session.user.id } });
  if (!user?.passwordHash) {
    return {
      status: "error",
      message: "Esta cuenta inició sesión con Google y no tiene contraseña propia.",
    };
  }

  const isValid = await bcrypt.compare(parsed.data.currentPassword, user.passwordHash);
  if (!isValid) {
    return {
      status: "error",
      fieldErrors: { currentPassword: "La contraseña actual no es correcta" },
    };
  }

  const passwordHash = await bcrypt.hash(parsed.data.newPassword, 12);
  await db.user.update({ where: { id: user.id }, data: { passwordHash } });

  return { status: "success", message: "Contraseña actualizada correctamente." };
}

function flattenZodErrors(error: {
  flatten: () => { fieldErrors: Record<string, string[] | undefined> };
}) {
  const { fieldErrors } = error.flatten();
  return Object.fromEntries(
    Object.entries(fieldErrors)
      .filter(([, v]) => v && v.length > 0)
      .map(([k, v]) => [k, v![0]])
  );
}
