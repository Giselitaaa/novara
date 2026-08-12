-- Bloques de lección ricos (Fase 2): título, contenido estructurado (JSON)
-- y referencia opcional a un mazo de flashcards. Aditivo.

-- AlterTable
ALTER TABLE "lesson_blocks" ADD COLUMN "title" TEXT;
ALTER TABLE "lesson_blocks" ADD COLUMN "data" JSONB;
ALTER TABLE "lesson_blocks" ADD COLUMN "deck_id" TEXT;

-- CreateIndex
CREATE INDEX "lesson_blocks_deck_id_idx" ON "lesson_blocks"("deck_id");

-- AddForeignKey
ALTER TABLE "lesson_blocks" ADD CONSTRAINT "lesson_blocks_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "flashcard_decks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
