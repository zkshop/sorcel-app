import type { VercelRequest, VercelResponse } from '@vercel/node';

import { NftService } from '@3shop/domains';
import { gqlRequestClient } from '@3shop/apollo';
import { NftReaderClient } from '../infra/NftReaderClient';

const walletScrapper = NftService(NftReaderClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  const { address, productId } = req.query as { address: string; productId: string };

  if (!address || !productId) {
    return res.status(400).send('Missing address or productId');
  }

  const response = await gqlRequestClient.get.GetProductById({ id: productId });

  const nfts = await walletScrapper.getWalletNfts(address);

  console.log(response);
  console.log(nfts);

  return res.status(200).send({ isGranted: true });
}

export default handler;
