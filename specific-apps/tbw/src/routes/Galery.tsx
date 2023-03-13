import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from '@3shop/wallet';
import { useGetProductsQuery } from '@3shop/apollo';
import { ProductListContainer } from '../modules/galery/ProductListContainer';
import { useOnConnection } from '../hook/useOnConnection';
import { envVars } from '@3shop/config';

export const Galery = () => {
  const { data, loading, error } = useGetProductsQuery({
    variables: {
      appId: envVars.APP_ID,
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
