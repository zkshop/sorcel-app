import { Product } from 'libs/apollo/generated';
import { useAppSelector } from 'store/store';
import { ProductCardList } from 'ui';

type ProductListContainerProps = {
  products: Product[];
};

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const user = useAppSelector((state) => state.user);
  const poapIds = user.poap.map((poap) => poap.event.id.toString());
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const collections = user.nfts.map((nft) => nft.contract.address);

  return (
    <ProductCardList
      products={products}
      poapIds={poapIds}
      poapImageList={poapImageList}
      collections={collections}
    />
  );
};
