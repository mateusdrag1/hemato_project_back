import { PrismaPatientsRepository } from '@/app/repositories/prisma/prisma-patients-repository';

import { GetPatientsUseCase } from '../get-patients.use-cases';

export function makeGetPatientsUseCase(): GetPatientsUseCase {
  const patientsRepository = new PrismaPatientsRepository();
  const getPatientsUseCase = new GetPatientsUseCase(patientsRepository);

  return getPatientsUseCase;
}
