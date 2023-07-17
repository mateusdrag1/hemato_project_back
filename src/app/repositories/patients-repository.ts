import { type Patients, type Prisma } from '@prisma/client';

export interface PatientsRepository {
  all: () => Promise<Patients[]>;
  create: (data: Prisma.PatientsCreateInput) => Promise<Patients>;
  findById: (id: number) => Promise<Patients | null>;
  findByBlade: (blade: string) => Promise<Patients | null>;
  update: (id: number, data: Prisma.PatientsUpdateInput) => Promise<Patients | null>;
  delete: (id: number) => Promise<null>;

  addErythrocyte: (
    id: number,
    data: Omit<Prisma.ErythrocyteCreateInput, 'patient'>,
  ) => Promise<Patients | null>;
  addLeukocyte: (
    id: number,
    data: Omit<Prisma.LeukocyteCreateInput, 'patient'>,
  ) => Promise<Patients | null>;
  addPlatelets: (
    id: number,
    data: Omit<Prisma.PlateletsCreateInput, 'patient'>,
  ) => Promise<Patients | null>;
  addUrineTest: (
    id: number,
    data: Omit<Prisma.UrineCreateInput, 'patient'>,
  ) => Promise<Patients | null>;
}
