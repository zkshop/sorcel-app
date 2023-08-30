import type { GateFieldsFragment, GetProductsQuery } from '@3shop/apollo';
import { useGetGates_V2_ByAppIdQuery } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import { formatProductData } from '../../formatProductData';
import { gateVerifier } from './gateVerifier';
import { classnames, envVars } from '@3shop/config';
import { GridItem, ProductCard, ProductCardList } from '@3shop/ui';
import { useAccount } from '@3shop/wallet';

type ProductListContainerProps = {
  products: GetProductsQuery['products'];
  modal?: boolean;
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
  const { isConnected, address } = useAccount();
  const authState = useAppSelector((state) => state.user.auth);
  const { data } = useGetGates_V2_ByAppIdQuery({ variables: { app_id: envVars.APP_ID } });
  const gates = data?.gates.slice() || [];
  const sortedGates = gates.sort(sortGates);

  const isWalletConnected = Boolean(isConnected || authState.email);
  const auth = address || authState.email || undefined;

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

  return (
    <ProductCardList>
      {formatedProducts.map(
        ({
          id,
          name,
          image,
          price,
          discount,
          priceReduced,
          collection,
          poapImgList,
          isLocked,
          isWithHref,
          type,
          webhookUrl,
          description,
          gate,
        }) => (
          <GridItem
            key={`products-${id}`}
            className={classnames.PRODUCT_CARD_LIST.GRID_ITEM}
            display="flex"
            justifyContent="center"
          >
            <ProductCard
              id={id}
              name={name}
              image={image}
              price={price}
              discount={discount}
              priceReduced={priceReduced}
              collectionName={collection}
              poapImgList={poapImgList}
              isLocked={isLocked}
              isWithHref={isWithHref}
              isWalletConnected={isWalletConnected}
              type={type}
              webhookUrl={webhookUrl}
              description={description}
              gate={gate}
              auth={auth}
            />
          </GridItem>
        ),
      )}
    </ProductCardList>
  );
};
