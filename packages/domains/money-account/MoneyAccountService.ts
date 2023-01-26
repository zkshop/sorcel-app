import type { MoneyAccountClient } from './MoneyAccountClient';

type MoneyAccountServiceType = {
  createAccount(): Promise<string>;
};

export function MoneyAccountService(client: MoneyAccountClient): MoneyAccountServiceType {
  return {
    createAccount: async () => await client.createAccount(),
  };
}
