import { Spinner } from '@3shop/ui';

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

  if (!productData?.product || !gateData || productError) return <>Error</>;

  const product = productData?.product;

  return <EditProductFormContainer product={product} />;
};

export default EditProductContainer;
