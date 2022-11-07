import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { getStripeObject, getPaymentIntent } from 'clients/stripe';

type StripeProviderProps = {
  children: React.ReactNode;
  productId: string;
};

const stripe = getStripeObject();

export const StripeProvider = ({ children, productId }: StripeProviderProps) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    async function updateClientSecret() {
      const clientSecret = await getPaymentIntent(productId);
      setClientSecret(clientSecret);
    }

    updateClientSecret();
  }, [productId]);

  if (!clientSecret) {
    return null;
  }

  return (
    <Elements options={{ appearance: { theme: 'stripe' }, clientSecret }} stripe={stripe}>
      {children}
    </Elements>
  );
};
