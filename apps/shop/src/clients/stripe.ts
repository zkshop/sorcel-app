import { envVars } from '../envVars';
import { loadStripe } from '@stripe/stripe-js';
import { httpServerless } from '@3shop/http-serverless';

export const getStripeObject = () => loadStripe(envVars.PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export const getPaymentIntent = async (price: number, moneyAccountId: string) => {
  const url = `api/shop/payment-intents`;

  const { data } = await httpServerless.post<{ clientSecret: string }>(url, {
    price,
    moneyAccountId,
  });

  return data.clientSecret;
};
