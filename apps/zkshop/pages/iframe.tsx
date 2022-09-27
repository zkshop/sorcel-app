import ReactCanvasConfetti from "react-canvas-confetti";
import { useAccount } from "wagmi";

import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";

import { GridLayout } from "components/GridLayout";
import { ProductCardList } from "components/ProductCardList/ProductCardList";
import { addApolloState, initializeApollo } from "libs/apollo/client";
import {
  GetProductsDocument,
  GetProductsQueryResult,
} from "libs/apollo/generated";

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
