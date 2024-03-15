import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { envMiddleWare, allowCors } from '../../../../middlewares';
import type { HttpFunction } from '@google-cloud/functions-framework';
import axios from 'axios';

const handler: HttpFunction = async (req, res) => {
  const { payload_uuid } = req.body;
  console.log('body', JSON.stringify(req.body));
  const payloadResponse = await axios
    .get(`https://xumm.app/api/v1/platform/payload/${payload_uuid}`, {
      headers: {
        'X-API-Key': process.env['XAMAN_API_KEY'],
        'X-API-Secret': process.env['SECRET_XAMAN'],
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
