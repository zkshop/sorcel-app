import type { AuthAdminClient, AuthAdminData } from './AuthAdminClient';

type AuthAdminServiceType = {
  login: (email: string) => Promise<AuthAdminData>;
  loginRedirect: (email: string) => Promise<boolean>;
};

export const AuthAdminService = (client: AuthAdminClient): AuthAdminServiceType => ({
  login: (email) => client.login(email),
  loginRedirect: (email) => client.loginRedirect(email),
});
