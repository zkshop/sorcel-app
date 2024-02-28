import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Section,
  NumberInput,
  NumberInputField,
  Switch,
  HStack,
  Text,
} from '@3shop/ui';
import { useFormContext } from 'react-hook-form';

import { PRODUCTS_FIELDS } from '../../constants';
import type { AddProductFormValues } from '../types';
import { useGetAdminAppQuery } from '@3shop/apollo';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '../../../../routes/Routes';

export const GeneralInformationsFields = () => {
  const { data, error } = useGetAdminAppQuery();
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<AddProductFormValues>();

  if (error || !data) {
    return <div>Error</div>;
  }

  const priceValue = watch('price');
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

        <Input placeholder="Name" {...register('name')} />

        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      {/* Description */}
      <FormControl isInvalid={Boolean(errors.description)}>
        <FormLabel mb={1}>{PRODUCTS_FIELDS.description.label}</FormLabel>

        <Input placeholder="Description" {...register('description')} />

        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>

      {/* Price */}
      {!isModalValue && (
        <FormControl isInvalid={Boolean(errors.price)}>
          <FormLabel mb={1}>{PRODUCTS_FIELDS.price.label}</FormLabel>

          <NumberInput>
            <NumberInputField
              border="1px solid"
              borderColor="#E5E5E5"
              placeholder="Price"
              {...register('price')}
            />
          </NumberInput>
          {priceValue && priceValue !== '0' && !data.app[0].moneyAccountId && (
            <Text color="red.500">
              {'You must be connected to '}
              <Link
                to={`${ROUTES_PATH.PROTECTED.PAYMENTS}`}
                style={{ textDecoration: 'underline' }}
              >
                Stripe
              </Link>
              {' to have a non free product.'}
            </Text>
          )}
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
