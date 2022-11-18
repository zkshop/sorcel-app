import { ProductDetails } from 'ui';
import { useAppSelector } from '../../store/store';

import { Product } from 'apollo';
import { formatProductData } from 'modules/galery/formatProductData';

type ProductDetailsContainerProps = {
  product: Product;
};

export const ProductDetailsContainer = ({ product }: ProductDetailsContainerProps) => {
  const collections = useAppSelector((state) =>
    state.user.nfts.map(({ contract: { address } }) => address),
  );
  const sendTransaction = () => {};
  const {
    id,
    collection,
    isAnHolder,
    isTransparent,
    price,
    priceReduced,
    description,
    srcItem,
    title,
    discount,
  } = formatProductData({ ...product, collections });

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
      sendTransaction={sendTransaction}
    />
  );
};
