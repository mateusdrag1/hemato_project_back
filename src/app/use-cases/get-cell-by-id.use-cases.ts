import { type Cell } from '@prisma/client';
import { type CellRepository } from '../repositories/cell-repository';
import { ResourceNotFoundError } from './errors/resource-not-found.error';

interface GetCellUseCaseRequest {
  id: number;
}

interface GetCellUseCaseResponse {
  cell: Omit<Cell, 'category_id' | 'created_by'>;
}

export class GetCellUseCase {
  constructor(private readonly cellsRepository: CellRepository) {}

  async execute({ id }: GetCellUseCaseRequest): Promise<GetCellUseCaseResponse> {
    const cell = await this.cellsRepository.findById(id);

    if (!cell) {
      throw new ResourceNotFoundError();
    }

    return {
      cell,
    };
  }
}
