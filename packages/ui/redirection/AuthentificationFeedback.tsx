import { Button, HStack, Text, VStack, Image, Spinner } from '@chakra-ui/react';

export const defaultFailed = 'Something went wrong while attempting to authenticate you.';
export const defaultPending = 'You will be redirected to your dashboard in a few seconds.';

export interface authentificationFeedbackProps {
  information: {
    state: 'pending' | 'failed' | 'success';
    description?: string | undefined;
  };
  onHomePageClick: () => void;
}

export const AuthentificationFeedback = ({
  information,
  onHomePageClick,
}: authentificationFeedbackProps) => {
  const description = ((): string => {
    if (information.description) return information.description;
    if (information.state == 'pending') return defaultPending;
    return defaultFailed;
  })();

  const descriptionNode = () => {
    if (information.state == 'pending')
      return (
        <>
        <Spinner />
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            {description}
          </Text>
        </>
      );
    return (
      <>
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {description}
        </Text>
        <Button onClick={onHomePageClick}>Return to homepage</Button>
      </>
    );
  };

  return (
    <HStack justifyContent="center" alignItems="center" height="100vh">
      <VStack spacing={10}>
        <Image
          src="https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/logo/logo.png"
          alt="Company Logo"
        />
        {descriptionNode()}
      </VStack>
    </HStack>
  );
};
