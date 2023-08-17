import { type CellRepository } from '../repositories/cell-repository';
import { ResourceNotFoundError } from './errors/resource-not-found.error';

interface DeleteCellUseCaseRequest {
  id: number;
}

export class DeleteCellUseCase {
  constructor(private readonly cellsRepository: CellRepository) {}

  async execute({ id }: DeleteCellUseCaseRequest): Promise<void> {
    const cellAlreadyExists = await this.cellsRepository.findById(id);

    if (!cellAlreadyExists) {
      throw new ResourceNotFoundError();
    }

    await this.cellsRepository.delete(id);
  }
}
