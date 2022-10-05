import { useAppSelector } from '../../store/store';

import { ProductDetails } from './ProductDetails';

import { Product } from 'libs/apollo/generated';
import { formatProductData } from 'ui/ProductCardList/formatProductData';

type ProductPageProps = {
  product: Product;
};

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const ProductPage = ({ product }: ProductPageProps) => {
  const collections = useAppSelector((state) =>
    state.nfts.map(({ contract: { address } }) => address),
  );
  const poapIds = useAppSelector((state) => state.poap.map((poap: any) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);

  const { collection, isAnHolder, isTransparent, poapImgUrl, price, srcItem, title, discount, id } =
    formatProductData({ ...product, poapIds, collections, poapImageList });

  return (
    <ProductDetails
      key={`products-${id}`}
      id={id}
      srcItem={srcItem}
      title={title}
      discount={discount}
      price={price}
      collection={collection}
      isTransparent={isTransparent}
      isEligible={isAnHolder}
      description={description}
    />
  );
};
