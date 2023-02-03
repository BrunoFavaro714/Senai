/*
  Warnings:

  - You are about to drop the column `quntidade` on the `detalhes` table. All the data in the column will be lost.
  - Added the required column `quantidade` to the `Detalhes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detalhes` DROP COLUMN `quntidade`,
    ADD COLUMN `quantidade` INTEGER NOT NULL;
