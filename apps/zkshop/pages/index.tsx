import ReactCanvasConfetti from "react-canvas-confetti";
import { useAccount } from "wagmi";

import { GridLayout } from "../components/GridLayout";
import { ProductCardList } from "../components/ProductCardList/ProductCardList";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";
import client from "../libs/apollo/client";
import {
  GetProductsDocument,
  useGetProductsQuery,
} from "../libs/apollo/generated";

type MarketplaceProps = {};

const Marketplace = ({}: MarketplaceProps) => {
  const {} = useUpdateThemeOnConnection();
  const { isConnected } = useAccount();
  const { data, loading, error } = useGetProductsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return null;
  }

  return (
    <GridLayout>
      <ReactCanvasConfetti fire={isConnected} className="canvas" />

      <ProductCardList products={data?.products} />
    </GridLayout>
  );
};

export default Marketplace;

export async function getServerSideProps() {
  const productsQueryResult = await client.query({
    query: GetProductsDocument,
  });

  return {
    props: { productsQueryResult },
  };
}
