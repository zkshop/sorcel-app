import { SimpleGrid, Box } from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useAccount } from "wagmi";
import { getAppData } from "../clients/firebase";
import { AdminFormValues } from "../components/AdminForm";
import { ShopCard } from "../components/ShopCard";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";
import { useAppSelector } from "../store/store";

const Marketplace = ({ app }: { app: AdminFormValues | undefined }) => {
  const {} = useUpdateThemeOnConnection();
  const { isConnected } = useAccount();
  const nfts = useAppSelector((state) => state.nfts);
  const collections = nfts.map((nft) => nft.contract.address);

  if (!app) {
    return <div>Loading...</div>;
  }

  const isAnHolder = app.products.some((product) =>
    collections.includes(product.curation.toLowerCase())
  );

  return (
    <Box id="main">
      <ReactCanvasConfetti fire={isConnected} className="canvas" />
      <Box padding="100px">
        <SimpleGrid columns={4} spacingX="0" spacingY="50px">
          {app.products.map(
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

export async function getStaticProps() {
  const app = await getAppData("ukwyvv9vMiB66hiEaoRF");

  return {
    props: { app },
  };
}
