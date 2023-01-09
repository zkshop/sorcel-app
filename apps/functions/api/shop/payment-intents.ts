import type { VercelRequest, VercelResponse } from '@vercel/node';

import Stripe from 'stripe';

import { applyDiscount } from '@3shop/pure';
import { envVars } from '@3shop/config';
import { formatAmountForStripe } from '../../utils/formatAmountForStripe';
import { allowCors } from '../../middlewares/allowCors';
import { method } from '../../middlewares/method';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { queryHasura } from '../../utils';

const stripe = new Stripe(envVars.SECRET_STRIPE || '', {
  apiVersion: '2022-11-15',
});

// TODO: use generated documents from @3shop/apollo
const getProductByIdQuery = `
  query GetProductById($id: uuid!) {
    product_by_pk(id: $id) {
      app_id
      collection
      curation
      discount
      id
      image
      name
      description
      price
      poapId
      isDiscountGated
    }
  }
`;

async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { data } = await queryHasura({
      query: getProductByIdQuery,
      variables: { id: req.body.productId },
    });

    if (!data.product_by_pk) {
      throw new Error('Product not found');
    }

    const price = data.product_by_pk.discount
      ? applyDiscount(data.product_by_pk.price, data.product_by_pk.discount)
      : data.product_by_pk.price;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: formatAmountForStripe(price, 'eur'),
      currency: 'eur',
      payment_method_types: ['card'],
    });

    return res.status(OK).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error });
  }
}

export default allowCors(method('POST', handler));
