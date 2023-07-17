import prisma from '@/database/PrismaClient';
import { type Prisma } from '@prisma/client';
import { type CellsRepository } from '../cells-repository';

export class PrismaCellsRepository implements CellsRepository {
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
}
