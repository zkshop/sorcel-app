import { gateVerifier } from './gateVerifier';
import { formatProductData } from '@/formatProductData';
import { classnames } from '@3shop/config';
import { GridItem, ProductCard } from '@3shop/ui';
import type { ShopGate_v2 } from './ProductListContainer';
import type { GetProductsQuery } from '@3shop/apollo';
import { useGetGatesV2ByProductIdQuery } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';

type Props = {
  isWalletConnected: boolean;
  auth?: string;
  product: GetProductsQuery['products'][0];
};

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

export function ProductCardContainer({ isWalletConnected, auth, product }: Props) {
  const { data } = useGetGatesV2ByProductIdQuery({ variables: { productId: product.id } });
  const userNFTs = useAppSelector((state) => state.user.nfts);
  const userNFTContracts = userNFTs.map(({ contract: { address } }) => address);
  const userPoapIds = useAppSelector((state) => state.user.poap.map((poap) => poap.event.id));
  const poapImageList = useAppSelector((state) => state.poapImageList);
  const gates = data?.gate_v2.slice() || [];
  const sortedGates = gates.sort(sortGates);
  const productGates = getAssociatedGates(sortedGates, product.id);
  const userMatchedProductGate = gateVerifier(productGates, userNFTs, userPoapIds);
  const formatedProduct = formatProductData({
    product,
    productGates,
    userPoapIds,
    userNFTContracts,
    userMatchedProductGate,
    poapImageList,
  });

  return (
    <GridItem
      key={`products-${formatedProduct.id}`}
      className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
      display="flex"
      justifyContent="center"
    >
      <ProductCard
        id={formatedProduct.id}
        name={formatedProduct.name}
        image={formatedProduct.image}
        price={formatedProduct.price}
        discount={formatedProduct.discount}
        priceReduced={formatedProduct.priceReduced}
        collectionName={formatedProduct.collection}
        poapImgList={formatedProduct.poapImgList}
        isLocked={formatedProduct.isLocked}
        isWithHref={formatedProduct.isWithHref}
        isWalletConnected={isWalletConnected}
        type={formatedProduct.type}
        webhookUrl={formatedProduct.webhookUrl}
        description={formatedProduct.description}
        gate={formatedProduct.gate}
        auth={auth}
      />
    </GridItem>
  );
}
