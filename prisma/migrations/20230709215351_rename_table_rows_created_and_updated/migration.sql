/*
  Warnings:

  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `leukocytes` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `leukocytes` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `platelets` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `platelets` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `erythrocytes` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `erythrocytes` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `patients` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `patients` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `leukocytes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `platelets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `erythrocytes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `patients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_users" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE TABLE "new_leukocytes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "leukocyte" REAL,
    "neutrophils" REAL,
    "bandNeutrophils" REAL,
    "lymphocytes" REAL,
    "monocytes" REAL,
    "eosinophils" REAL,
    "basophils" REAL,
    "patientId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "leukocytes_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_leukocytes" ("bandNeutrophils", "basophils", "eosinophils", "id", "leukocyte", "lymphocytes", "monocytes", "neutrophils", "patientId") SELECT "bandNeutrophils", "basophils", "eosinophils", "id", "leukocyte", "lymphocytes", "monocytes", "neutrophils", "patientId" FROM "leukocytes";
DROP TABLE "leukocytes";
ALTER TABLE "new_leukocytes" RENAME TO "leukocytes";
CREATE TABLE "new_platelets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platelets" REAL,
    "patientId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "platelets_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_platelets" ("id", "patientId", "platelets") SELECT "id", "patientId", "platelets" FROM "platelets";
DROP TABLE "platelets";
ALTER TABLE "new_platelets" RENAME TO "platelets";
CREATE TABLE "new_erythrocytes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "erythrocyte" REAL,
    "hemoglobin" REAL,
    "hematocrit" REAL,
    "RDW" REAL,
    "patientId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "erythrocytes_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_erythrocytes" ("RDW", "erythrocyte", "hematocrit", "hemoglobin", "id", "patientId") SELECT "RDW", "erythrocyte", "hematocrit", "hemoglobin", "id", "patientId" FROM "erythrocytes";
DROP TABLE "erythrocytes";
ALTER TABLE "new_erythrocytes" RENAME TO "erythrocytes";
CREATE TABLE "new_patients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "blade" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_patients" ("age", "blade", "genre", "id") SELECT "age", "blade", "genre", "id" FROM "patients";
DROP TABLE "patients";
ALTER TABLE "new_patients" RENAME TO "patients";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
