import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

/** Escapa un valor para CSV (comillas dobles + escape de comillas internas). */
function csvCell(value: unknown): string {
  const s = value == null ? "" : String(value);
  return `"${s.replace(/"/g, '""')}"`;
}

function toCsv(headers: string[], rows: unknown[][]): string {
  const lines = [headers.map(csvCell).join(",")];
  for (const row of rows) lines.push(row.map(csvCell).join(","));
  // BOM para que Excel abra bien los acentos.
  return "﻿" + lines.join("\r\n");
}

const fmtDate = (d: Date | null) => (d ? new Date(d).toISOString().slice(0, 10) : "");

/**
 * Exportación CSV de las tablas principales para el panel. Solo
 * administradores. Se construye por streaming de texto; para tablas
 * grandes convendría paginar, pero para exportaciones puntuales del
 * panel es suficiente y no carga relaciones innecesarias.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  const session = await auth();
  if (!session?.user?.roles?.includes("administrador")) {
    return new Response("No autorizado", { status: 403 });
  }

  const { type } = await params;
  let csv: string;
  let filename: string;

  if (type === "usuarios") {
    const users = await db.user.findMany({
      orderBy: { createdAt: "desc" },
      include: { profile: true, status: true, roles: { include: { role: true } } },
    });
    csv = toCsv(
      ["Email", "Nombre", "Apellidos", "Estado", "Roles", "Alta"],
      users.map((u) => [
        u.email,
        u.profile?.firstName ?? "",
        u.profile?.lastName ?? "",
        u.status.label,
        u.roles.map((r) => r.role.name).join(" / "),
        fmtDate(u.createdAt),
      ])
    );
    filename = "usuarios.csv";
  } else if (type === "pagos") {
    const payments = await db.payment.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true, course: true, paymentMethod: true, status: true },
    });
    csv = toCsv(
      ["Fecha", "Email", "Curso", "Método", "Importe", "Moneda", "Estado"],
      payments.map((p) => [
        fmtDate(p.createdAt),
        p.user.email,
        p.course?.title ?? "",
        p.paymentMethod.label,
        Number(p.amount).toFixed(2),
        p.currency,
        p.status.label,
      ])
    );
    filename = "pagos.csv";
  } else if (type === "inscripciones") {
    const enrollments = await db.enrollment.findMany({
      orderBy: { enrolledAt: "desc" },
      include: { user: true, course: true },
    });
    csv = toCsv(
      ["Fecha", "Email", "Curso", "Estado"],
      enrollments.map((e) => [
        fmtDate(e.enrolledAt),
        e.user.email,
        e.course.title,
        e.status,
      ])
    );
    filename = "inscripciones.csv";
  } else {
    return new Response("Tipo de exportación no válido", { status: 404 });
  }

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
