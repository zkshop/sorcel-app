import { VStack, BackButton, Spinner } from '@3shop/ui';

import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from '@3shop/wallet';
import { ProductDetailsContainer } from '@/modules/product-page/ProductDetailsContainer';
import type { GetProductByIdQuery } from '@3shop/apollo';
import { useGetProductByIdQuery } from '@3shop/apollo';
import { useParams } from 'react-router-dom';

export type ProductDetailsType = GetProductByIdQuery['product'];

export const Product = () => {
  const { isConnected } = useAccount();
  const { productId } = useParams();
  const { data, loading } = useGetProductByIdQuery({
    variables: {
      id: productId,
    },
  });
  const product = data?.product;

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

      {!loading ? <ProductDetailsContainer product={product} /> : <Spinner />}
    </VStack>
  );
};
