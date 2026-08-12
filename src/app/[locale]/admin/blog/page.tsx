import { FileText, Plus } from "lucide-react";
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
import { Link, redirect } from "@/i18n/navigation";
import { createBlogPost } from "@/modules/cms/server/blog-actions";
import { listBlogPostsAdmin } from "@/modules/cms/server/blog-queries";

export const metadata: Metadata = { title: "Blog" };

async function handleCreate() {
  "use server";
  const post = await createBlogPost(new FormData());
  redirect(`/admin/blog/${post.id}` as never);
}

export default async function AdminBlogPage() {
  const posts = await listBlogPostsAdmin();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl tracking-tighter">Blog</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {posts.length} artículo(s).
          </p>
        </div>
        <form action={handleCreate}>
          <Button type="submit" variant="gold">
            <Plus className="size-4" /> Nuevo artículo
          </Button>
        </form>
      </div>

      {posts.length === 0 ? (
        <EmptyState icon={FileText} title="Todavía no hay artículos" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Título</TableHead>
              <TableHead>Autor</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Publicación</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">
                  <Link
                    href={`/admin/blog/${post.id}`}
                    className="hover:text-gold-foreground"
                  >
                    {post.title || "(sin título)"}
                  </Link>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {post.author.profile?.firstName ?? "NOVARA"}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {post.publishedAt
                    ? post.publishedAt > new Date()
                      ? "Programado"
                      : "Publicado"
                    : "Borrador"}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {post.publishedAt
                    ? new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(
                        post.publishedAt
                      )
                    : "—"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
