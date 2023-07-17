import { PrismaMentionsRepository } from '@/app/repositories/prisma/prisma-mentions-repository';
import { GetMentionUseCase } from '../get-mentions.use-cases';

export function makeGetMentionsUseCases(): GetMentionUseCase {
  const mentionsRepository = new PrismaMentionsRepository();
  const getMentionsUseCase = new GetMentionUseCase(mentionsRepository);

  return getMentionsUseCase;
}
