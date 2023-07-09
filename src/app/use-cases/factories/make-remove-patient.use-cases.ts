import { PrismaPatientsRepository } from '@/app/repositories/prisma/prisma-patients-repository';
import { RemovePatientUseCase } from '../remove-patient.use-cases';

export function makeRemovePatientUseCase(): RemovePatientUseCase {
  const patientsRepository = new PrismaPatientsRepository();
  const removePatientUseCase = new RemovePatientUseCase(patientsRepository);

  return removePatientUseCase;
}
