import { StorageClient } from './StorageClient';

type StorageServiceType = {
  uploadPicture(image: Blob): Promise<string>;
  deletePicture(imageUrl: string): Promise<void>;
  updatePicture(newImage: Blob, imagePath: string): Promise<string>;
};

export function StorageService(client: StorageClient): StorageServiceType {
  return {
    uploadPicture: (image) => client.uploadPicture(image),
    deletePicture: (imageUrl) => client.deletePicture(imageUrl),
    updatePicture: (newImage, imagePath) => client.updatePicture(newImage, imagePath),
  };
}
