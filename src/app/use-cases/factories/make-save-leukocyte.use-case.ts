import { PrismaPatientsRepository } from '@/app/repositories/prisma/prisma-patients-repository';
import { SaveLeukocyteUseCase } from '../save-leukocyte.use-cases';

export const makeSaveLeukocyteUseCase = () => {
  const patientsRepository = new PrismaPatientsRepository();
  const saveLeukocyteUseCase = new SaveLeukocyteUseCase(patientsRepository);

  return saveLeukocyteUseCase;
};
