import { NextApiRequest, NextApiResponse } from 'next/types';

import { poap, getPoapURLFromId } from 'poap';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    if (typeof id !== 'string') throw new Error('No token ID specified');

    const { data } = await poap.get(getPoapURLFromId(id as string));

    res.status(200).send({
      data,
    });
  } catch (e) {
    res.status(500).send({
      error: e,
    });
  }
}
