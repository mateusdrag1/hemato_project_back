import { PrismaPatientsRepository } from '@/app/repositories/prisma/prisma-patients-repository';
import { SavePlateletsUseCase } from '../save-platelets.use-cases';

export const makeSavePlateletsUseCase = () => {
  const patientsRepository = new PrismaPatientsRepository();
  const savePlateletsUseCase = new SavePlateletsUseCase(patientsRepository);

  return savePlateletsUseCase;
};
