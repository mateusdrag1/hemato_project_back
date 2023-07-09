import { type Prisma } from '@prisma/client';
import { type PatientsRepository } from '../patients-repository';
import prisma from '@/database/PrismaClient';

export class PrismaPatientsRepository implements PatientsRepository {
  async all() {
    const patients = await prisma.patients.findMany({
      include: {
        erythrocyte: true,
        leukocyte: true,
        platelets: true,
      },
    });

    return patients;
  }

  async create(data: Prisma.PatientsCreateInput) {
    const patient = await prisma.patients.create({
      data,
    });

    return patient;
  }

  async findById(id: number) {
    const patient = await prisma.patients.findUnique({
      where: {
        id,
      },
      include: {
        erythrocyte: true,
        leukocyte: true,
        platelets: true,
      },
    });

    return patient;
  }

  async update(id: number, data: Prisma.PatientsUpdateInput) {
    const patient = await prisma.patients.update({
      where: {
        id,
      },
      data,
    });

    return patient;
  }

  async delete(id: number) {
    await prisma.patients.delete({
      where: {
        id,
      },
    });

    return null;
  }

  async addErythrocyte(id: number, data: Prisma.ErythrocyteCreateInput) {
    const patient = await prisma.patients.update({
      where: {
        id,
      },
      data: {
        erythrocyte: {
          create: data,
        },
      },
    });

    return patient;
  }

  async addLeukocyte(id: number, data: Prisma.LeukocyteCreateInput) {
    const patient = await prisma.patients.update({
      where: {
        id,
      },
      data: {
        leukocyte: {
          create: data,
        },
      },
    });

    return patient;
  }

  async addPlatelets(id: number, data: Prisma.PlateletsCreateInput) {
    const patient = await prisma.patients.update({
      where: {
        id,
      },
      data: {
        platelets: {
          create: data,
        },
      },
    });

    return patient;
  }

  async findByBlade(blade: string) {
    const patient = await prisma.patients.findFirst({
      where: {
        blade,
      },
    });

    return patient;
  }
}
