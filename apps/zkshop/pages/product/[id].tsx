import { VStack } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import ReactCanvasConfetti from "react-canvas-confetti";
import { BackButton } from "ui";
import { useAccount } from "wagmi";

import { addApolloState, initializeApollo } from "libs/apollo/client";
import { Product_By_PkDocument } from "libs/apollo/generated";
import { Product, ProductPage } from "modules/product-page/ProductPage";

type ProductDetailsPage = {
  product: Product;
};

const ProductDetailsPage = ({ product }: ProductDetailsPage) => {
  const { isConnected } = useAccount();

  return (
    <VStack>
      <ReactCanvasConfetti fire={isConnected} className="canvas" />

      <BackButton text="Go back" href="/" />

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
  const apolloClient = initializeApollo();

  try {
    if (params?.id) {
      const { id } = params;
      const res = await apolloClient.query({
        query: Product_By_PkDocument,
        variables: {
          id,
        },
      });

      return addApolloState(apolloClient, {
        props: { product: res.data?.product_by_pk },
      });
    }
  } catch {
    return addApolloState(apolloClient, {
      props: {},
    });
  }

  return addApolloState(apolloClient, {
    props: {},
  });
};
