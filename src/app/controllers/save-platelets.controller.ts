import { type FastifyRequest, type FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeSavePlateletsUseCase } from '../use-cases/factories/make-save-platelets.use-case';
import { ResourceNotFoundError } from '../use-cases/errors/resource-not-found.error';

export async function savePlatelets(req: FastifyRequest, res: FastifyReply) {
  const savePlateletsParamsSchema = z.object({
    id: z.coerce.number(),
  });

  const savePlateletsBodySchema = z.object({
    platelets: z.coerce.number(),
  });

  const { id } = savePlateletsParamsSchema.parse(req.params);

  const { platelets } = savePlateletsBodySchema.parse(req.body);

  const savePlateletsUseCase = makeSavePlateletsUseCase();

  try {
    const { patient } = await savePlateletsUseCase.execute({
      id,
      platelets,
    });

    return res.status(201).send({
      patient,
    });
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return res.status(404).send({
        message: err.message,
      });
    }

    throw err;
  }
}
