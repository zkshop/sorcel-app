import { StorageService } from 'domains';
import { ImageStorageClient } from 'infra';
import { NextApiRequest, NextApiResponse } from 'next';
import { blobFromURL } from 'pure';

const Storage = StorageService(ImageStorageClient());

type QueryParams = { url: string; bucketName: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url, bucketName } = req.body as QueryParams;

  const blob = await blobFromURL(url);

  const uploadUrl = await Storage.uploadPicture(blob, bucketName);
  res.status(200).json({ uploadUrl });
}
