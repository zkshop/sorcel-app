import { useForm } from 'react-hook-form';
import {
  Button,
  CustomModal,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  useToast,
} from '..';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValidation } from '@3shop/validation';
import { useState } from 'react';
import axios from 'axios';

type ProductCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  title: string;
  webhookUrl: string;
};

const EMAIL_SCHEMA = FormValidation.object().shape({
  email: FormValidation.string().email().required('This field is required.'),
});

export const ProductCardModal = ({
  isOpen,
  onClose,
  title,
  onOpen,
  webhookUrl,
}: ProductCardModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<{ email: string }>({
    mode: 'onBlur',
    resolver: yupResolver(EMAIL_SCHEMA),
  });
  const toast = useToast();

  const onSubmit = async (data: { email: string }) => {
    setLoading(true);

    await axios.post(`${webhookUrl}?email=${data.email}`);

    toast({
      title: 'Success',
      description: 'Your email has been sent',
      position: 'top-right',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    setLoading(false);
    reset();
    onClose();
  };

  return (
    <CustomModal
      title={title}
      body={
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel> Enter your email to receive the ticket </FormLabel>
            <Input placeholder="Enter your email" {...register('email')} />
            <FormErrorMessage> {errors.email?.message} </FormErrorMessage>
          </FormControl>

          <HStack mt={4} justifyContent="flex-end">
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>

            <Button colorScheme="blue" type="submit" isDisabled={loading} isLoading={loading}>
              Submit
            </Button>
          </HStack>
        </form>
      }
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    />
  );
};
