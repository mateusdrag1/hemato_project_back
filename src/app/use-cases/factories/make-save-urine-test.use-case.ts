import { PrismaPatientsRepository } from '@/app/repositories/prisma/prisma-patients-repository';
import { SaveUrineTestUseCase } from '../save-urine-test.use-cases';

export const makeSaveUrineTestUseCase = () => {
  const patientsRepository = new PrismaPatientsRepository();
  const saveUrineTestUseCase = new SaveUrineTestUseCase(patientsRepository);

  return saveUrineTestUseCase;
};
