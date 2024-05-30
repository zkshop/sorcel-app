import { NftService } from '../../../../../packages/domains';
import { gqlRequestClient } from '../../../../../packages/apollo';
import { NftReaderClient } from '../../../infra/NftReaderClient';
import { gateVerifier } from '../../../utils/matchProductGate';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { envMiddleWare, allowCors, withEnv } from '../../middlewares';
import type { HttpFunction } from '@google-cloud/functions-framework';
import { flatten } from 'lodash';
import type { Segment } from '@3shop/apollo/server-generated';
import { Network_Enum } from '@3shop/apollo/server-generated';

const NftServices = withEnv(() => ({
  ETHEREUM: NftService(NftReaderClient(Network_Enum.Ethereum)),
  POLYGON: NftService(NftReaderClient(Network_Enum.Polygon)),
}));

const handler: HttpFunction = async (req, res) => {
  const { address, productId } = req.query as { address: string; productId: string };

  if (!address || !productId) {
    return res.status(BAD_REQUEST).send('Missing address or product id');
  }

  const response = await gqlRequestClient.get.GetProductById({
    id: productId,
  });

  const networks: Segment['network'][] = [];

  const contractAdressesToFilter = flatten(
    response.product?.gate.map((gate) =>
      gate.segments.map((segment) => {
        networks.push(segment.network);
        return segment.nft_contract_address;
      }),
    ),
  ) as string[];

  const nfts = await (async () => {
    const chain = response.product?.gate[0].chain;

    switch (chain) {
      case 'EVM': {
        const polygonAdresses: string[] = [];
        const ethAdresses: string[] = [];

        for (let i = 0; i < networks.length; i++) {
          if (!networks[i]) continue;
          if (networks[i] == 'POLYGON') polygonAdresses.push(contractAdressesToFilter[i]);
          else ethAdresses.push(contractAdressesToFilter[i]);
        }

        return [
          ...(await NftServices.ETHEREUM.getWalletNfts(address, ethAdresses)),
          ...(await NftServices.POLYGON.getWalletNfts(address, polygonAdresses)),
        ];
      }
      default:
        return [];
    }
  })();

  if (!response.product) return res.status(INTERNAL_SERVER_ERROR).send('Product not found');

  const matchedGates = gateVerifier(response.product.gate, nfts);

  const isGranted = matchedGates.length > 0 || response.product.gate.length === 0;

  return res.status(OK).send({ isGranted, address, productId });
};

export const isGranted = envMiddleWare(allowCors(handler));
