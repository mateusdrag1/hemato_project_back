import { PrismaUsersRepository } from '@/app/repositories/prisma/prisma-users-repository';
import { RegisterUseCase } from '../register.use-cases';

export function makeRegisterUseCase(): RegisterUseCase {
  const usersRepository = new PrismaUsersRepository();
  const registerUseCase = new RegisterUseCase(usersRepository);

  return registerUseCase;
}
