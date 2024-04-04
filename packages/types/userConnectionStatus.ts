export type connectionKind = {
  type: 'Wallet' | 'Email';
  auth: string | undefined;
};

export type userConnectionStatus = {
  connection: connectionKind | undefined;
  connected: boolean;
  canConnectEmail: boolean;
};