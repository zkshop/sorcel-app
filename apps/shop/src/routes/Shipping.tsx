import { useGetProductByIdQuery } from '@3shop/apollo';
import { ShippingFormContainer } from '@/modules';
import { useParams } from 'react-router-dom';

export const Shipping = () => {
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });
  const product = data?.product_by_pk;

  if (!product) return null;

  return <ShippingFormContainer product={product} />;
};
