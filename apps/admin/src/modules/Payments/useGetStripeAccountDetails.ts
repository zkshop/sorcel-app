import type { MoneyAccount } from '@3shop/domains';
import { httpServerless } from '@3shop/http-serverless';
import type { Nullable } from '@3shop/types';
import { useEffect, useState } from 'react';

export const useGetStripeAccountDetails = (accountId: string) => {
  const [loading, setLoading] = useState(false);
  const [stripeAccount, setStripeAccount] = useState<Nullable<MoneyAccount>>(null);

  useEffect(() => {
    async function getStripeAccountDetail() {
      setLoading(true);
      const response = await httpServerless.get<{ account: MoneyAccount }>(
        `api/admin/get-stripe-account?accountId=${accountId}`,
      );

      setStripeAccount(response.data.account);
      setLoading(false);
    }

    getStripeAccountDetail();
  }, [accountId]);

  return { loading, stripeAccount };
};
