import { Container } from "@/components/layout/container";
import { SealMark } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

/**
 * 404 con identidad de marca (sello NOVARA + tono editorial), no la
 * pantalla en blanco por defecto de Next. Ofrece una salida clara.
 */
export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <SealMark className="mb-6 size-12 text-gold" />
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Error 404
      </p>
      <h1 className="mb-3 font-display text-3xl tracking-tighter sm:text-4xl">
        Esta página no existe
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        El enlace puede estar roto o la página se ha movido. Desde el catálogo encontrarás
        todos los cursos disponibles.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="gold">
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/cursos">Ver cursos</Link>
        </Button>
      </div>
    </Container>
  );
}
