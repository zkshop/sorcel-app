import { Divider, VStack, Input, Image, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Button } from '../Button/Button';
import { FormLabel } from '../FormLabel/FormLabel';

// @ts-ignore
import logo from './SORCEL_LOGO.png';
import { Text } from '../Text/Text';
import type { UseFormHandleSubmit, UseFormRegister, UseFormStateReturn } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Oauth } from '../../../apps/admin/src/pages/Signup';

type SignupFormValues = {
  email: string;
};

type SignupSectionProps = {
  onSubmit(data: SignupFormValues): Promise<void>;
  handleSubmit: UseFormHandleSubmit<SignupFormValues>;
  register: UseFormRegister<SignupFormValues>;
  errors: UseFormStateReturn<SignupFormValues>['errors'];
  loading?: boolean;
};

export const SignupSection = ({
  onSubmit,
  handleSubmit,
  register,
  errors,
  loading,
}: SignupSectionProps) => (
  <VStack height="full" justifyContent="space-between">
    <Image w={32} h={12} src={logo} />
    <Button onClick={() => Oauth['google']('signup')}>google</Button>
    <VStack as="form" width="full" onSubmit={handleSubmit(onSubmit)}>
      <Text mb="1rem" as="h1" variant="title">
        Sign Up
      </Text>

      <FormLabel mt={5} alignSelf="flex-start">
        <Text variant="H300" color="greyscales.450">
          Sign up using a work email
        </Text>
      </FormLabel>
      <FormControl isInvalid={Boolean(errors.email)}>
        <Input borderColor="#E5E5E5" placeholder="elon@tesla.com" {...register('email')} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <Button width="full" variant="primary" type="submit" isLoading={loading}>
        Continue with email
      </Button>

      <Divider my="8" width="full" borderColor="greyscales.350" />

      <Text variant="H500" color="greyscales.450">
        Already have an account ?{' '}
        <Link to="/" style={{ textDecoration: 'underline', color: 'black' }}>
          Log in
        </Link>
      </Text>
    </VStack>
    <Text variant="small">Sorcel © 2023</Text>
  </VStack>
);
