import type { VercelRequest, VercelResponse } from '@vercel/node';

import { stripe } from '@3shop/stripe';
import { applyFees } from '@3shop/pure';
import { formatAmountForStripe } from '../../utils/formatAmountForStripe';
import { allowCors } from '../../middlewares/allowCors';
import { method } from '../../middlewares/method';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';

async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { price, moneyAccountId } = req.body as { price: number; moneyAccountId: string };

    if (!price) {
      throw new Error('Product not specified');
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: formatAmountForStripe(price, 'eur'),
      currency: 'eur',
      payment_method_types: ['card'],
      application_fee_amount: formatAmountForStripe(applyFees(price), 'eur') + 25,
      transfer_data: {
        destination: moneyAccountId,
      },
    });

    return res.status(OK).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error });
  }
}

export default allowCors(method('POST', handler));
