import { type Prisma, type Category } from '@prisma/client';

export interface CategoryRepository {
  create: (data: Prisma.CategoryCreateInput) => Promise<Category>;
  findById: (id: number) => Promise<Category | null>;
  findByName: (name: string) => Promise<Category | null>;
  findAll: () => Promise<Category[]>;
}
