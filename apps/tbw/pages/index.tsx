import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import useUpdateThemeOnConnection from '../hooks/useUpdateThemeOnConnection';

import { useGetProductsQuery } from 'apollo';
import { fetchPOAPImageList } from 'store/slices/poapImageList';
import { useAppDispatch } from 'store/store';
import { ProductListContainer } from 'modules';

const APP_ID = process.env.APP_ID;

const Marketplace = () => {
  const { data, loading, error } = useGetProductsQuery({
    variables: {
      appId: APP_ID,
    },
  });

  const {} = useUpdateThemeOnConnection();
  const { isConnected } = useAccount();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(
        fetchPOAPImageList(
          data.products.filter(({ poapId }) => poapId !== null).map(({ poapId }) => poapId),
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
