import { AuthData } from './AuthData';

export type AuthClient = {
  login(email: string): Promise<AuthData>;
  logout(): Promise<void>;
  verifyUser(): Promise<AuthData>;
};
