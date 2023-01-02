import { VStack, BackButton } from '@3shop/ui';

import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import { ProductDetailsContainer } from 'modules/product-page/ProductDetailsContainer';
import { useRouter } from 'next/router';
import { useGetProductByIdQuery } from '@3shop/apollo';

const ProductDetailsPage = () => {
  const { isConnected } = useAccount();
  const { productId } = useRouter().query;
  const { data } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });
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
