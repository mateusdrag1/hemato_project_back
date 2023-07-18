import { type Patients, type Prisma } from '@prisma/client';

export interface PatientsRepository {
  all: () => Promise<Patients[]>;
  create: (data: Prisma.PatientsCreateInput) => Promise<Patients>;
  findById: (id: string) => Promise<Patients | null>;
  findByBlade: (blade: string) => Promise<Patients | null>;
  update: (id: string, data: Prisma.PatientsUpdateInput) => Promise<Patients | null>;
  delete: (id: string) => Promise<null>;

  addErythrocyte: (
    id: string,
    data: Omit<Prisma.ErythrocyteCreateInput, 'patient'>,
  ) => Promise<Patients | null>;
  addLeukocyte: (
    id: string,
    data: Omit<Prisma.LeukocyteCreateInput, 'patient'>,
  ) => Promise<Patients | null>;
  addPlatelets: (
    id: string,
    data: Omit<Prisma.PlateletsCreateInput, 'patient'>,
  ) => Promise<Patients | null>;
  addUrineTest: (
    id: string,
    data: Omit<Prisma.UrineCreateInput, 'patient'>,
  ) => Promise<Patients | null>;
}
