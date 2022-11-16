import { formatProductData } from './formatProductData';
import { Product } from 'apollo';
import { useAppSelector } from 'store/store';
import { ProductCardList } from 'ui-tbw';

type ProductListContainerProps = {
  products: Product[];
};

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const poap = useAppSelector((state) => state.user.poap);
  const nfts = useAppSelector((state) => state.user.nfts);

  const poapIds = poap.map((poap) => poap.event.id);
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const collections = nfts.map((nft) => nft.contract.address);

  const formatedProducts = products.map((product) =>
    formatProductData({ ...product, poapIds, collections, poapImageList }),
  );

  return <ProductCardList products={formatedProducts} />;
};
