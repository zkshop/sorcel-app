import { StorageClient } from './StorageClient';

type StorageServiceType = {
  uploadPicture(image: Blob, bucketName: string): Promise<string>;
  deletePicture(imageUrl: string, bucketName: string): Promise<void>;
  updatePicture(newImage: Blob, imagePath: string, bucketName: string): Promise<string>;
};

export function StorageService(client: StorageClient): StorageServiceType {
  return {
    uploadPicture: (image, bucketName) => client.uploadPicture(image, bucketName),
    deletePicture: (imageUrl, bucketName) => client.deletePicture(imageUrl, bucketName),
    updatePicture: (newImage, imagePath, bucketName) =>
      client.updatePicture(newImage, imagePath, bucketName),
  };
}
