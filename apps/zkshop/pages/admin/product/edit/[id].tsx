import { GetServerSidePropsContext } from 'next';
import { BackButton } from 'ui';

import { addApolloState, initializeApollo, GetProductByIdDocument, Product } from 'apollo';
import { EditProductFormContainer } from 'modules';

type EditProductPageProps = {
  product: Product;
};

const EditProductPage = ({ product }: EditProductPageProps) => (
  <>
    <BackButton href="/admin" />
    <EditProductFormContainer product={product} />
  </>
);

export default EditProductPage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const apolloClient = initializeApollo();
  const { params } = context;

  if (params?.id) {
    const { id } = params;
    const res = await apolloClient.query({
      query: GetProductByIdDocument,
      variables: {
        id,
      },
    });

    return addApolloState(apolloClient, {
      props: { product: res.data?.product_by_pk },
    });
  }
};
