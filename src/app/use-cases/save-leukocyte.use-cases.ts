import { type Patients } from '@prisma/client';
import { type PatientsRepository } from '../repositories/patients-repository';
import { ResourceNotFoundError } from './errors/resource-not-found.error';

interface saveLeukocyteUseCaseRequest {
  id: number;
  leukocyte: number;
  lymphocytes: number;
  monocytes: number;
  bandNeutrophils: number;
  basophils: number;
  eosinophils: number;
  neutrophils: number;
}

interface saveLeukocyteUseCaseResponse {
  patient: Patients | null;
}

export class SaveLeukocyteUseCase {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  async execute({
    id,
    leukocyte,
    bandNeutrophils,
    basophils,
    eosinophils,
    lymphocytes,
    monocytes,
    neutrophils,
  }: saveLeukocyteUseCaseRequest): Promise<saveLeukocyteUseCaseResponse> {
    const hasPatientId = await this.patientsRepository.findById(id);

    const sumOfLeukocyte =
      lymphocytes + monocytes + bandNeutrophils + basophils + eosinophils + neutrophils;

    if (sumOfLeukocyte !== 100) {
      throw new Error('Sum of leukocytes segments must be 100');
    }

    if (!hasPatientId) {
      throw new ResourceNotFoundError();
    }

    const patient = await this.patientsRepository.addLeukocyte(id, {
      leukocyte,
      lymphocytes,
      monocytes,
      bandNeutrophils,
      basophils,
      eosinophils,
      neutrophils,
    });

    return { patient };
  }
}
