import { Box, VStack } from "@chakra-ui/react";
import { useAppSelector } from "../../store/store";
import { BackButton } from "../BackButton";
import { ProductDetails } from "./ProductDetails";

// TODO: Use generated types
type Product = {
  __typename?: "product" | undefined;
  app_id: any;
  collection?: any;
  curation?: any;
  id: any;
  discount?: any;
  image?: any;
  name: string;
  price: any;
};

type ProductPageProps = {
  product: Product;
};

export const ProductPage = ({ product }: ProductPageProps) => {
  const { curation, id, image, name, price, discount, collection } = product;
  const nfts = useAppSelector((state) => state.nfts);
  const collections = nfts.map((nft) => nft.contract.address);
  const isTransparent =
    curation && !collections.includes(curation.toLowerCase());
  const isAnHolder = collections.includes(product.curation.toLowerCase());

  return (
    <VStack pt={4}>
      <BackButton text={"Go back"} />

      <ProductDetails
        key={`products-${id}`}
        id={id}
        srcItem={image}
        title={name}
        discount={discount}
        price={price}
        collections={collections}
        collection={collection}
        isTransparent={isTransparent}
        isEligible={curation && isAnHolder}
        description="
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    "
      />
    </VStack>
  );
};
