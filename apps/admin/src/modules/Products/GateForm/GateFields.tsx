import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@3shop/ui';
import type { NftAttribute } from '@3shop/domains';
import { useFormContext } from 'react-hook-form';
import type { AddGateFormValues } from './AddGateModal';
import { NftAttributePicker } from './NftAttributePicker';

type GateFieldsProps = {
  nftAttributes: NftAttribute<any>[] | null;
};

export const GateFields = ({ nftAttributes }: GateFieldsProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AddGateFormValues>();

  if (!nftAttributes) return null;

  return (
    <>
      <FormControl isInvalid={Boolean(errors.discount)}>
        <FormLabel>Discount</FormLabel>
        <NumberInput>
          <NumberInputField
            min={0}
            max={100}
            placeholder="Discount for holders"
            {...register('discount')}
          />
        </NumberInput>
        <FormErrorMessage>{errors.discount?.message}</FormErrorMessage>
      </FormControl>
      <Box overflow="scroll" height="400px" mt={2}>
        <NftAttributePicker attributes={nftAttributes} />
      </Box>
    </>
  );
};
