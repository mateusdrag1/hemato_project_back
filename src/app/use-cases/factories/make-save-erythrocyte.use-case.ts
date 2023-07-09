import { PrismaPatientsRepository } from '@/app/repositories/prisma/prisma-patients-repository';
import { SaveErythrocyteUseCase } from '../save-erythrocyte.use-cases';

export const makeSaveErythrocyteUseCase = () => {
  const patientsRepository = new PrismaPatientsRepository();
  const saveErythrocyteUseCase = new SaveErythrocyteUseCase(patientsRepository);

  return saveErythrocyteUseCase;
};
