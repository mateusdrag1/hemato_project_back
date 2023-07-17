import { PrismaCellRepository } from '@/app/repositories/prisma/prisma-cells-repository';
import { GetCellsUseCase } from '../get-cells.use-cases';

export function makeGetCellsUseCase() {
  const cellsRepository = new PrismaCellRepository();
  const getCellsUseCase = new GetCellsUseCase(cellsRepository);

  return getCellsUseCase;
}
