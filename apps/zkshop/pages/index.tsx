import { SimpleGrid, Box } from "@chakra-ui/react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useAccount } from "wagmi";
import { ShopCard } from "../components/ShopCard";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";
import client from "../libs/apollo/client";
import {
  GetProductsDocument,
  GetProductsQueryResult,
} from "../libs/apollo/generated";
import { useAppSelector } from "../store/store";

const Marketplace = ({ app }: { app: GetProductsQueryResult }) => {
  const {} = useUpdateThemeOnConnection();
  const { isConnected } = useAccount();
  const nfts = useAppSelector((state) => state.nfts);
  const collections = nfts.map((nft) => nft.contract.address);

  if (app.loading) {
    return <div>Loading...</div>;
  }

  const isAnHolder = app.data?.product.some((product) =>
    collections.includes(product.curation.toLowerCase())
  );

  return (
    <Box id="main">
      <ReactCanvasConfetti fire={isConnected} className="canvas" />
      <Box padding="100px">
        <SimpleGrid columns={4} spacingX="0" spacingY="50px">
          {app.data?.product.map(
            ({ image, name, discount, price, collection, curation }) => {
              const isTransparent =
                curation && !collections.includes(curation.toLowerCase());

              return (
                <ShopCard
                  key={`products-${name}`}
                  srcItem={image}
                  title={name}
                  discount={isAnHolder && discount ? discount : undefined}
                  price={price}
                  collection={collection}
                  isTransparent={isTransparent || false}
                  isEligible={curation && isAnHolder}
                />
              );
            }
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Marketplace;

export async function getServerSideProps() {
  const app = await client.query({
    query: GetProductsDocument,
  });

  return {
    props: { app },
  };
}
