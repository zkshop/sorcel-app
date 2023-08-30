import { ProductCardContainer } from './ProductCardContainer';
import type { GateFieldsFragment, GetProductsQuery } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import { ProductCardList } from '@3shop/ui';
import { useAccount } from '@3shop/wallet';

type ProductListContainerProps = {
  products: GetProductsQuery['products'];
  modal?: boolean;
};

export type ShopGate_v2 = GateFieldsFragment;

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const { isConnected, address } = useAccount();
  const authState = useAppSelector((state) => state.user.auth);

  const isWalletConnected = Boolean(isConnected || authState.email);
  const auth = address || authState.email || undefined;

  return (
    <ProductCardList>
      {products.map((product) => (
        <ProductCardContainer isWalletConnected={isWalletConnected} auth={auth} product={product} />
      ))}
    </ProductCardList>
  );
};
