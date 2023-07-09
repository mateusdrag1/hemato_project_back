import { PrismaPatientsRepository } from '@/app/repositories/prisma/prisma-patients-repository';
import { CreatePatientUseCase } from '../create-patient.use-cases';

export function makeCreatePatientUseCase(): CreatePatientUseCase {
  const patientsRepository = new PrismaPatientsRepository();
  const registerUseCase = new CreatePatientUseCase(patientsRepository);

  return registerUseCase;
}
