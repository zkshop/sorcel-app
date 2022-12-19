import { REQUIRED } from 'messages';
import { useForm } from 'react-hook-form';
import {
  Section,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  FormErrorMessage,
} from 'ui';
import { FormValidation } from 'validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthAdminService } from 'domains';
import { CustomerAuthClient } from 'admin-infra';
import { useCustomerTokenCookie } from '../useCustomerTokenCookie';
import { useNavigate } from 'react-router-dom';
import { useVerifyToken } from '../useVerifyToken';
import { useState } from 'react';

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

  const { loading } = useVerifyToken();

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoginLoading(true);
    const res = await auth.login(data.email);
    if (res.token) {
      setCustomerTokenCookie(res.token);

      navigate('/app');
    }

    setIsLoginLoading(false);
  };

  return (
    <form onClick={handleSubmit(onSubmit)}>
      <Section>
        <Heading fontSize="xl"> Login </Heading>

        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel mb={1}> Email </FormLabel>
          <HStack>
            <Input placeholder="vitalik@ethereum.fr" {...register('email')} />
            <Button isLoading={isLoginLoading} isDisabled={isLoginLoading}>
              Login
            </Button>
          </HStack>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
      </Section>
    </form>
  );
};
