import { type Cell, type Prisma } from '@prisma/client';

export interface CellsRepository {
  create: (data: Prisma.CellCreateInput) => Promise<Cell>;
  findById: (id: number) => Promise<Cell | null>;
}
