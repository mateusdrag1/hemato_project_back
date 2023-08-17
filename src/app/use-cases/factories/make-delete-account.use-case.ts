import { PrismaUsersRepository } from '@/app/repositories/prisma/prisma-users-repository';
import { DeleteAccountUseCase } from '../delete-account.use-cases';

export function makeDeleteAccountUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const deleteAccountUseCase = new DeleteAccountUseCase(usersRepository);
  return deleteAccountUseCase;
}
