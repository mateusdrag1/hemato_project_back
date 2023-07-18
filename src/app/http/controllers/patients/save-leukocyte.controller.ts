import { type FastifyRequest, type FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeSaveLeukocyteUseCase } from '@/app/use-cases/factories/make-save-leukocyte.use-case';
import { ResourceNotFoundError } from '@/app/use-cases/errors/resource-not-found.error';

export async function saveLeukocyte(req: FastifyRequest, res: FastifyReply) {
  const saveLeukocyteParamsSchema = z.object({
    id: z.string(),
  });

  const saveLeukocyteBodySchema = z.object({
    bandNeutrophils: z.coerce.number(),
    basophils: z.coerce.number(),
    eosinophils: z.coerce.number(),
    leukocyte: z.coerce.number(),
    lymphocytes: z.coerce.number(),
    monocytes: z.coerce.number(),
    neutrophils: z.coerce.number(),
  });

  const { id } = saveLeukocyteParamsSchema.parse(req.params);

  const {
    bandNeutrophils,
    basophils,
    eosinophils,
    leukocyte,
    lymphocytes,
    monocytes,
    neutrophils,
  } = saveLeukocyteBodySchema.parse(req.body);

  const saveLeukocyteUseCase = makeSaveLeukocyteUseCase();

  try {
    const { patient } = await saveLeukocyteUseCase.execute({
      id,
      bandNeutrophils,
      basophils,
      eosinophils,
      leukocyte,
      lymphocytes,
      monocytes,
      neutrophils,
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
