import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ProductDetails } from "../../components/ProductDetails";
import client from "../../libs/apollo/client";
import {
  GetProductsDocument,
  GetProductsQueryResult,
} from "../../libs/apollo/generated";

const ProductDetailsPage = ({ app }: { app: GetProductsQueryResult }) => {
  const router = useRouter();

  const { id } = router.query;

  const product = app.data?.product.find((product) => product.id === id);

  console.log(product);

  return (
    product && (
      <Box display="flex" justifyContent="center" mt="120px">
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
      </Box>
    )
  );
};

export default ProductDetailsPage;

export async function getServerSideProps() {
  const app = await client.query({
    query: GetProductsDocument,
  });

  return {
    props: { app },
  };
}
