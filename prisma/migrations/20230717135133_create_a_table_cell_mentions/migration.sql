/*
  Warnings:

  - You are about to drop the column `mentions` on the `cells` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "mentions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "cell_mentions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cell_id" INTEGER NOT NULL,
    "mentionId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "cell_mentions_cell_id_fkey" FOREIGN KEY ("cell_id") REFERENCES "cells" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "cell_mentions_mentionId_fkey" FOREIGN KEY ("mentionId") REFERENCES "mentions" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cells" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "morphology" TEXT NOT NULL,
    "clinical_relevance" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "cells_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_cells" ("category_id", "clinical_relevance", "created_at", "id", "image", "morphology", "name", "updated_at") SELECT "category_id", "clinical_relevance", "created_at", "id", "image", "morphology", "name", "updated_at" FROM "cells";
DROP TABLE "cells";
ALTER TABLE "new_cells" RENAME TO "cells";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
