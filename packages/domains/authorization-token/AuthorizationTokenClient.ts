export type UserPayload = {
  email: string;
  appId: string;
};

export type AuthorizationTokenClient = {
  sign(appId: string, metadata: object): string;
  verify(token: string): string | null;
  decodeAppId: (token: string) => string | null;
  getUserPayload(token: string): UserPayload | null;
};
