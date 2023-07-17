import { type FastifyRequest, type FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeSaveUrineTestUseCase } from '../use-cases/factories/make-save-urine-test.use-case';
import { ResourceNotFoundError } from '../use-cases/errors/resource-not-found.error';

export async function saveUrineTest(req: FastifyRequest, res: FastifyReply) {
  const saveUrineTestParamsSchema = z.object({
    id: z.coerce.number(),
  });

  const saveUrineTestBodySchema = z.object({
    volume: z.coerce.number(),
    color: z.string(),
    ph: z.coerce.number(),
    density: z.coerce.number(),
    protein: z.string(),
    glucose: z.string(),
    ketones: z.string(),
    nitrites: z.boolean(),
    hemoglobin: z.string(),
    urobilinogen: z.string(),
    leukocytes: z.string(),
    erythrocytes: z.string(),
    epithelialCells: z.string(),
    mucus: z.string(),
    bacteria: z.string(),
    crystals: z.string(),
    cylinders: z.string(),
  });

  const { id } = saveUrineTestParamsSchema.parse(req.params);

  const {
    density,
    ph,
    volume,
    bacteria,
    color,
    crystals,
    cylinders,
    epithelialCells,
    erythrocytes,
    glucose,
    hemoglobin,
    ketones,
    leukocytes,
    mucus,
    nitrites,
    protein,
    urobilinogen,
  } = saveUrineTestBodySchema.parse(req.body);

  const saveUrineTestUseCase = makeSaveUrineTestUseCase();

  try {
    const { patient } = await saveUrineTestUseCase.execute({
      id,
      density,
      ph,
      volume,
      bacteria,
      color,
      crystals,
      cylinders,
      epithelialCells,
      erythrocytes,
      glucose,
      hemoglobin,
      ketones,
      leukocytes,
      mucus,
      nitrites,
      protein,
      urobilinogen,
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
