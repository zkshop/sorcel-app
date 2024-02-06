import type { HttpFunction } from '@google-cloud/functions-framework';

import { envMiddleWare, allowCors } from '../../../../../middlewares';
import { poap, getPoapURLFromId } from '../../../../../../../../packages/poap';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';

const handler: HttpFunction = async (req, res) => {
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
};

export const id = envMiddleWare(allowCors(handler));
