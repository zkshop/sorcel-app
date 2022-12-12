import type { AuthTokenValidationClient } from './AuthTokenValidationClient';

export function AuthTokenValidationService(client: AuthTokenValidationClient) {
  return {
    validate: (token: string) => client.validate(token),
  };
}
