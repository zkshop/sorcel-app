import { formatProductData } from '@3shop/pure';
import type { Gate, GetProductsQuery } from '@3shop/apollo';
import { useGetGatesQuery } from '@3shop/apollo';
import { ProductCardList } from '@3shop/ui';
import { useAppSelector } from '@3shop/store';

import { gateVerifier } from './gateVerifier';

type ProductListContainerProps = {
  products: GetProductsQuery['products'];
};

const getAssociatedGates = (gates: Gate[], productId: string) =>
  gates.filter((gate) => gate.product_id === productId);

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const { data } = useGetGatesQuery();
  const productsGates = data?.gates.slice() || [];

  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap: any) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);

  const formatedProducts = products.map((product) => {
    const productGates = getAssociatedGates(productsGates, product.id);
    const userMatchedProductGate = gateVerifier(productGates, userNFTs);

    return formatProductData({
      product,
      productGates,
      userPoapIds,
      userNFTContracts,
      userMatchedProductGate,
      poapImageList,
    });
  });

  return <ProductCardList products={formatedProducts} />;
};
