-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Platelets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platelets" REAL,
    "patientId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Platelets_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Platelets" ("createdAt", "id", "patientId", "platelets", "updatedAt") SELECT "createdAt", "id", "patientId", "platelets", "updatedAt" FROM "Platelets";
DROP TABLE "Platelets";
ALTER TABLE "new_Platelets" RENAME TO "Platelets";
CREATE TABLE "new_Leukocyte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "leukocyte" REAL,
    "neutrophils" REAL,
    "bandNeutrophils" REAL,
    "lymphocytes" REAL,
    "monocytes" REAL,
    "eosinophils" REAL,
    "basophils" REAL,
    "patientId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Leukocyte_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Leukocyte" ("bandNeutrophils", "basophils", "createdAt", "eosinophils", "id", "leukocyte", "lymphocytes", "monocytes", "neutrophils", "patientId", "updatedAt") SELECT "bandNeutrophils", "basophils", "createdAt", "eosinophils", "id", "leukocyte", "lymphocytes", "monocytes", "neutrophils", "patientId", "updatedAt" FROM "Leukocyte";
DROP TABLE "Leukocyte";
ALTER TABLE "new_Leukocyte" RENAME TO "Leukocyte";
CREATE TABLE "new_Erythrocyte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "erythrocyte" REAL,
    "hemoglobin" REAL,
    "hematocrit" REAL,
    "RDW" REAL,
    "patientId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Erythrocyte_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Erythrocyte" ("RDW", "createdAt", "erythrocyte", "hematocrit", "hemoglobin", "id", "patientId", "updatedAt") SELECT "RDW", "createdAt", "erythrocyte", "hematocrit", "hemoglobin", "id", "patientId", "updatedAt" FROM "Erythrocyte";
DROP TABLE "Erythrocyte";
ALTER TABLE "new_Erythrocyte" RENAME TO "Erythrocyte";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
