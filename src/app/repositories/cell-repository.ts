import { type Cell, type Prisma } from '@prisma/client';

export interface CellRepository {
  create: (data: Prisma.CellCreateInput) => Promise<Cell>;
  findById: (id: number) => Promise<Cell | null>;
  findByName: (name: string) => Promise<Cell | null>;
}
