import { type FastifyReply, type FastifyRequest } from 'fastify';
import { makeRemovePatientUseCase } from '@/app/use-cases/factories/make-remove-patient.use-cases';
import { z } from 'zod';
import { ResourceNotFoundError } from '@/app/use-cases/errors/resource-not-found.error';

export async function removePatient(req: FastifyRequest, res: FastifyReply) {
  const removePatientParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = removePatientParamsSchema.parse(req.params);

  const removePatientUseCase = makeRemovePatientUseCase();

  try {
    await removePatientUseCase.execute({
      id,
    });

    return res.status(204).send();
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return res.status(404).send({
        message: err.message,
      });
    }

    throw err;
  }
}
