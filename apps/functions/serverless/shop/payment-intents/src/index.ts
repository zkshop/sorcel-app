import { stripe } from '../../../../../../packages/stripe';
import { applyFees } from '../../../../../../packages/pure';
import { formatAmountForStripe } from '../../../../utils/formatAmountForStripe';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { envMiddleWare, allowCors } from '../../../middlewares';
import type { HttpFunction } from '@google-cloud/functions-framework';

const handler: HttpFunction = async (req, res) => {
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
    console.error(error);
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error });
  }
};

export const paymentIntents = envMiddleWare(allowCors(handler));
