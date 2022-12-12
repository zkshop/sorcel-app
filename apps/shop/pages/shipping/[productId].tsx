import type { GetServerSidePropsContext } from 'next';

import type { Product } from 'apollo';
import { addApolloState, initializeApollo, GetProductByIdDocument } from 'apollo';
import { ShippingFormContainer } from 'modules';

type ShippingPageProps = {
  product: Product;
};

const ShippingPage = ({ product }: ShippingPageProps) => (
  <ShippingFormContainer product={product} />
);

export default ShippingPage;

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
