import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import { useGetProductsQuery } from '@3shop/apollo';
import { ProductListContainer } from './ProductListContainer';
import { useOnConnection } from '../../hook/useOnConnection';

const APP_ID = process.env.APP_ID;

export const Galery = () => {
  const { data, loading, error } = useGetProductsQuery({
    variables: {
      appId: APP_ID,
    },
  });

  const {} = useOnConnection();
  const { isConnected } = useAccount();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return null;
  }

  return (
    <>
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

      <ProductListContainer products={data?.products} />
    </>
  );
};
