/**
 * Sustituye `{{clave}}` por su valor en una plantilla de texto. Las
 * claves sin valor se dejan vacías (no se deja el literal `{{clave}}`).
 * Función pura y sin dependencias — se usa para interpolar variables en
 * los emails ({{nombre}}, {{curso}}, {{codigo}}…).
 */
export function interpolate(
  text: string,
  variables: Record<string, string> = {}
): string {
  return text.replace(
    /\{\{\s*([\w.]+)\s*\}\}/g,
    (_m, key: string) => variables[key] ?? ""
  );
}
