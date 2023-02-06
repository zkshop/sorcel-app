import Stripe from 'stripe';
import { envVars } from '@3shop/config';

const API_VERSION = '2022-11-15';

export const stripe = new Stripe(envVars.SECRET_STRIPE || '', {
  apiVersion: API_VERSION,
});
