import { BackButton, Spinner } from '@3shop/ui';

import type { Product } from '@3shop/apollo';
import { useGetProductGateQuery, useGetProductByIdQuery } from '@3shop/apollo';
import { EditProductFormContainer } from './ProductForm/EditProductFormContainer';

type EditProductPageProps = {
  productId: string;
};

const EditProductContainer = ({ productId }: EditProductPageProps) => {
  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });

  const { data: gateData, loading: gatesLoading } = useGetProductGateQuery({
    variables: {
      productId,
    },
  });

  if (productLoading || gatesLoading) {
    return <Spinner />;
  }

  if (!productData?.product_by_pk || !gateData || productError) return <>Error</>;

  const product = productData?.product_by_pk;
  const gates = gateData?.gates;

  return (
    <>
      <BackButton href="/app" />
      <EditProductFormContainer gates={gates} product={product as Product} />
    </>
  );
};

export default EditProductContainer;
