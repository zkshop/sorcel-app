import type { NextApiRequest, NextApiResponse } from 'next/types';
import { getEveryPoapURL, poap } from 'poap';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query;

  try {
    if (typeof address !== 'string') throw new Error('No address specified');

    const { data } = await poap.get(getEveryPoapURL(address as string));

    res.status(200).send({
      data,
    });
  } catch (e) {
    res.status(500).send({
      error: e,
    });
  }
}
