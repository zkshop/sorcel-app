import { Box, Button, Spinner, Badge, Link, VStack } from '@3shop/ui';
import { useGetOnboardingLink } from '../useGetOnboardingLink';

import { useGetStripeAccountDetails } from '../useGetStripeAccountDetails';

type StripeAccountDetailsProps = {
  accountId: string;
};

export const StripeAccountDetails = ({ accountId }: StripeAccountDetailsProps) => {
  const { stripeAccount, loading } = useGetStripeAccountDetails(accountId);
  const {
    getOnboardingLink,
    loading: onboardingLinkLoading,
    onboardingLink,
  } = useGetOnboardingLink();

  const status = stripeAccount?.requirements.current_deadline?.length ? 'Pending' : 'Enabled';

  if (loading || !stripeAccount) return <Spinner />;

  return (
    <Box>
      <VStack alignItems="flex-start">
        <Box>
          <Badge colorScheme={status === 'Pending' ? 'blue' : 'green'}>{status}</Badge>{' '}
          {stripeAccount.id}
        </Box>
        <Button isLoading={onboardingLinkLoading} onClick={() => getOnboardingLink(accountId)}>
          Generate onboarding link
        </Button>
        {onboardingLink && (
          <Link href={onboardingLink} target="_blank">
            Your onboarding link
          </Link>
        )}
      </VStack>
    </Box>
  );
};
