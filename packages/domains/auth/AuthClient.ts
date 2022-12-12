import type { PaperWallet } from '../token';
import type { AuthData } from './AuthData';

export type AuthClient = {
  login(email: string): Promise<AuthData>;
  logout(): Promise<void>;
  verifyUser(): Promise<AuthData>;
  loginWithPaper(code: string): Promise<PaperWallet>;
};
