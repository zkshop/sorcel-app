import hasura from './hasura';
import type {Wallet_Connection_Log} from '@3shop/apollo/generated';

interface WalletConnectionLogResponse {
  data: {
    insert_wallet_connection_log_one: Wallet_Connection_Log;
  };
}

export async function createWalletConnectionLog(app_id: string, address: string): Promise<Wallet_Connection_Log | undefined> {
  const mutation = `
    mutation CreateWalletConnectionLog($app_id: uuid!, $address: String!) {
      insert_wallet_connection_log_one(object: {address: $address, app_id: $app_id}) {
        id
        date
        app_id
        address
      }
    }`;

  const payload = {
    query: mutation,
    variables: {
      app_id,
      address,
    },
  };

  try {
    const response = await hasura.mutate<WalletConnectionLogResponse>(payload);

    return response.data?.insert_wallet_connection_log_one;
  } catch (error) {
    console.error('An error occurred while creating a wallet connection log:', error);
  }
}