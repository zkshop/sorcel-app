import { useGetProductByIdQuery } from 'apollo';
import { ShippingFormContainer } from 'modules';
import { useRouter } from 'next/router';

const ShippingPage = () => {
  const { query } = useRouter();
  const { productId } = query;
  const { data, loading, error } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = data?.product_by_pk;

  if (!product || error) {
    return null;
  }

  return <ShippingFormContainer product={product} />;
};

export default ShippingPage;
