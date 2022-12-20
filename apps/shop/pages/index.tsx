import type { QueryResult } from '@apollo/client';
import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import type { GetProductsQuery } from '@3shop/apollo';
import { initializeApollo, addApolloState, GetProductsDocument } from '@3shop/apollo';

import { ProductListContainer } from 'modules';
import { useAppDispatch } from '@3shop/store';
import { fetchPOAPImageList } from '@3shop/store/slices/poapImageList';

type MarketplaceProps = {
  productsQueryResult: QueryResult<GetProductsQuery>;
};

const Marketplace = ({ productsQueryResult }: MarketplaceProps) => {
  const { data, loading, error } = productsQueryResult;
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

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const productsQueryResult = await apolloClient.query({
    query: GetProductsDocument,
    variables: {
      appId: process.env.APP_ID,
    },
  });

  return addApolloState(apolloClient, {
    props: { productsQueryResult },
  });
}
