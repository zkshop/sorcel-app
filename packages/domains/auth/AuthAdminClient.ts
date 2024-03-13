export type AuthAdminData = {
  token: string;
};

export type AuthAdminClient = {
  logout(): Promise<boolean>;
  login(email: string): Promise<AuthAdminData>;
  loginRedirect(email: string): Promise<boolean>;
  loginWithCredential: (credential: string) => Promise<string | null>;
  verifyUser(): Promise<AuthAdminData>;
};
