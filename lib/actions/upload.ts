"use server";

import { mkdir, writeFile } from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];

export async function uploadImage(formData: FormData): Promise<{ url: string }> {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    throw new Error("No file was uploaded.");
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error("Unsupported file type. Please upload a JPG, PNG, WEBP, GIF or SVG image.");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File is too large. Maximum size is 5MB.");
  }

  await mkdir(UPLOAD_DIR, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const extension = path.extname(file.name) || `.${file.type.split("/")[1]}`;
  const safeExtension = extension.replace(/[^a-zA-Z0-9.]/g, "");
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${safeExtension}`;
  const filePath = path.join(UPLOAD_DIR, fileName);

  await writeFile(filePath, buffer);

  return { url: `/uploads/${fileName}` };
}
