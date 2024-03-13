import type { AuthAdminClient, AuthAdminData } from './AuthAdminClient';

type AuthAdminServiceType = {
  logout: () => Promise<boolean>;
  login: (email: string) => Promise<AuthAdminData>;
  loginRedirect: (email: string) => Promise<boolean>;
  loginWithCredential: (credential: string) => Promise<string | null>;
};

export const AuthAdminService = (client: AuthAdminClient): AuthAdminServiceType => ({
  logout: () => client.logout(),
  login: (email) => client.login(email),
  loginRedirect: (email) => client.loginRedirect(email),
  loginWithCredential: (crendential) => client.loginWithCredential(crendential)
});