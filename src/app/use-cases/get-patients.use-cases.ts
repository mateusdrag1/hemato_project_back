import { type PatientsRepository } from '../repositories/patients-repository';

export class GetPatientsUseCase {
  constructor(private readonly patientsRepository: PatientsRepository) {}

  async execute() {
    const patients = await this.patientsRepository.all();

    return patients;
  }
}
