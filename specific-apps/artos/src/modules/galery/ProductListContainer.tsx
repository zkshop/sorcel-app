import { formatProductData } from './formatProductData';
import type { Product } from '@3shop/apollo';
import { Box, ProductCardList } from '@3shop/ui';
import { useAppSelector } from '../../store';

type ProductListContainerProps = {
  products: Product[];
};

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const nfts = useAppSelector((state) => state.user.nfts);
  const collections = nfts.map((nft) => nft.contract.address);

  const formatedProducts = products.map((product) =>
    formatProductData({ ...product, collections }),
  );

  return (
    <Box padding={2}>
      <ProductCardList products={formatedProducts} />
    </Box>
  );
};
