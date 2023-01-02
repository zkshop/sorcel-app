import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import { ProductListContainer } from 'modules';
import { useAppDispatch } from '@3shop/store';
import { fetchPOAPImageList } from '@3shop/store/slices/poapImageList';
import { envVars } from '@3shop/config';
import { useGetProductsQuery } from '@3shop/apollo';

const Marketplace = () => {
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
            .filter(({ poapId }) => poapId !== null)
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
      <ReactCanvasConfetti fire={isConnected} className="canvas" />

      <ProductListContainer products={data?.products} />
    </>
  );
};

export default Marketplace;
