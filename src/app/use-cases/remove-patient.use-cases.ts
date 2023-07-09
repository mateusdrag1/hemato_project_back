import { type PatientsRepository } from '../repositories/patients-repository';
import { ResourceNotFoundError } from './errors/resource-not-found.error';

interface RemovePatientUseCaseRequest {
  id: number;
}

export class RemovePatientUseCase {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  async execute({ id }: RemovePatientUseCaseRequest) {
    const patient = await this.patientsRepository.findById(id);

    if (!patient) {
      throw new ResourceNotFoundError();
    }

    await this.patientsRepository.delete(id);
  }
}
