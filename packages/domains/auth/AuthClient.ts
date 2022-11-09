import { PaperWallet } from '../token';
import { AuthData } from './AuthData';

export type AuthClient = {
  login(email: string): Promise<AuthData>;
  logout(): Promise<void>;
  verifyUser(): Promise<AuthData>;
  loginWithPaper(code: string): Promise<PaperWallet>;
};
