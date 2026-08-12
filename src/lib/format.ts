/**
 * Formatea minutos como "Xh Ym", omitiendo la parte que sea cero.
 * Usado en tarjetas de curso, tanto en la landing como en el catálogo.
 */
export function formatDuration(totalMinutes: number | null, locale: string = "es") {
  if (totalMinutes === null) return locale === "es" ? "Por definir" : "TBD";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) return `${minutes} min`;
  if (minutes === 0) return locale === "es" ? `${hours} h` : `${hours}h`;
  return locale === "es" ? `${hours} h ${minutes} min` : `${hours}h ${minutes}m`;
}

/**
 * Iniciales a partir de un nombre completo — antes de esta auditoría
 * existían dos implementaciones casi idénticas (perfil y menú de
 * usuario del header), cada una con sus propios casos límite.
 */
export function getInitials(fullName?: string | null) {
  if (!fullName) return "?";
  const parts = fullName.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "?";
}

export function formatSeconds(totalSeconds: number | null) {
  if (!totalSeconds) return null;
  const minutes = Math.round(totalSeconds / 60);
  return minutes < 1 ? "< 1 min" : `${minutes} min`;
}

export function formatPrice(price: number, currency: string = "EUR", locale = "es-ES") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}
