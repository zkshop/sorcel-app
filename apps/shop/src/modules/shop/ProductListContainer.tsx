import { formatProductData } from '@3shop/pure';
import type { Gate, GetProductsQuery } from '@3shop/apollo';
import { useGetGatesQuery } from '@3shop/apollo';
import { ProductCardList } from '@3shop/ui';
import { useAppSelector } from '@3shop/store';

import { findProductGates } from './findProductGate';
import { gateVerifier } from './gateVerifier';

type ProductListContainerProps = {
  products: GetProductsQuery['products'];
};

const getAssociatedGates = (gates: Gate[], productId: string) =>
  gates.filter((gate) => gate.product_id === productId);

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
    const associatedGates = getAssociatedGates(gates, product.id);
    return formatProductData({
      ...product,
      poapIds,
      collections,
      poapImageList,
      activeGate,
      gates: associatedGates,
    });
  });

  return <ProductCardList products={formatedProducts} />;
};
