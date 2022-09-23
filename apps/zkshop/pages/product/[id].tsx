import { VStack } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useAccount } from "wagmi";

import { BackButton } from "../../components/BackButton";
import { Product, ProductPage } from "../../components/ProductPage/ProductPage";
import client from "../../libs/apollo/client";
import { Product_By_PkDocument } from "../../libs/apollo/generated";

type ProductDetailsPage = {
  product: Product;
};

const ProductDetailsPage = ({ product }: ProductDetailsPage) => {
  const { isConnected } = useAccount();

  return (
    <VStack pt={4}>
      <ReactCanvasConfetti fire={isConnected} className="canvas" />

      <BackButton text="Go back" />

      {product ? (
        <ProductPage product={product} />
      ) : (
        <div> No corresponding product </div>
      )}
    </VStack>
  );
};

export default ProductDetailsPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  try {
    if (params?.id) {
      const { id } = params;
      const res = await client.query({
        query: Product_By_PkDocument,
        variables: {
          id,
        },
      });

      return {
        props: { product: res.data?.product_by_pk },
      };
    }
  } catch {
    return {
      props: {},
    };
  }

  return {
    props: {},
  };
};
