import type { Product } from '@3shop/apollo';
import { useGetProductByIdQuery } from '@3shop/apollo';
import { ShippingFormContainer } from '@/modules';
import { useParams } from 'react-router-dom';
import { BackButton } from '@3shop/ui';

export const Shipping = () => {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });
  const product = data?.product;

  if (!product) return null;

  return (
    <>
      <BackButton href={`/product/${product.id}`} />
      <ShippingFormContainer product={product as Product} />
    </>
  );
};
