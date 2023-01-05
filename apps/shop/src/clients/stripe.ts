import { envVars } from '@3shop/config';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

export const getStripeObject = () => loadStripe(envVars.PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export const getPaymentIntent = async (productId: string) => {
  const url = `${envVars.PUBLIC_FUNCTIONS_URL}/api/shop/payment-intents`;

  const { data } = await axios.post<{ clientSecret: string }>(url, {
    productId,
  });

  return data.clientSecret;
};