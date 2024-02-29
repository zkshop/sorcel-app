import type { MoneyAccount, MoneyAccountClient } from '@3shop/domains';
import { stripe } from '@3shop/stripe';

export function StripeAccountCreator(): MoneyAccountClient {
  return {
    createOnboardingLink: async (accountId: string) => {
      const link = await stripe.accountLinks.create({
        account: accountId,
        refresh_url:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:5173'
            : 'https://admin.3shop.co',
        return_url:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:5173'
            : 'https://admin.3shop.co',
        type: 'account_onboarding',
      });

      return link.url;
    },

    createAccount: async () => {
      const account = await stripe.accounts.create({
        type: 'express',
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
      });

      return account.id;
    },

    getAccount: async (accountId) => {
      const accountFromStripe = await stripe.accounts.retrieve(accountId);
      const pendingVerification = accountFromStripe.requirements?.pending_verification;

      const account: MoneyAccount = {
        id: accountFromStripe.id,
        status: pendingVerification,
        requirements: accountFromStripe.requirements,
      };

      return account;
    },
  };
}
