import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

/**
 * Sirve las cartas de un mazo de flashcards para el visor del alumno dentro de
 * una lección. Requiere sesión. Devuelve solo los campos que el visor pinta —
 * nunca inventa audio: `audioUrl` puede venir vacío y el cliente cae entonces a
 * la voz británica del navegador (SpeechSynthesis en-GB), degradación honesta.
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
