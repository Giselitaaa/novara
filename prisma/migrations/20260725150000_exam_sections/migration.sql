-- Composición de exámenes (Fase 6): ExamSection + Exam.randomize_sections. Aditivo.

-- AlterTable
ALTER TABLE "exams" ADD COLUMN "randomize_sections" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "exam_sections" (
    "id" TEXT NOT NULL,
    "exam_id" TEXT NOT NULL,
    "exercise_id" TEXT NOT NULL,
    "weight" DECIMAL(5,2) NOT NULL DEFAULT 1,
    "time_limit_minutes" INTEGER,
    "order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "exam_sections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "exam_sections_exam_id_idx" ON "exam_sections"("exam_id");
CREATE INDEX "exam_sections_exercise_id_idx" ON "exam_sections"("exercise_id");

-- AddForeignKey
ALTER TABLE "exam_sections" ADD CONSTRAINT "exam_sections_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "exams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "exam_sections" ADD CONSTRAINT "exam_sections_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("id") ON DELETE CASCADE ON UPDATE CASCADE;
