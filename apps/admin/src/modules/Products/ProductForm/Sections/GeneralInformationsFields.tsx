import {
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  Section,
  ChatRightTextIcon,
  NumberInput,
  NumberInputField,
  Switch,
  HStack,
  Text,
} from '@3shop/ui';
import { useFormContext } from 'react-hook-form';

import { PRODUCTS_FIELDS } from '../../constants';
import type { AddProductFormValues } from '../types';

export const GeneralInformationsFields = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<AddProductFormValues>();

  const isModalValue = watch('isModal');

  return (
    <Section>
      <HStack justifyContent="space-between">
        <Heading fontSize="xl">
          <Text>General Information</Text>
        </Heading>
        <HStack>
          <Text>Commerce</Text>
          <Switch {...register('isModal')} />
          <Text>Modal</Text>
        </HStack>
      </HStack>

      {/* Name */}
      <FormControl isInvalid={Boolean(errors.name)}>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.name.label}</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            -
          </InputLeftElement>
          <Input placeholder="Name" {...register('name')} />
        </InputGroup>
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      {/* Description */}
      <FormControl isInvalid={Boolean(errors.description)}>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.description.label}</FormLabel>

        <InputGroup>
          <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
            <ChatRightTextIcon />
          </InputLeftElement>

          <Input placeholder="Description" {...register('description')} />
        </InputGroup>
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>

      {/* Price */}
      {!isModalValue && (
        <FormControl isInvalid={Boolean(errors.price)}>
          <FormLabel mb={1}>{PRODUCTS_FIELDS.price.label}</FormLabel>

          <NumberInput min={0}>
            <NumberInputField
              border="1px solid"
              borderColor="#E5E5E5"
              placeholder="Price"
              {...register('price')}
            />
          </NumberInput>

          <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
        </FormControl>
      )}

      {/* Webhook URL */}
      {isModalValue && (
        <FormControl isInvalid={Boolean(errors.webhookUrl)}>
          <FormLabel mb={1}>{PRODUCTS_FIELDS.webhookUrl.label}</FormLabel>

          <Input placeholder="Webhook URL" {...register(PRODUCTS_FIELDS.webhookUrl.name)} />

          <FormErrorMessage>{errors.webhookUrl?.message}</FormErrorMessage>
        </FormControl>
      )}
    </Section>
  );
};
