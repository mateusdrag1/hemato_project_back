import { PrismaMentionsRepository } from '@/app/repositories/prisma/prisma-mentions-repository';
import { CreateMentionUseCase } from '../create-mention.use-cases';

export function makeCreateMentionsUseCase() {
  const categoryRepository = new PrismaMentionsRepository();
  const createMentionsUseCase = new CreateMentionUseCase(categoryRepository);
  return createMentionsUseCase;
}
