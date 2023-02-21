import { VStack, BackButton, Spinner } from '@3shop/ui';

import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import { ProductDetailsContainer } from '@/modules/product-page/ProductDetailsContainer';
import { useGetProductByIdQuery } from '@3shop/apollo';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const { isConnected } = useAccount();
  const { productId } = useParams();
  const { data } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });
  const product = data?.product_by_pk;

  return (
    <VStack>
      <ReactCanvasConfetti
        fire={isConnected}
        style={{
          height: '100%',
          left: '0px',
          pointerEvents: 'none',
          position: 'fixed',
          top: '0px',
          width: '100%',
          zIndex: '-1',
        }}
      />

      <BackButton href="/" />

      {product ? <ProductDetailsContainer product={product} /> : <Spinner />}
    </VStack>
  );
};
