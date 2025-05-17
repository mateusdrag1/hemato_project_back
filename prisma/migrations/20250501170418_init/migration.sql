-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'MEMBER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patients" (
    "id" TEXT NOT NULL,
    "blade" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "erythrocytes" (
    "id" SERIAL NOT NULL,
    "erythrocyte" DOUBLE PRECISION,
    "hemoglobin" DOUBLE PRECISION,
    "hematocrit" DOUBLE PRECISION,
    "RDW" DOUBLE PRECISION,
    "patient_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "erythrocytes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leukocytes" (
    "id" SERIAL NOT NULL,
    "leukocyte" DOUBLE PRECISION,
    "neutrophils" DOUBLE PRECISION,
    "bandNeutrophils" DOUBLE PRECISION,
    "lymphocytes" DOUBLE PRECISION,
    "monocytes" DOUBLE PRECISION,
    "eosinophils" DOUBLE PRECISION,
    "basophils" DOUBLE PRECISION,
    "patient_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leukocytes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platelets" (
    "id" SERIAL NOT NULL,
    "platelets" DOUBLE PRECISION,
    "patient_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platelets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "urine_tests" (
    "id" SERIAL NOT NULL,
    "volume" DOUBLE PRECISION,
    "color" TEXT,
    "ph" DOUBLE PRECISION,
    "density" DOUBLE PRECISION,
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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "patient_id" TEXT NOT NULL,

    CONSTRAINT "urine_tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cells" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "morphology" TEXT NOT NULL,
    "clinical_relevance" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "cells_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mentions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mentions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cell_mentions" (
    "id" SERIAL NOT NULL,
    "cell_id" INTEGER NOT NULL,
    "mention_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cell_mentions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "erythrocytes" ADD CONSTRAINT "erythrocytes_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leukocytes" ADD CONSTRAINT "leukocytes_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "platelets" ADD CONSTRAINT "platelets_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "urine_tests" ADD CONSTRAINT "urine_tests_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cells" ADD CONSTRAINT "cells_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cells" ADD CONSTRAINT "cells_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cell_mentions" ADD CONSTRAINT "cell_mentions_cell_id_fkey" FOREIGN KEY ("cell_id") REFERENCES "cells"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cell_mentions" ADD CONSTRAINT "cell_mentions_mention_id_fkey" FOREIGN KEY ("mention_id") REFERENCES "mentions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
