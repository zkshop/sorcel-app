import { GetServerSidePropsContext } from 'next';
import { BackButton } from 'ui';

import {
  addApolloState,
  initializeApollo,
  GetProductByIdDocument,
  Product,
  GetGateFromProductDocument,
  Gate,
} from 'apollo';
import { EditProductFormContainer } from 'modules';

type EditProductPageProps = {
  product: Product;
  gates: Gate[];
};

const EditProductPage = ({ product, gates }: EditProductPageProps) => (
  <>
    <BackButton href="/admin" />
    <EditProductFormContainer gates={gates} product={product} />
  </>
);

export default EditProductPage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo();
  const { params } = context;

  if (params?.id) {
    const { id } = params;
    const { data: productData } = await apolloClient.query({
      query: GetProductByIdDocument,
      variables: {
        id,
      },
    });

    const { data: gateData } = await apolloClient.query({
      query: GetGateFromProductDocument,
      variables: {
        productId: id,
      },
    });

    return addApolloState(apolloClient, {
      props: { product: productData?.product_by_pk, gates: gateData?.gates },
    });
  }
};
