import { formatProductData } from './formatProductData';
import { Product } from 'apollo';
import { useAppSelector } from 'store/store';
import { ProductCardList } from 'ui-tbw';

type ProductListContainerProps = {
  products: Product[];
};

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const nfts = useAppSelector((state) => state.user.nfts);

  const collections = nfts.map((nft) => nft.contract.address);

  const formatedProducts = products.map((product) =>
    formatProductData({ ...product, collections }),
  );

  return <ProductCardList products={formatedProducts} />;
};
