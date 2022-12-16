import type { AuthAdminClient, AuthAdminData } from './AuthAdminClient';

type AuthAdminServiceType = {
  login: (email: string) => Promise<AuthAdminData>;
};

export const AuthAdminService = (client: AuthAdminClient): AuthAdminServiceType => ({
  login: (email) => client.login(email),
});
