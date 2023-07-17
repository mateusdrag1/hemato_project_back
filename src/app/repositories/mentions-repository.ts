import { type Mention, type Prisma } from '@prisma/client';

export interface MentionsRepository {
  create: (data: Prisma.MentionCreateInput) => Promise<Mention>;
  findById: (id: number) => Promise<Mention | null>;
  findAll: () => Promise<Mention[]>;
}
