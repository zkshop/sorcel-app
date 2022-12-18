import {
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Checkbox,
  HStack,
  FormErrorMessage,
  Section,
  ChatRightTextIcon,
  NumberInput,
  NumberInputField,
} from 'ui';
import { useFormContext } from 'react-hook-form';

import { PRODUCTS_FIELDS } from '../../constants';
import type { AddProductFormValues } from '../types';

export const GeneralInformationsFields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddProductFormValues>();

  return (
    <Section>
      <Heading fontSize="xl"> General Information </Heading>

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
      <FormControl isInvalid={Boolean(errors.price)}>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.price.label}</FormLabel>

        <NumberInput min={0}>
          <NumberInputField placeholder="Price" {...register('price')} />
        </NumberInput>

        <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
      </FormControl>

      {/* Discount */}
      <FormControl isInvalid={Boolean(errors.discount)}>
        <FormLabel mb={1}>Discount (in %)</FormLabel>

        <NumberInput min={0} max={100}>
          <NumberInputField placeholder="Discount for holders" {...register('discount')} />
        </NumberInput>

        <FormErrorMessage>{errors.discount?.message}</FormErrorMessage>
      </FormControl>

      {/* isDiscountGated */}
      <FormControl isInvalid={Boolean(errors.isDiscountGated)}>
        <HStack>
          <Checkbox {...register('isDiscountGated')} />

          <FormLabel>Enable discount only for holders</FormLabel>
        </HStack>

        <FormErrorMessage>{errors.isDiscountGated?.message}</FormErrorMessage>
      </FormControl>
    </Section>
  );
};
