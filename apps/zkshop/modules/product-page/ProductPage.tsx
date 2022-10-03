import { useAppSelector } from '../../store/store';

import { ProductDetails } from './ProductDetails';

import { Product } from 'libs/apollo/generated';

type ProductPageProps = {
  product: Product;
};

export const ProductPage = ({ product }: ProductPageProps) => {
  const { curation, id, image, name, price, discount, collection, poapId } = product;
  const nfts = useAppSelector((state) => state.nfts);
  const poaps = useAppSelector((state) => state.poap);
  const poapIds = poaps.map((poap: any) => poap.event.id);
  const collections = nfts.map((nft) => nft.contract.address);
  const isAPoapHolder = poapIds.includes(product.poapId);
  const isAnHolder = collections.includes(product.curation.toLowerCase());
  console.log({ isAPoapHolder, isAnHolder });

  const isTransparent = (curation || poapId) && !isAnHolder && !isAPoapHolder;

  console.log({ isTransparent });

  return (
    <ProductDetails
      key={`products-${id}`}
      id={id}
      srcItem={image}
      title={name}
      discount={discount}
      price={price}
      collections={collections}
      collection={collection}
      isTransparent={isTransparent}
      isEligible={curation && (isAnHolder || isAPoapHolder)}
      description="
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    "
    />
  );
};
