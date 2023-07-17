import { CreateCategoryUseCase } from '../create-category.use-cases';
import { PrismaCategoryRepository } from '@/app/repositories/prisma/prisma-category-repository';

export function makeCreateCategoryUseCase() {
  const categoryRepository = new PrismaCategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
  return createCategoryUseCase;
}
