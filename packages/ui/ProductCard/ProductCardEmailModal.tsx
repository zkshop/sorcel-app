import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { FormValidation } from '@3shop/validation';
import type { GetProductsQuery } from '@3shop/apollo';
import { envVars } from '@3shop/config';

const REQUIRED = 'This field is required.'; // TODO: remove when @3shop/ui removed from @3shop/messages (circular dependency)

type EmailFormProps = {
  onSubmit: (e: any) => void;
  isLoading: boolean;
  onClose: () => void;
  errors: any;
  register: any;
};

type ProductCardEmailModalProps = {
  isOpen: boolean;
  webhookUrl?: GetProductsQuery['products'][0]['webhookUrl'];
  onClose: () => void;
};

const EMAIL_SCHEMA = FormValidation.object().shape({
  email: FormValidation.string().email().required(REQUIRED),
});

const EmailForm = ({ onSubmit, isLoading, onClose, errors, register }: EmailFormProps) => (
  <form onSubmit={onSubmit}>
    <FormControl isInvalid={Boolean(errors.email)}>
      <FormLabel>Enter your email to receive the ticket</FormLabel>
      <Input placeholder="Enter your email" {...register('email')} />
      <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
    </FormControl>

    <HStack mt={4} justifyContent="flex-end">
      <Button variant="ghost" mr={3} onClick={onClose}>
        Close
      </Button>

      <Button colorScheme="blue" type="submit" isDisabled={isLoading} isLoading={isLoading}>
        Submit
      </Button>
    </HStack>
  </form>
);

export const ProductCardEmailModal = ({
  isOpen,
  onClose,
  webhookUrl,
}: ProductCardEmailModalProps) => {
  const toast = useToast();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<{ email: string }>({
    defaultValues: { email: '' },
    mode: 'onChange',
    resolver: yupResolver(EMAIL_SCHEMA),
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleModalSubmit = async (data: { email: string }) => {
    if (!webhookUrl) return;

    setIsLoading(true);
    const { email } = data;
    await axios.post(`${envVars.PUBLIC_GATEWAY_WEBHOOK_URL}?Email=${email}`, { url: webhookUrl });
    setIsLoading(false);
    toast({
      title: 'Success',
      description: 'Your email has been sent',
      position: 'top-right',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Claim your ticket</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <EmailForm
            onSubmit={handleSubmit(handleModalSubmit)}
            isLoading={isLoading}
            onClose={onClose}
            errors={errors}
            register={register}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
