import { z } from "zod";

/**
 * Esquemas de validación del módulo de usuarios. Viven en `shared`
 * (no en `server`) porque se reutilizan tanto en el servidor (server
 * actions) como en el cliente (validación instantánea de formularios
 * con react-hook-form), sin duplicar reglas.
 */

const passwordSchema = z
  .string()
  .min(8, "La contraseña debe tener al menos 8 caracteres")
  .regex(/[A-Z]/, "Debe incluir al menos una mayúscula")
  .regex(/[0-9]/, "Debe incluir al menos un número");

export const registerSchema = z
  .object({
    firstName: z.string().trim().min(1, "Introduce tu nombre").max(80),
    lastName: z.string().trim().min(1, "Introduce tus apellidos").max(80),
    email: z.string().trim().email("Introduce un email válido").toLowerCase(),
    password: passwordSchema,
    confirmPassword: z.string(),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "Debes aceptar los términos para continuar" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().trim().email("Introduce un email válido"),
  password: z.string().min(1, "Introduce tu contraseña"),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const requestPasswordResetSchema = z.object({
  email: z.string().trim().email("Introduce un email válido"),
});

export const resetPasswordSchema = z
  .object({
    token: z.string().min(1),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export const updateProfileSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  bio: z.string().trim().max(280).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  avatarUrl: z.string().trim().url().max(600).optional().or(z.literal("")),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Introduce tu contraseña actual"),
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
