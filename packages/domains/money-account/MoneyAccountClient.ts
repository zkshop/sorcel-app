export type MoneyAccount = {
  id: string;
  status?: string[] | null;
  requirements: any;
};

export type MoneyAccountClient = {
  createAccount(): Promise<string>;
  createOnboardingLink(onboardingUrl: string): Promise<string>;
  getAccount(accountId: string): Promise<MoneyAccount>;
};
