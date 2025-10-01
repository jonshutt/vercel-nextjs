-- AlterTable
ALTER TABLE "public"."Post" ALTER COLUMN "summary" DROP NOT NULL;

-- RenameColumn
ALTER TABLE "public"."Post" RENAME COLUMN "reated_at" TO "created_at";
