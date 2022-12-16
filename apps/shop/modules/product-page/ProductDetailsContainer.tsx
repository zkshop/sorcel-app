import { ProductDetails } from '@3shop/ui';

import type { Product } from '@3shop/apollo';
import { formatProductData } from '@3shop/pure';
import { useAppSelector } from '@3shop/store';

type ProductDetailsContainerProps = {
  product: Product;
};

export const ProductDetailsContainer = ({ product }: ProductDetailsContainerProps) => {
  const collections = useAppSelector((state) =>
    state.user.nfts.map(({ contract: { address } }) => address),
  );
  const poapIds = useAppSelector((state) => state.user.poap.map((poap: any) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const sendTransaction = () => null;
  const {
    collection,
    isAnHolder,
    isTransparent,
    price,
    priceReduced,
    description,
    srcItem,
    title,
    discount,
    id,
    poapUrl,
    poapImgUrl,
  } = formatProductData({ ...product, poapIds, collections, poapImageList });

  return (
    <ProductDetails
      id={id}
      title={title}
      description={description}
      price={price}
      priceReduced={priceReduced}
      discount={discount}
      srcItem={srcItem}
      isEligible={isAnHolder}
      isTransparent={isTransparent}
      collection={collection}
      poapUrl={poapUrl}
      poapImgUrl={poapImgUrl}
      sendTransaction={sendTransaction}
    />
  );
};
