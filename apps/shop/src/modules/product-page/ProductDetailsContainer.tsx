import { ProductDetails } from '@3shop/ui';

import { useGetOrdersByAddressQuery } from '@3shop/apollo';
import { formatProductData } from '@3shop/pure';
import { useAppSelector } from '@3shop/store';
import { gateVerifier } from '../shop/gateVerifier';
import { useAccount } from '@3shop/wallet';
import type { ProductDetailsType } from '@/routes/Product';

type ProductDetailsContainerProps = {
  product: ProductDetailsType;
};

export const ProductDetailsContainer = ({ product }: ProductDetailsContainerProps) => {
  if (!product) return null;

  const productGates = product.gate?.slice() || [];

  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const userMatchedProductGate = gateVerifier(productGates, userNFTs, poapImageList);

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
      walletAddress={walletAddress}
      userHasAlreadyOrdered={userHasAlreadyOrdered}
    />
  );
};
