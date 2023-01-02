import type { Product } from '@3shop/apollo';
import { VStack, Heading } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { getStripeObject, getPaymentIntent } from 'clients/stripe';
import { useIsAnHolder } from 'hooks/useIsAnHolder';
import { useState, useEffect } from 'react';
import { CheckoutForm } from './CheckoutForm/CheckoutForm';

const stripe = getStripeObject();

type CheckoutFormContainerProps = {
  product: Product;
};

export const CheckoutFormContainer = ({ product }: CheckoutFormContainerProps) => {
  const { curation, poapId } = product;
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const isAnHolder = useIsAnHolder(product);

  function showDiscount() {
    if (!curation && !poapId) return true;
    if (isAnHolder) return true;
    return false;
  }

  useEffect(() => {
    async function updateClientSecret() {
      const clientSecret = await getPaymentIntent(product.id);
      setClientSecret(clientSecret);
    }

    updateClientSecret();
  }, [product.id]);

  return (
    <VStack justifyContent="center">
      <Heading as="h2" py={4}>
        Checkout
      </Heading>

      {clientSecret && (
        <Elements options={{ appearance: { theme: 'stripe' }, clientSecret }} stripe={stripe}>
          <CheckoutForm
            price={product.price}
            discount={(showDiscount() && product.discount) || 0}
          />
        </Elements>
      )}
    </VStack>
  );
};
