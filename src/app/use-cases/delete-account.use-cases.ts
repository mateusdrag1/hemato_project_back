import { type UsersRepository } from '../repositories/users-repository';
import { compare } from 'bcrypt';

import { InvalidCredentialsError } from './errors/invalid-credentials.error';

interface DeleteAccountUseCaseRequest {
  email: string;
  password: string;
}

export class DeleteAccountUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({ email, password }: DeleteAccountUseCaseRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (!userAlreadyExists) {
      throw new InvalidCredentialsError();
    }

    const passwordMatch = await compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      throw new InvalidCredentialsError();
    }

    await this.usersRepository.delete({
      email,
    });
  }
}
