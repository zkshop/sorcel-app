import { GetServerSidePropsContext } from "next";

import { addApolloState, initializeApollo } from "libs/apollo/client";
import { Product, Product_By_PkDocument } from "libs/apollo/generated";

import ProductFormContainer from "modules/admin/Products/ProductForm/ProductFormContainer";

type EditProductPageProps = {
  product: Product;
};

const EditProductPage = ({ product }: EditProductPageProps) => (
  <ProductFormContainer product={product} />
);

export default EditProductPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const apolloClient = initializeApollo();
  const { params } = context;

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
};
