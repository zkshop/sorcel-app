import { StorageService } from 'domains';
import { ImageStorageClient } from '../../../infra';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../../../middlewares/allowCors';
import { blobFromURL } from '../../../utils/getBlobFromURL';
import { method } from '../../../middlewares/method';
import { CREATED } from 'http-status';

const Storage = StorageService(ImageStorageClient());

type QueryParams = { url: string; bucketName: string };

async function handler(req: VercelRequest, res: VercelResponse) {
  const { url, bucketName } = req.body as QueryParams;

  const blob = await blobFromURL(url);

  const uploadUrl = await Storage.uploadPicture(blob, bucketName);
  res.status(CREATED).json({ uploadUrl });
}

export default method('POST', allowCors(handler));
