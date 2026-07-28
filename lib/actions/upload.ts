"use server";

import { put } from "@vercel/blob";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);

export async function uploadImage(
  formData: FormData
): Promise<{ url: string }> {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    throw new Error("Please select an image.");
  }

  if (file.size <= 0) {
    throw new Error("The selected file is empty.");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Image size must be less than 5 MB.");
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    throw new Error(
      "Only JPG, JPEG, PNG, WEBP, GIF and SVG images are allowed."
    );
  }

  const extension =
    file.name.split(".").pop()?.toLowerCase() ||
    file.type.split("/")[1] ||
    "jpg";

  const safeExtension = extension.replace(/[^a-z0-9]/gi, "");

  const baseName = file.name
    .replace(/\.[^.]+$/, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "");

  const filename = `${baseName || "image"}-${Date.now()}-${crypto
    .randomUUID()
    .slice(0, 8)}.${safeExtension}`;

  try {
    const blob = await put(filename, file, {
      access: "public",
      addRandomSuffix: false,
      cacheControlMaxAge: 31536000,
    });

    return {
      url: blob.url,
    };
  } catch (error) {
    console.error("Blob upload failed:", error);

    throw new Error(
      "Unable to upload the image. Please try again in a few moments."
    );
  }
}