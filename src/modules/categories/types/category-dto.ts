/**
 * Forma de datos que consume la UI para una categoría. Refleja los
 * campos relevantes de `Category` en el esquema de Prisma — cuando el
 * módulo de consultas de categorías exista, su resultado se mapea a
 * esta misma forma, así que la UI no cambia.
 */
export type CategoryDTO = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
};
