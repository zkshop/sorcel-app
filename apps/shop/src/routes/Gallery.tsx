import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from '@3shop/wallet';
import { ProductListContainer } from '@/modules';
import { useAppDispatch } from '@3shop/store';
import { envVars } from '@3shop/config';
import { useGetProductsQuery } from '@3shop/apollo';
import { useFetchPoapImageList } from '@/hooks/useFetchPoapImageList';
import { Spinner } from '@3shop/ui';

export const Gallery = () => {
  const { data, loading, error } = useGetProductsQuery({
    variables: {
      appId: envVars.APP_ID,
    },
  });

  const getPoapImageList = useFetchPoapImageList();

  const { isConnected } = useAccount();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      getPoapImageList(data);
    }
  }, [data, dispatch]);

  if (loading) {
    return <Spinner />;
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

      <ProductListContainer products={data.products} />
    </>
  );
};
