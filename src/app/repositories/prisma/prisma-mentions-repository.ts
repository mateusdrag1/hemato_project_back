import prisma from '@/database/PrismaClient';
import { type Prisma } from '@prisma/client';
import { type MentionsRepository } from '../mentions-repository';

export class PrismaMentionsRepository implements MentionsRepository {
  async create(data: Prisma.MentionCreateInput) {
    const mention = await prisma.mention.create({
      data,
    });

    return mention;
  }

  async findById(id: number) {
    const mention = await prisma.mention.findUnique({
      where: {
        id,
      },
    });

    return mention;
  }

  async findAll() {
    const mentions = await prisma.mention.findMany();

    return mentions;
  }

  async findByName(name: string) {
    const mention = await prisma.mention.findFirst({
      where: {
        name,
      },
    });

    return mention;
  }
}
