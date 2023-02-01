export type AuthorizationTokenClient = {
  sign(appId: string, metadata: object): string;
  verify(token: string): string | null;
  decodeAppId: (token: string) => string | null;
};
