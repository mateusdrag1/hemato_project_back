import { type FastifyReply, type FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeAuthenticateUseCase } from '../use-cases/factories/make-authenticate.use-case';
import { InvalidCredentialsError } from '../use-cases/errors/invalid-credentials.error';

export async function authenticate(req: FastifyRequest, res: FastifyReply) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(32),
  });

  const { email, password } = authenticateBodySchema.parse(req.body);

  try {
    const authenticateUseCase = makeAuthenticateUseCase();

    const data = await authenticateUseCase.execute({ email, password });

    return res.status(200).send(data);
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return res.status(401).send({
        error: 'Invalid credentials',
      });
    }

    throw err;
  }
}
