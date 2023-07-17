import { PrismaCellRepository } from '@/app/repositories/prisma/prisma-cells-repository';
import { CreateCellUseCase } from '../create-cell.use-cases';
import { PrismaCategoryRepository } from '@/app/repositories/prisma/prisma-category-repository';

export function makeCreateCellUseCase() {
  const cellRepository = new PrismaCellRepository();
  const categoryRepository = new PrismaCategoryRepository();
  const createCreateCellUseCase = new CreateCellUseCase(cellRepository, categoryRepository);
  return createCreateCellUseCase;
}
