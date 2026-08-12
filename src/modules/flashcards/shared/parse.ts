export type ParsedCard = {
  term: string;
  translation: string;
  explanation?: string;
  example?: string;
  category?: string;
  level?: string;
};

/**
 * Parsea texto tabular pegado o CSV simple para importación masiva de
 * flashcards. Separador `;` o tabulador. Columnas por posición:
 *   término ; traducción ; ejemplo ; explicación ; categoría ; nivel
 * Solo término y traducción son obligatorios. Líneas vacías y una posible
 * fila de cabecera se ignoran. Función pura (sin efectos) para poder
 * testearla y reutilizarla; vive fuera de "use server".
 */
export function parseFlashcardsText(raw: string): ParsedCard[] {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  const cards: ParsedCard[] = [];
  for (let i = 0; i < lines.length; i++) {
    const cols = lines[i]!.split(/[\t;]/).map((c) => c.trim());
    const [term, translation, example, explanation, category, level] = cols;
    if (!term || !translation) continue;
    // Cabecera: solo puede ser la PRIMERA fila. Así una tarjeta legítima cuyo
    // término sea "word"/"palabra" no se descarta por error.
    if (i === 0 && /^(t[eé]rmino|palabra|word|term)$/i.test(term)) continue;
    cards.push({ term, translation, example, explanation, category, level });
  }
  return cards;
}
