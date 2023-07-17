import { type FastifyReply, type FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateMentionsUseCase } from '../use-cases/factories/make-create-mention.use-cases';
import { ResourceAlreadyExistsError } from '../use-cases/errors/resource-already-exists.error';

export async function createMention(request: FastifyRequest, response: FastifyReply) {
  const createMentionBodySchema = z.object({
    name: z.string().min(3).max(128),
    url: z.string().min(3).max(256).optional(),
  });

  const data = createMentionBodySchema.parse(request.body);

  try {
    const createMentionUseCase = makeCreateMentionsUseCase();
    const mention = await createMentionUseCase.execute(data);

    return response.status(201).send(mention);
  } catch (err) {
    if (err instanceof ResourceAlreadyExistsError) {
      return response.status(409).send({
        error: 'Resource already exists',
      });
    }

    throw err;
  }
}
