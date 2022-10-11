import ReactCanvasConfetti from 'react-canvas-confetti';
import { MainLayout, ProductCardList } from 'ui';
import { useAccount } from 'wagmi';

import useUpdateThemeOnConnection from '../hooks/useUpdateThemeOnConnection';

import { addApolloState, initializeApollo } from 'libs/apollo/client';
import { GetProductsDocument, GetProductsQueryResult } from 'libs/apollo/generated';
import { useAppSelector } from 'store/store';

type MarketplaceProps = {
  productsQueryResult: GetProductsQueryResult;
};

const Marketplace = ({ productsQueryResult }: MarketplaceProps) => {
  const user = useAppSelector((state) => state.user);
  const poapIds = user.poap.map((poap) => poap.event.id);
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const collections = user.nfts.map((nft) => nft.contract.address);
  const {} = useUpdateThemeOnConnection();
  const { isConnected } = useAccount();

  if (productsQueryResult.loading) {
    return <div>Loading...</div>;
  }

  if (!productsQueryResult.data || productsQueryResult.error) {
    return null;
  }

  return (
    <MainLayout>
      <ReactCanvasConfetti fire={isConnected} className="canvas" />

      <ProductCardList
        products={productsQueryResult.data.products}
        collections={collections}
        poapIds={poapIds}
        poapImageList={poapImageList}
      />
    </MainLayout>
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
