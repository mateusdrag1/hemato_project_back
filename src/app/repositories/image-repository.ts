export interface ImageRepository {
  upload: (base64: string) => Promise<{
    url: string;
  }>;
}
