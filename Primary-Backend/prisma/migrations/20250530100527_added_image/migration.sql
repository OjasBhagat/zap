/*
  Warnings:

  - Added the required column `image` to the `AvaliableAction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `AvaliableTriggers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvaliableAction" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "AvaliableTriggers" ADD COLUMN     "image" TEXT NOT NULL;
