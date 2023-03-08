import { useState } from 'react';
import { REQUIRED } from '@3shop/messages';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValidation } from '@3shop/validation';
import { useForm } from 'react-hook-form';
import {
  Box,
  Text,
  Image,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { LockedLayer } from './LockedLayer';
import { StyledProductCard } from './ProductCard.style';
import { Modal } from '../Modal/Modal';
import axios from 'axios';

export type ProductCardProps = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: number;
  price: number;
  priceReduced?: number;
  description?: any;
  externalLink?: string;
  highlight?: boolean;
  isNFTParisModal?: boolean;
  isLocked?: boolean;
  targetAttribute?: string;
};

const CLASSNAME = 'tbw-product-card';

const LOGIN_SCHEMA = FormValidation.object().shape({
  email: FormValidation.string().email().required(REQUIRED),
});

const getAdditionalProps = (
  isLocked: boolean,
  href: string,
  targetAttribute: string,
  isNFTParisModal: boolean,
  onOpen: any,
) => {
  if (isLocked) {
    return {};
  }

  if (isNFTParisModal) {
    return {
      onClick: onOpen,
      style: {
        cursor: 'pointer',
      },
    };
  }

  return {
    href,
    target: targetAttribute,
    rel: 'noreferrer',
  };
};

export const ProductCard = ({
  srcItem,
  title,
  description,
  externalLink,
  highlight = false,
  isLocked = false,
  isNFTParisModal = false,
  targetAttribute = '_blank',
}: ProductCardProps) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure({});
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<{ email: string }>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
    resolver: yupResolver(LOGIN_SCHEMA),
  });
  const [isLoading, setIsLoading] = useState(false);
  const href = !isLocked && externalLink ? externalLink : '#';

  const additionalProps = getAdditionalProps(
    isLocked,
    href,
    targetAttribute,
    isNFTParisModal,
    onOpen,
  );

  const handleModalSubmit = async (data: { email: string }) => {
    setIsLoading(true);
    const { email } = data;
    const hookUrl = 'https://hook.eu1.make.com/49x5nc5dzof2mx4sa3gs0xcbnor5qqtw';
    await axios.post(`${hookUrl}?Email=${email}`);
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

  const productModal = (
    <Modal
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      title="Claim your ticket"
      body={
        <form onSubmit={handleSubmit(handleModalSubmit)}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel> Enter your email to receive the ticket </FormLabel>
            <Input placeholder="Enter your email" {...register('email')} />
            <FormErrorMessage> {errors.email?.message} </FormErrorMessage>
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
      }
    />
  );

  return (
    <>
      {isNFTParisModal && productModal}

      <StyledProductCard
        className={CLASSNAME}
        highlight={highlight}
        as={isLocked || isNFTParisModal ? 'div' : 'a'}
        {...additionalProps}
      >
        <LockedLayer isLocked={isLocked} />

        <Image
          alt="product"
          src={srcItem}
          sx={{
            height: '140px',
            width: '100%',
          }}
        />

        <Box h="140px" p={2}>
          <Text
            sx={{
              fontWeight: '800',
              fontSize: '20px',
              lineHeight: '27px',
            }}
          >
            {title}
          </Text>

          <Text
            sx={{
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '17px',
              mt: 2,
            }}
          >
            {description}
          </Text>
        </Box>
      </StyledProductCard>
    </>
  );
};
