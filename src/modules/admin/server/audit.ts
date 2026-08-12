import "server-only";

import { db } from "@/lib/db";

/**
 * Registra una acción administrativa en `AuditLog`. Se llama desde
 * cada server action que muta datos sensibles (publicar un curso,
 * aprobar un pago, banear un usuario...) — es lo que permite responder
 * "¿quién hizo esto y cuándo?" en cuanto haya más de un administrador.
 */
export async function logAdminAction(
  actorId: string,
  action: string,
  targetEntityType: string,
  targetEntityId: string,
  metadata?: Record<string, unknown>
) {
  await db.auditLog.create({
    data: {
      actorId,
      action,
      targetEntityType,
      targetEntityId,
      metadata: metadata ? JSON.parse(JSON.stringify(metadata)) : undefined,
    },
  });
}
