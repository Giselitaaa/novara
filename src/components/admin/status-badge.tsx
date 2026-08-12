import { Badge, type BadgeProps } from "@/components/ui/badge";

const TONE_BY_KEY: Record<string, NonNullable<BadgeProps["variant"]>> = {
  // Cursos
  borrador: "neutral",
  en_revision: "gold",
  aprobado: "success",
  publicado: "success",
  archivado: "neutral",
  // Pagos
  pendiente: "gold",
  rechazado: "outline",
  reembolsado: "neutral",
  // Soporte / reseñas / Q&A
  abierto: "gold",
  abierta: "gold",
  en_proceso: "gold",
  respondida: "success",
  cerrada: "neutral",
  pendiente_moderacion: "gold",
  publicada: "success",
  rechazada: "outline",
  // Genérico / usuarios
  activo: "success",
  inactivo: "neutral",
  suspendido: "gold",
  baneado: "outline",
  pendiente_verificacion: "gold",
};

export function StatusBadge({ statusKey, label }: { statusKey: string; label: string }) {
  return <Badge variant={TONE_BY_KEY[statusKey] ?? "neutral"}>{label}</Badge>;
}
