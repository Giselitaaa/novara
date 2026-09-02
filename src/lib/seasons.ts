/**
 * Temas visuales TEMPORALES (Navidad, Halloween, San Valentín…), escalables:
 * añadir una temporada nueva es solo un objeto más en esta lista. El tema
 * activo se controla desde el panel (ajuste `active_theme`) y se aplica como
 * un banner discreto en el sitio y un atributo `data-season` en el body (por
 * si se quiere afinar con CSS). Sin JS pesado ni impacto en accesibilidad.
 */
export type SeasonId = "none" | "navidad" | "halloween" | "san_valentin" | "verano";

export type Season = {
  id: SeasonId;
  label: string;
  emoji: string;
  message: string;
  /** Clases del banner (colores propios de la temporada). */
  className: string;
};

export const SEASONS: Season[] = [
  { id: "none", label: "Ninguno (por defecto)", emoji: "", message: "", className: "" },
  {
    id: "navidad",
    label: "Navidad",
    emoji: "❄️",
    message: "¡Felices fiestas! Aprende inglés estas Navidades con NOVARA.",
    className: "bg-emerald-800 text-emerald-50",
  },
  {
    id: "halloween",
    label: "Halloween",
    emoji: "🎃",
    message: "Truco o trato: ¡mejora tu inglés este Halloween!",
    className: "bg-orange-900 text-orange-50",
  },
  {
    id: "san_valentin",
    label: "San Valentín",
    emoji: "💚",
    message: "Enamórate del inglés este San Valentín.",
    className: "bg-rose-900 text-rose-50",
  },
  {
    id: "verano",
    label: "Verano",
    emoji: "☀️",
    message: "Aprovecha el verano para preparar tu examen Cambridge.",
    className: "bg-sky-800 text-sky-50",
  },
];

/** Devuelve la temporada activa, o null si es "none"/desconocida. */
export function getSeason(id: string | undefined | null): Season | null {
  const season = SEASONS.find((s) => s.id === id);
  return season && season.id !== "none" ? season : null;
}
