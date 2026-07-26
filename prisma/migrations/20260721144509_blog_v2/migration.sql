/*
  Warnings:

  - You are about to drop the column `image` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "image",
ADD COLUMN     "author" TEXT,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "featuredImage" TEXT,
ADD COLUMN     "imageAlt" TEXT,
ADD COLUMN     "metaDescription" TEXT,
ADD COLUMN     "seoTitle" TEXT,
ADD COLUMN     "tags" TEXT;
