import { ProductDetails } from '@3shop/ui';

import type { Product } from '@3shop/apollo';
import { useGetGatesQuery } from '@3shop/apollo';
import { formatProductData } from '@3shop/pure';
import { useAppSelector } from '@3shop/store';
import { findProductGates } from '../shop/findProductGate';
import { gateVerifier } from '../shop/gateVerifier';

type ProductDetailsContainerProps = {
  product: Product;
};

export const ProductDetailsContainer = ({ product }: ProductDetailsContainerProps) => {
  const nfts = useAppSelector((state) => state.user.nfts);
  const collections = nfts.map(({ contract: { address } }) => address);
  const poapIds = useAppSelector((state) => state.user.poap.map((poap: any) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const sendTransaction = () => null;

  const { data } = useGetGatesQuery();
  const gates = data?.gates.slice() || [];
  const sortedGates = gates.sort((a, b) => b.discount - a.discount);
  const activeGate = gateVerifier(findProductGates(product.id, sortedGates), nfts);

  const {
    collection,
    isLocked,
    price,
    priceReduced,
    description,
    srcItem,
    title,
    discount,
    id,
    poapUrl,
    poapImgUrl,
  } = formatProductData({ ...product, poapIds, collections, poapImageList, gates, activeGate });

  return (
    <ProductDetails
      id={id}
      title={title}
      description={description}
      price={price}
      priceReduced={priceReduced}
      discount={discount}
      srcItem={srcItem}
      isLocked={isLocked}
      collection={collection}
      poapUrl={poapUrl}
      poapImgUrl={poapImgUrl}
      sendTransaction={sendTransaction}
    />
  );
};
