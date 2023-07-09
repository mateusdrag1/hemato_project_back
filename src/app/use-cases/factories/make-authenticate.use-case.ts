import { PrismaUsersRepository } from '@/app/repositories/prisma/prisma-users-repository';
import { AuthenticateUseCase } from '../authenticate.use-cases';

export function makeAuthenticateUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const authenticateUseCase = new AuthenticateUseCase(usersRepository);
  return authenticateUseCase;
}
