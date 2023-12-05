import { NftService } from '../../../../../packages/domains';
import { gqlRequestClient } from '../../../../../packages/apollo';
import { NftReaderClient } from '../../../infra/NftReaderClient';
import { gateVerifier } from '../../../utils/matchProductGate';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } from 'http-status';

const walletScrapper = NftService(NftReaderClient());

export async function isGranted(req: any, res: any) {
  const { address, productId } = req.query as { address: string; productId: string };

  if (!address || !productId) {
    return res.status(BAD_REQUEST).send('Missing address or productId');
  }

  const response = await gqlRequestClient.get.GetProductById({
    id: productId,
  });

  const nfts = await walletScrapper.getWalletNfts(address);

  if (!response.product) return res.status(INTERNAL_SERVER_ERROR).send('Product not found');

  const matchedGates = gateVerifier(response.product.gate, nfts);

  const isGranted = matchedGates.length > 0 || response.product.gate.length === 0;

  return res.status(OK).send({ isGranted, address, productId });
}
