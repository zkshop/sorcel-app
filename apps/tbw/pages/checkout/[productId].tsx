import { VStack, Heading } from '@chakra-ui/react';

import { useGetProductByIdQuery } from 'apollo';
import { CheckoutForm } from 'modules/checkout/CheckoutForm';
import { useIsAnHolder } from 'hooks/useIsAnHolder';
import { useRouter } from 'next/router';
import { StripeProvider } from 'modules/checkout/StripeProvider';

const showDiscount = (curation: string, isAnHolder: boolean) => {
  if (!curation) return true;
  if (isAnHolder) return true;
  return false;
};

const Checkout = () => {
  const { query } = useRouter();
  const { productId } = query;
  const { data, loading, error } = useGetProductByIdQuery({ variables: { id: productId } });

  const isAnHolder = useIsAnHolder(data?.product_by_pk?.curation);

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = data?.product_by_pk;

  if (!product || error) {
    return null;
  }

  const { id, price, curation } = product;

  return (
    <VStack justifyContent="center">
      <Heading as="h2" py={4}>
        Checkout
      </Heading>

      <StripeProvider productId={id}>
        <CheckoutForm
          price={price}
          discount={showDiscount(curation, isAnHolder) && product.discount}
        />
      </StripeProvider>
    </VStack>
  );
};

export default Checkout;
