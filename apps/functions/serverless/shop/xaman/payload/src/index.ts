import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { envMiddleWare, allowCors } from '../../../../middlewares';
import type { HttpFunction } from '@google-cloud/functions-framework';
import axios from 'axios';

const key = 'de7681ce-0e13-492e-807d-3b79f48c2dd9';
const secret = '0d135bbd-1c83-49e9-8dbc-429ea558e4ca';

const handler: HttpFunction = async (req, res) => {
  const { payload_uuid } = req.body;
  console.log('body', JSON.stringify(req.body));
  const payloadResponse = await axios
    .get(`https://xumm.app/api/v1/platform/payload/${payload_uuid}`, {
      headers: {
        'X-API-Key': key,
        'X-API-Secret': secret,
      },
    })
    .catch((e) => {
      console.log(e);
    });
  if (payloadResponse) {
    res.status(OK).json(payloadResponse.data);
  } else {
    res.status(INTERNAL_SERVER_ERROR).send('Error during authentication');
  }
};

export const payload = envMiddleWare(allowCors(handler));
