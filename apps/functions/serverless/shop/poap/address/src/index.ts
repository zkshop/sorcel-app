import { HttpFunction } from '@google-cloud/functions-framework';
import { getEveryPoapURL, poap } from '../../../../../../../packages/poap';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { envMiddleWare, allowCors, withEnv } from '../../../../middlewares';

const handler: HttpFunction = async (req, res) => {
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
};

export const address = envMiddleWare(allowCors(handler));

// To apply middlewares to the handler, wrap the handler with the middleware functions.
// Example: export const myFunction = middleware1(middleware2(handler));
