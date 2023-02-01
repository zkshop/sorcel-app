import { envVars } from '@3shop/config';
import type { MoneyAccount } from '@3shop/domains';
import type { Nullable } from '@3shop/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetStripeAccountDetails = (accountId: string) => {
  const [loading, setLoading] = useState(false);
  const [stripeAccount, setStripeAccount] = useState<Nullable<MoneyAccount>>(null);

  useEffect(() => {
    async function getStripeAccountDetail() {
      setLoading(true);
      const response = await axios.get<{ account: MoneyAccount }>(
        `${envVars.PUBLIC_FUNCTIONS_URL}/api/admin/get-stripe-account?accountId=${accountId}`,
      );

      setStripeAccount(response.data.account);
      setLoading(false);
    }

    getStripeAccountDetail();
  }, [accountId]);

  return { loading, stripeAccount };
};
