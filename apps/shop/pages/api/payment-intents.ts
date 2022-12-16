import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

import { formatAmountForStripe } from 'clients/stripe';
import type { GetProductByIdQuery, GetProductByIdQueryVariables } from 'apollo';
import { initializeApollo, GetProductByIdDocument } from 'apollo';
import { applyDiscount } from 'pure';

const stripe = new Stripe(process.env.SECRET_STRIPE || '', {
  apiVersion: '2022-08-01',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetProductByIdQuery, GetProductByIdQueryVariables>({
    query: GetProductByIdDocument,
    variables: { id: req.body.productId },
  });

  if (!data.product_by_pk) {
    res.status(500).json({ message: 'Server Error' });
    return;
  }

  const price = data.product_by_pk.discount
    ? applyDiscount(data.product_by_pk.price, data.product_by_pk.discount)
    : data.product_by_pk.price;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(price, 'eur'),
    currency: 'eur',
    payment_method_types: ['card'],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
