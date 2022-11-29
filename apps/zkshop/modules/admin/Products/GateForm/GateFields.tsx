import { Box, FormControl, FormLabel, NumberInput, NumberInputField } from '@chakra-ui/react';
import { NftAttribute } from 'domains';
import { useFormContext } from 'react-hook-form';
import { AddGateFormValues } from './AddGateModal';
import { NftAttributePicker } from './NftAttributePicker';

type GateFieldsProps = {
  nftAttributes: NftAttribute<any>[] | null;
};

export const GateFields = ({ nftAttributes }: GateFieldsProps) => {
  const { register } = useFormContext<AddGateFormValues>();

  if (!nftAttributes) return null;

  return (
    <>
      <FormControl>
        <FormLabel>Discount</FormLabel>
        <NumberInput>
          <NumberInputField
            min={0}
            max={100}
            placeholder="Discount for holders"
            {...register('discount')}
          />
        </NumberInput>
      </FormControl>
      <Box overflow="scroll" height="400px" mt={2}>
        <NftAttributePicker attributes={nftAttributes} />
      </Box>
    </>
  );
};
