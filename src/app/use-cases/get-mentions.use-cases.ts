import { type MentionsRepository } from '../repositories/mentions-repository';

export class GetMentionUseCase {
  constructor(private readonly categoryRepository: MentionsRepository) {}

  async execute() {
    const category = await this.categoryRepository.findAll();

    return category;
  }
}
