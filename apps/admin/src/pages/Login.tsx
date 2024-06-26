import { REQUIRED } from '@3shop/messages';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  VStack,
  Image,
  Text,
  Divider,
  Grid,
  GridItem,
  Box,
  useToastMessage,
} from '@3shop/ui';
import logo from '@3shop/ui/SignupSection/SORCEL_LOGO.png';

import { FormValidation } from '@3shop/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthAdminService } from '@3shop/domains';
import { CustomerAuthClient } from '@3shop/admin-infra';
import { Link } from 'react-router-dom';
import { useVerifyToken } from '../useVerifyToken';
import { useState } from 'react';
import { user as userApi } from '../api/user/user';

type LoginFormValues = {
  email: string;
};

const LOGIN_SCHEMA = FormValidation.object().shape({
  email: FormValidation.string().email().required(REQUIRED),
});

const auth = AuthAdminService(CustomerAuthClient());
const user = new userApi();

export const Login = () => {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  const {} = useVerifyToken();

  const { error } = useToastMessage();

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoginLoading(true);
    try {
      await user.exist(data.email);
      await auth.loginRedirect(data.email);
    } catch (e: any) {
      if (e?.response?.status == 404) error('Invalid Email', 'Please Sign up first');
      else error('Server Error', 'An unexpected error occurred. Please try again later.');
    }
    setIsLoginLoading(false);
  };

  return (
    <Grid
      minW="calc(100vw - --chakra-sizes-0.5)"
      minH="calc(100vh)"
      templateColumns="repeat(3, 1fr)"
    >
      <GridItem paddingX={14} paddingY={5} colSpan={1}>
        <VStack height="full" justifyContent="space-between">
          <Image w={32} h={12} src={logo} />
          <VStack as="form" width="full" onSubmit={handleSubmit(onSubmit)}>
            <Text mb="1rem" as="h1" variant="title">
              Log in
            </Text>

            <FormLabel mt={5} alignSelf="flex-start">
              <Text variant="H300" color="greyscales.450">
                Log in using a work email
              </Text>
            </FormLabel>
            <FormControl isInvalid={Boolean(errors.email)}>
              <Input borderColor="#E5E5E5" placeholder="elon@tesla.com" {...register('email')} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <Button width="full" variant="primary" type="submit" isLoading={isLoginLoading}>
              Log in with email
            </Button>

            <Divider my="8" width="full" borderColor="greyscales.350" />

            <Text variant="H500" color="greyscales.450">
              Don&apos;t have an account ?{' '}
              <Box as={Link} to="/signup" color="black" textDecoration="underline">
                Sign up
              </Box>
            </Text>
          </VStack>
          <Text variant="small">Sorcel © 2024</Text>
        </VStack>
      </GridItem>
      <GridItem
        bgColor="#D9D9D9"
        colSpan={2}
        backgroundImage="magic-city.png"
        backgroundRepeat="no-repeat"
        background="url('magic-city.png') no-repeat"
        backgroundSize="cover"
      />
    </Grid>
  );
};
