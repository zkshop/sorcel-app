import { formatProductData } from '@3shop/pure';
import type { Product } from '@3shop/apollo';
import { useGetGatesQuery } from '@3shop/apollo';
import { ProductCardList } from '@3shop/ui';
import { useAppSelector } from '@3shop/store';

import { findProductGates } from './findProductGate';
import { gateVerifier } from './gateVerifier';

type ProductListContainerProps = {
  products: Product[];
};

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const poap = useAppSelector((state) => state.user.poap);
  const nfts = useAppSelector((state) => state.user.nfts);

  const poapIds = poap.map((poap) => poap.event.id);
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const collections = nfts.map((nft) => nft.contract.address);
  const { data } = useGetGatesQuery();
  const gates = data?.gates.slice() || [];
  const sortedGates = gates.sort((a, b) => b.discount - a.discount);

  const formatedProducts = products.map((product) => {
    const activeGate = gateVerifier(findProductGates(product.id, sortedGates), nfts);

    return formatProductData({
      ...product,
      poapIds,
      collections,
      poapImageList,
      activeGate,
      gates,
    });
  });

  return <ProductCardList products={formatedProducts} />;
};
