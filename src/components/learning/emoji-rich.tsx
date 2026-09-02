import { Fragment } from "react";

/**
 * Renderiza un texto agrandando los EMOJIS para que funcionen como imágenes
 * reales (tiles gráficos), no como texto diminuto que "describe" un dibujo.
 * Clave en los niveles infantiles (punto 8): el 🍎/🐱/🎃 se ve como una imagen.
 * Coste cero, sin assets externos; los emojis son glifos a todo color.
 */
const EMOJI_RE =
  /(\p{Extended_Pictographic}(?:‍\p{Extended_Pictographic})*[️⃣]*)/gu;
const EMOJI_TEST = /\p{Extended_Pictographic}/u;

export function EmojiRich({
  text,
  size = "1.5em",
}: {
  text: string;
  /** Tamaño del emoji relativo al texto (ej. "1.5em", "2.2em"). */
  size?: string;
}) {
  const parts = text.split(EMOJI_RE).filter((p) => p !== "" && p !== undefined);
  return (
    <>
      {parts.map((part, i) =>
        EMOJI_TEST.test(part) ? (
          <span
            key={i}
            className="align-middle leading-none"
            style={{ fontSize: size }}
          >
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
