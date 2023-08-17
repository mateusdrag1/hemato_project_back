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
      select: {
        category: {
          select: {
            name: true,
          },
        },
        id: true,
        name: true,
        image: true,
        morphology: true,
        clinical_relevance: true,
        created_at: true,
        updated_at: true,
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

  async findAll() {
    const cells = await prisma.cell.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        clinical_relevance: true,
        morphology: true,
        category: {
          select: {
            name: true,
          },
        },
        owner: {
          select: {
            id: true,
          },
        },
        created_at: true,
        updated_at: true,
      },
    });

    return cells;
  }

  async delete(id: number) {
    await prisma.cell.delete({
      where: {
        id,
      },
    });
  }
}
