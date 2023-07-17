import { type CategoryRepository } from '../repositories/category-repository';
import { ResourceAlreadyExistsError } from './errors/resource-already-exists.error';

interface CreateCategoryUseCaseRequest {
  name: string;
}

interface CreateCategoryUseCaseResponse {
  id: number;
  name: string;
}

export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(data: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(data.name);

    if (categoryAlreadyExists) {
      throw new ResourceAlreadyExistsError();
    }

    const category = await this.categoryRepository.create(data);

    return category;
  }
}
