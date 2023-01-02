import { useGetProductByIdQuery } from '@3shop/apollo';
import { ShippingFormContainer } from 'modules';
import { useRouter } from 'next/router';

const ShippingPage = () => {
  const { productId } = useRouter().query;
  const { data } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });
  const product = data?.product_by_pk;

  return product && <ShippingFormContainer product={product} />;
};

export default ShippingPage;
