/*
  Warnings:

  - You are about to drop the column `patientId` on the `leukocytes` table. All the data in the column will be lost.
  - You are about to drop the column `patientId` on the `urine_tests` table. All the data in the column will be lost.
  - The primary key for the `patients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `mentionId` on the `cell_mentions` table. All the data in the column will be lost.
  - You are about to drop the column `patientId` on the `erythrocytes` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `patientId` on the `platelets` table. All the data in the column will be lost.
  - Added the required column `patient_id` to the `leukocytes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patient_id` to the `urine_tests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `patients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mention_id` to the `cell_mentions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `cells` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patient_id` to the `erythrocytes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patient_id` to the `platelets` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_leukocytes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "leukocyte" REAL,
    "neutrophils" REAL,
    "bandNeutrophils" REAL,
    "lymphocytes" REAL,
    "monocytes" REAL,
    "eosinophils" REAL,
    "basophils" REAL,
    "patient_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "leukocytes_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_leukocytes" ("bandNeutrophils", "basophils", "created_at", "eosinophils", "id", "leukocyte", "lymphocytes", "monocytes", "neutrophils", "updated_at") SELECT "bandNeutrophils", "basophils", "created_at", "eosinophils", "id", "leukocyte", "lymphocytes", "monocytes", "neutrophils", "updated_at" FROM "leukocytes";
DROP TABLE "leukocytes";
ALTER TABLE "new_leukocytes" RENAME TO "leukocytes";
CREATE TABLE "new_urine_tests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "volume" REAL,
    "color" TEXT,
    "ph" REAL,
    "density" REAL,
    "protein" TEXT,
    "glucose" TEXT,
    "ketones" TEXT,
    "nitrites" BOOLEAN,
    "hemoglobin" TEXT,
    "urobilinogen" TEXT,
    "sed_leukocytes" TEXT,
    "sed_erythrocytes" TEXT,
    "sed_epithelial" TEXT,
    "sed_mucus" TEXT,
    "sed_cylinders" TEXT,
    "sed_crystals" TEXT,
    "sed_bacteria" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "patient_id" TEXT NOT NULL,
    CONSTRAINT "urine_tests_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_urine_tests" ("color", "created_at", "density", "glucose", "hemoglobin", "id", "ketones", "nitrites", "ph", "protein", "sed_bacteria", "sed_crystals", "sed_cylinders", "sed_epithelial", "sed_erythrocytes", "sed_leukocytes", "sed_mucus", "updated_at", "urobilinogen", "volume") SELECT "color", "created_at", "density", "glucose", "hemoglobin", "id", "ketones", "nitrites", "ph", "protein", "sed_bacteria", "sed_crystals", "sed_cylinders", "sed_epithelial", "sed_erythrocytes", "sed_leukocytes", "sed_mucus", "updated_at", "urobilinogen", "volume" FROM "urine_tests";
DROP TABLE "urine_tests";
ALTER TABLE "new_urine_tests" RENAME TO "urine_tests";
CREATE TABLE "new_patients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "blade" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "patients_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_patients" ("age", "blade", "created_at", "genre", "id", "updated_at") SELECT "age", "blade", "created_at", "genre", "id", "updated_at" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
CREATE TABLE "new_cell_mentions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cell_id" INTEGER NOT NULL,
    "mention_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "cell_mentions_cell_id_fkey" FOREIGN KEY ("cell_id") REFERENCES "cells" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "cell_mentions_mention_id_fkey" FOREIGN KEY ("mention_id") REFERENCES "mentions" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_cell_mentions" ("cell_id", "created_at", "id", "updated_at") SELECT "cell_id", "created_at", "id", "updated_at" FROM "cell_mentions";
DROP TABLE "cell_mentions";
ALTER TABLE "new_cell_mentions" RENAME TO "cell_mentions";
CREATE TABLE "new_cells" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "morphology" TEXT NOT NULL,
    "clinical_relevance" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "created_by" TEXT NOT NULL,
    CONSTRAINT "cells_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "cells_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cells" ("category_id", "clinical_relevance", "created_at", "id", "image", "morphology", "name", "updated_at") SELECT "category_id", "clinical_relevance", "created_at", "id", "image", "morphology", "name", "updated_at" FROM "cells";
DROP TABLE "cells";
ALTER TABLE "new_cells" RENAME TO "cells";
CREATE TABLE "new_erythrocytes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "erythrocyte" REAL,
    "hemoglobin" REAL,
    "hematocrit" REAL,
    "RDW" REAL,
    "patient_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "erythrocytes_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_erythrocytes" ("RDW", "created_at", "erythrocyte", "hematocrit", "hemoglobin", "id", "updated_at") SELECT "RDW", "created_at", "erythrocyte", "hematocrit", "hemoglobin", "id", "updated_at" FROM "erythrocytes";
DROP TABLE "erythrocytes";
ALTER TABLE "new_erythrocytes" RENAME TO "erythrocytes";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'MEMBER',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_users" ("created_at", "email", "id", "name", "password", "updated_at") SELECT "created_at", "email", "id", "name", "password", "updated_at" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE TABLE "new_platelets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platelets" REAL,
    "patient_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "platelets_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_platelets" ("created_at", "id", "platelets", "updated_at") SELECT "created_at", "id", "platelets", "updated_at" FROM "platelets";
DROP TABLE "platelets";
ALTER TABLE "new_platelets" RENAME TO "platelets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
