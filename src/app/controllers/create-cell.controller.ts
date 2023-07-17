import { type FastifyReply, type FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeCreateCellUseCase } from '../use-cases/factories/make-create-cell.use-case';
import { ResourceAlreadyExistsError } from '../use-cases/errors/resource-already-exists.error';
import { ResourceNotFoundError } from '../use-cases/errors/resource-not-found.error';

export async function createCell(req: FastifyRequest, res: FastifyReply) {
  const createCellBodySchema = z.object({
    name: z.string().min(3).max(256),
    morphology: z.string().min(3).max(256),
    clinical_relevance: z.string().min(3).max(256),
    image: z.string().min(3).max(256),
    category_id: z.coerce.number(),
  });

  const createCellBody = createCellBodySchema.parse(req.body);

  try {
    const createCellUseCase = makeCreateCellUseCase();

    const cell = await createCellUseCase.execute(createCellBody);

    res.status(201).send({
      cell,
    });
  } catch (err) {
    if (err instanceof ResourceAlreadyExistsError) {
      return res.status(409).send({
        message: err.message,
      });
    }

    if (err instanceof ResourceNotFoundError) {
      return res.status(404).send({
        message: err.message,
      });
    }

    throw err;
  }
}
