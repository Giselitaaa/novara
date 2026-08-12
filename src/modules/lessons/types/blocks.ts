export const LESSON_BLOCK_TYPES = [
  "TEXT",
  "IMAGE",
  "GALLERY",
  "VIDEO",
  "AUDIO",
  "PRONUNCIATION",
  "PDF",
  "RESOURCE",
  "FLASHCARDS",
  "EXERCISE",
  "EXAM",
  "TIP",
  "NOTES",
  "GRAMMAR",
  "SUMMARY",
  "DIVIDER",
] as const;

export type LessonBlockType = (typeof LESSON_BLOCK_TYPES)[number];

export function isLessonBlockType(v: string): v is LessonBlockType {
  return (LESSON_BLOCK_TYPES as readonly string[]).includes(v);
}

/**
 * Metadatos por tipo de bloque para el selector visual del editor. Solo
 * datos (sin componentes) para poder importarse también en servidor; los
 * iconos se mapean en el cliente. `category` agrupa el selector.
 */
export type BlockMeta = {
  label: string;
  description: string;
  category: "contenido" | "media" | "interactivo" | "estructura";
};

export const BLOCK_META: Record<LessonBlockType, BlockMeta> = {
  TEXT: {
    label: "Texto",
    description: "Párrafo o explicación con formato.",
    category: "contenido",
  },
  GRAMMAR: {
    label: "Gramática / teoría",
    description: "Explicación gramatical o teórica destacada.",
    category: "contenido",
  },
  SUMMARY: {
    label: "Resumen",
    description: "Lista de puntos clave de la lección.",
    category: "contenido",
  },
  TIP: {
    label: "Consejo del profesor",
    description: "Caja destacada con un consejo o truco.",
    category: "contenido",
  },
  NOTES: {
    label: "Nota / aviso",
    description: "Aviso destacado (info, atención, importante).",
    category: "contenido",
  },
  IMAGE: {
    label: "Imagen",
    description: "Una imagen con pie opcional.",
    category: "media",
  },
  GALLERY: {
    label: "Galería",
    description: "Varias imágenes en cuadrícula.",
    category: "media",
  },
  VIDEO: {
    label: "Vídeo",
    description: "Vídeo (URL de archivo o proveedor).",
    category: "media",
  },
  AUDIO: {
    label: "Audio",
    description: "Pista de audio.",
    category: "media",
  },
  PRONUNCIATION: {
    label: "Pronunciación",
    description: "Palabra o frase con su audio de pronunciación.",
    category: "media",
  },
  PDF: {
    label: "PDF / documento",
    description: "Documento incrustado y descargable.",
    category: "media",
  },
  RESOURCE: {
    label: "Recurso descargable",
    description: "Enlace a un archivo o recurso para descargar.",
    category: "media",
  },
  FLASHCARDS: {
    label: "Mazo de flashcards",
    description: "Inserta un mazo de vocabulario reutilizable.",
    category: "interactivo",
  },
  EXERCISE: {
    label: "Ejercicio",
    description: "Ejercicio (reading/writing/listening/speaking).",
    category: "interactivo",
  },
  EXAM: {
    label: "Examen",
    description: "Examen compuesto por secciones.",
    category: "interactivo",
  },
  DIVIDER: {
    label: "Separador",
    description: "Línea divisoria entre secciones.",
    category: "estructura",
  },
};
