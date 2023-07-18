import { type FastifyReply, type FastifyRequest } from 'fastify';
import { makeCreateCategoryUseCase } from '@/app/use-cases/factories/make-create-category.use-case';
import { z } from 'zod';
import { ResourceAlreadyExistsError } from '@/app/use-cases/errors/resource-already-exists.error';

export async function createCategory(request: FastifyRequest, response: FastifyReply) {
  const createCategoryBodySchema = z.object({
    name: z.string().min(3).max(32),
  });

  const { name } = createCategoryBodySchema.parse(request.body);

  try {
    const createCategoryUseCase = makeCreateCategoryUseCase();
    const category = await createCategoryUseCase.execute({ name });

    return response.status(201).send(category);
  } catch (err) {
    if (err instanceof ResourceAlreadyExistsError) {
      return response.status(409).send({
        error: 'Resource already exists',
      });
    }

    throw err;
  }
}
