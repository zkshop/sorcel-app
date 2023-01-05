import { magicSDK } from '@3shop/magic-server-sdk';
import type { AuthTokenValidationClient } from '@3shop/domains';

export function UserTokenValidationClient(): AuthTokenValidationClient {
  return {
    validate: async (token) => {
      magicSDK.token.validate(token);
    },
  };
}
