import { type Patients, type Prisma } from '@prisma/client';

export interface PatientsRepository {
  all: () => Promise<Patients[]>;
  create: (data: Prisma.PatientsCreateInput) => Promise<Patients>;
  findById: (id: number) => Promise<Patients | null>;
  update: (id: number, data: Prisma.PatientsUpdateInput) => Promise<Patients | null>;
  delete: (id: number) => Promise<Patients | null>;

  addErythrocyte: (id: number, data: Prisma.ErythrocyteCreateInput) => Promise<Patients | null>;
  addLeukocyte: (id: number, data: Prisma.LeukocyteCreateInput) => Promise<Patients | null>;
  addPlatelets: (id: number, data: Prisma.PlateletsCreateInput) => Promise<Patients | null>;
}
