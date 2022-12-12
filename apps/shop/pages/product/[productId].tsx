import { VStack, BackButton } from 'ui';
import type { GetServerSidePropsContext } from 'next';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { useAccount } from 'wagmi';

import type { Product } from 'apollo';
import { addApolloState, initializeApollo, GetProductByIdDocument } from 'apollo';
import { ProductDetailsContainer } from 'modules/product-page/ProductDetailsContainer';

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
        <ProductDetailsContainer product={product} />
      ) : (
        <div> No corresponding product </div>
      )}
    </VStack>
  );
};

export default ProductDetailsPage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const apolloClient = initializeApollo();

  try {
    if (params?.productId) {
      const { productId } = params;
      const res = await apolloClient.query({
        query: GetProductByIdDocument,
        variables: {
          id: productId,
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
