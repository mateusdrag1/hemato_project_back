import { type FastifyRequest, type FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeSaveErythrocyteUseCase } from '@/app/use-cases/factories/make-save-erythrocyte.use-case';
import { ResourceNotFoundError } from '@/app/use-cases/errors/resource-not-found.error';

export async function saveErythrocyte(req: FastifyRequest, res: FastifyReply) {
  const saveErythrocyteParamsSchema = z.object({
    id: z.string(),
  });

  const saveErythrocyteBodySchema = z.object({
    erythrocyte: z.coerce.number(),
    hemoglobin: z.coerce.number(),
    hematocrit: z.coerce.number(),
    rdw: z.coerce.number(),
  });

  const { id } = saveErythrocyteParamsSchema.parse(req.params);

  const { erythrocyte, hemoglobin, hematocrit, rdw } = saveErythrocyteBodySchema.parse(req.body);

  const saveErythrocyteUseCase = makeSaveErythrocyteUseCase();

  try {
    const { patient } = await saveErythrocyteUseCase.execute({
      id,
      erythrocyte,
      hemoglobin,
      hematocrit,
      rdw,
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
