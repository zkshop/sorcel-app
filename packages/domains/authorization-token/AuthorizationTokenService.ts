import type { AuthorizationTokenClient, UserPayload } from './AuthorizationTokenClient';

export type AuthorizationTokenServiceType = {
  sign(appId: string, metadata: object): string;
  verify(token: string): string | null;
  decodeAppId(token: string): string | null;
  getUserPayload(token: string): UserPayload | null;
};

export function AuthorizationTokenService(
  client: AuthorizationTokenClient,
): AuthorizationTokenServiceType {
  return {
    sign: (appId, metadata) => client.sign(appId, metadata),
    verify: (token) => client.verify(token),
    decodeAppId: (token) => client.decodeAppId(token),
    getUserPayload: (token) => client.getUserPayload(token),
  };
}
