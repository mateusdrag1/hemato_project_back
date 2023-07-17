import { type CellRepository } from '../repositories/cell-repository';

export class GetCellsUseCase {
  constructor(private readonly cellsRepository: CellRepository) {}

  async execute() {
    const cells = await this.cellsRepository.findAll();

    return cells;
  }
}
