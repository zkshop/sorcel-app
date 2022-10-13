export type StorageClient = {
  uploadPicture(image: Blob): Promise<string>;
  updatePicture(newImage: Blob, imagePath: string): Promise<string>;
  deletePicture(imageUrl: string): Promise<void>;
};
