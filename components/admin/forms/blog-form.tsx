"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { Blog } from "@prisma/client";

import { BlogSchema, type BlogFormData } from "@/lib/validators/blog";
import { slugify } from "@/lib/slug";
import { createBlog, updateBlog } from "@/lib/actions/blog";
import { uploadImage } from "@/lib/actions/upload";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TiptapEditor from "@/components/admin/editor/tiptap-editor";

function toDefaultValues(blog?: Blog | null): BlogFormData {
  return {
    title: blog?.title ?? "",
    slug: blog?.slug ?? "",
    seoTitle: blog?.seoTitle ?? "",
    metaDescription: blog?.metaDescription ?? "",
    excerpt: blog?.excerpt ?? "",
    content: blog?.content ?? "",
    featuredImage: blog?.featuredImage ?? "",
    imageAlt: blog?.imageAlt ?? "",
    category: blog?.category ?? "",
    tags: blog?.tags ?? "",
    author: blog?.author ?? "",
    featured: blog?.featured ?? false,
    published: blog?.published ?? false,
  };
}

export default function BlogForm({ blog }: { blog?: Blog | null }) {
  const router = useRouter();
  const isEdit = Boolean(blog);
  const [isPending, startTransition] = useTransition();
  const [isUploading, setIsUploading] = useState(false);
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(BlogSchema),
    defaultValues: toDefaultValues(blog),
  });

  const featuredImage = watch("featuredImage");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setValue("title", title);
    if (!slugTouched) {
      setValue("slug", slugify(title));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const result = await uploadImage(formData);
      setValue("featuredImage", result.url);
      toast.success("Image uploaded");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const onSubmit = (values: BlogFormData) => {
    startTransition(async () => {
      try {
        if (isEdit && blog) {
          await updateBlog(blog.id, values);
          toast.success("Blog post updated");
        } else {
          await createBlog(values);
          toast.success("Blog post created");
        }
        router.push("/admin/blogs");
        router.refresh();
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Something went wrong");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{isEdit ? "Edit Blog Post" : "Create Blog Post"}</h1>

        <div className="flex gap-3">
          <Button type="button" variant="outline" onClick={() => router.push("/admin/blogs")}>
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : isEdit ? "Save Changes" : "Create Post"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left column */}
        <div className="col-span-12 space-y-6 lg:col-span-8">
          <div>
            <Input
              placeholder="Blog Title"
              className="h-12 text-base"
              {...register("title")}
              onChange={handleTitleChange}
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
          </div>

          <div>
            <Input
              placeholder="slug-for-this-post"
              {...register("slug", {
                onChange: () => setSlugTouched(true),
              })}
            />
            {errors.slug && <p className="mt-1 text-sm text-red-600">{errors.slug.message}</p>}
          </div>

          <div>
            <Textarea
              placeholder="Short excerpt shown in blog listings"
              className="h-24"
              {...register("excerpt")}
            />
          </div>

          <div>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <TiptapEditor value={field.value ?? ""} onChange={field.onChange} />
              )}
            />
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-12 space-y-6 lg:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="SEO Title" {...register("seoTitle")} />
              <Textarea placeholder="Meta Description" className="h-24" {...register("metaDescription")} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Category & Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Category, e.g. Fire Safety Tips" {...register("category")} />
              <Input placeholder="Tags, comma separated, e.g. fire,safety,surat" {...register("tags")} />
              <Input placeholder="Author name" {...register("author")} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {featuredImage ? (
                <div className="space-y-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredImage}
                    alt="Featured"
                    className="h-40 w-full rounded-lg object-cover"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => setValue("featuredImage", "")}
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="w-full rounded-lg border border-dashed p-10 text-sm text-slate-500 hover:bg-gray-50"
                >
                  {isUploading ? "Uploading..." : "Click to upload image"}
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <Input placeholder="Image alt text" {...register("imageAlt")} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publish</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Controller
                name="published"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Published</span>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </div>
                )}
              />
              <Controller
                name="featured"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Featured</span>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </div>
                )}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
