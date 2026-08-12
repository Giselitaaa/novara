import "server-only";

import { db } from "@/lib/db";

export type ProductEventType =
  | "curso_visto"
  | "inscripcion_iniciada"
  | "inscripcion_completada"
  | "leccion_iniciada"
  | "leccion_completada"
  | "examen_iniciado"
  | "examen_aprobado"
  | "checkout_iniciado"
  | "checkout_abandonado";

/**
 * Registra un evento de producto en `ActivityLog` (se reutiliza la
 * tabla existente en vez de crear una nueva: ya tiene userId, eventType
 * y entidad relacionada — justo lo que necesitamos). Es best-effort: si
 * el registro falla NO rompe el flujo del usuario ni añade latencia
 * perceptible. Idealmente se llama envuelto en `after()` para que corra
 * DESPUÉS de responder.
 */
export async function logProductEvent(params: {
  userId: string;
  eventType: ProductEventType;
  description: string;
  relatedEntityType?: string;
  relatedEntityId?: string;
}) {
  try {
    await db.activityLog.create({
      data: {
        userId: params.userId,
        eventType: params.eventType,
        description: params.description,
        relatedEntityType: params.relatedEntityType,
        relatedEntityId: params.relatedEntityId,
      },
    });
  } catch {
    // Analítica best-effort: nunca romper la experiencia por un log.
  }
}
