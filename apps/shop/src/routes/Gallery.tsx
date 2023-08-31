import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from '@3shop/wallet';
import { ProductListContainer } from '@/modules';
import { useAppDispatch } from '@3shop/store';
import { fetchPOAPImageList } from '@3shop/store/slices/poapImageList';
import { envVars } from '@3shop/config';
import { Segment_Type_Enum, useGetProductsQuery } from '@3shop/apollo';
import { flattenDeep } from 'lodash';

export const Gallery = () => {
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
          flattenDeep(
            data.products.map((product) =>
              product.gate.map((gate) =>
                gate.segments
                  .filter((segment) => segment.type === Segment_Type_Enum.Poap)
                  .map((segment) => segment.poap_ids),
              ),
            ),
          ),
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

      <ProductListContainer products={data.products} />
    </>
  );
};
