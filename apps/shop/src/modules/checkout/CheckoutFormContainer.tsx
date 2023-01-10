import type { Product } from '@3shop/apollo';
import { useCreateOrderMutation } from '@3shop/apollo';
import { VStack, Heading, Spinner } from '@3shop/ui';
import { Elements } from '@stripe/react-stripe-js';
import { getStripeObject, getPaymentIntent } from '@/clients/stripe';
import { useIsAnHolder } from '@/hooks/useIsAnHolder';
import { useState, useEffect } from 'react';
import { CheckoutForm } from './CheckoutForm/CheckoutForm';
import { useAppSelector } from '@3shop/store';
import { Navigate } from 'react-router-dom';
import { envVars } from '@3shop/config';

const stripe = getStripeObject();

type CheckoutFormContainerProps = {
  product: Product;
};

export const CheckoutFormContainer = ({ product }: CheckoutFormContainerProps) => {
  const [isPaymentIntentLoading, setIsPaymentIntentLoading] = useState(false);
  const { curation, poapId } = product;
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const isAnHolder = useIsAnHolder(product);
  const order = useAppSelector((state) => state.user.order);
  const [createOrder] = useCreateOrderMutation();

  function showDiscount() {
    if (!curation && !poapId) return true;
    if (isAnHolder) return true;
    return false;
  }

  useEffect(() => {
    async function updateClientSecret() {
      setIsPaymentIntentLoading(true);
      const clientSecret = await getPaymentIntent(product.id);
      setClientSecret(clientSecret);
      setIsPaymentIntentLoading(false);
    }

    updateClientSecret();
  }, [product.id]);

  async function handlePaymentSuccess() {
    if (!order) return;

    await createOrder({
      variables: {
        ...order,
        product_id: product.id,
        app_id: envVars.APP_ID,
      },
    });
  }

  if (!order) return <Navigate to="/" />;

  return (
    <VStack justifyContent="center">
      <Heading as="h2" py={4}>
        Checkout
      </Heading>
      {isPaymentIntentLoading && <Spinner />}
      {clientSecret && (
        <Elements options={{ appearance: { theme: 'stripe' }, clientSecret }} stripe={stripe}>
          <CheckoutForm
            handlePaymentSuccess={handlePaymentSuccess}
            price={product.price}
            discount={(showDiscount() && product.discount) || 0}
          />
        </Elements>
      )}
    </VStack>
  );
};
