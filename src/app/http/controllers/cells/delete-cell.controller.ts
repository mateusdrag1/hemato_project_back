import { type FastifyReply, type FastifyRequest } from 'fastify';
import { z } from 'zod';

import { ResourceNotFoundError } from '@/app/use-cases/errors/resource-not-found.error';
import { makeDeleteCellUseCase } from '@/app/use-cases/factories/make-delete-cell.use-case';

export async function deleteCell(req: FastifyRequest, res: FastifyReply) {
  const deleteCellParamsSchema = z.object({
    id: z.coerce.number(),
  });

  const deleteCellParams = deleteCellParamsSchema.parse(req.body);

  try {
    const deleteCellUseCase = makeDeleteCellUseCase();

    await deleteCellUseCase.execute({
      id: deleteCellParams.id,
    });

    res.status(201).send({
      message: 'Cell deleted successfully',
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
