import type { HttpFunction } from '@google-cloud/functions-framework';
import { gqlRequestClient } from '../../../../../packages/apollo';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } from 'http-status';

const handler: HttpFunction = async (req, res) => {
  const { address, appId } = req.query as { address: string; appId: string };

  if (!address || !appId) {
    return res.status(BAD_REQUEST).send('Missing address or app id');
  }

  try {
    console.log({ address, appId });

    const response = await gqlRequestClient.get.CreateWalletConnectionLog({
      address,
      app_id: appId,
    });

    console.log({ data: response.insert_wallet_connection_log_one });

    return res.status(OK).send('Log created');
  } catch (error) {
    console.log(error);
    return res.status(INTERNAL_SERVER_ERROR).send('Error creating log');
  }
};

export const createLog = handler;

// To apply middlewares to the handler, wrap the handler with the middleware functions.
// Example: export const myFunction = middleware1(middleware2(handler));
