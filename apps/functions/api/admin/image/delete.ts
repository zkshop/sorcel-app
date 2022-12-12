import { StorageService } from 'domains';
import { ImageStorageClient } from '../../../infra';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../../../middlewares/allowCors';

const Storage = StorageService(ImageStorageClient());
type QueryParams = { url: string; bucketName: string };

async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'DELETE') {
    return res.status(404).json({ error: 'Method not allowed' });
  }

  const { url, bucketName } = req.query as QueryParams;

  await Storage.deletePicture(url, bucketName);

  res.status(200).send({ url });
}

export default allowCors(handler);
