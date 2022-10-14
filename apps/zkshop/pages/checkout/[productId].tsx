import { VStack, Heading } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { GetServerSidePropsContext } from 'next';
import { useState, useEffect } from 'react';

import { getPaymentIntent, getStripeObject } from 'clients/stripe';
import { initializeApollo, addApolloState, GetProductByIdDocument, Product } from 'apollo';
import { CheckoutForm } from 'modules/checkout/CheckoutForm';

type CheckoutProps = {
  product: Product;
};

const stripe = getStripeObject();

const Checkout = ({ product }: CheckoutProps) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

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
          <CheckoutForm price={product.price} />
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
