import { formatProductData } from '@3shop/pure';
import type { Product } from '@3shop/apollo';
import { ProductCardList } from '@3shop/ui';
import { useAppSelector } from '@3shop/store';

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
