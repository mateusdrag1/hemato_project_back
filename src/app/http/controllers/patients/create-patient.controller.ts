import { PatientAlreadyExistsError } from '@/app/use-cases/errors/patient-already-exists.error';
import { makeCreatePatientUseCase } from '@/app/use-cases/factories/make-create-patient.use-case';
import { type FastifyRequest, type FastifyReply } from 'fastify';
import { z } from 'zod';

export async function createPatient(req: FastifyRequest, res: FastifyReply) {
  const createPatientBodySchema = z.object({
    blade: z.string().min(0).max(4),
    age: z.number().min(0),
    genre: z.string().min(1).max(1),
  });

  const { blade, age, genre } = createPatientBodySchema.parse(req.body);

  try {
    const createPatientUseCase = makeCreatePatientUseCase();

    const patient = await createPatientUseCase.execute({
      blade,
      age,
      genre,
      ownerId: req.user.sub,
    });

    res.status(201).send({
      patient,
    });
  } catch (err) {
    if (err instanceof PatientAlreadyExistsError) {
      return res.status(409).send({
        error: 'Patient already exists',
      });
    }

    throw err;
  }
}
