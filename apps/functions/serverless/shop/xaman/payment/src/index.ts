import { envMiddleWare } from '../../../../middlewares/withEnv';
import type { HttpFunction } from '@google-cloud/functions-framework';
import { allowCors } from '../../../../middlewares/allowCors';
import axios from 'axios';
import { z } from 'zod';

const xummPaymentSchema = z.object({
  account: z.string(),
  amount: z.string(),
  destination: z.string(),
});

const handler: HttpFunction = async (req, res) => {
  const parseResult = xummPaymentSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res
      .status(400)
      .json({ error: 'Invalid request body', details: parseResult.error.errors });
  }

  const { account, amount, destination } = parseResult.data;
  const paymentPayload = {
    txjson: {
      TransactionType: 'Payment',
      Account: account,
      Destination: destination,
      Amount: amount,
    },
  };

  try {
    const response = await axios.post('https://xumm.app/api/v1/platform/payload', paymentPayload, {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-API-Key': process.env.XAMAN_API_KEY,
        'X-API-Secret': process.env.SECRET_XAMAN,
      },
    });
    return res.status(200).json(response.data);
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e,
    });
  }
};

export const payment = envMiddleWare(allowCors(handler));
