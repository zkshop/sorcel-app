import { Divider, Image, Link, VStack } from '@chakra-ui/react';
import { Button } from '../Button/Button';
import { FormLabel } from '../FormLabel/FormLabel';
import { Input } from '../Input';
import { Text } from '../Text/Text';

export const SignupSection = () => (
  <VStack height="full" justifyContent="space-between">
    <Image src="logo.svg" />
    <VStack width="full">
      <Text mb="1rem" as="h1" variant="title">
        Sign Up
      </Text>
      <Button width="full" variant="secondary">
        Continue With Google
      </Button>
      <Button width="full" variant="secondary">
        Continue With Github
      </Button>

      <Divider my="4" width="full" borderColor="greyscales.350" />

      <FormLabel alignSelf="flex-start">
        <Text variant="H300" color="greyscales.450">
          Sign up using a work email
        </Text>
      </FormLabel>
      <Input placeholder="elon@tesla.com" />
      <Button width="full" variant="primary">
        Continue with email
      </Button>

      <Divider my="4" width="full" borderColor="greyscales.350" />

      <Text variant="H500" color="greyscales.450">
        Already have an account ?{' '}
        <Link color="black" textDecoration="underline">
          Log in
        </Link>
      </Text>
    </VStack>
    <Text variant="small">Sorcel © 2023</Text>
  </VStack>
);
