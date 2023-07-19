import { type FastifyRequest, type FastifyReply } from 'fastify';
import { makeGetCellUseCase } from '@/app/use-cases/factories/make-get-cell-by-id.use-case';
import { z } from 'zod';
import { ResourceNotFoundError } from '@/app/use-cases/errors/resource-not-found.error';

export async function getCellById(req: FastifyRequest, res: FastifyReply) {
  const getCellByIdParamsSchema = z.object({
    id: z.coerce.number(),
  });

  const { id } = getCellByIdParamsSchema.parse(req.params);

  try {
    const getCellUseCase = makeGetCellUseCase();

    const cell = await getCellUseCase.execute({
      id,
    });

    res.status(200).send(cell);
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return res.status(404).send({
        message: err.message,
      });
    }

    throw err;
  }
}
