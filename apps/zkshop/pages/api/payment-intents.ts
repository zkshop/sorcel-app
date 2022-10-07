import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

import { formatAmountForStripe } from 'clients/stripe';
import { initializeApollo } from 'libs/apollo/client';
import {
  GetProductByIdDocument,
  GetProductByIdQuery,
  GetProductByIdQueryVariables,
} from 'libs/apollo/generated';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-08-01',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetProductByIdQuery, GetProductByIdQueryVariables>({
    query: GetProductByIdDocument,
    variables: { id: req.body.productId },
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(data.product_by_pk?.price, 'eur'),
    currency: 'eur',
    payment_method_types: ['card'],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
