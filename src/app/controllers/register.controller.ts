import { type FastifyReply, type FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeRegisterUseCase } from '../use-cases/factories/make-register.use-case';
import { UserAlreadyExists } from '../use-cases/errors/user-already-exists.error';

export async function register(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string().min(2).max(32),
    email: z.string().email(),
    password: z.string().min(6).max(32),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);

  try {
    const registerUseCase = makeRegisterUseCase();

    await registerUseCase.execute({ name, email, password });

    return res.status(201).send();
  } catch (err) {
    if (err instanceof UserAlreadyExists) {
      return res.status(409).send({
        error: 'User already exists',
      });
    }

    throw err;
  }
}
