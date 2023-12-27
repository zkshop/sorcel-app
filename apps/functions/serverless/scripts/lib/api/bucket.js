
const { Storage } = require('@google-cloud/storage');
export const uploadFileDefaultOptions = {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      // cacheControl: 'public, max-age=31536000',
    },
}

export async function uploadFile(bucketName, fileName, opts) {
  // Creates a client
  const storage = new Storage();

  // Uploads a local file to the bucket
  await storage.bucket(bucketName).upload(fileName, opts || uploadFileDefaultOptions);

}

export async function listFiles(bucketName) {
  // Creates a client
  const storage = new Storage();

  // Lists all files in the bucket
  const [files] = await storage.bucket(bucketName).getFiles();

  return files;
}

