import type { AuthTokenValidationClient } from 'domains/auth/AuthTokenValidationClient';
import { magicSDK } from 'magic';

export function UserTokenValidationClient(): AuthTokenValidationClient {
  return {
    validate: async (token) => {
      magicSDK.token.validate(token);
    },
  };
}
