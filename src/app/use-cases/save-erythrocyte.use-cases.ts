import { type Patients } from '@prisma/client';
import { type PatientsRepository } from '../repositories/patients-repository';
import { ResourceNotFoundError } from './errors/resource-not-found.error';

interface saveErythrocyteUseCaseRequest {
  id: string;
  erythrocyte: number;
  hemoglobin: number;
  hematocrit: number;
  rdw: number;
}

interface saveErythrocyteUseCaseResponse {
  patient: Patients | null;
}

export class SaveErythrocyteUseCase {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  async execute({
    id,
    erythrocyte,
    hematocrit,
    hemoglobin,
    rdw,
  }: saveErythrocyteUseCaseRequest): Promise<saveErythrocyteUseCaseResponse> {
    const hasPatientId = await this.patientsRepository.findById(id);

    if (!hasPatientId) {
      throw new ResourceNotFoundError();
    }

    const patient = await this.patientsRepository.addErythrocyte(id, {
      erythrocyte,
      hemoglobin,
      hematocrit,
      RDW: rdw,
    });

    return { patient };
  }
}
