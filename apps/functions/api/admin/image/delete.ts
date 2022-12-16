import { StorageService } from '@3shop/domains';
import { ImageStorageClient } from '../../../infra';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../../../middlewares/allowCors';
import { method } from '../../../middlewares/method';
import { OK } from 'http-status';

const Storage = StorageService(ImageStorageClient());
type QueryParams = { url: string; bucketName: string };

async function handler(req: VercelRequest, res: VercelResponse) {
  const { url, bucketName } = req.query as QueryParams;

  await Storage.deletePicture(url, bucketName);

  return res.status(OK).send({ url });
}

export default allowCors(method('DELETE', handler));
