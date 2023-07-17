import { type CategoryRepository } from '../repositories/category-repository';

export class GetCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute() {
    const category = await this.categoryRepository.findAll();

    return category;
  }
}
