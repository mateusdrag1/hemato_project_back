import { type FastifyRequest, type FastifyReply } from 'fastify';
import { makeGetPatientsUseCase } from '../use-cases/factories/make-get-patients.use-cases';

export async function getPatients(req: FastifyRequest, res: FastifyReply) {
  const createPatientUseCase = makeGetPatientsUseCase();

  const patients = await createPatientUseCase.execute();

  res.status(200).send({
    patients,
  });
}
