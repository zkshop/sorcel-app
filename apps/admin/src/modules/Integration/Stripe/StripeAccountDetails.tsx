import { Box, Spinner } from '@3shop/ui';

import { useGetStripeAccountDetails } from '../useGetStripeAccountDetails';

type StripeAccountDetailsProps = {
  accountId: string;
};

export const StripeAccountDetails = ({ accountId }: StripeAccountDetailsProps) => {
  const { stripeAccount, loading } = useGetStripeAccountDetails(accountId);

  if (loading || !stripeAccount) return <Spinner />;

  return <Box>{stripeAccount.id}</Box>;
};
