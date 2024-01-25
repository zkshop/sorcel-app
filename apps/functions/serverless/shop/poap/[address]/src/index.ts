import type { HttpFunction, Request } from '@google-cloud/functions-framework';
import { getEveryPoapURL, poap } from '@3shop/poap';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { envMiddleWare, allowCors, slug } from '../../../../middlewares';

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

export const address = envMiddleWare(allowCors(slug('[address]', handler)));

// To apply middlewares to the handler, wrap the handler with the middleware functions.
// Example: export const myFunction = middleware1(middleware2(handler));
