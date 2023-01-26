export type MoneyAccount = {
  id: string;
};

export type MoneyAccountClient = {
  createAccount(): Promise<string>;
  getAccount(accountId: string): Promise<MoneyAccount>;
};
