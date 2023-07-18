import { type ImageRepository } from '../repositories/image-repository';

interface UploadUseCaseRequest {
  base64: string;
}

interface UploadUseCaseResponse {
  url: string;
}

export class UploadUseCase {
  constructor(private readonly uploadRepository: ImageRepository) {}

  async execute({ base64 }: UploadUseCaseRequest): Promise<UploadUseCaseResponse> {
    const upload = await this.uploadRepository.upload(base64);

    return {
      url: upload.url,
    };
  }
}
