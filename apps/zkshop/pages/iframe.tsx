import ReactCanvasConfetti from 'react-canvas-confetti';
import { ProductCardList } from 'ui';
import { GridLayout } from 'ui';
import { useAccount } from 'wagmi';

import useUpdateThemeOnConnection from '../hooks/useUpdateThemeOnConnection';

import { addApolloState, initializeApollo } from 'libs/apollo/client';
import { GetProductsDocument, GetProductsQueryResult } from 'libs/apollo/generated';

type MarketplaceProps = {
  productsQueryResult: GetProductsQueryResult;
};

const Marketplace = ({ productsQueryResult }: MarketplaceProps) => {
  const {} = useUpdateThemeOnConnection();
  const { isConnected } = useAccount();

  if (productsQueryResult.loading) {
    return <div>Loading...</div>;
  }

  if (!productsQueryResult.data || productsQueryResult.error) {
    return null;
  }

  return (
    <GridLayout>
      <ReactCanvasConfetti fire={isConnected} className="canvas" />

      <ProductCardList products={productsQueryResult.data?.products} />
    </GridLayout>
  );
};

export default Marketplace;

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const productsQueryResult = await apolloClient.query({
    query: GetProductsDocument,
  });

  return addApolloState(apolloClient, {
    props: { productsQueryResult },
  });
}
