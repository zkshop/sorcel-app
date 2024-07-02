import {
  Spinner,
  Button,
  Heading,
  Link,
  Input,
  Flex,
  Badge,
  VStack,
  Box,
  FormControl,
  FormErrorMessage,
  useToast,
} from '@3shop/ui';
import { StripeAccountDetails } from './Stripe/StripeAccountDetails';
import { useGetOnboardingLink } from './useGetOnboardingLink';
import { useAppData } from '../../useAppData';
import { useGetAdminAppQuery, useUpdateXrpWalletMutation } from '@3shop/apollo';
import { FormProvider, useForm } from 'react-hook-form';

interface WalletFormData {
  xrpWallet: string;
}

const XrpAccount = () => {
  const { data: appData, loading } = useGetAdminAppQuery();
  const [updateWallet] = useUpdateXrpWalletMutation();
  const toast = useToast();
  const methods = useForm<WalletFormData>({
    defaultValues: {
      xrpWallet: appData?.app[0].xrpWallet || '',
    },
  });

  const {
    handleSubmit,
    formState: { isValid, errors },
    setError,
  } = methods;

  const handleWalletChange = async (data: WalletFormData) => {
    if (!data.xrpWallet || data.xrpWallet.length != 'rJaQvnvosF7ER1ZYoUcNRbPaCjTi4dtvPG'.length) {
      setError('xrpWallet', {
        type: 'manual',
        message: 'XRP Wallet address is invalid',
      });
      return;
    }
    try {
      await updateWallet({
        variables: {
          appId: appData?.app[0].id,
          xrpWallet: data.xrpWallet,
        },
      });
      toast({
        title: 'Success',
        description: 'XRP Wallet updated successfully',
        status: 'success',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to update XRP Wallet',
        status: 'error',
      });
    }
    // Handle wallet change logic here
  };

  if (loading) return <Spinner />;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleWalletChange)}>
        <Flex direction="column" gap={2}>
          {appData?.app[0].xrpWallet && (
            <>
              <VStack alignItems="flex-start">
                <Box>
                  <Badge colorScheme="green">linked</Badge>
                  {appData?.app[0].xrpWallet}
                </Box>
              </VStack>
            </>
          )}
          <FormControl isInvalid={Boolean(errors.xrpWallet)}>
            <Input placeholder="Enter your xrp address" {...methods.register('xrpWallet')} />
            <FormErrorMessage>{errors.xrpWallet?.message}</FormErrorMessage>
          </FormControl>
          <Button type="submit" isDisabled={!isValid}>
            Link Wallet
          </Button>
        </Flex>
      </form>
    </FormProvider>
  );
};
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
        <Heading as="h2">Xrp wallet</Heading>
        <XrpAccount />
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
