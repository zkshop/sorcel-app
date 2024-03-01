import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { envMiddleWare, allowCors, withEnv } from '../../../../middlewares';
import type { HttpFunction } from '@google-cloud/functions-framework';
import axios from 'axios';

const key = "de7681ce-0e13-492e-807d-3b79f48c2dd9";
const secret = "0d135bbd-1c83-49e9-8dbc-429ea558e4ca";

const handler: HttpFunction = async (req, res) => {
  const payloadResponse = await axios.post(
    'https://xumm.app/api/v1/platform/payload',
    {
      txjson: {
        TransactionType: 'SignIn',
      },
    },
    {
      headers: {
        'X-API-Key': key,
        'X-API-Secret': secret,
      },
    },
  ).catch(e => {
    console.log(e);
  });
  if (payloadResponse) {
    res.status(OK).json(payloadResponse.data);
  } else {
    res.status(INTERNAL_SERVER_ERROR).send('Error during authentication');
  }
};

export const signin = envMiddleWare(allowCors(handler));
