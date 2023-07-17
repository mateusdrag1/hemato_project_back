import { type Prisma } from '@prisma/client';
import { type CategoryRepository } from '../category-repository';
import prisma from '@/database/PrismaClient';

export class PrismaCategoryRepository implements CategoryRepository {
  async create(data: Prisma.CategoryCreateInput) {
    const category = await prisma.category.create({
      data,
    });

    return category;
  }

  async findById(id: number) {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    return category;
  }

  async findByName(name: string) {
    const category = await prisma.category.findFirst({
      where: {
        name,
      },
    });

    return category;
  }

  async findAll() {
    const categories = await prisma.category.findMany();

    return categories;
  }
}
