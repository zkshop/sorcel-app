import type { VercelRequest, VercelResponse } from '@vercel/node';
import { StorageService } from 'domains';
import { OK } from 'http-status';
import { ImageStorageClient } from '../../../infra';

import { allowCors } from '../../../middlewares/allowCors';
import { method } from '../../../middlewares/method';
import { blobFromURL } from '../../../utils/getBlobFromURL';

const Storage = StorageService(ImageStorageClient());

type QueryParams = { newImageUrl: string; path: string; bucketName: string };

async function handler(req: VercelRequest, res: VercelResponse) {
  const { newImageUrl, path, bucketName } = req.body as QueryParams;

  const blob = await blobFromURL(newImageUrl);

  const uploadUrl = await Storage.updatePicture(blob, path, bucketName);

  return res.status(OK).json({ uploadUrl });
}

export default allowCors(method('POST', handler));
