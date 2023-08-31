import { gateVerifier } from './gateVerifier';
import { formatProductData } from '@/formatProductData';
import { classnames } from '@3shop/config';
import { GridItem, ProductCard } from '@3shop/ui';
import type { GateFieldsFragment, GetProductsQuery } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';

type Props = {
  isWalletConnected: boolean;
  auth?: string;
  product: GetProductsQuery['products'][0];
};

function sortGates(a: GateFieldsFragment, b: GateFieldsFragment) {
  if (a.discount && b.discount) {
    return b.discount - a.discount;
  }

  if (a.discount && !b.discount) {
    return 1;
  }

  return -1;
}

export function ProductCardContainer({ isWalletConnected, auth, product }: Props) {
  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const gates = product.gate.slice() || [];
  const sortedGates = gates.sort(sortGates);

  const userMatchedProductGate = gateVerifier(sortedGates, userNFTs, userPoapIds);

  const formatedProduct = formatProductData({
    product,
    productGates: sortedGates,
    userPoapIds,
    userNFTContracts,
    userMatchedProductGate,
    poapImageList,
  });

  return (
    <GridItem
      className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
      display="flex"
      justifyContent="center"
    >
      <ProductCard {...formatedProduct} isWalletConnected={isWalletConnected} auth={auth} />
    </GridItem>
  );
}
