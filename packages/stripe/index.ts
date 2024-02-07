import Stripe from 'stripe';

const API_VERSION = '2022-11-15';

export const stripe = new Stripe(process.env.SECRET_STRIPE || '', {
  apiVersion: API_VERSION,
});
