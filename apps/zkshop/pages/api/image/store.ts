import { StorageService } from 'domains';
import { ImageStorageClient } from 'infra';
import { NextApiRequest, NextApiResponse } from 'next';
import { blobFromURL } from 'pure';

const Storage = StorageService(ImageStorageClient());

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;

  const blob = await blobFromURL(url);

  const uploadUrl = await Storage.uploadPicture(blob);
  res.status(200).json({ uploadUrl });
}
