export function StorageService(client) {
    return {
        uploadPicture: (image, bucketName) => client.uploadPicture(image, bucketName),
        deletePicture: (imageUrl, bucketName) => client.deletePicture(imageUrl, bucketName),
        updatePicture: (newImage, imagePath, bucketName) => client.updatePicture(newImage, imagePath, bucketName),
    };
}
