import { Spinner, Button, Heading, Link } from '@3shop/ui';
import { StripeAccountDetails } from './Stripe/StripeAccountDetails';
import { useGetOnboardingLink } from './useGetOnboardingLink';
import { useAppData } from '../../useAppData';
import { Plan_Enum } from '@3shop/apollo';
import { Link as RouterLink } from 'react-router-dom';

export const Payments = () => {
  const {
    loading: onboardingLinkloading,
    onboardingLink,
    getOnboardingLink,
  } = useGetOnboardingLink();

  const { data, loading, error } = useAppData();

  if (loading) return <Spinner />;
  if (error) return <>Error</>;

  if (data.moneyAccountId)
    return (
      <>
        <Heading as="h2">Stripe</Heading>
        <StripeAccountDetails accountId={data.moneyAccountId} />
      </>
    );

  return (
    <>
      <Heading as="h2">Stripe</Heading>
      {!data.moneyAccountId && onboardingLink ? (
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
