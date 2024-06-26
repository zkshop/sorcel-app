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
import { usePushClaimsMutation } from '@3shop/apollo';
import type { FormatedProductData } from '@3shop/types';
import {
  type validationResult,
  useValidationResult,
} from '../../../apps/shop/src/modules/shop/gating/validationResultContext';

type ProductCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  title: string;
  webhookUrl: string;
  description?: string;
  gate: FormatedProductData['gate'];
  auth?: string;
};

const EMAIL_SCHEMA = FormValidation.object().shape({
  email: FormValidation.string().email(),
});

function getIdForPushClaim(result: readonly validationResult[], gate: FormatedProductData['gate']) {
  const currentMatch = result.filter((res) => {
    if (!res.gate) return false;
    return res.gate.id === gate?.[0]?.id;
  });
  if (!currentMatch.length) return;
  return currentMatch[0].nft.tokenId;
}

export const ProductCardModal = ({
  isOpen,
  onClose,
  title,
  webhookUrl,
  description = 'Enter your email to receive the ticket',
  gate,
  auth,
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
  const [pushClaims] = usePushClaimsMutation();
  const validationResult = useValidationResult();

  const onSubmit = async (data: { email: string }) => {
    setLoading(true);
    try {
      await axios.post(webhookUrl, {
        email: data.email || '',
        wallet: auth || '',
      });

      if (gate) {
        if (gate?.[0]?.contractAddress) {
          // TODO: test pushClaims
          const claimToPush = getIdForPushClaim(validationResult, gate) || auth;

          await pushClaims({
            variables: {
              gate_id: gate?.[0]?.id,
              claims: claimToPush,
            },
          });
        }

        await pushClaims({
          variables: {
            gate_id: gate?.[0]?.id,
            claims: auth,
          },
        });
      }

      toast({
        title: 'Success',
        description: 'Your email has been sent',
        position: 'top-right',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      console.error(e);
      // toast({
      //   title: 'Error',
      //   description: 'An error occured. Please try again later.',
      //   position: 'top-right',
      //   status: 'error',
      //   duration: 5000,
      //   isClosable: true,
      // });
    } finally {
      setLoading(false);
    }

    reset();
    onClose();
  };

  return (
    <CustomModal
      title={title}
      body={
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel color="black">{description}</FormLabel>
            <Input placeholder="Enter your email" {...register('email')} />
            <FormErrorMessage> {errors.email?.message} </FormErrorMessage>
          </FormControl>

          <HStack mt={4} justifyContent="flex-end">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>

            <Button colorScheme="blue" type="submit" isDisabled={loading} isLoading={loading}>
              Submit
            </Button>
          </HStack>
        </form>
      }
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};
