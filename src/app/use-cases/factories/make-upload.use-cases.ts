import { CloudinaryImageRepository } from '@/app/repositories/cloudinary/cloudinary-image-repository';
import { UploadUseCase } from '../upload.use-cases';

export const makeUploadUseCase = () => {
  const imageRepository = new CloudinaryImageRepository();
  const uploadUseCase = new UploadUseCase(imageRepository);

  return uploadUseCase;
};
