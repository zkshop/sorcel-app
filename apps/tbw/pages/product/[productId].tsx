import { VStack } from '@chakra-ui/react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { BackButton } from 'ui';
import { useAccount } from 'wagmi';

import { useGetProductByIdQuery } from 'apollo';
import { ProductDetailsContainer } from 'modules/product-page/ProductDetailsContainer';
import { useRouter } from 'next/router';

const ProductDetailsPage = () => {
  const { isConnected } = useAccount();
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

  if (!data || error) {
    return null;
  }
  const product = data?.product_by_pk;

  return (
    <VStack>
      <ReactCanvasConfetti fire={isConnected} className="canvas" />

      <BackButton text="Go back" href="/" />

      {product ? (
        <ProductDetailsContainer product={product} />
      ) : (
        <div> No corresponding product </div>
      )}
    </VStack>
  );
};

export default ProductDetailsPage;
