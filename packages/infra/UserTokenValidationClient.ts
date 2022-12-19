import type { AuthTokenValidationClient } from 'domains/auth/AuthTokenValidationClient';
import { magicSDK } from '@3shop/magic-server-sdk';

export function UserTokenValidationClient(): AuthTokenValidationClient {
  return {
    validate: async (token) => {
      magicSDK.token.validate(token);
    },
  };
}
