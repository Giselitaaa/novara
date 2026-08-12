import "server-only";

import { db } from "@/lib/db";

export async function listBlogPostsAdmin() {
  return db.blogPost.findMany({
    orderBy: { createdAt: "desc" },
    include: { status: true, author: { include: { profile: true } } },
  });
}

export async function getBlogPostForEdit(id: string) {
  return db.blogPost.findUnique({ where: { id } });
}

export async function getPublishedBlogPosts() {
  return db.blogPost.findMany({
    where: { publishedAt: { lte: new Date() } },
    orderBy: { publishedAt: "desc" },
    include: { author: { include: { profile: true } } },
  });
}

export async function getPublishedBlogPostBySlug(slug: string) {
  return db.blogPost.findFirst({
    where: { slug, publishedAt: { lte: new Date() } },
    include: { author: { include: { profile: true } } },
  });
}
