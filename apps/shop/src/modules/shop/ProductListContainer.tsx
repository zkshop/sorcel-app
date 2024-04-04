import { envVars } from '@3shop/config';
import { ProductCardContainer } from './ProductCardContainer';
import { useGetAppQuery, type GateFieldsFragment, type GetProductsQuery } from '@3shop/apollo';
import { useAppSelector } from '@3shop/store';
import type { userConnectionStatus } from '@3shop/types';
import { ProductCardList } from '@3shop/ui';
import { useAccount } from '@3shop/wallet';

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
          connectionStatus={connectionStatus}
          key={`products-${product.id}`}
          isWalletConnected={isWalletConnected}
          auth={auth}
          product={product}
        />
      ))}
    </ProductCardList>
  );
};
