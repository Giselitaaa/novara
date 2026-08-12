import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostForm } from "@/components/admin/cms/blog-post-form";
import { getBlogPostForEdit } from "@/modules/cms/server/blog-queries";

export const metadata: Metadata = { title: "Editar artículo" };

type Props = { params: Promise<{ id: string }> };

export default async function EditBlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getBlogPostForEdit(id);
  if (!post) notFound();

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl tracking-tighter">Editar artículo</h1>
      <BlogPostForm post={post} />
    </div>
  );
}
