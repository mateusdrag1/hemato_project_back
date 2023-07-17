import prisma from '@/database/PrismaClient';
import { type Prisma } from '@prisma/client';
import { type CellRepository } from '../cell-repository';

export class PrismaCellRepository implements CellRepository {
  async create(data: Prisma.CellCreateInput) {
    const cell = await prisma.cell.create({
      data,
    });

    return cell;
  }

  async findById(id: number) {
    const cell = await prisma.cell.findUnique({
      where: {
        id,
      },
    });

    return cell;
  }

  async findByName(name: string) {
    const cell = await prisma.cell.findFirst({
      where: {
        name,
      },
    });

    return cell;
  }
}
