import "server-only";

import { db } from "@/lib/db";

const PAGE_SIZE = 20;

/**
 * Bandeja de soporte para el panel de administración. Lista los tickets
 * más recientes primero, con su autor, estado y número de mensajes,
 * opcionalmente filtrados por estado.
 */
export async function listSupportTickets({
  statusKey,
  page = 1,
}: {
  statusKey?: string;
  page?: number;
}) {
  const where = statusKey ? { status: { key: statusKey } } : {};
  const [tickets, total] = await Promise.all([
    db.supportTicket.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      include: {
        status: true,
        user: { include: { profile: true } },
        _count: { select: { messages: true } },
      },
    }),
    db.supportTicket.count({ where }),
  ]);

  return { tickets, total, totalPages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}

/** Un ticket con su hilo completo de mensajes (para la vista de detalle). */
export async function getSupportTicketById(id: string) {
  return db.supportTicket.findUnique({
    where: { id },
    include: {
      status: true,
      user: { include: { profile: true } },
      messages: {
        orderBy: { createdAt: "asc" },
        include: {
          sender: { include: { profile: true, roles: { include: { role: true } } } },
        },
      },
    },
  });
}

/** Tickets de un alumno concreto — para que vea sus propias solicitudes. */
export async function listMySupportTickets(userId: string) {
  return db.supportTicket.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: {
      status: true,
      messages: {
        orderBy: { createdAt: "asc" },
        include: { sender: { include: { roles: { include: { role: true } } } } },
      },
    },
  });
}

/** Conteo de tickets abiertos — para el badge del dashboard/nav. */
export async function countOpenSupportTickets() {
  return db.supportTicket.count({
    where: { status: { key: { in: ["abierto", "en_proceso"] } } },
  });
}
