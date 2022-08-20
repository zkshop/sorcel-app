import { useRouter } from "next/router";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useAccount } from "wagmi";
import { ProductPage } from "../../components/ProductPage/ProductPage";
import client from "../../libs/apollo/client";
import {
  GetProductsDocument,
  GetProductsQueryResult,
} from "../../libs/apollo/generated";

const ProductDetailsPage = ({ app }: { app: GetProductsQueryResult }) => {
  const router = useRouter();
  const { isConnected } = useAccount();

  const { id } = router.query;
  const product = app.data?.product.find((product) => product.id === id);

  return (
    <>
      <ReactCanvasConfetti fire={isConnected} className="canvas" />
      {product && <ProductPage product={product} />}
    </>
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
