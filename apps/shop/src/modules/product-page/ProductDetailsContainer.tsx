import { ProductDetails } from '@3shop/ui';

import { useGetGatesV2ByProductIdQuery } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
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

  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);

  const formatedProducts = formatProductData({
    product,
    isLocked: false,
    productGates: productGates || [],
    userPoapIds,
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
    />
  );
};
