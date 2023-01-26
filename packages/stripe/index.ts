import Stripe from 'stripe';
import { envVars } from '@3shop/config';

export const stripe = new Stripe(envVars.SECRET_STRIPE || '', {
  apiVersion: '2022-11-15',
});
