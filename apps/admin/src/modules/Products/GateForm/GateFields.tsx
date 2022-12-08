<<<<<<< HEAD
import { Box, FormControl, FormErrorMessage, FormLabel, NumberInput, NumberInputField } from 'ui';
=======
import { Box, FormControl, FormLabel, NumberInput, NumberInputField } from '@chakra-ui/react';
>>>>>>> dbf5779 (feat(admin): form to add gate to product)
import { NftAttribute } from 'domains';
import { useFormContext } from 'react-hook-form';
import { AddGateFormValues } from './AddGateModal';
import { NftAttributePicker } from './NftAttributePicker';

type GateFieldsProps = {
  nftAttributes: NftAttribute<any>[] | null;
};

export const GateFields = ({ nftAttributes }: GateFieldsProps) => {
<<<<<<< HEAD
  const {
    register,
    formState: { errors },
  } = useFormContext<AddGateFormValues>();
=======
  const { register } = useFormContext<AddGateFormValues>();
>>>>>>> dbf5779 (feat(admin): form to add gate to product)

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
<<<<<<< HEAD
        <FormErrorMessage>{errors.discount?.message}</FormErrorMessage>
=======
>>>>>>> dbf5779 (feat(admin): form to add gate to product)
      </FormControl>
      <Box overflow="scroll" height="400px" mt={2}>
        <NftAttributePicker attributes={nftAttributes} />
      </Box>
    </>
  );
};
