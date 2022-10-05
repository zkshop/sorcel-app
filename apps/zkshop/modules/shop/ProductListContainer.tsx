import { Product } from 'libs/apollo/generated';
import { useAppSelector } from 'store/store';
import { ProductCardList } from 'ui';

type ProductListContainerProps = {
  products: Product[];
};

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const user = useAppSelector((state) => ({ nfts: state.nfts, poap: state.poap }));
  const poapIds = user.poap.map((poap: any) => poap.event.id);
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
