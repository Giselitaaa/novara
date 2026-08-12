"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { generateUniqueSlug } from "@/lib/slug";
import { logAdminAction } from "@/modules/admin/server/audit";
import { requireAdmin } from "@/modules/admin/server/guard";

export async function createBlogPost(formData: FormData) {
  const session = await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  if (!title) throw new Error("El título es obligatorio.");

  const draftStatus = await db.status.findUnique({ where: { key: "activo" } });
  if (!draftStatus) throw new Error("Catálogos base sin sembrar.");

  const slug = await generateUniqueSlug(
    title,
    async (candidate) => !!(await db.blogPost.findUnique({ where: { slug: candidate } })),
    "articulo"
  );

  const post = await db.blogPost.create({
    data: {
      title,
      slug,
      authorId: session.user.id,
      body: "",
      statusId: draftStatus.id,
    },
  });

  await logAdminAction(session.user.id, "blog.create", "BlogPost", post.id, { title });
  revalidatePath("/admin/blog");
  return post;
}

export async function updateBlogPost(postId: string, formData: FormData) {
  await requireAdmin();

  const publishNow = formData.get("publishNow") === "on";
  const scheduledAt = String(formData.get("scheduledAt") ?? "");

  await db.blogPost.update({
    where: { id: postId },
    data: {
      title: String(formData.get("title") ?? ""),
      excerpt: String(formData.get("excerpt") ?? "") || null,
      body: String(formData.get("body") ?? ""),
      coverImageUrl: String(formData.get("coverImageUrl") ?? "") || null,
      seoTitle: String(formData.get("seoTitle") ?? "") || null,
      seoDescription: String(formData.get("seoDescription") ?? "") || null,
      publishedAt: publishNow ? new Date() : scheduledAt ? new Date(scheduledAt) : null,
    },
  });

  revalidatePath("/admin/blog");
  revalidatePath(`/admin/blog/${postId}`);
  return { status: "success" as const, message: "Artículo guardado." };
}

export async function deleteBlogPost(postId: string) {
  const session = await requireAdmin();
  await db.blogPost.delete({ where: { id: postId } });
  await logAdminAction(session.user.id, "blog.delete", "BlogPost", postId);
  revalidatePath("/admin/blog");
}
