import { BackButton } from 'ui';

import { useGetProductByIdQuery } from 'apollo';
import { EditProductFormContainer } from 'modules';
import { useRouter } from 'next/router';

const EditProductPage = () => {
  const { query } = useRouter();
  const { productId } = query;
  const { data, loading, error } = useGetProductByIdQuery({ variables: { id: productId } });

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = data?.product_by_pk;

  if (!product || error) {
    return null;
  }

  return (
    <>
      <BackButton href="/admin" />
      <EditProductFormContainer product={product} />
    </>
  );
};

export default EditProductPage;
