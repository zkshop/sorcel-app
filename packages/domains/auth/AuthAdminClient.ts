export type AuthAdminData = {
  token: string;
};

export type AuthAdminClient = {
  login(email: string): Promise<AuthAdminData>;
  verifyUser(): Promise<AuthAdminData>;
};
