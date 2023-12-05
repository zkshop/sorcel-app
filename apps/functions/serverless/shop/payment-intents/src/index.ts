import { Request, Response } from 'express';
import { stripe } from '../../../../../../packages/stripe';
import { applyFees } from '../../../../../../packages/pure';
import { formatAmountForStripe } from '../../../../utils/formatAmountForStripe';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';

export async function paymentIntents(req: Request, res: Response) {
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

