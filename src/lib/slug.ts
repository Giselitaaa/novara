/**
 * Convierte texto libre en un slug URL-safe. Antes de esta auditoría
 * existían tres copias idénticas de esta función (cursos, categorías,
 * blog) — consolidada aquí para que cambiar la regla de slugificado
 * sea un solo sitio, no tres.
 */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Genera un slug único probando `slug`, `slug-1`, `slug-2`... contra
 * `isTaken`. Cada llamador pasa su propia comprobación (una tabla
 * distinta), pero la lógica de "cómo desambiguar" vive en un único
 * sitio — antes de esta auditoría, categorías ni siquiera comprobaba
 * unicidad (lanzaba un error de restricción de Prisma sin gestionar
 * si dos categorías compartían nombre).
 */
export async function generateUniqueSlug(
  base: string,
  isTaken: (slug: string) => Promise<boolean>,
  fallback = "item"
): Promise<string> {
  let slug = slugify(base) || fallback;
  let attempt = 0;
  while (await isTaken(slug)) {
    attempt += 1;
    slug = `${slugify(base) || fallback}-${attempt}`;
  }
  return slug;
}
