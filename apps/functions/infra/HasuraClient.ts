import type { ApiClient } from '@3shop/domains';
import { createServerClient } from '@3shop/apollo';

export function HasuraClient(): ApiClient {
  const client = createServerClient();

  return {
    query: async (payload) => {
      client.query({ ...payload });
    },
  };
}
