import type { GateFieldsFragment, GetProductsQuery } from '@3shop/apollo';
import { useGetGates_V2_ByAppIdQuery } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import { formatProductData } from '../../formatProductData';
import { gateVerifier } from './gateVerifier';
import { envVars } from '@3shop/config';
import { ProductCardList } from '@3shop/ui';
import { useAccount } from '@3shop/wallet';

type ProductListContainerProps = {
  products: GetProductsQuery['products'];
};

export type ShopGate_v2 = GateFieldsFragment;

function sortGates(a: ShopGate_v2, b: ShopGate_v2) {
  if (a.discount && b.discount) {
    return b.discount - a.discount;
  }

  if (a.discount && !b.discount) {
    return 1;
  }

  return -1;
}

const getAssociatedGates = (gates: ShopGate_v2[], productId: string) =>
  gates.filter((gate) => gate.product_id === productId);

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const { isConnected } = useAccount();
  const { data } = useGetGates_V2_ByAppIdQuery({ variables: { app_id: envVars.APP_ID } });
  const gates = data?.gates.slice() || [];
  const sortedGates = gates.sort(sortGates);

  const formatedProducts = products.map((product) => {
    const productGates = getAssociatedGates(sortedGates, product.id);
    const userMatchedProductGate = gateVerifier(productGates, userNFTs, userPoapIds);

    return formatProductData({
      product,
      productGates,
      userPoapIds,
      userNFTContracts,
      userMatchedProductGate,
      poapImageList,
    });
  });

  return <ProductCardList products={formatedProducts} isWalletConnected={isConnected} />;
};
