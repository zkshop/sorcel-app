import type { VercelRequest, VercelResponse } from '@vercel/node';

import { poap, getPoapURLFromId } from '@3shop/poap';
import { allowCors } from '../../../../../middlewares/allowCors';
import { method } from '../../../../../middlewares/method';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';

async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  try {
    if (typeof id !== 'string') throw new Error('No token ID specified');

    const { data } = await poap.get(getPoapURLFromId(id as string));

    return res.status(OK).send({
      data,
    });
  } catch (e) {
    return res.status(INTERNAL_SERVER_ERROR).send({
      error: e,
    });
  }
}

export default allowCors(method('GET', handler));
