import { formatProductData } from 'pure';
import { Product } from 'apollo';
import { useAppSelector } from 'store/store';
import { ProductCardList } from 'ui';

type ProductListContainerProps = {
  products: Product[];
};

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const user = useAppSelector((state) => state.user);
  const poapIds = user.poap.map((poap) => poap.event.id);
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const collections = user.nfts.map((nft) => nft.contract.address);
  const formatedProducts = products.map((product) =>
    formatProductData({ ...product, poapIds, collections, poapImageList }),
  );

  return <ProductCardList products={formatedProducts} />;
};
