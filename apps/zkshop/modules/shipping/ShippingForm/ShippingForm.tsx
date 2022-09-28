import {
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
} from "@chakra-ui/react";

import { Section } from "components/Section";
import { ShippingFormValues } from "modules";
import { useFormContext } from "react-hook-form";
import { Button } from "ui";
import { SHIPPING_FIELDS } from "../constants";

type ShippingFormProps = {
  handleSubmit: Function;
  onSubmit(data: ShippingFormValues): Promise<void>;
  isLoading: boolean;
};

export const ShippingForm = ({
  handleSubmit,
  isLoading,
  onSubmit,
}: ShippingFormProps) => {
  const { register } = useFormContext();

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2">Shipping Informations</Heading>
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

        <HStack pt={2} justifyContent="flex-end">
          <Button type="submit">Go to payment</Button>
        </HStack>
      </Section>
    </form>
  );
};
