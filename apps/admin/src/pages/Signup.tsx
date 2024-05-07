import { Grid, GridItem, SignupSection, useToastMessage } from '@3shop/ui';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValidation } from '@3shop/validation';
import { useState } from 'react';
import { AuthAdminService } from '@3shop/domains';
import { CustomerAuthClient } from '@3shop/admin-infra';
import { useCustomerTokenCookie } from '../useCustomerTokenCookie';
import { ROUTES_PATH } from '../routes/Routes';
import { useNavigate } from 'react-router-dom';
import { sorcelApp as sorcelAppApi } from '../api/sorcel-app/sorcel-app';
import axios from 'axios';

type SignupFormValues = {
  email: string;
};

const SIGNUP_SCHEMA = FormValidation.object().shape({
  email: FormValidation.string().email().required(),
});

const auth = AuthAdminService(CustomerAuthClient());
const sorcelApp = new sorcelAppApi();

export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: yupResolver(SIGNUP_SCHEMA),
    mode: 'onBlur',
  });
  const { setCustomerTokenCookie } = useCustomerTokenCookie();
  const navigate = useNavigate();
  const toast = useToastMessage();

  const onSubmit = async (data: SignupFormValues) => {
    try {
      setLoading(true);
      await sorcelApp.create(data.email);

      toast.success("Your app is ready! We're setting things up for you.");

      const res = await auth.login(data.email);

      if (res.token) {
        setCustomerTokenCookie(res.token);

        navigate(ROUTES_PATH.PROTECTED.INTEGRATIONS);
      }
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error) && error.response) {
        const { status } = error.response;

        if (status == 409) {
          toast.error(`An account with this email already exists. Please login.`);
          return;
        }
      } else toast.error('Something went wrong');
    }
  };

  return (
    <Grid
      minW="calc(100vw - --chakra-sizes-0.5)"
      minH="calc(100vh)"
      templateColumns="repeat(3, 1fr)"
    >
      <GridItem paddingX={14} paddingY={5} colSpan={1}>
        <SignupSection
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          loading={loading}
        />
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
