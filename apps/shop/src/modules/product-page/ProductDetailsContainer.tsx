import { ProductDetails } from '@3shop/ui';

import type { Product } from '@3shop/apollo';
import { useGetOrdersByAddressQuery } from '@3shop/apollo';
import { useCreateSurveyOrderMutation } from '@3shop/apollo';
import { useGetProductGateQuery } from '@3shop/apollo';
import { formatProductData } from '@3shop/pure';
import { useAppSelector } from '@3shop/store';
import { gateVerifier } from '../shop/gateVerifier';
import { useAccount } from '@3shop/wallet';

type ProductDetailsContainerProps = {
  product: Product;
};

export const ProductDetailsContainer = ({ product }: ProductDetailsContainerProps) => {
  const { data } = useGetProductGateQuery({ variables: { productId: product.id } });
  const productGates = data?.gates.slice() || [];

  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap: any) => poap.event.id));
  const userMatchedProductGate = gateVerifier(productGates, userNFTs);
  const poapImageList = useAppSelector((state) => state.poapImageList);

  const formatedProducts = formatProductData({
    product,
    productGates,
    userPoapIds,
    userNFTContracts,
    userMatchedProductGate,
    poapImageList,
  });

  const {
    id,
    name,
    image,
    description,
    price,
    priceReduced,
    discount,
    collection,
    poapUrl,
    poapImgUrl,
    isLocked,
  } = formatedProducts;

  const sendTransaction = () => null;

  /* SURVEY UTILITY */
  const { utility } = product;
  const [createSurveyOrder] = useCreateSurveyOrderMutation();
  const { address: walletAddress } = useAccount();
  const { data: ordersByAddress } = useGetOrdersByAddressQuery({
    variables: { address: walletAddress?.toLocaleLowerCase() as string },
  });
  const userOrders = ordersByAddress?.orders || [];
  const userHasAlreadyOrdered = userOrders.some((order) => order.product_id === id);

  return (
    <ProductDetails
      id={id}
      name={name}
      image={image}
      description={description}
      price={price}
      discount={discount}
      priceReduced={priceReduced}
      collectionName={collection}
      poapUrl={poapUrl}
      poapImgUrl={poapImgUrl}
      isLocked={isLocked}
      sendTransaction={sendTransaction}
      createSurveyOrder={createSurveyOrder}
      utility={utility}
      walletAddress={walletAddress}
      userHasAlreadyOrdered={userHasAlreadyOrdered}
    />
  );
};
