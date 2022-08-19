import { Box } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import AdminForm from "../../components/AdminForm";
import useGetAppProducts from "../../hooks/useGetAppProducts";
import client from "../../libs/apollo/client";
import {
  GetAppDocument,
  GetAppQuery,
  GetAppQueryResult,
  GetAppQueryVariables,
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
} from "../../libs/apollo/generated";

const Admin = ({
  app,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(app);

  if (!app || !app.name) return <div>Loading...</div>;

  return (
    <Box
      id="main"
      mt={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      {app?.products.length !== 0 && (
        <AdminForm
          appname={app.name}
          logo={app.logo}
          products={app.products}
          id="ukwyvv9vMiB66hiEaoRF"
          sismo={app.sismo}
        />
      )}
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const products = await client.query<
    GetProductsQuery,
    GetProductsQueryVariables
  >({
    query: GetProductsDocument,
  });

  const app = await client.query<GetAppQuery, GetAppQueryVariables>({
    query: GetAppDocument,
    variables: { id },
  });

  return {
    props: {
      app: { products: products.data.product, ...app.data.app_by_pk },
    },
  };
};

export default Admin;
