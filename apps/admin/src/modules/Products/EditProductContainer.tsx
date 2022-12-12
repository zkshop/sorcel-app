import { BackButton, Spinner } from 'ui';

import { useGetGateFromProductQuery, useGetProductByIdQuery } from 'apollo';
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

  const { data: gateData, loading: gatesLoading } = useGetGateFromProductQuery({
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
      <BackButton href="/" />
      <EditProductFormContainer gates={gates} product={product} />
    </>
  );
};

export default EditProductContainer;
