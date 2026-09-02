/**
 * Interpolación de plantillas de correo de NOVARA.
 *
 *  • `{{clave}}` → su valor; si no hay valor (ausente, undefined, null o
 *    vacío) se deja "" — NUNCA se muestra `{{clave}}`, `undefined` ni `null`.
 *  • `{{#if clave}}…{{/if}}` → el bloque solo aparece si la clave tiene un
 *    valor real. Así una fila como "Idioma: {{idioma}}" no deja etiquetas
 *    huérfanas ni espacios vacíos cuando el dato no existe.
 *  • Se colapsan 3+ saltos de línea seguidos en 2 (limpieza tras condicionales).
 *
 * Función pura y sin dependencias.
 */
function isEmpty(v: string | undefined | null): boolean {
  if (v === undefined || v === null) return true;
  const t = String(v).trim();
  return t === "" || t === "undefined" || t === "null";
}

export function interpolate(
  text: string,
  variables: Record<string, string> = {}
): string {
  // 1) Bloques condicionales {{#if clave}}…{{/if}} (no anidados).
  let out = text.replace(
    /\{\{\s*#if\s+([\w.]+)\s*\}\}([\s\S]*?)\{\{\s*\/if\s*\}\}/g,
    (_m, key: string, inner: string) => (isEmpty(variables[key]) ? "" : inner)
  );

  // 2) Variables simples {{clave}} → valor o "".
  out = out.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_m, key: string) => {
    const v = variables[key];
    return isEmpty(v) ? "" : String(v);
  });

  // 3) Limpieza: colapsa saltos de línea sobrantes que dejen los condicionales.
  return out.replace(/\n{3,}/g, "\n\n");
}
