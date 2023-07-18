import { type PatientsRepository } from '../repositories/patients-repository';
import { PatientAlreadyExistsError } from './errors/patient-already-exists.error';

interface CreatePatientUseCaseRequest {
  blade: string;
  age: number;
  genre: string;
  ownerId: string;
}

interface CreatePatientUseCaseResponse {
  id: string;
  blade: string;
  age: number;
  genre: string;
}

export class CreatePatientUseCase {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  async execute({
    blade,
    age,
    genre,
    ownerId,
  }: CreatePatientUseCaseRequest): Promise<CreatePatientUseCaseResponse> {
    const dateNow = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const bladeId = blade.toString().padStart(4, '0');

    const bladeFormatted = `${dateNow}${bladeId}`;

    const hasPatientWithBlade = await this.patientsRepository.findByBlade(bladeFormatted);

    if (hasPatientWithBlade) {
      throw new PatientAlreadyExistsError();
    }

    const patient = await this.patientsRepository.create({
      owner: {
        connect: {
          id: ownerId,
        },
      },
      blade: bladeFormatted,
      age,
      genre,
    });

    return patient;
  }
}
