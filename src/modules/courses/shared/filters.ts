export type CourseSort = "recientes" | "duracion_asc" | "duracion_desc" | "titulo_asc";

export type CourseFilters = {
  search?: string;
  categorySlug?: string;
  levelKey?: string;
  accessType?: "gratis" | "premium";
  sort: CourseSort;
  page: number;
};

export const DEFAULT_PAGE_SIZE = 12;

const VALID_SORTS: CourseSort[] = [
  "recientes",
  "duracion_asc",
  "duracion_desc",
  "titulo_asc",
];

/**
 * Traduce los `searchParams` (siempre strings o undefined en la URL) a
 * un objeto `CourseFilters` tipado y con valores por defecto seguros.
 * Única puerta de entrada para leer filtros desde una page — así una
 * URL manipulada a mano nunca llega con un `sort` o `page` inválido a
 * la capa de consultas.
 */
export function parseCourseFilters(
  searchParams: Record<string, string | string[] | undefined>
): CourseFilters {
  const get = (key: string) => {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
  };

  const sort = get("sort");
  const page = Number(get("page"));
  const accessType = get("access");

  return {
    search: get("q")?.trim() || undefined,
    categorySlug: get("categoria") || undefined,
    levelKey: get("nivel") || undefined,
    accessType:
      accessType === "gratis" || accessType === "premium" ? accessType : undefined,
    sort: VALID_SORTS.includes(sort as CourseSort) ? (sort as CourseSort) : "recientes",
    page: Number.isFinite(page) && page > 0 ? Math.floor(page) : 1,
  };
}
