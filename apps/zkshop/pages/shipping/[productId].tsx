import { GetServerSidePropsContext } from 'next';

import { addApolloState, initializeApollo } from 'libs/apollo/client';
import { Product_By_PkDocument } from 'libs/apollo/generated';
import { ShippingFormContainer } from 'modules';
import { Product } from 'modules/product-page/ProductPage';

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
        query: Product_By_PkDocument,
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
