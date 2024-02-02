export type AuthAdminData = {
  token: string;
};

export type AuthAdminClient = {
  login(email: string): Promise<AuthAdminData>;
  loginRedirect(email: string): Promise<boolean>;
  verifyUser(): Promise<AuthAdminData>;
};
