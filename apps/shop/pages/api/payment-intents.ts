import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

import { formatAmountForStripe } from 'clients/stripe';
import type { GetProductByIdQuery, GetProductByIdQueryVariables } from 'apollo';
import { initializeApollo, GetProductByIdDocument } from 'apollo';
import { applyDiscount } from 'pure';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-08-01',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetProductByIdQuery, GetProductByIdQueryVariables>({
    query: GetProductByIdDocument,
    variables: { id: req.body.productId },
  });

  const price = data.product_by_pk?.discount
    ? applyDiscount(data.product_by_pk?.price || 1, data.product_by_pk.discount)
    : data.product_by_pk?.price;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(price, 'eur'),
    currency: 'eur',
    payment_method_types: ['card'],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
