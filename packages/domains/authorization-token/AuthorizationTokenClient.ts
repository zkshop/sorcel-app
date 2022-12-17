export type AuthorizationTokenClient = {
  sign(appId: string, metadata: object): string;
  verify(token: string): string | null;
};
