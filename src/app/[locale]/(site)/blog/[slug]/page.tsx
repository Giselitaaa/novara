import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/lib/json-ld";
import { buildArticleSchema } from "@/lib/seo";
import { getPublishedBlogPostBySlug } from "@/modules/cms/server/blog-queries";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.seoDescription ?? post.excerpt ?? undefined,
  };
}

export const revalidate = 300;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <Container className="max-w-2xl py-10 sm:py-14">
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          excerpt: post.excerpt,
          slug: post.slug,
          authorName: post.author.profile?.firstName ?? "NOVARA",
          publishedAt: post.publishedAt,
        })}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      <h1 className="mb-3 mt-6 font-display text-3xl tracking-tighter sm:text-4xl">
        {post.title}
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        {post.author.profile?.firstName ?? "NOVARA"} ·{" "}
        {post.publishedAt &&
          new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }).format(
            post.publishedAt
          )}
      </p>
      <div className="prose prose-sm max-w-none whitespace-pre-line dark:prose-invert">
        {post.body}
      </div>
    </Container>
  );
}
