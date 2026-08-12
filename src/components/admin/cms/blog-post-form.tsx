"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "@/i18n/navigation";
import { deleteBlogPost, updateBlogPost } from "@/modules/cms/server/blog-actions";

type Post = {
  id: string;
  title: string;
  excerpt: string | null;
  body: string;
  coverImageUrl: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  publishedAt: Date | null;
};

export function BlogPostForm({ post }: { post: Post }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isPublished = !!post.publishedAt && post.publishedAt <= new Date();

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await updateBlogPost(post.id, formData);
      toast.success(result.message);
      router.refresh();
    });
  }

  function handleDelete() {
    if (!confirm("¿Eliminar este artículo?")) return;
    startTransition(async () => {
      await deleteBlogPost(post.id);
      router.push("/admin/blog");
    });
  }

  return (
    <form action={handleSubmit} className="flex max-w-2xl flex-col gap-4">
      <FormField id="title" label="Título">
        <Input id="title" name="title" defaultValue={post.title} required />
      </FormField>

      <FormField id="excerpt" label="Extracto">
        <Input id="excerpt" name="excerpt" defaultValue={post.excerpt ?? ""} />
      </FormField>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="body">Contenido</Label>
        <textarea
          id="body"
          name="body"
          defaultValue={post.body}
          rows={12}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      <FormField id="coverImageUrl" label="URL de portada">
        <Input
          id="coverImageUrl"
          name="coverImageUrl"
          defaultValue={post.coverImageUrl ?? ""}
        />
      </FormField>

      <FormField id="seoTitle" label="Título SEO">
        <Input id="seoTitle" name="seoTitle" defaultValue={post.seoTitle ?? ""} />
      </FormField>
      <FormField id="seoDescription" label="Meta descripción">
        <Input
          id="seoDescription"
          name="seoDescription"
          defaultValue={post.seoDescription ?? ""}
        />
      </FormField>

      <div className="flex flex-col gap-3 rounded-md border border-dashed border-border p-4">
        <div className="flex items-center gap-2.5">
          <Checkbox id="publishNow" name="publishNow" defaultChecked={isPublished} />
          <Label htmlFor="publishNow" className="font-normal">
            Publicar ahora
          </Label>
        </div>
        <FormField id="scheduledAt" label="O programar publicación para">
          <Input
            id="scheduledAt"
            name="scheduledAt"
            type="datetime-local"
            defaultValue={
              post.publishedAt && post.publishedAt > new Date()
                ? post.publishedAt.toISOString().slice(0, 16)
                : undefined
            }
          />
        </FormField>
      </div>

      <div className="flex gap-2">
        <Button type="submit" variant="gold" disabled={isPending}>
          {isPending ? "Guardando…" : "Guardar artículo"}
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={isPending}
          onClick={handleDelete}
        >
          Eliminar
        </Button>
      </div>
    </form>
  );
}
