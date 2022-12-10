import { VercelRequest, VercelResponse } from '@vercel/node';
import { StorageService } from 'domains';
import { ImageStorageClient } from '../../../infra';

import { allowCors } from '../../../allowCors';
import { blobFromURL } from '../../../utils/getBlobFromURL';

const Storage = StorageService(ImageStorageClient());

type QueryParams = { newImageUrl: string; path: string; bucketName: string };

async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Method not allowed' });
  }

  const { newImageUrl, path, bucketName } = req.body as QueryParams;

  const blob = await blobFromURL(newImageUrl);

  const uploadUrl = await Storage.updatePicture(blob, path, bucketName);
  res.status(200).json({ uploadUrl });
}

export default allowCors(handler);
