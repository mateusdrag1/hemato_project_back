import { PrismaCategoryRepository } from '@/app/repositories/prisma/prisma-category-repository';
import { GetCategoryUseCase } from '../get-categories.use-cases';

export function makeGetCategoriesUseCases(): GetCategoryUseCase {
  const categoryRepository = new PrismaCategoryRepository();
  const getCategoryUseCase = new GetCategoryUseCase(categoryRepository);

  return getCategoryUseCase;
}
