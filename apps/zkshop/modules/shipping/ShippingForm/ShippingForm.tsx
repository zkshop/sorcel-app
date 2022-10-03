import { Box, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { Section } from 'ui';

import { SHIPPING_FIELDS } from '../constants';

type ShippingFormProps = {};

export const ShippingForm = ({}: ShippingFormProps) => {
  const { register } = useFormContext();

  return (
    <Box w="full">
      <Section>
        <Heading fontSize="xl"> Delivery Informations </Heading>

        <FormControl>
          <FormLabel mb={1}>{SHIPPING_FIELDS.firstname.label}</FormLabel>
          <Input {...register(SHIPPING_FIELDS.firstname.name)} />
        </FormControl>

        <FormControl>
          <FormLabel mb={1}>{SHIPPING_FIELDS.lastname.label}</FormLabel>
          <Input {...register(SHIPPING_FIELDS.lastname.name)} />
        </FormControl>

        <FormControl>
          <FormLabel mb={1}>{SHIPPING_FIELDS.address.label}</FormLabel>
          <Input {...register(SHIPPING_FIELDS.address.name)} />
        </FormControl>
      </Section>

      <Section>
        <Heading fontSize="xl"> Contact Informations </Heading>

        <FormControl>
          <FormLabel mb={1}>{SHIPPING_FIELDS.email.label}</FormLabel>
          <Input {...register(SHIPPING_FIELDS.email.name)} />
        </FormControl>

        <FormControl>
          <FormLabel mb={1}>{SHIPPING_FIELDS.phoneNumber.label}</FormLabel>
          <Input {...register(SHIPPING_FIELDS.phoneNumber.name)} />
        </FormControl>
      </Section>
    </Box>
  );
};
