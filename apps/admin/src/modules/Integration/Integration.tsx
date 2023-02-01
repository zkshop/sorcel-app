import { useGetAdminAppQuery } from '@3shop/apollo';
import { Button } from '@3shop/ui';
import { Spinner } from '@3shop/ui/Spinner';
import { Heading, Link } from '@chakra-ui/react';
import { StripeAccountDetails } from './Stripe/StripeAccountDetails';
import { useGetOnboardingLink } from './useGetOnboardingLink';

export const Integration = () => {
  const {
    loading: onboardingLinkloading,
    onboardingLink,
    getOnboardingLink,
  } = useGetOnboardingLink();

  const { data, loading: getAdminAppLoading } = useGetAdminAppQuery();

  if (getAdminAppLoading) return <Spinner />;

  if (data?.app[0].moneyAccountId)
    return (
      <>
        <Heading as="h2">Stripe</Heading>
        <StripeAccountDetails accountId={data.app[0].moneyAccountId} />
      </>
    );

  return (
    <>
      <Heading as="h2">Stripe</Heading>
      {!data?.app[0].moneyAccountId && onboardingLink ? (
        <Link href={onboardingLink} target="_blank">
          Your onboarding link
        </Link>
      ) : (
        <Button onClick={getOnboardingLink} isLoading={onboardingLinkloading}>
          Connect your account
        </Button>
      )}
    </>
  );
};
