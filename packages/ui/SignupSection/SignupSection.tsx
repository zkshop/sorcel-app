import { Box, Divider, Heading, Link, VStack } from '@chakra-ui/react';
import { Button } from '../Button/Button';
import { FormLabel } from '../FormLabel/FormLabel';
import { Input } from '../Input';
import { Text } from '../Text/Text';

export const SignupSection = () => (
  <VStack>
    <Heading as="h1" size="4xl" fontSize="xl">
      Signup
    </Heading>
    <Button width="full" variant="secondary">
      Continue With Google
    </Button>
    <Button width="full" variant="secondary">
      Continue With Github
    </Button>

    <Divider my="4" width="full" borderColor="greyscales.350" />

    <FormLabel alignSelf="flex-start" color="greyscales.450">
      Sign up using a work email
    </FormLabel>
    <Input placeholder="elon@tesla.com" />
    <Button width="full" variant="primary">
      Continue with email
    </Button>

    <Divider my="4" width="full" borderColor="greyscales.350" />

    <Text color="greyscales.450">
      Already have an account ?{' '}
      <Link color="black" textDecoration="underline">
        Log in
      </Link>
    </Text>
  </VStack>
);
