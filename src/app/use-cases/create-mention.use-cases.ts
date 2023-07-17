import { type MentionsRepository } from '../repositories/mentions-repository';
import { ResourceAlreadyExistsError } from './errors/resource-already-exists.error';

interface CreateMentionUseCaseRequest {
  name: string;
  url?: string;
}

interface CreateMentionUseCaseResponse {
  id: number;
  name: string;
}

export class CreateMentionUseCase {
  constructor(private readonly mentionsRepository: MentionsRepository) {}

  async execute(data: CreateMentionUseCaseRequest): Promise<CreateMentionUseCaseResponse> {
    const mentionAlreadyExists = await this.mentionsRepository.findByName(data.name);

    if (mentionAlreadyExists) {
      throw new ResourceAlreadyExistsError();
    }

    const mentions = await this.mentionsRepository.create(data);

    return mentions;
  }
}
