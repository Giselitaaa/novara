import { Mail } from "lucide-react";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
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
import { listEmailLogs, listEmailTemplates } from "@/modules/cms/server/email-queries";

export const metadata: Metadata = { title: "Correos" };

export default async function AdminEmailsPage() {
  const [templates, logs] = await Promise.all([listEmailTemplates(), listEmailLogs(30)]);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-display text-2xl tracking-tighter">Plantillas de correo</h1>
        <p className="mb-4 mt-1 text-sm text-muted-foreground">
          Referencia editorial de las plantillas usadas en los envíos transaccionales.
        </p>
        {templates.length === 0 ? (
          <EmptyState icon={Mail} title="Sin plantillas registradas todavía" />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Clave</TableHead>
                <TableHead>Asunto</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {templates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell className="font-mono text-xs">
                    <Link
                      href={`/admin/correos/${template.id}`}
                      className="hover:text-gold-foreground"
                    >
                      {template.key}
                    </Link>
                  </TableCell>
                  <TableCell>{template.subject}</TableCell>
                  <TableCell>
                    <Badge variant={template.isActive ? "success" : "neutral"}>
                      {template.isActive ? "Activa" : "Inactiva"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <div>
        <h2 className="mb-4 font-display text-xl tracking-tighter">Historial de envío</h2>
        {logs.length === 0 ? (
          <EmptyState icon={Mail} title="Sin correos enviados todavía" />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Destinatario</TableHead>
                <TableHead>Plantilla</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.sentTo}</TableCell>
                  <TableCell className="font-mono text-xs">{log.templateKey}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        log.status === "enviado"
                          ? "success"
                          : log.status === "fallido"
                            ? "outline"
                            : "gold"
                      }
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {log.sentAt
                      ? new Intl.DateTimeFormat("es-ES", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }).format(log.sentAt)
                      : "—"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
