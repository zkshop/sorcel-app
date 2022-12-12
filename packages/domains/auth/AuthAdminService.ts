import { AuthAdminClient, AuthAdminData } from './AuthAdminClient';

type AuthAdminServiceType = {
  login: (email: string) => Promise<AuthAdminData>;
};

export const AuthAdminService = (client: AuthAdminClient): AuthAdminServiceType => {
  return {
    login: (email) => client.login(email),
  };
};
