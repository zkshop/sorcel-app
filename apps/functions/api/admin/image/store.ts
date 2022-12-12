import { StorageService } from 'domains';
import { ImageStorageClient } from '../../../infra';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../../../middlewares/allowCors';
import { blobFromURL } from '../../../utils/getBlobFromURL';

const Storage = StorageService(ImageStorageClient());

type QueryParams = { url: string; bucketName: string };

async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Method not allowed' });
  }

  const { url, bucketName } = req.body as QueryParams;

  const blob = await blobFromURL(url);

  const uploadUrl = await Storage.uploadPicture(blob, bucketName);
  res.status(200).json({ uploadUrl });
}

export default allowCors(handler);
