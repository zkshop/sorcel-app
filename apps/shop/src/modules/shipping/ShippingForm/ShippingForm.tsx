import { Box, FormControl, FormErrorMessage, FormLabel, Heading, Input, Section } from '@3shop/ui';
import { useFormContext } from 'react-hook-form';

import { SHIPPING_FIELDS } from '../constants';
import { DeliveryTaxesZonesField } from '../DeliveryTaxesZonesField';
import type { ShippingFormValues } from './types';

type ShippingFormProps = object;

export const ShippingForm = ({}: ShippingFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ShippingFormValues>();

  return (
    <Box w="full">
      <Section>
        <Heading fontSize="xl"> Delivery Informations </Heading>

        <FormControl isInvalid={Boolean(errors.firstname)}>
          <FormLabel mb={1}>{SHIPPING_FIELDS.firstname.label}</FormLabel>
          <Input {...register(SHIPPING_FIELDS.firstname.name)} />
          <FormErrorMessage>{errors.firstname?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.lastname)}>
          <FormLabel mb={1}>{SHIPPING_FIELDS.lastname.label}</FormLabel>
          <Input {...register(SHIPPING_FIELDS.lastname.name)} />
          <FormErrorMessage>{errors.lastname?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.address)}>
          <FormLabel mb={1}>{SHIPPING_FIELDS.address.label}</FormLabel>
          <Input {...register(SHIPPING_FIELDS.address.name)} />
          <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.country)}>
          <FormLabel mb={1}>{SHIPPING_FIELDS.country.label}</FormLabel>
          <DeliveryTaxesZonesField />
        </FormControl>
      </Section>

      <Section>
        <Heading fontSize="xl"> Contact Informations </Heading>

        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel mb={1}>{SHIPPING_FIELDS.email.label}</FormLabel>
          <Input {...register(SHIPPING_FIELDS.email.name)} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
      </Section>
    </Box>
  );
};
