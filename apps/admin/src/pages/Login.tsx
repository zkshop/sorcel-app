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
import { useCustomerTokenCookie } from '../useCustomerTokenCookie';
import { Link, useNavigate } from 'react-router-dom';
import { useVerifyToken } from '../useVerifyToken';
import { useState } from 'react';
import { ROUTES_PATH } from '../routes/Routes';
import { useGetUserLazyQuery, useGetUserQuery, useIsUserLazyQuery, useIsUserQuery } from '@3shop/apollo';

type LoginFormValues = {
  email: string;
};

const LOGIN_SCHEMA = FormValidation.object().shape({
  email: FormValidation.string().email().required(REQUIRED),
});

const auth = AuthAdminService(CustomerAuthClient());

export const Login = () => {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const navigate = useNavigate();
  const { setCustomerTokenCookie } = useCustomerTokenCookie();
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

  const [ isUser ] = useIsUserLazyQuery();
  const { error } = useToastMessage();

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoginLoading(true);

    const { data : isUserData } = await isUser({
      variables:
      {
        email: data.email
      },
    })

    console.log("email", data.email);
    console.log("id", isUserData?.user_by_pk?.id);
      
    if (isUserData?.user_by_pk?.id)
    {
      const res = await auth.login(data.email);
      if (res.token) {
        setCustomerTokenCookie(res.token);
  
        navigate(ROUTES_PATH.PROTECTED.INTEGRATIONS);
      }
    }
    else
    {
      error('Invalid Email', 'Please Sign up first');
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
          <Text variant="small">Sorcel © 2023</Text>
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
