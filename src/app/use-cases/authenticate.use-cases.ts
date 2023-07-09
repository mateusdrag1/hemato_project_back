import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { type UsersRepository } from '../repositories/users-repository';
import { env } from '@/env';
import { InvalidCredentialsError } from './errors/invalid-credentials.error';

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  name: string;
  token: string;
}

export class AuthenticateUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new InvalidCredentialsError();
    }

    const token = sign(
      {
        id: user.id,
      },
      env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    );

    return {
      name: user.name,
      token,
    };
  }
}
