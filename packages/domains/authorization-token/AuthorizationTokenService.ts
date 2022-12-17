import type { AuthorizationTokenClient } from './AuthorizationTokenClient';

export type AuthorizationTokenServiceType = {
  sign(appId: string, metadata: object): string;
  verify(token: string): string | null;
};

export function AuthorizationTokenService(
  client: AuthorizationTokenClient,
): AuthorizationTokenServiceType {
  return {
    sign: (appId, metadata) => client.sign(appId, metadata),
    verify: (token) => client.verify(token),
  };
}
