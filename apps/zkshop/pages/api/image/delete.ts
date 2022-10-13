import { StorageService } from 'domains';
import { ImageStorageClient } from 'infra';
import { NextApiRequest, NextApiResponse } from 'next';

const Storage = StorageService(ImageStorageClient());

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query as { url: string };

  await Storage.deletePicture(url);

  res.status(200).send({ url });
}
