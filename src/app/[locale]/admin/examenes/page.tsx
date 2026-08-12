import { Plus, ShieldQuestion } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@/i18n/navigation";
import { listExams } from "@/modules/exams/server/queries";

export const metadata: Metadata = { title: "Exámenes" };

export default async function ExamsPage() {
  const exams = await listExams();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">Exámenes</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {exams.length} examen(es) creados.
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/admin/examenes/preguntas">Banco de preguntas</Link>
          </Button>
          <Button asChild variant="gold">
            <Link href="/admin/examenes/nuevo">
              <Plus className="size-4" /> Nuevo examen
            </Link>
          </Button>
        </div>
      </div>

      {exams.length === 0 ? (
        <EmptyState
          icon={ShieldQuestion}
          title="Todavía no hay exámenes"
          description="Crea uno y añade preguntas desde el banco reutilizable."
        />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Examen</TableHead>
              <TableHead>Curso</TableHead>
              <TableHead>Preguntas</TableHead>
              <TableHead>Intentos</TableHead>
              <TableHead>Nota mínima</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exams.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell className="font-medium">
                  <Link
                    href={`/admin/examenes/${exam.id}`}
                    className="hover:text-gold-foreground"
                  >
                    {exam.title}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {exam.course?.title ?? "—"}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {exam._count.questions}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {exam._count.attempts}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {Number(exam.passingScore)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
