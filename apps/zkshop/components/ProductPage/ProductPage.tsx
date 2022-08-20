import { Box, VStack } from "@chakra-ui/react";
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
  return (
    <VStack pt={4}>
      <BackButton text={"Go back"} />

      <ProductDetails
        key={`products-${product.id}`}
        srcItem={product.image}
        title={product.name}
        discount={"40"}
        price={product.price}
        collection={product.collection}
        isTransparent={false}
        isEligible={false}
        id={product.id}
        description="
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    "
      />
    </VStack>
  );
};
