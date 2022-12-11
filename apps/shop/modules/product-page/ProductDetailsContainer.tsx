import { ProductDetails } from 'ui';

import { Product } from 'apollo';
import { formatProductData } from 'pure';
import { useAppSelector } from 'store';

type ProductDetailsContainerProps = {
  product: Product;
};

export const ProductDetailsContainer = ({ product }: ProductDetailsContainerProps) => {
  const collections = useAppSelector((state) =>
    state.user.nfts.map(({ contract: { address } }) => address),
  );
  const poapIds = useAppSelector((state) => state.user.poap.map((poap: any) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const sendTransaction = () => {};
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
