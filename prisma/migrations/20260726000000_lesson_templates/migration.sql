-- Plantillas de lección (mejora 3.5). Aditivo.
CREATE TABLE "lesson_templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "blocks" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "lesson_templates_pkey" PRIMARY KEY ("id")
);
