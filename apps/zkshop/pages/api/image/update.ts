import { StorageService } from 'domains';
import { ImageStorageClient } from 'infra';
import { NextApiRequest, NextApiResponse } from 'next';
import { blobFromURL } from 'pure';

const Storage = StorageService(ImageStorageClient());

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { newImageUrl, path } = req.body;

  const blob = await blobFromURL(newImageUrl);

  const uploadUrl = await Storage.updatePicture(blob, path);
  res.status(200).json({ uploadUrl });
}
