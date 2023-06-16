import { useGetAdminAppQuery } from '@3shop/apollo';
import { Spinner, Button, Heading, Link } from '@3shop/ui';
import { StripeAccountDetails } from './Stripe/StripeAccountDetails';
import { useGetOnboardingLink } from './useGetOnboardingLink';

export const Payments = () => {
  const {
    loading: onboardingLinkloading,
    onboardingLink,
    getOnboardingLink,
  } = useGetOnboardingLink();

  const { data, loading: getAdminAppLoading } = useGetAdminAppQuery();

  if (getAdminAppLoading) return <Spinner />;
  if (!data?.app[0]) return null;
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
          Your onboarding link. Click to set up payments on your app.
        </Link>
      ) : (
        <Button onClick={() => getOnboardingLink()} isLoading={onboardingLinkloading}>
          Connect your account
        </Button>
      )}
    </>
  );
};
