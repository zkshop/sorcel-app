import { NextApiRequest, NextApiResponse } from 'next/types';

import { poap, getEveryPoapURL } from './utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query;

  try {
    if (typeof address !== 'string') throw new Error('No address specified');

    const { data } = await poap.get(getEveryPoapURL(req.query.address as string));

    res.status(200).send({
      data,
    });
  } catch (e) {
    res.status(500).send({
      error: e,
    });
  }
}
