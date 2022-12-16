export type AuthAdminData = {
  issuer: string;
  publicAddress: string;
  appId: string;
  email: string;
};

export type AuthAdminClient = {
  login(email: string): Promise<AuthAdminData>;
  verifyUser(): Promise<AuthAdminData>;
};
