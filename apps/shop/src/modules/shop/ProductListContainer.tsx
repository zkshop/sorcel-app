import { ProductCardContainer } from './ProductCardContainer';
import type { GateFieldsFragment, GetProductsQuery } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import { ProductCardList } from '@3shop/ui';
import { useAccount } from '@3shop/wallet';
import type { userConnectionStatus } from '@3shop/types';
import { envVars } from '@3shop/config';
import { useGetAppQuery } from '@3shop/apollo';

type ProductListContainerProps = {
  products: GetProductsQuery['products'];
  modal?: boolean;
};

export type ShopGate_v2 = GateFieldsFragment;

export const ProductListContainer = ({ products }: ProductListContainerProps) => {
  const { isConnected, address } = useAccount();
  const app = useGetAppQuery({
    variables: {
      appId: envVars.APP_ID,
    },
  });
  const authState = useAppSelector((state) => state.user.auth);

  const isWalletConnected = Boolean(isConnected || authState.email);
  const auth = address || authState.email || undefined;

  const connectionStatus: userConnectionStatus = {
    connection: auth
      ? {
          type: address ? 'Wallet' : 'Email',
          auth,
        }
      : undefined,
    connected: isWalletConnected,
    canConnectEmail: Boolean(app.data?.app?.show_connect_email),
  };

  return (
    <ProductCardList>
      {products.map((product) => (
        <ProductCardContainer
          key={`products-${product.id}`}
          connectionStatus={connectionStatus}
          isWalletConnected={isWalletConnected}
          auth={auth}
          product={product}
        />
      ))}
    </ProductCardList>
  );
};
