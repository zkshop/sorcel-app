import { ProductDetails } from '@3shop/ui';

import { useGetGatesV2ByProductIdQuery, useGetOrdersByAddressQuery } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import { gateVerifier } from '../shop/gateVerifier';
import { useAccount } from '@3shop/wallet';
import type { ProductDetailsType } from '@/routes/Product';
import { formatProductData } from '@/formatProductData';

type ProductDetailsContainerProps = {
  product: ProductDetailsType;
};

export const ProductDetailsContainer = ({ product }: ProductDetailsContainerProps) => {
  const { data } = useGetGatesV2ByProductIdQuery({ variables: { productId: product?.id } });
  if (!product) return null;
  const productGates = data?.gate_v2;

  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const userMatchedProductGate = gateVerifier(productGates || [], userNFTs, userPoapIds);

  const formatedProducts = formatProductData({
    product,
    productGates: productGates || [],
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
    poapImgList,
    isLocked,
  } = formatedProducts;

  const { address: walletAddress } = useAccount();
  const { data: ordersByAddress } = useGetOrdersByAddressQuery({
    variables: { address: walletAddress?.toLocaleLowerCase() as string },
  });
  const userOrders = ordersByAddress?.orders || [];
  const userHasAlreadyOrdered = false; //userOrders.some((order) => order.product_id === id);

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
      poapImgList={poapImgList}
      isLocked={isLocked}
      walletAddress={walletAddress}
      userHasAlreadyOrdered={userHasAlreadyOrdered}
    />
  );
};
