import { PrismaCellRepository } from '@/app/repositories/prisma/prisma-cells-repository';
import { GetCellUseCase } from '../get-cell-by-id.use-cases';

export function makeGetCellUseCase() {
  const cellsRepository = new PrismaCellRepository();
  const getCellUseCase = new GetCellUseCase(cellsRepository);

  return getCellUseCase;
}
