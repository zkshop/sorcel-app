import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getEveryPoapURL, poap } from '@3shop/poap';
import { allowCors } from '../../../middlewares/allowCors';
import { method } from '../../../middlewares/method';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';

async function handler(req: VercelRequest, res: VercelResponse) {
  const { address } = req.query;

  try {
    if (typeof address !== 'string') throw new Error('No address specified');

    const { data } = await poap.get(getEveryPoapURL(address as string));

    return res.status(OK).send({
      data,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send({
      error,
    });
  }
}

export default allowCors(method('GET', handler));
