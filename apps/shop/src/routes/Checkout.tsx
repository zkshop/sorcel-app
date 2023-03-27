import type { Product } from '@3shop/apollo';
import { useGetProductByIdQuery } from '@3shop/apollo';
import { CheckoutFormContainer } from '@/modules/checkout/CheckoutFormContainer';
import { useParams } from 'react-router-dom';

export const Checkout = () => {
  const { productId } = useParams();
  const { data, loading } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });

  if (loading) return <div>Loading...</div>;

  const product = data?.product;

  if (!product) return null;

  return <CheckoutFormContainer product={product as Product} />;
};
