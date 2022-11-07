import { StorageService } from 'domains';
import { ImageStorageClient } from 'infra';
import { NextApiRequest, NextApiResponse } from 'next';
import { blobFromURL } from 'pure';

const Storage = StorageService(ImageStorageClient());

type QueryParams = { newImageUrl: string; path: string; bucketName: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { newImageUrl, path, bucketName } = req.body as QueryParams;

  const blob = await blobFromURL(newImageUrl);

  const uploadUrl = await Storage.updatePicture(blob, path, bucketName);
  res.status(200).json({ uploadUrl });
}
