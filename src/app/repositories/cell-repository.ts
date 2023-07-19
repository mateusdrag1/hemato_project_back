import { type Cell, type Prisma } from '@prisma/client';

export interface CellRepository {
  create: (data: Prisma.CellCreateInput) => Promise<Cell>;
  findById: (id: number) => Promise<Omit<Cell, 'category_id' | 'created_by'> | null>;
  findByName: (name: string) => Promise<Cell | null>;
  findAll: () => Promise<Array<Omit<Cell, 'category_id' | 'created_by'>>>;
}
