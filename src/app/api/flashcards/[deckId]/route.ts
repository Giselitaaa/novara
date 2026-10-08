import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

/**
 * Sirve las cartas de un mazo de flashcards para el visor del alumno dentro de
 * una lección. Requiere sesión. Devuelve solo los campos que el visor pinta —
 * nunca inventa audio: `audioUrl` puede venir vacío y el cliente cae entonces a
 * la voz británica del navegador (SpeechSynthesis en-GB), degradación honesta.
 *
 * Autorización real, no solo sesión: un mazo es "biblioteca reutilizable"
 * (el mismo `FlashcardDeck` puede colgar de varios `LessonBlock`, en
 * lecciones de cursos distintos — ver comentario en el modelo). Solo se
 * sirve si existe al menos un bloque que referencia este mazo en una
 * lección de vista previa (`isPreview`) o en un curso donde el usuario
 * tiene una matrícula activa. Un admin siempre puede verlo.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ deckId: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const { deckId } = await params;
  const isAdmin = session.user.roles?.includes("administrador") ?? false;

  if (!isAdmin) {
    const accessibleBlock = await db.lessonBlock.findFirst({
      where: {
        deckId,
        OR: [
          { lesson: { isPreview: true } },
          {
            lesson: {
              module: {
                course: {
                  enrollments: { some: { userId: session.user.id, status: "activo" } },
                },
              },
            },
          },
        ],
      },
      select: { id: true },
    });
    if (!accessibleBlock) {
      return Response.json({ error: "No autorizado" }, { status: 403 });
    }
  }

  const deck = await db.flashcardDeck.findUnique({
    where: { id: deckId },
    select: {
      id: true,
      title: true,
      cards: {
        orderBy: { sortOrder: "asc" },
        select: {
          id: true,
          term: true,
          translation: true,
          explanation: true,
          example: true,
          category: true,
          pronunciation: true,
          ipa: true,
          audioUrl: true,
        },
      },
    },
  });

  if (!deck) {
    return Response.json({ error: "Mazo no encontrado" }, { status: 404 });
  }

  return Response.json(deck);
}
