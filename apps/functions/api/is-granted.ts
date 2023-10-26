import type { VercelRequest, VercelResponse } from '@vercel/node';
import { HasuraClient } from '../infra/HasuraClient';
import { ApiClientService } from '@3shop/domains';
import { GetProductByIdDocument } from '@3shop/apollo';

const hasuraClient = ApiClientService(HasuraClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  const { address, productId } = req.query;

  if (!address || !productId) {
    return res.status(400).send('Missing address or productId');
  }

  const response = await hasuraClient.query({
    query: GetProductByIdDocument,
    variables: {
      id: productId,
    },
  });

  console.log(response);

  return res.status(200).send({ isGranted: true });
}

export default handler;
