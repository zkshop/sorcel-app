export type StorageClient = {
  uploadPicture(image: Blob, bucketName: string): Promise<string>;
  updatePicture(newImage: Blob, imagePath: string, bucketName: string): Promise<string>;
  deletePicture(imageUrl: string, bucketName: string): Promise<void>;
};
