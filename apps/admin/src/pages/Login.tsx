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
import { useNewGetProductsLazyQuery } from 'apollo';
import { useCustomerTokenCookie } from '../useCustomerTokenCookie';

type LoginFormValues = {
  email: string;
};

const LOGIN_SCHEMA = FormValidation.object().shape({
  email: FormValidation.string().email().required(REQUIRED),
});

const auth = AuthAdminService(CustomerAuthClient());

export const Login = () => {
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

  const [getProducts] = useNewGetProductsLazyQuery();

  const onSubmit = async (data: LoginFormValues) => {
    const res = await auth.login(data.email);

    setCustomerTokenCookie(res.token);

    const productsQuery = await getProducts();

    console.log(productsQuery.data);
  };

  return (
    <form onClick={handleSubmit(onSubmit)}>
      <Section>
        <Heading fontSize="xl"> Login </Heading>

        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel mb={1}> Email </FormLabel>
          <HStack>
            <Input placeholder="vitalik@ethereum.fr" {...register('email')} />
            <Button>Login</Button>
          </HStack>
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
      </Section>
    </form>
  );
};
