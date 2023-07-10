import { type Patients } from '@prisma/client';
import { type PatientsRepository } from '../repositories/patients-repository';
import { ResourceNotFoundError } from './errors/resource-not-found.error';

interface savePlateletsUseCaseRequest {
  id: number;
  platelets: number;
}

interface savePlateletsUseCaseResponse {
  patient: Patients | null;
}

export class SavePlateletsUseCase {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  async execute({
    id,
    platelets,
  }: savePlateletsUseCaseRequest): Promise<savePlateletsUseCaseResponse> {
    const hasPatientId = await this.patientsRepository.findById(id);

    if (!hasPatientId) {
      throw new ResourceNotFoundError();
    }

    const patient = await this.patientsRepository.addPlatelets(id, {
      platelets,
    });

    return { patient };
  }
}
