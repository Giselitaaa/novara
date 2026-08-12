import { FileText } from "lucide-react";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { Link } from "@/i18n/navigation";
import { getPublishedBlogPosts } from "@/modules/cms/server/blog-queries";

export const metadata: Metadata = { title: "Blog" };

export const revalidate = 300;

export default async function BlogIndexPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <Container className="max-w-3xl py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <h1 className="mb-8 mt-6 font-display text-3xl tracking-tighter sm:text-4xl">
        Blog
      </h1>

      {posts.length === 0 ? (
        <EmptyState icon={FileText} title="Todavía no hay artículos publicados" />
      ) : (
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-border pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-display text-xl tracking-tighter hover:text-gold-foreground">
                  {post.title}
                </h2>
              </Link>
              {post.excerpt && (
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              )}
              <p className="mt-3 text-xs text-muted-foreground">
                {post.author.profile?.firstName ?? "NOVARA"} ·{" "}
                {post.publishedAt &&
                  new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
                    post.publishedAt
                  )}
              </p>
            </article>
          ))}
        </div>
      )}
    </Container>
  );
}
