import { type Patients } from '@prisma/client';
import { type PatientsRepository } from '../repositories/patients-repository';
import { ResourceNotFoundError } from './errors/resource-not-found.error';

interface saveUrineTestUseCaseRequest {
  id: number;
  volume: number;
  color: string;
  ph: number;
  density: number;
  protein: string;
  glucose: string;
  ketones: string;
  nitrites: boolean;
  hemoglobin: string;
  urobilinogen: string;
  leukocytes: string;
  erythrocytes: string;
  epithelialCells: string;
  mucus: string;
  bacteria: string;
  crystals: string;
  cylinders: string;
}

interface saveUrineTestUseCaseResponse {
  patient: Patients | null;
}

export class SaveUrineTestUseCase {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  async execute({
    id,
    volume,
    color,
    ph,
    density,
    protein,
    glucose,
    ketones,
    nitrites,
    hemoglobin,
    urobilinogen,
    leukocytes,
    erythrocytes,
    epithelialCells,
    mucus,
    bacteria,
    crystals,
    cylinders,
  }: saveUrineTestUseCaseRequest): Promise<saveUrineTestUseCaseResponse> {
    const hasPatientId = await this.patientsRepository.findById(id);

    if (!hasPatientId) {
      throw new ResourceNotFoundError();
    }

    const patient = await this.patientsRepository.addUrineTest(id, {
      volume,
      color,
      ph,
      density,
      protein,
      glucose,
      ketones,
      nitrites,
      hemoglobin,
      urobilinogen,
      sed_leukocytes: leukocytes,
      sed_erythrocytes: erythrocytes,
      sed_epithelial: epithelialCells,
      sed_mucus: mucus,
      sed_bacteria: bacteria,
      sed_crystals: crystals,
      sed_cylinders: cylinders,
    });

    return { patient };
  }
}
