import { VStack, Heading } from 'ui';
import { Elements } from '@stripe/react-stripe-js';
import type { GetServerSidePropsContext } from 'next';
import { useState, useEffect } from 'react';

import { getPaymentIntent, getStripeObject } from 'clients/stripe';
import type { Product } from 'apollo';
import { initializeApollo, addApolloState, GetProductByIdDocument } from 'apollo';
import { CheckoutForm } from 'modules/checkout/CheckoutForm';
import { useIsAnHolder } from 'hooks/useIsAnHolder';

type CheckoutProps = {
  product: Product;
};

const stripe = getStripeObject();

const Checkout = ({ product }: CheckoutProps) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const isAnHolder = useIsAnHolder(product);

  function showDiscount() {
    if (!product.curation && !product.poapId) return true;
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
          <CheckoutForm price={product.price} discount={showDiscount() && product.discount} />
        </Elements>
      )}
    </VStack>
  );
};

export default Checkout;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const apolloClient = initializeApollo();

  try {
    if (params?.productId) {
      const { productId } = params;
      const res = await apolloClient.query({
        query: GetProductByIdDocument,
        variables: {
          id: productId,
        },
      });

      return addApolloState(apolloClient, {
        props: { product: res.data?.product_by_pk },
      });
    }
  } catch {
    return addApolloState(apolloClient, {
      props: {},
    });
  }

  return addApolloState(apolloClient, {
    props: {},
  });
};
