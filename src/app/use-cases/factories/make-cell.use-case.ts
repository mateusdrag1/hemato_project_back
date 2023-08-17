import { PrismaCellRepository } from '@/app/repositories/prisma/prisma-cells-repository';
import { DeleteCellUseCase } from '../delete-cell.use-cases';

export function makeDeleteCellUseCase() {
  const cellsRepository = new PrismaCellRepository();
  const deleteCellUseCase = new DeleteCellUseCase(cellsRepository);
  return deleteCellUseCase;
}
