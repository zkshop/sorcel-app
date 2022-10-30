import { QueryResult } from '@apollo/client';
import { useEffect } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import useUpdateThemeOnConnection from '../hooks/useUpdateThemeOnConnection';

import { initializeApollo, addApolloState, GetProductsDocument, GetProductsQuery } from 'apollo';
import { fetchPOAPImageList } from 'store/slices/poapImageList';
import { useAppDispatch } from 'store/store';

type MarketplaceProps = {
  productsQueryResult: QueryResult<GetProductsQuery>;
};

if (typeof window !== 'undefined') {
  const iframe = document.querySelector('iframe');

  // @ts-ignore
  window.ethereum?.on('accountsChanged', (accounts: string[]) => {
    console.log({ accounts });

    if (iframe !== null) {
      iframe.onload = () => {
        iframe.contentWindow?.postMessage({ type: 'ADDRESS', address: accounts?.[0] || '' }, '*');
      };

      iframe.contentWindow?.postMessage({ type: 'ADDRESS', address: accounts?.[0] || '' }, '*');
    }
  });
}

const Marketplace = ({ productsQueryResult }: MarketplaceProps) => {
  const { data, loading, error } = productsQueryResult;
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

      {/* <ProductListContainer products={data?.products} /> */}
      <iframe width="100%" height="600px" src="http://localhost:3000" />
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
