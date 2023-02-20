import {
  Section,
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
} from '@3shop/ui';
import type { UseFormRegister, UseFormStateReturn } from 'react-hook-form';
import type { AddGateFormValues } from './AddGate';
import { GATE_FIELDS } from './constants';

type GeneralFieldsProps = {
  register: UseFormRegister<AddGateFormValues>;
  errors: UseFormStateReturn<AddGateFormValues>['errors'];
};

export const GeneralFields = ({ register, errors }: GeneralFieldsProps) => (
  <Section>
    <Heading fontSize="xl">General</Heading>
    <FormControl>
      <FormLabel mb={1}>{GATE_FIELDS.name.label}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
          -
        </InputLeftElement>
        <Input placeholder={GATE_FIELDS.name.name} {...register(GATE_FIELDS.name.name)} />
      </InputGroup>
      <FormErrorMessage>{errors[GATE_FIELDS.name.name]?.message}</FormErrorMessage>
    </FormControl>
  </Section>
);
