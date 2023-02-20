import {
  Section,
  Heading,
  FormControl,
  RadioGroup,
  VStack,
  Radio,
  HStack,
  InputGroup,
  NumberInput,
  NumberInputField,
  InputRightElement,
} from '@3shop/ui';
import type { Control, UseFormRegister } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type { AddGateFormValues } from './AddGate';
import { GATE_FIELDS } from './constants';

type PerkFieldsProps = {
  control: Control<AddGateFormValues>;
  register: UseFormRegister<AddGateFormValues>;
  showDiscountInput: boolean;
};

export const PerkFields = ({ control, showDiscountInput, register }: PerkFieldsProps) => (
  <Section>
    <Heading fontSize="xl">Perk</Heading>
    <FormControl>
      <Controller
        name={GATE_FIELDS.perk.name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup onChange={onChange} value={value}>
            <VStack alignItems="flex-start">
              <Radio value={GATE_FIELDS.perk.exclusiveAccess.value}>Exclusive access</Radio>
              <HStack>
                <Radio value={GATE_FIELDS.perk.discount.value}>Discount</Radio>
                {showDiscountInput && (
                  <InputGroup>
                    <NumberInput>
                      <NumberInputField {...register(GATE_FIELDS.discount.name)} />
                    </NumberInput>
                    <InputRightElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                      %
                    </InputRightElement>
                  </InputGroup>
                )}
              </HStack>
            </VStack>
          </RadioGroup>
        )}
      />
    </FormControl>
  </Section>
);
