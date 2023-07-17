import { type CellRepository } from '../repositories/cell-repository';
import { type CategoryRepository } from '../repositories/category-repository';
import { ResourceNotFoundError } from './errors/resource-not-found.error';
import { ResourceAlreadyExistsError } from './errors/resource-already-exists.error';

interface CreateCellUseCaseRequest {
  name: string;
  morphology: string;
  clinical_relevance: string;
  image: string;
  category_id: number;
}

interface CreateCellUseCaseResponse {
  id: number;
  name: string;
  morphology: string;
  clinical_relevance: string;
  image: string;
  category_id: number;
  created_at: Date;
  updated_at: Date;
}

export class CreateCellUseCase {
  constructor(
    private readonly cellRepository: CellRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute(data: CreateCellUseCaseRequest): Promise<CreateCellUseCaseResponse> {
    const category = await this.categoryRepository.findById(data.category_id);

    if (!category) {
      throw new ResourceNotFoundError();
    }

    const cellExists = await this.cellRepository.findByName(data.name);

    if (cellExists) {
      throw new ResourceAlreadyExistsError();
    }

    const cellData = {
      name: data.name,
      morphology: data.morphology,
      clinical_relevance: data.clinical_relevance,
      image: data.image,
      category: {
        connect: {
          id: category?.id,
        },
      },
    };

    const cell = await this.cellRepository.create(cellData);

    return cell;
  }
}
