import { StorageService } from 'domains';
import { ImageStorageClient } from 'infra';
import { NextApiRequest, NextApiResponse } from 'next';

const Storage = StorageService(ImageStorageClient());
type QueryParams = { url: string; bucketName: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url, bucketName } = req.query as QueryParams;

  await Storage.deletePicture(url, bucketName);

  res.status(200).send({ url });
}
