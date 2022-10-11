import { ProductDetails } from 'ui';
import { useAppSelector } from '../../store/store';

import useTransaction from '../../hooks/useTransaction';
import { formatProductData } from 'ui/ProductCardList/formatProductData';
import { Product } from 'libs/apollo/generated';

type ProductDetailsContainerProps = {
  product: Product;
};

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const ProductDetailsContainer = ({ product }: ProductDetailsContainerProps) => {
  const collections = useAppSelector((state) =>
    state.user.nfts.map(({ contract: { address } }) => address),
  );
  const poapIds = useAppSelector((state) => state.user.poap.map((poap: any) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const {
    collection,
    isAnHolder,
    isTransparent,
    price,
    srcItem,
    title,
    discount,
    id,
    poapUrl,
    poapImgUrl,
  } = formatProductData({ ...product, poapIds, collections, poapImageList });
  const priceNumber = parseInt(price);
  const discountNumber = discount ? parseInt(discount) : 0;

  const promoPercent = discount ? discountNumber / 100 : 0;
  const priceReduced = discount ? priceNumber - priceNumber * promoPercent : 0;
  const { sendTransaction } = useTransaction(discount ? priceReduced : priceNumber);

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
