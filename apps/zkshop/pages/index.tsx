import { QueryResult } from "@apollo/client";
import ReactCanvasConfetti from "react-canvas-confetti";
import { ProductCardList } from "ui";
import { GridLayout } from "ui";
import { useAccount } from "wagmi";

import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";

import { initializeApollo, addApolloState } from "libs/apollo/client";
import {
  GetProductsDocument,
  GetProductsQuery,
  useGetProductsQuery,
} from "libs/apollo/generated";

type MarketplaceProps = {
  productsQueryResult: QueryResult<GetProductsQuery>;
};

const Marketplace = ({ productsQueryResult }: MarketplaceProps) => {
  console.log(process.env.HOSTNAME);
  const { data, loading, error } = productsQueryResult;
  const {} = useUpdateThemeOnConnection();
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

      <ProductCardList products={data?.products} />
    </>
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
