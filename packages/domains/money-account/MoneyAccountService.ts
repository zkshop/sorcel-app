import type { MoneyAccount, MoneyAccountClient } from './MoneyAccountClient';

type MoneyAccountServiceType = {
  createAccount(): Promise<string>;
  getAccount(accountId: string): Promise<MoneyAccount>;
};

export function MoneyAccountService(client: MoneyAccountClient): MoneyAccountServiceType {
  return {
    createAccount: async () => await client.createAccount(),
    getAccount: async (accountId) => await client.getAccount(accountId),
  };
}
