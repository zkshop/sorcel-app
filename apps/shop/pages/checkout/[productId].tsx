import { useGetProductByIdQuery } from '@3shop/apollo';
import { useRouter } from 'next/router';
import { CheckoutFormContainer } from 'modules/checkout/CheckoutFormContainer';

const Checkout = () => {
  const { productId } = useRouter().query;
  const { data, loading } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });

  if (loading) return <div>Loading...</div>;

  const product = data?.product_by_pk;

  return product && <CheckoutFormContainer product={product} />;
};

export default Checkout;
