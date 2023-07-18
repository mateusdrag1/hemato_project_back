import cloud from '@/utils/Cloudinary';
import { type ImageRepository } from '../image-repository';

export class CloudinaryImageRepository implements ImageRepository {
  async upload(base64: string) {
    const upload = await cloud.uploader.upload(base64, {
      upload_preset: 'ml_default',
    });

    return upload;
  }
}
