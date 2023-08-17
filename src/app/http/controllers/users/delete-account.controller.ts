import { InvalidCredentialsError } from '@/app/use-cases/errors/invalid-credentials.error';
import { makeDeleteAccountUseCase } from '@/app/use-cases/factories/make-delete-account.use-case';

import { type FastifyReply, type FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function deleteAccount(req: FastifyRequest, res: FastifyReply) {
  const deleteAccountBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(32),
  });

  const { email, password } = deleteAccountBodySchema.parse(req.body);

  try {
    const deleteAccountUseCase = makeDeleteAccountUseCase();

    await deleteAccountUseCase.execute({
      email,
      password,
    });

    return res.status(204).send();
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return res.status(401).send({
        error: 'Invalid credentials',
      });
    }

    throw err;
  }
}
