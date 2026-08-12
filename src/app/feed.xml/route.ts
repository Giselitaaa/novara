import { siteConfig } from "@/config/site";
import { db } from "@/lib/db";

/**
 * Feed RSS del blog en `/feed.xml`. Ruta de servidor plana (Route
 * Handler), fuera de `[locale]` — un feed RSS no tiene versión por
 * idioma en esta plataforma.
 */
export async function GET() {
  const posts = await db.blogPost.findMany({
    where: { publishedAt: { lte: new Date() } },
    orderBy: { publishedAt: "desc" },
    take: 30,
    include: { author: { include: { profile: true } } },
  });

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid>${siteConfig.url}/blog/${post.slug}</guid>
      <pubDate>${post.publishedAt?.toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt ?? ""}]]></description>
      <author><![CDATA[${post.author.profile?.firstName ?? "NOVARA"}]]></author>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name} — Blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>${siteConfig.description.es}</description>
    <language>es</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
