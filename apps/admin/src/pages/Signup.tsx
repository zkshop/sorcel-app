import { Grid, GridItem, SignupSection, useToastMessage } from '@3shop/ui';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValidation } from '@3shop/validation';
import axios from 'axios';
import { useState } from 'react';

type SignupFormValues = {
  email: string;
};

const SIGNUP_SCHEMA = FormValidation.object().shape({
  email: FormValidation.string().email().required(),
});

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
  const toast = useToastMessage();

  const onSubmit = async (data: SignupFormValues) => {
    try {
      setLoading(true);
      await axios.post('/api/create-app', { email: data.email, name: `${data.email}'s app` });
      toast.success('App created successfully');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
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
      <GridItem bgColor="#D9D9D9" colSpan={2} />
    </Grid>
  );
};
