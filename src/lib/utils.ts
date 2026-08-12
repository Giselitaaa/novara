import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases condicionalmente (clsx) y resuelve conflictos de
 * utilidades de Tailwind (tailwind-merge). Es la base de todo el
 * Design System: cada componente reutilizable la usa para aceptar
 * overrides de clases desde fuera sin romper sus estilos base.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
