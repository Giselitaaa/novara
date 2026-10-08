import { notFound } from "next/navigation";

/**
 * Página "sumidero" del 404 real. No la visita nadie directamente: el
 * middleware reescribe aquí cuando una ruta dinámica (curso, categoría,
 * entrada de blog, lección, checkout) no existe.
 *
 * Por qué existe: en Next.js App Router, llamar a `notFound()` DESPUÉS
 * de un `await` (una consulta a la base de datos, por ejemplo) no
 * cambia el código HTTP — la respuesta ya ha empezado a transmitirse
 * con 200 antes de que `notFound()` resuelva (limitación conocida del
 * framework, sin fix oficial: vercel/next.js discusiones #76501 y
 * #99318, issues #64446 y #98518). Esta página no hace ningún `await`:
 * llama a `notFound()` de forma síncrona, lo único que garantiza que
 * Next.js fije el 404 real antes de enviar ninguna cabecera.
 */
export default function NotFoundSink() {
  notFound();
}
