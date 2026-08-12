import { z } from "zod";

/**
 * Valida las variables de entorno al arrancar la aplicación, en vez de
 * fallar en tiempo de ejecución en el peor momento posible (ej. un
 * envío de email en producción). Si falta algo obligatorio, el build
 * o el arranque fallan con un mensaje claro.
 */
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url().optional(),
  AUTH_SECRET: z.string().min(1),
  AUTH_URL: z.string().url().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_APP_NAME: z.string().default("NOVARA"),
  RESEND_API_KEY: z.string().optional(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export const env = envSchema.parse(process.env);
