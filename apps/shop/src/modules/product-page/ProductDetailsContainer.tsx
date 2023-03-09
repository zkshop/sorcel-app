import { ProductDetails } from '@3shop/ui';

import type { Product } from '@3shop/apollo';
import { useGetProductGateQuery } from '@3shop/apollo';
import { formatProductData } from '@3shop/pure';
import { useAppSelector } from '@3shop/store';
import { gateVerifier } from '../shop/gateVerifier';

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
    />
  );
};
