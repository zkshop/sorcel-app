import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import { useGetProductsQuery } from 'apollo';
import { ProductListContainer } from './ProductListContainer';
import { useEffect } from 'react';
import { useOnConnection } from '../../hook/useOnConnection';

const APP_ID = process.env.APP_ID;

export const Galery = () => {
  const { data, loading, error } = useGetProductsQuery({
    variables: {
      appId: APP_ID,
    },
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // TODO(refacto): hack to get the member stack script to load correctly
      window?.MemberStack?.reload();
    }
  }, []);

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
      <ReactCanvasConfetti fire={isConnected} className="canvas" />

      <ProductListContainer products={data?.products} />
    </>
  );
};
