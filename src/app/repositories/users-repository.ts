import { type User, type Prisma } from '@prisma/client';

export interface UsersRepository {
  create: (data: Prisma.UserCreateInput) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
  findById: (id: number) => Promise<User | null>;
}