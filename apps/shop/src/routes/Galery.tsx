import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import { ProductListContainer } from '@/modules';
import { useAppDispatch } from '@3shop/store';
import { fetchPOAPImageList } from '@3shop/store/slices/poapImageList';
import { envVars } from '@3shop/config';
import { useGetProductsQuery } from '@3shop/apollo';

export const Galery = () => {
  const { data, loading, error } = useGetProductsQuery({
    variables: {
      appId: envVars.APP_ID,
    },
  });

  const { isConnected } = useAccount();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(
        fetchPOAPImageList(
          data.products
            .filter(({ poapId }) => poapId !== 0)
            .map(({ poapId }) => (poapId as number).toString()),
        ),
      );
    }
  }, [data, dispatch]);

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
